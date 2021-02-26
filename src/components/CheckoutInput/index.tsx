import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Col } from 'reactstrap';
import { FaExclamationCircle } from 'react-icons/fa';
import ReactInputMask from 'react-input-mask';
import Select from '../SelectInput';

import { Props } from './CheckoutInput';
import { Wrapper, Container, ErrorMsg } from './styles';

const Input: React.FC<Props> = ({
  name,
  type = 'text',
  mask = '',
  options,
  defaultValue,
  placeholder,
  value,
  label,
  required,
  size = {
    xs: 12,
  },
  onFocus,
  maxLength,
  disabled,
}) => {
  const { register, errors, control } = useFormContext();
  if (type === 'hidden') {
    return <input type="hidden" name={name} ref={register} value={value} />;
  }

  return (
    <Wrapper className="px-0" {...size} disabled={disabled}>
      <Col xs={12} className="px-1">
        <Container
          error={errors[name]}
          className={`border rounded px-2 py-1 my-2 w-100 ${!!errors[name] &&
            'border-danger'}`}
        >
          <div className="content">
            <span className="small align-self-stretch font-weight-bold w-100">
              {label}
            </span>
            {required && (
              <FaExclamationCircle
                className={errors[name] ? 'text-danger' : 'text-light'}
              />
            )}
          </div>
          {type !== 'select' ? (
            <Controller
              control={control}
              as={ReactInputMask}
              type={type}
              name={name}
              defaultValue={defaultValue}
              placeholder={placeholder}
              onFocus={onFocus}
              maxLength={maxLength}
              disabled={disabled}
              mask={mask}
            />
          ) : (
            <div className="select-container">
              <Select
                options={options}
                defaultValue={defaultValue}
                name={name}
              />
            </div>
          )}
          <ErrorMsg className={`small ${!!errors[name] && 'py-1 active'}`}>
            {errors[name]?.message}
          </ErrorMsg>
        </Container>
      </Col>
    </Wrapper>
  );
};

export default Input;
