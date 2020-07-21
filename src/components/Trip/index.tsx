/* eslint-disable import/no-cycle */
import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

import { Props, Context } from './Trip';

import { Wrapper } from './styles';
import TripBanner from '../TripBanner';
import TripInfoCard from '../TripInfoCard';
import Itinerary from '../Itinerary';
import TripSideBar from '../TripSideBar';
import PaymentPlans from '../PaymentPlans';

const ctx: Context = {
  value: null,
  setValue: null,
  refs: null,
  setRefs: null,
};

export const DayContext = React.createContext(ctx);

const Trip: React.FC<Props> = ({ trip, fowardRef, documents, includes }) => {
  const [openDay, setOpenDay] = useState(0);
  const refs = {} as { [key: number]: HTMLDivElement };

  const setRefs = (key: number, ref: HTMLDivElement): void => {
    refs[key] = ref;
  };



  return (
    <Wrapper>
      <TripBanner
        background={trip.banner}
        title={trip.title}
        subTitle={trip.subTitle}
        titlePosition={trip.titlePosition}
        forwardRef={fowardRef}
      />
      <DayContext.Provider
        value={{ value: openDay, setValue: setOpenDay, refs, setRefs }}
      >
        <Container>
          <Row>
            <Col
              xs={12}
              md={7}
              lg={8}
              className="text-center justify-content-center px-0"
            >
              <TripInfoCard
                days={trip.days}
                departure={trip.departure}
                minSize={trip.minSize}
                destinations={trip.destinationsQty}
              />
              <Itinerary
                description={trip.description}
                itinerary={trip.itinerary}
                slug={trip.slug}
              />
              {trip.canBook && !!trip.paymentPlans.length && (
                <PaymentPlans
                  transportPlans={trip.transportPlans}
                  paymentPlans={trip.paymentPlans}
                  slug={trip.slug}
                  display="md"
                  activePlanIndex={trip.activePlanIndex}
                />
              )}
            </Col>
            <Col
              xs={12}
              md={5}
              lg={4}
              className="text-center justify-content-center"
            >
              <TripSideBar
                includes={includes}
                documents={documents}
                itinerary={trip.itinerary}
              />
              {trip.canBook && !!trip.paymentPlans.length && (
                <PaymentPlans
                  transportPlans={trip.transportPlans}
                  paymentPlans={trip.paymentPlans}
                  slug={trip.slug}
                  activePlanIndex={trip.activePlanIndex}
                />
              )}
            </Col>
          </Row>
        </Container>
      </DayContext.Provider>
    </Wrapper>
  );
};

export default Trip;
