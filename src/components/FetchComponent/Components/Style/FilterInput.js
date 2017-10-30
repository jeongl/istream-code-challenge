import React from 'react';
import styled from 'styled-components';
import { nest } from 'recompose';

const BORDERCOLOR = 'rgb(68, 68, 68)';

const FilterWrapper = styled.div`
  padding-top: 7%;
  width: 100%;
`
const FilterInputStyle = styled.input`
  width: 100%;
  font-family: Arial;
  font-weight: bold;
  font-size: 18px;
  outline-style: none;
  border: none;
  border-bottom: 4px solid ${BORDERCOLOR};
`
export const FilterInput = nest(
  props => <FilterWrapper className="filter-input" {...props} />,
  props => <FilterInputStyle className="filter-base" {...props} />
);
