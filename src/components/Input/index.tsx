import React from 'react';
import { useFormContext } from 'react-hook-form';

import { Props } from './Input';
import { Wrapper, Container, ErrorMsg } from './styles';

const Input: React.FC<Props> = ({
  icon: Icon,
  type = 'text',
  name,
  placeholder,
}) => {
  const inputRef: Array<
  ((HTMLInputElement | null) | (HTMLTextAreaElement | null)) | null
  > = [];

  const { register, errors } = useFormContext();

  function handleClick() {
    inputRef[0]?.focus();
  }
  return (
    <Wrapper>
      <Container
        onClick={handleClick}
        textArea={type === 'textArea'}
        error={errors[name]}
      >
        {Icon && <Icon size={24} />}

        {type === 'text' && (
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            ref={ref => {
              if (ref) {
                register(ref);
                inputRef.push(ref);
              }
            }}
          />
        )}

        {type === 'textArea' && (
          <textarea
            name={name}
            placeholder={placeholder}
            ref={ref => {
              if (ref) {
                register(ref);
                inputRef.push(ref);
              }
            }}
          />
        )}
      </Container>
      <ErrorMsg className={`small px-3 py-1${errors[name] ? ' active' : ''}`}>
        {errors[name]?.message}
      </ErrorMsg>
    </Wrapper>
  );
};

export default Input;
