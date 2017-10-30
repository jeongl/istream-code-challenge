import React from 'react';
import styled from 'styled-components';
import { nest } from 'recompose';

const LIGHTERGREEN = '#83ED94';
const DARKERGREEN = 'rgb(38, 207, 113)';
const DARKERGREENTEXT = 'rgb(34, 86, 52)';
const BLACKBORDER = 'rgb(0, 0, 0)';
const WHITEBORDER = 'rgb(254, 254, 254)';
const GREYBORDER = 'rgb(194, 194, 194)';

const FlexWrap = styled.div`
  font-family: Arial;
  font-weight: bold;
  display: flex;
  justify-content: center;
  height: 100%;
`
const OutsideBlackBorder = styled.div`
  border: 2px solid ${BLACKBORDER};
  border-radius: 20px;
`;

const WhiteBorder = styled.div`
  border: 3px solid ${WHITEBORDER};
  border-radius: 20px;
`;

const GreyBorder = styled.div`
  border: 7px solid ${GREYBORDER};
  border-radius: 15px;
`;

const ButtonStyle = styled.div`
  width: 300px;
  height: 75px;
  border: 5px solid rgb(103, 153, 119);
  border-radius: 8px;
  display: flex;
  cursor: pointer;
  color: ${DARKERGREENTEXT};
  background-image: linear-gradient(bottom, ${DARKERGREEN} 50%, ${LIGHTERGREEN} 50%);
  background-image: -o-linear-gradient(bottom, ${DARKERGREEN} 50%, ${LIGHTERGREEN} 50%);
  background-image: -moz-linear-gradient(bottom, ${DARKERGREEN} 50%, ${LIGHTERGREEN} 50%);
  background-image: -webkit-linear-gradient(bottom, ${DARKERGREEN} 50%, ${LIGHTERGREEN} 50%);
  background-image: -ms-linear-gradient(bottom, ${DARKERGREEN} 50%, ${LIGHTERGREEN} 50%);
  :before {
    display: flex;
    content: "";
    justify-content: center;
    align-items: center;
    height: -32px;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-left: 20px solid ${DARKERGREENTEXT};
    margin-left: 10%;
    margin-bottom: 40px;
    margin-top: 23px;
  }
  :after {
    content: "FETCH DATA";
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 30px;
    padding-left: 5%;
  }
  :active {
    box-shadow: 0 1px 0 12px #00823F;
  }
`
export const Button = nest(
  props => <FlexWrap className="flex-wrap" {...props} />, 
  props => <OutsideBlackBorder className="black-border" {...props} />,
  props => <WhiteBorder className="white-border" {...props} />,
  props => <GreyBorder className="grey-border" {...props} />,
  props => <ButtonStyle className="fetch-button" {...props} />
);