import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Col } from 'reactstrap';
import { FaExclamationCircle } from 'react-icons/fa';

import { Props } from './CheckoutInput';
import { Wrapper, Container, ErrorMsg } from './styles';

const Input: React.FC<Props> = ({
  name,
  type = 'text',
  placeholder,
  label,
  required,
  size = {
    xs: 12,
  },
  onFocus,
  maxLength,
  disabled,
}) => {
  const inputRef: Array<
    ((HTMLInputElement | null) | (HTMLTextAreaElement | null)) | null
  > = [];

  const { register, errors } = useFormContext();

  function handleClick() {
    inputRef[0]?.focus();
  }
  return (
    <Wrapper className="px-0" {...size} disabled={disabled}>
      <Col xs={12} className="px-1">
        <Container
          onClick={handleClick}
          error={errors[name]}
          className={`border rounded px-2 py-1 my-2 w-100 ${!!errors[name] &&
            'border-danger'}`}
        >
          <div>
            <span className="small align-self-stretch font-weight-bold w-100">
              {label}
            </span>
            {required && (
              <FaExclamationCircle
                className={errors[name] ? 'text-danger' : 'text-light'}
              />
            )}
          </div>
          <input
            type={type === 'text' ? 'text' : 'tel'}
            name={name}
            placeholder={placeholder}
            ref={ref => {
              register(ref);
              inputRef.push(ref);
            }}
            onFocus={onFocus}
            maxLength={maxLength}
            disabled={disabled}
          />
          <ErrorMsg className={`small ${!!errors[name] && 'py-1 active'}`}>
            {errors[name]?.message}
          </ErrorMsg>
        </Container>
      </Col>
    </Wrapper>
  );
};

export default Input;
