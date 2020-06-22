import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';
import { Button } from 'reactstrap';
import { Wrapper } from './styles';

const Success = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 100);
  }, []);
  return (
    <Wrapper
      className="d-flex flex-column align-items-center justify-content-center p-5"
      show={show}
    >
      <FaCheckCircle className="text-success" size={64} />
      <h5 className="my-4 text-success text-center">
        Reserva efetuada com sucesso!
      </h5>
      <p className="text-center">
        Em alguns instantes você deve receber um e-mail confirmando a sua
        reserva!
      </p>
      <Link href="/" replace>
        <Button color="warning">Voltar</Button>
      </Link>
    </Wrapper>
  );
};

export default Success;
