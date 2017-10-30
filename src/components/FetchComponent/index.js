import { Button } from './Components/Style/Button';
import { FilterInput } from './Components/FilterInput.Component.js';
import { SalesList } from './Components/SalesList.Component.js';
import { EnhanceFetch as EnhanceFetchComponentWith } from './Components/Enhance.Fetch.Component';

export default EnhanceFetchComponentWith(
  Button,
  FilterInput,
  SalesList
);