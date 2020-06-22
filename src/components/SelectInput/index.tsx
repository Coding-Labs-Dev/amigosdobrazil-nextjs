import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import Select from 'react-select';

import { Props } from './SelectInput';

const SelectInput: React.FC<Props> = ({
  name,
  options,
  defaultValue,
}) => {
  const { register, setValue } = useFormContext();

  useEffect(() => {
    register({ name });
    setValue(name, defaultValue);
  }, []);

  const handleChange = (newValue: any) => {
    setValue(name, newValue);
  };

  return (
    <Select
      options={options}
      name={name}
      defaultValue={defaultValue}
      onChange={handleChange}
    />
  );
};

export default SelectInput;
