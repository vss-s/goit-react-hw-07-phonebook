import { connect } from 'react-redux';
import PhoneBookSearchField from './PhoneBookSearchField';
import {
  getFilterQuery,
  getFilterOnChange,
} from '../../redux/filterReducer/filterSelectors';

const mapStateToProps = state => ({
  filterQuery: getFilterQuery(state),
});

const mapDispatchToProps = dispatch => ({
  onChangeQuery: query => dispatch(getFilterOnChange(query)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PhoneBookSearchField);
