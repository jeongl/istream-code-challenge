import React from 'react';
import { withStateHandlers, compose } from 'recompose';
import { FilterInput as FilterInputStyle } from './Style/FilterInput';

const enhance = compose(
  withStateHandlers(() => ({ inputVal: '' }), {
    changeInputVal: ({ inputVal }) => newVal => ({
      inputVal: newVal
    }),
  })
);

export const FilterInput = enhance(({
  onChange, changeInputVal, inputVal, disabled
}) => {
  return (
    <FilterInputStyle
      disabled={disabled}
      placeholder="Filter results..."
      onChange={(e) => {
        onChange(e.target.value);
        changeInputVal(e.target.value);
      }}
    />
  );
});
