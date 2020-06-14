import { connect } from 'react-redux';
import PhoneBookListItem from './PhoneBookListItem';
import { deleteContactOpertation } from '../../redux/contactReducer/contactOperations';

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContactOpertation(id)),
});

export default connect(null, mapDispatchToProps)(PhoneBookListItem);
