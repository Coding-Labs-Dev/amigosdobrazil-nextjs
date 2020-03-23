import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, CardTitle } from 'reactstrap';

import { useForm, FormContext } from 'react-hook-form';
import * as yup from 'yup';

import {
  FaUser,
  FaEnvelope,
  FaQuestion,
  FaComment,
  FaMapPin,
  FaPhone,
  FaRegEnvelope,
} from 'react-icons/fa';

import { Props } from './ContactUs';

import Input from '../Input';
import Loader from '../Loader';

import { Wrapper, Info } from './styles';

import { FormSchema } from './ContactUs';
import api from '~/services/api';

const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'O nome deve conter ao menos 3 caracteres')
    .required('Por favor, digite o seu nome'),
  email: yup
    .string()
    .email('Por favor, insira um endereço de e-mail válido')
    .required('Por favor, digite o seu e-mail'),
  subject: yup
    .string()
    .min(5, 'O assunto deve conter ao menos 5 caracteres')
    .required('Por favor, digite o assunto da sua mensagem'),
  message: yup
    .string()
    .min(25, 'A mensagem deve conter ao menos 25 caracteres')
    .required('Por favor, digite a mensagem'),
});

const ContactUs: React.FC<Props> = ({ settings }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const methods = useForm<FormSchema>({
    validationSchema: formSchema,
  });
  const onSubmit = methods.handleSubmit(async data => {
    setIsSending(true);
    try {
      const result = await api.post('/formcontacts', data);
      setIsSubmitted(true);
      setIsSending(false);
    } catch (err) {
      console.error(err);
      setIsSending(false);
    }
  });
  return (
    <Wrapper fluid className="py-5">
      <Container>
        <Row>
          <Col xs={12} md={7} lg={5} className="px-0 py-2">
            <Card className="border-0 px-5 pb-4 shadow-lg gradient">
              <CardTitle>
                <h1 className="text-dark pt-5 pb-2">Contato</h1>
              </CardTitle>
              <Info>
                <p>
                  Você pode nos visitar no escritório ou, caso prefira, entrar
                  em contato por telefone, e-mail ou pelo formulário ao lado.
                </p>
                <ul>
                  <li>
                    <FaMapPin size={24} />
                    <p>
                      <span>{settings.street}</span>
                      <span>
                        {settings.neigh}, {settings.city}, {settings.state}
                      </span>
                      <span>CEP: {settings.zip}</span>
                    </p>
                  </li>
                  <li>
                    <FaPhone size={24} />
                    <p>
                      <span>{settings.mainPhone}</span>
                      {settings.altPhone && <span>{settings.altPhone}</span>}
                    </p>
                  </li>
                  <li>
                    <FaRegEnvelope size={24} />
                    <p>
                      <span>{settings.email}</span>
                    </p>
                  </li>
                </ul>
              </Info>
            </Card>
          </Col>
          <Col xs={12} md={5} lg={7} className="px-0 py-2">
            <Card className="contact-form h-100 pb-4 border-0 shadow">
              {isSending && <Loader />}
              <CardTitle>
                <h1 className="text-dark pt-5 pb-2">Formulário</h1>
              </CardTitle>
              {isSubmitted ? (
                <>
                  <h5 className="text-center text-dark py-2">Obrigado!</h5>
                  <p className="text-center text-dark py-2">
                    Sua mensagem foi enviada com sucesso!
                  </p>
                </>
              ) : (
                <FormContext {...methods}>
                  <form onSubmit={onSubmit}>
                    <Input
                      name="name"
                      icon={FaUser}
                      placeholder="Digite o seu nome"
                    />
                    <Input
                      name="email"
                      icon={FaEnvelope}
                      placeholder="Digite o seu e-mail"
                    />
                    <Input
                      name="subject"
                      icon={FaQuestion}
                      placeholder="Digite o assunto"
                    />
                    <Input
                      name="message"
                      icon={FaComment}
                      placeholder="Digite a sua mensagem"
                      type="textArea"
                    />
                    <div className="submit">
                      <Button
                        type="submit"
                        color="warning"
                        className="text-uppercase mt-4"
                      >
                        Enviar
                      </Button>
                    </div>
                  </form>
                </FormContext>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default ContactUs;
