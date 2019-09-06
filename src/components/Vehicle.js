import React from 'react';
import theme from '../styles/theme';
import styled from 'styled-components';
import viewport from '../styles/media';

const GridContainer = styled.div`
  margin: 5em auto;
  display: grid;
  width: 80vw;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  grid-gap: 1rem;

  @media ${viewport[7]} {
    width: 85vw;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  }

  @media ${viewport[9]} {
    width: 90vw;
    max-width: 1170px;
  }
`;

const Item = styled.div`
  background: ${theme.colors.darkGreyAlt};
  margin: 0;
  text-align: center;
  border-radius: 2px;
  position: relative;

  & img {
    height: 270px;
    width: 100%;
    display: block;
    cursor: pointer;
    border-radius: 4px;

    @media ${viewport[7]} {
      height: 330px;
    }
  }

  & .label {
    position: absolute;
    bottom: 0;
    padding: 0.5em 1em;
    font-size: 1.3em;
    display: block;
    letter-spacing: -0.2px;
    font-weight: 200;
    background: ${theme.colors.warmBlack};
    color: ${theme.colors.lightGrey};
  }

  & .price-tag {
    position: absolute;
    top: 0;
    right: 0;
    background: ${theme.colors.coralRed};
    color: #fff;
    padding: 0.5em 1.5em;
  }
`;

export default function Vehicle() {
  return (
    <>
      <GridContainer>
        <Item>
          <img
            src='https://images.unsplash.com/photo-1520608760-eff2c44afa2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            alt='service 1'
          />
          <span className='price-tag'>$55, 000</span>
          <span className='label'>Lobo Lariat</span>
        </Item>
        <Item>
          <img
            src='https://images.unsplash.com/photo-1520608760-eff2c44afa2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            alt='service 2'
          />
          <span className='price-tag'>$55, 000</span>
          <p className='label'>Focus Fiesta</p>
        </Item>
        <Item>
          <img
            src='https://images.unsplash.com/photo-1520608760-eff2c44afa2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            alt='service 3'
          />
          <span className='price-tag'>$55, 000</span>
          <p className='label'>LB-3456</p>
        </Item>
      </GridContainer>
    </>
  );
}
