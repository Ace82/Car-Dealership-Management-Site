import React from 'react';
import styled from 'styled-components';
import data from '../content/data';
import city from '../assets/images/services-1.jpg';
import theme from '../styles/theme';
import catalog from '../assets/images/catalog-1.jpg';

const StyledHero = styled.section`
  min-height: calc(100vh - 66px);
  &.defaultHero {
    background: #000;
    background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(225, 225, 225, 0.1) 80%
      ),
      url(${data[0].fields.images[0].fields.file.url}) center/cover no-repeat;
  }
  &.catalogHero {
    background: #000;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(0, 0, 125, 0.1) 100%
      ),
      url(${catalog}) center/cover no-repeat;
  }

  &.quote {
    background: #000;
    min-height: 12em;
    background: radial-gradient(
        circle,
        rgba(35, 0, 35, 0.35) 0%,
        rgb(5, 5, 5) 60%
      ),
      url(${city}) center/cover no-repeat;

    & blockquote {
      color: ${theme.colors.lightGrey};
      font-size: 1.3em;
      font-weight: 200;
      letter-spacing: -0.2px;
      line-height: 1.5;
      text-align: right;

      & footer {
        font-style: italic;
      }
    }
  }
`;

export default function Hero({ children, hero }) {
  return <StyledHero className={hero}>{children}</StyledHero>;
}

Hero.defaultProps = {
  hero: 'defaultHero'
};
