import filterSlice from '../../redux/filterReducer/filterSlice';

export const getFilterQuery = state => state.filter;

export const getFilterOnChange = query =>
  filterSlice.actions.changeQuery(query);
