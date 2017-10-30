import React from 'react';
import { ListWrap, SalesListItem, NoResults, NoMatches } from './Style/SalesList';

export const SalesList = ({ fetchedSummary }) => (
  <div className="sales-list">
    <ListWrap>
      {fetchedSummary && fetchedSummary.map((item, i) => (
        <SalesListItem key={item.name}>
          <p>{item.name}</p>
          <p className="count">{item.count}</p>
        </SalesListItem>
      ))}
      {!fetchedSummary &&
        <NoResults>
          No results yet.
        </NoResults>
      }
      {fetchedSummary && fetchedSummary.length === 0 &&
        <NoMatches>
          No search matches found.
        </NoMatches>
      }      
    </ListWrap>
  </div>
);
