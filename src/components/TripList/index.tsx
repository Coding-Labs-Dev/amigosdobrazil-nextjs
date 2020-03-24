import React from 'react';

import { FaRegCheckCircle, FaExclamationCircle } from 'react-icons/fa';

import { Props } from './TripList';

import { Wrapper } from './styles';
import { useTheme } from 'styled-components';

const TripList: React.FC<Props> = ({ type, items }) => {
  const Icon = type === 'success' ? FaRegCheckCircle : FaExclamationCircle;
  const { colors } = useTheme();
  return (
    <Wrapper>
      <ul>
        {items.map(item => (
          <li key={item.description} className="py-2">
            <div className="p-2 d-inline-block">
              <Icon size={24} color={colors[type]} />
            </div>
            <p className="d-inline">{item.description}</p>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default TripList;
