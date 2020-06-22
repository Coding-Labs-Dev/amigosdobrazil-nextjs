import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Col } from 'reactstrap';
import { FaExclamationCircle } from 'react-icons/fa';
import Select from '../SelectInput';

import { Props } from './CheckoutInput';
import { Wrapper, Container, ErrorMsg } from './styles';

const Input: React.FC<Props> = ({
  name,
  type = 'text',
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
  const inputRef: Array<
  ((HTMLInputElement | null) | (HTMLTextAreaElement | null)) | null
  > = [];

  const { register, setValue, errors } = useFormContext();

  function handleClick() {
    inputRef[0]?.focus();
  }

  if (type === 'hidden') {
    register({ name, type: 'hidden' });

    React.useEffect(() => {
      setValue(name, value);
    }, [value]);

    return null;
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
            <input
              type={type === 'text' ? 'text' : 'tel'}
              name={name}
              placeholder={placeholder}
              ref={ref => {
                if(ref) {
                  register(ref);
                  inputRef.push(ref);
                }
              }}
              onFocus={onFocus}
              maxLength={maxLength}
              disabled={disabled}
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
