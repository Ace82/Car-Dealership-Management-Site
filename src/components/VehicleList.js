import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import Vehicle from '../components/Vehicle';
import viewport from '../styles/media';

const GridSection = styled.section`
  display: grid;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  & h3 {
    text-align: center;
    color: ${theme.colors.lightGrey};
    letter-spacing: 0.5px;
    font-size: 1.35em;
    font-weight: 400;
    margin-top: 3em;
    line-height: 1.5;
  }
`;

const StyledSection = styled.section`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  grid-gap: 0.75rem 1rem;

  @media ${viewport[7]} {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }

  @media ${viewport[9]} {
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
    grid-gap: 1.5rem 1rem;
  }
`;

export default function VehicleList({ vehicles }) {
  if (vehicles.length === 0) {
    return (
      <GridSection>
        <h3>Unfortunately no vehicles matched your search parameters...</h3>
      </GridSection>
    );
  }

  return (
    <StyledSection>
      {vehicles.map(item => {
        return <Vehicle key={item.id} vehicle={item}></Vehicle>;
      })}
    </StyledSection>
  );
}
