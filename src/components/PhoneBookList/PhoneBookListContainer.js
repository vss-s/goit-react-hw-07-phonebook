import { connect } from 'react-redux';
import PhoneBookList from './PhoneBookList';
import { getFilteredContacts } from '../../redux/contactReducer/contactSelectors';

import { getAllContactsOpertation } from '../../redux/contactReducer/contactOperations';

const mapStateToProps = state => ({
  phoneBookItems: getFilteredContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onGetAllContact: () => dispatch(getAllContactsOpertation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBookList);
