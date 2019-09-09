import React from 'react';
import styled from 'styled-components';
import viewport from '../styles/media';
import theme from '../styles/theme';

const ModalWrapper = styled.div`
  margin: 0 auto;
  transition: all 0.4s;
  padding: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  max-width: 100vw;
  max-height: 100vh;
  position: fixed;
  top: 0;
  z-index: 1000000000000000;
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  grid-template-areas:
    'header'
    'body'
    'footer';
  align-items: center;
  justify-content: center;
  background: ${theme.colors.raisinBlack};
  color: ${theme.colors.lightGrey};

  @media ${viewport[7]} {
    width: 400px;
    height: 400px;
    padding: 24px;
    grid-template-areas:
      'body'
      'footer';
    grid-template-rows: 1fr max-content;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17);
    top: auto;
    bottom: 1em;
    left: 1em;
  }
`;

const ModalHeader = styled.div`
  padding: 1.5em 3em;
  border-bottom: 1px solid ${theme.colors.darkGrey};
  grid-area: header;

  @media ${viewport[7]} {
    display: none;
  }
`;

const ModalBody = styled.div`
  padding: 1.5em 3em;
  align-self: start;
  grid-area: body;
`;
const ModalFooter = styled.div`
  padding: 1.5em 3em;
  overflow: auto;
  grid-area: footer;
  border-top: 1px solid ${theme.colors.darkGrey};

  &::after {
    content: '';
    clear: both;
    display: table;
  }

  @media ${viewport[7]} {
    border: 0;
  }
`;
const CloseModalBtn = styled.span`
  color: ${theme.colors.lightGrey};
  cursor: pointer;
  float: right;
  font-size: 30px;
  margin: 0;

  &:hover,
  &:focus {
    color: ${theme.colors.myrtleGreen};
  }
`;

const BtnSave = styled.button`
  background: ${theme.colors.myrtleGreen};
  padding: 0.9em;
  border-radius: 4px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  font-size: 1em;
  letter-spacing: 0.8px;
  width: 100%;
  text-align: center;
  color: #fff;

  @media ${viewport[7]} {
    color: ${theme.colors.myrtleGreen};
    font-weight: 200;
    background: transparent;
    text-align: left;
    width: auto;
    float: right;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;

const BackDrop = styled.div`
  background-color: rgba(195, 195, 195, 0.3);
  height: 100%;
  position: fixed;
  top: 0;
  transition: all 1.3s;
  width: 100%;
  z-index: 100;
`;

const Modal = ({ show, children, close }) => {
  return (
    <div>
      <ModalWrapper
        style={{
          transform: show ? 'translateY(0vh)' : 'translateY(20vh)',
          opacity: show ? '1' : '0',
          visibility: show ? 'visible' : 'hidden'
        }}
      >
        <ModalHeader>
          <span>Clear</span>
          <CloseModalBtn onClick={close}>×</CloseModalBtn>
        </ModalHeader>
        <ModalBody>
          <p>{children}</p>
        </ModalBody>
        <ModalFooter>
          <BtnSave>Save</BtnSave>
        </ModalFooter>
      </ModalWrapper>
    </div>
  );
};

export { Modal, BackDrop };