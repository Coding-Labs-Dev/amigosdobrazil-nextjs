import React, { useState, useEffect, useCallback } from 'react';
import Cards, { CallbackArgument } from 'react-credit-cards';
import { useFormContext } from 'react-hook-form';

import { Row, Col } from 'reactstrap';
import { Props as InputProps } from '~/components/CheckoutInput/CheckoutInput';
import { Props } from './CreditCardCheckout';
import CheckoutInput from '~/components/CheckoutInput';
import { Wrapper } from './styles';

import { Installment } from '~/services/PagSeguroClient';

const fields: InputProps[] = [
  {
    name: 'cardHolder',
    placeholder: 'Digite o nome como no cartão',
    label: 'Nome',
    required: true,
    size: {
      xs: 12,
      md: 7,
    },
  },
  {
    name: 'expDate',
    placeholder: 'DD/AA',
    label: 'Data de Expiração',
    required: true,
    type: 'tel',
    mask: '99/99',
    size: {
      xs: 6,
      md: 5,
    },
  },
  {
    name: 'creditCardNumber',
    placeholder: 'XXXX XXXX XXXX XXXX',
    label: 'Número do Cartão',
    required: true,
    type: 'number',
    size: {
      xs: 6,
      md: 9,
    },
  },
  {
    name: 'cvv',
    placeholder: 'XXX',
    label: 'CVV',
    required: true,
    type: 'number',
    size: {
      xs: 3,
    },
  },
];

const CreditCardCheckout: React.FC<Props> = ({
  disabled,
  amount,
  pagSeguroClient,
  maxInstallments,
  maxNoInterestInstallments,
}) => {
  const { watch, setError, clearError } = useFormContext();
  const watchFields = watch();
  const [focused, setFocused] = useState<
  'name' | 'expiry' | 'number' | 'cvc' | undefined
  >(undefined);

  const [maxLength, setMaxLength] = useState<number | undefined>(undefined);
  const [brand, setBrand] = useState<string | undefined>(undefined);
  const [installments, setInstallments] = useState<Installment[]>([]);
  const [options, setOptions] = useState<any>([]);

  const groupOptions = useCallback(
    (opts: Installment[]) => {
      const noInterest = opts
        .filter(({ interestFree }) => interestFree)
        .map(({ quantity, installmentAmount, totalAmount }) => ({
          installment: {
            quantity,
            installmentAmount,
            totalAmount,
            interestFree: true,
          },
          value: String(quantity),
          label: `${quantity} x ${Number(installmentAmount).toLocaleString(
            'pt',
            {
              style: 'currency',
              currency: 'BRL',
            }
          )} (${Number(totalAmount).toLocaleString('pt', {
            style: 'currency',
            currency: 'BRL',
          })})`,
        }));
      const withInterest = opts
        .filter(({ interestFree }) => !interestFree)
        .map(({ quantity, installmentAmount, totalAmount }) => ({
          installment: {
            quantity,
            installmentAmount,
            totalAmount,
            interestFree: true,
          },
          value: String(quantity),
          label: `${quantity} x ${Number(installmentAmount).toLocaleString(
            'pt',
            {
              style: 'currency',
              currency: 'BRL',
            }
          )} (${Number(totalAmount).toLocaleString('pt', {
            style: 'currency',
            currency: 'BRL',
          })})`,
        }));
      const groupedOptions = [
        {
          label: 'Sem Juros',
          options:
            noInterest.length <= maxInstallments
              ? noInterest
              : noInterest.slice(0, maxInstallments),
        },
        {
          label: 'Com Juros',
          options: withInterest,
        },
      ];
      if (noInterest.length + withInterest.length > maxInstallments) {
        const allowed = maxInstallments - groupedOptions[0].options.length;
        if (allowed <= 0) {
          groupedOptions.pop();
        } else {
          groupedOptions[1].options = withInterest.slice(0, allowed);
        }
      }
      return [groupedOptions, noInterest, withInterest];
    },
    [maxInstallments]
  );

  useEffect(() => {
    setOptions(groupOptions(installments));
  }, [installments]);

  useEffect(() => {
    if (brand === 'unknown') {
      setError('creditCardNumber', 'invalid', 'Cartão inválido');
    } else if (brand) {
      const getCardInstallments = async (issuer: string) => {
        const data = await pagSeguroClient.getInstallments(
          amount,
          maxNoInterestInstallments
        );
        setInstallments(data.installments[issuer]);
      };
      getCardInstallments(brand);
      clearError('creditCardNumber');
    }
  }, [brand]);

  const setFocus = (event: FocusEvent): void => {
    const currentTarget = event.currentTarget as HTMLInputElement;
    if (currentTarget.name === 'cardHolder') return setFocused('name');
    if (currentTarget.name === 'expDate') return setFocused('expiry');
    if (currentTarget.name === 'creditCardNumber') return setFocused('number');
    return setFocused('cvc');
  };

  const monitorCreditCardNumber = (type: CallbackArgument): void => {
    setBrand(type.issuer);
    setMaxLength(type.maxLength);
  };

  const canRenderInstallments = () =>
    !!installments.length && !!options[0].length && !!options[1].length;

  return (
    <Wrapper>
      <Col>
        <Row className="py-2">
          <Cards
            focused={focused}
            cvc={watchFields.cvv || ''}
            expiry={watchFields.expDate || ''}
            name={watchFields.cardHolder || ''}
            number={watchFields.creditCardNumber || ''}
            callback={monitorCreditCardNumber}
            locale={{
              valid: 'Validade',
            }}
            placeholders={{ name: 'NOME NO CARTÃO' }}
          />
        </Row>
        <Row className="py-2">
          {fields.map(field => (
            <CheckoutInput
              key={field.name}
              name={field.name}
              label={field.label}
              placeholder={field.placeholder}
              type={field?.type}
              size={field.size}
              required={field.required}
              onFocus={setFocus}
              mask={field.mask}
              maxLength={
                field.name === 'creditCardNumber' ? maxLength : undefined
              }
              disabled={disabled}
            />
          ))}
          {canRenderInstallments() && (
            <CheckoutInput
              name="installments"
              label="Parcelamento"
              placeholder="Parcelamento"
              type="select"
              options={options[0]}
              defaultValue={options[1][0]}
              required
            />
          )}
          <CheckoutInput
            name="brand"
            label=""
            placeholder=""
            type="hidden"
            value={brand}
          />
        </Row>
      </Col>
    </Wrapper>
  );
};

export default CreditCardCheckout;
