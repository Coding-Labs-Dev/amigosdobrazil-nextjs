import Reac, { useState } from 'react';
import Cards, { CallbackArgument } from 'react-credit-cards';
import { useFormContext } from 'react-hook-form';

import { Props as InputProps } from '~/components/CheckoutInput/CheckoutInput';
import { Props } from './CreditCardCheckout';
import CheckoutInput from '~/components/CheckoutInput';
import { Wrapper } from './styles';
import { Row, Col } from 'reactstrap';

const fields: InputProps[] = [
  {
    name: 'cardHolder',
    placeholder: 'Digite o nome como no cartão',
    label: 'Nome',
    size: {
      xs: 8,
    },
  },
  {
    name: 'expDate',
    placeholder: 'DD/AA',
    label: 'Data de Expiração',
    type: 'number',
    size: {
      xs: 4,
    },
  },
  {
    name: 'creditCardNumber',
    placeholder: 'XXXX XXXX XXXX XXXX',
    label: 'Número do Cartão',
    type: 'number',
    size: {
      xs: 9,
    },
  },
  {
    name: 'cvv',
    placeholder: 'XXX',
    label: 'CVV',
    type: 'number',
    size: {
      xs: 3,
    },
  },
];

const CreditCardCheckout: React.FC<Props> = ({ disabled }) => {
  const { watch, errors, register } = useFormContext();
  const watchFields = watch();
  const [focused, setFocused] = useState<
    'name' | 'expiry' | 'number' | 'cvc' | undefined
  >(undefined);

  const [maxLength, setMaxLength] = useState<number | undefined>(undefined);

  const setFocus = (event: FocusEvent): void => {
    const currentTarget = event.currentTarget as HTMLInputElement;
    if (currentTarget.name === 'cardHolder') return setFocused('name');
    if (currentTarget.name === 'expDate') return setFocused('expiry');
    if (currentTarget.name === 'creditCardNumber') return setFocused('number');
    return setFocused('cvc');
  };

  const monitorCreditCardNumber = (
    type: CallbackArgument,
    isValid: boolean
  ): void => {
    setMaxLength(type.maxLength);
  };

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
              maxLength={
                field.name === 'creditCardNumber' ? maxLength : undefined
              }
              disabled={disabled}
            />
          ))}
        </Row>
      </Col>
    </Wrapper>
  );
};

export default CreditCardCheckout;
