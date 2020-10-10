/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import { useForm, FormContext } from 'react-hook-form';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Collapse,
  Modal,
  ModalBody,
  Alert,
} from 'reactstrap';
import Dot from 'dot-object';

import {
  FaChevronDown,
  FaChevronUp,
  FaExclamationTriangle,
} from 'react-icons/fa';
import api from '~/services/api';
import PagSeguroClient from '~/services/PagSeguroClient';
import Loader from '~/components/Loader';
import {
  formSchema,
  creditCardSchema,
  personalData,
  residentialAddress,
  commercialAddress,
} from '~/configuration/checkoutFields';

import { Props } from '~/types/pages/Reservar';
import { Wrapper } from '~/styles/styled/reservar_styles';

import {
  Gradient,
  CheckoutInput,
  CreditCardCheckout,
  TOS,
  Success,
  TripBanner,
} from '~/components';
import {
  CreditCardFormData,
  CheckoutFormData,
} from '~/components/CheckoutInput/CheckoutInput';

const dot = new Dot('_');

const Reservar: NextPage<Props | undefined> = ({ tos, trip, settings }) => {
  const dataMethods = useForm<CheckoutFormData>({
    validationSchema: formSchema,
  });

  const creditCardMethods = useForm<CreditCardFormData>({
    validationSchema: creditCardSchema,
  });

  const { handleSubmit: personalDataSubmit } = dataMethods;
  const { handleSubmit: creditcardSubmit } = creditCardMethods;

  const [openCommercialAddress, setOpenCommercialAddress] = useState(false);
  const [openTOSModal, setOpenTOSSModal] = useState(false);
  const [openDeclinedTOSModal, setOpenDeclinedTOSModal] = useState(false);
  const [creditCardModal, setcreditCardModal] = useState(false);
  const [sending, setSending] = useState(false);
  const [payError, setPayError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [pagSeguroClient, setPagSeguroClient] = useState<
    PagSeguroClient | undefined
  >();

  useEffect(() => {
    if (window) {
      setPagSeguroClient(new PagSeguroClient());
    }
  }, []);

  useEffect(() => {
    if (window && pagSeguroClient) {
      const getSessionId = async () => {
        try {
          const {
            data: { token },
          } = await api.post('/paymentsessions');
          await pagSeguroClient.createSession(token);
          const payments = await pagSeguroClient.getPaymentMethods();
          if (
            !payments ||
            payments.error ||
            !payments?.paymentMethods.CREDIT_CARD
          )
            throw new Error('Error loading available payment methods');
        } catch (error) {
          console.error(error);
        }
      };
      getSessionId();
    }
  }, [pagSeguroClient]);

  const closeCreditCardModal = (): void => setcreditCardModal(p => !p);

  const handleDataSubmit = (): void => {
    if (dataMethods.getValues().tos) {
      setcreditCardModal(true);
    } else {
      setOpenTOSSModal(true);
      setOpenDeclinedTOSModal(false);
    }
  };

  const acceptTOS = (): void => {
    setOpenTOSSModal(false);
    setOpenDeclinedTOSModal(false);
    dataMethods.setValue('tos', true);
    setcreditCardModal(true);
  };

  const declineTOS = (): void => {
    setOpenTOSSModal(false);
    dataMethods.setValue('tos', false);
    setOpenDeclinedTOSModal(true);
  };

  const pay = async (creditCard: CreditCardFormData): Promise<void> => {
    setSending(true);
    if (!pagSeguroClient) return;

    const creditCardToken = await pagSeguroClient.getCreditCardToken({
      cardNumber: creditCard.creditCardNumber,
      brand: creditCard.brand,
      cvv: creditCard.cvv,
      expirationMonth: creditCard.expDate.split('/')[0],
      expirationYear: `20${creditCard.expDate.split('/')[1]}`,
    });

    const senderHash = await pagSeguroClient.getSenderHash();

    const formData = dot.object({
      ...dataMethods.getValues(),
      installments: { ...creditCardMethods.getValues('installments') },
      senderHash,
      creditCardToken,
    });

    try {
      await api.post(`/book/${trip.slug}`, formData);
      setSuccess(true);
    } catch (error) {
      setSending(false);
      setPayError(error.message);
    }
  };

  return (
    <Wrapper className="align-items-stretch">
      <Gradient className="py-0">
        <TripBanner
          background={trip.banner}
          title={trip.title}
          titlePosition="center"
        />
        <FormContext {...dataMethods}>
          <form onSubmit={personalDataSubmit(handleDataSubmit)}>
            <Container>
              <Card
                className="shadow border-0 mb-5"
                style={{ marginTop: '-5rem' }}
              >
                <CardBody className="d-flex align-items-center">
                  <Col className="p-0 m-0 justify-content-center w-100">
                    <Row className="px-2 px-md-4 text-dark justify-content-center">
                      <h2 className="text-dark py-4 m-0 w-100">Reserva</h2>
                      <Row className="pb-2">
                        <Col>
                          <p>
                            Para realizar sua reserva, é necessário efetuar o
                            pagamento de uma taxa no valor de R$ 800,00.
                          </p>
                          <p>
                            Os pagamentos referentas à entrada e às parcelas
                            serão realizados por meio de boletos bancários que
                            serão enviados ao seu e-mail.
                          </p>
                        </Col>
                      </Row>
                      <Row className="py-md-4 py-3 w-100">
                        <Col>
                          <h3>Dados Pessoais</h3>
                          <Row className="px-2">
                            {personalData.map(field => (
                              <CheckoutInput
                                key={field.name}
                                name={field.name}
                                label={field.label}
                                placeholder={field.placeholder}
                                type={field?.type}
                                size={field.size}
                                required={field.required}
                              />
                            ))}
                          </Row>
                        </Col>
                      </Row>
                      <Row className="py-md-4 py-3 w-100">
                        <Col>
                          <h3>Endereço Residencial</h3>
                          <Row className="px-2">
                            {residentialAddress.map(field => (
                              <CheckoutInput
                                key={field.name}
                                name={field.name}
                                label={field.label}
                                placeholder={field.placeholder}
                                type={field?.type}
                                size={field.size}
                                required={field.required}
                              />
                            ))}
                          </Row>
                        </Col>
                      </Row>
                      <Row className="py-md-4 py-3 w-100">
                        <Col>
                          <div
                            className="d-flex justify-content-between align-items-center"
                            onClick={() => setOpenCommercialAddress(p => !p)}
                          >
                            <h3 className="my-0">Endereço Comercial</h3>
                            {openCommercialAddress ? (
                              <FaChevronUp />
                            ) : (
                              <FaChevronDown />
                            )}
                          </div>
                          <Collapse isOpen={openCommercialAddress}>
                            <Row className="px-2">
                              {commercialAddress.map(field => (
                                <CheckoutInput
                                  key={field.name}
                                  name={field.name}
                                  label={field.label}
                                  placeholder={field.placeholder}
                                  type={field?.type}
                                  size={field.size}
                                  required={field.required}
                                />
                              ))}
                            </Row>
                          </Collapse>
                        </Col>
                      </Row>
                      <Row className="py-md-4 py-3 w-100 justify-content-end">
                        <input
                          className="d-none"
                          type="checkbox"
                          name="tos"
                          id="tos"
                          ref={dataMethods.register}
                        />
                        <Button color="warning" type="submit">
                          Continuar
                        </Button>
                      </Row>
                    </Row>
                  </Col>
                </CardBody>
              </Card>
            </Container>
          </form>

          <Modal
            isOpen={openTOSModal}
            toggle={() => setOpenTOSSModal(p => !p)}
            centered
            size="lg"
          >
            <ModalBody>
              <TOS template={tos} trip={trip} />
              <Row className="py-2 px-4 align-items-center justify-content-end">
                <Button
                  color="link"
                  className="text-light"
                  onClick={() => setOpenTOSSModal(false)}
                >
                  Cancelar
                </Button>
                <Button
                  color="link"
                  className="text-light"
                  onClick={declineTOS}
                >
                  Não Concordo
                </Button>
                <Button color="warning" onClick={acceptTOS}>
                  Concordo
                </Button>
              </Row>
            </ModalBody>
          </Modal>
        </FormContext>
        <Modal
          isOpen={openDeclinedTOSModal}
          toggle={() => setOpenDeclinedTOSModal(p => !p)}
          backdrop="static"
          keyboard={false}
          size="lg"
        >
          <Row className="pt-4 px-5 align-items-center justify-content-end">
            <p>
              Você deve aceitar o Contrato de Prestação de Serviços de
              Agenciamento de Viagem para efetuar a sua reserva.
            </p>
          </Row>
          <Row className="pb-4 px-5 align-items-center justify-content-end">
            <Button
              color="link"
              className="text-light"
              onClick={() => setOpenDeclinedTOSModal(false)}
            >
              Fechar
            </Button>
            <Button
              color="link"
              className="text-light"
              onClick={handleDataSubmit}
            >
              Rever Termos
            </Button>
            <Button color="warning" onClick={acceptTOS}>
              Aceitar Termos
            </Button>
          </Row>
        </Modal>

        <Modal
          isOpen={creditCardModal}
          toggle={closeCreditCardModal}
          centered
          backdrop="static"
          keyboard={false}
        >
          <ModalBody>
            <FormContext {...creditCardMethods}>
              {success && <Success />}
              {sending && <Loader />}
              <Alert
                color="danger"
                isOpen={!!payError}
                className="align-items-center d-flex"
                toggle={() => setPayError(false)}
              >
                <FaExclamationTriangle
                  className="text-danger"
                  style={{ flex: 'auto 0 0' }}
                />
                <span className="pl-2">
                  {payError || 'Houve um erro ao processar a compra.'}
                </span>
              </Alert>
              <form onSubmit={creditcardSubmit(pay)}>
                <Col>
                  <Row>
                    <CreditCardCheckout
                      disabled={sending}
                      amount={trip.bookFee}
                      maxInstallments={settings.maxInstallments}
                      maxNoInterestInstallments={
                        settings.maxNoInterestInstallments
                      }
                      pagSeguroClient={pagSeguroClient}
                    />
                  </Row>
                  <Row className="py-2 align-items-center justify-content-end">
                    <Button
                      color="link"
                      className="text-light"
                      onClick={closeCreditCardModal}
                      disabled={sending}
                    >
                      Cancelar
                    </Button>
                    <Button color="warning" type="submit" disabled={sending}>
                      Realizar Reserva
                    </Button>
                  </Row>
                </Col>
              </form>
            </FormContext>
          </ModalBody>
        </Modal>
      </Gradient>
    </Wrapper>
  );
};

Reservar.getInitialProps = async ({
  res,
  query,
}): Promise<Props | undefined> => {
  try {
    const { data: tos } = await api.get('/tos');
    const { data: trip } = await api.get(`/trips/${query.slug}`);
    const { data: settings } = await api.get('/settings');

    if (!trip.canBook) throw Error('This trip is not open for booking');

    return { tos, trip, settings };
  } catch (e) {
    if (res) {
      res.statusCode = 303;
      res.setHeader('Location', '/roteiros');
      res.end();
      return undefined;
    }
    return undefined;
  }
};

export default Reservar;
