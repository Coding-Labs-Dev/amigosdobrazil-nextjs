import React, { useContext } from 'react';

import { Props } from './Timeline';

import { Wrapper } from './styles';
import { DayContext } from '../Trip';

const scroll = (
  refs: {
    [key: number]: HTMLDivElement;
  } | null,
  order: number
): void => {
  if (refs && refs[order])
    refs[order].scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
};

const Timeline: React.FC<Props> = ({ mainDestinations }) => {
  const { value, setValue, refs } = useContext(DayContext);
  return (
    <Wrapper>
      <ul className="timeline">
        {mainDestinations.map(destination => (
          <li
            key={destination.order}
            className={`ml-4 my-4 ${
              value === destination.order ? 'active' : ''
            }`}
            onClick={() => {
              if (setValue) setValue(destination.order);
              scroll(refs, destination.order);
            }}
          >
            <h6 className="font-weight-bold text-left my-0 py-0">
              {destination.mainDestinationTitle}
            </h6>
            <span className="small">Dia {destination.order}</span>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Timeline;