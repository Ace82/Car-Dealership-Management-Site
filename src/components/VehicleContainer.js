import React from 'react';
import VehicleFilter from './VehicleFilter';
import VehicleList from './VehicleList';
import styled from 'styled-components';
import Wrapper from './Wrapper';
import { withVehicleConsumer } from '../context';
import Loading from './Loading';
import Heading from './Heading';
import Section from './Section';
import { viewport } from './Breakpoints';

const StyledSection = styled(Section)`
  margin-top: 0;

  & .vehicleContainer__wrapper {
    position: relative;

    & .vehicleContainer__wrapper__flex {
      margin: 0 auto;
      display: flex;
      flex-direction: column;

      & .vehicleContainer__wrapper__flex__main-heading {
        margin-bottom: 2em;
        text-align: center;
        letter-spacing: 0.4px;
        font-weight: 900;

        @media ${viewport[7]} {
          margin-bottom: 1em;
        }
      }
    }

    & .vehicleContainer__wrapper__main-heading {
      margin-bottom: 2.25em;
      text-align: center;
      letter-spacing: 0.4px;
      font-weight: 900;
      position: relative;

      &:after {
        content: '';
        position: absolute;
        height: 3px;
        width: 80px;
        top: 55px;
        left: calc(50% - 40px);
        background: #da353b;
      }
    }

    & .vehicleContainer__wrapper__grid {
      display: grid;
      grid-template-columns: 1fr;
      overflow: hidden;
      width: 100%;
      height: 100%;
    }
  }
`;

function VehicleContainer({ context }) {
  const { loading, sortedVehicles, vehicles } = context;

  return (
    <StyledSection>
      <Wrapper className='vehicleContainer__wrapper'>
        <div className='vehicleContainer__wrapper__flex'>
          <Heading
            rank={1}
            className='vehicleContainer__wrapper__flex__main-heading'
          >
            Catalog
          </Heading>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <>
            <VehicleFilter vehicles={vehicles}></VehicleFilter>
            <div className='vehicleContainer__wrapper__grid'>
              <VehicleList vehicles={sortedVehicles}></VehicleList>
            </div>
          </>
        )}
      </Wrapper>
    </StyledSection>
  );
}

export default withVehicleConsumer(VehicleContainer);
