import styled from 'styled-components';

const COUNTBACKGROUND = 'rgb(86, 119, 152)';
const GREYBACKGROUND = 'rgb(238, 238, 238)';

export const ListWrap = styled.ul`
  padding: 0;
  font-weight: bold;
`;

export const SalesListItem = styled.li`
  display: flex;
  justify-content: space-between;
  height: 100%;
  list-style: none;
  font-size: 18px;
  padding: 0;
  margin-bottom: 5px;
  background: ${GREYBACKGROUND};
  p {
    font-size: 30px;
    font-weight: bold;
    margin: 10px;
    :first-child {
      padding-top: 2px;
    }
    &.count {
      padding: 7px;
      margin-top: 12px;
      font-size: 17px;
      border-radius: 30px;
      color: white;
      background: ${COUNTBACKGROUND};
    }      
  }
`;

export const NoResults = styled(SalesListItem)`
  font-size: 22px;
  background: none;
`

export const NoMatches = NoResults;