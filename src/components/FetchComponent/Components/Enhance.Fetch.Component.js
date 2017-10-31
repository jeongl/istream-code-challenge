import React from 'react';
import { withProps, withState, withHandlers, compose } from 'recompose';
import FetchComponent from './Style';

const enhance = compose(
  withProps(() => ({
    sortDescending: (values) => values.sort((a, b) => b.count - a.count),
  })),
  withProps(({ sortDescending }) => ({
    filterFetchedSummary: (filterVal, fetchedSummary) => {
      if (filterVal && fetchedSummary) {
        return sortDescending(fetchedSummary.filter(item => 
          item.name[0].toLowerCase() === filterVal.toLowerCase()
        ));
      }

      return fetchedSummary;
    }
  })),
  withState('isFetching', 'updateIsFetching', true),
  withState('fetchedSummary', 'processSummary', null),
  withState('filterVal', 'updateFilterVal', null),
  withHandlers({
    updateFetchStatus: ({ updateIsFetching }) => (newVal) => {
      updateIsFetching(newVal)
    },
    fetchSummary: ({ processSummary, sortDescending, updateIsFetching }) => () => new Promise((resolve) => {
      processSummary(null);
      updateIsFetching(true);

      fetch('https://hook.io/danielgtaylor-gmail-com/isp-sales/summary')
        .then((resp) => resp.json())
        .then((resp) => {
          updateIsFetching(false);
          processSummary(sortDescending(resp))
        }).catch ((err) => {
          throw new Error('Something bad happened.');
        });
    }),
    modifyFilterVal: ({ updateFilterVal }) => newVal => {
      updateFilterVal(newVal);
    }
  })
);

export const EnhanceFetch = (Button, FilterInput, SalesList) => enhance(({
  fetchedSummary, isFetching, fetchSummary, filterFetchedSummary, ifDataExistsCall, modifyFilterVal, filterVal
}) => {
  return (
    <FetchComponent className="fetch-component">
      <Button
        onClick={(e) => {
          e.stopPropagation();
          fetchSummary();
        }}
      />
      <FilterInput
        disabled={!fetchedSummary}
        onChange={(val) => {
          modifyFilterVal(val[0])
        }}
      />
      <SalesList fetchedSummary={filterFetchedSummary(filterVal, fetchedSummary)} />
    </FetchComponent>
  );
});
