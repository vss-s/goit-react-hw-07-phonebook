import { connect } from 'react-redux';
import { getContacts } from '../../redux/contactReducer/contactSelectors';
import { postNewContactOpertation } from '../../redux/contactReducer/contactOperations';
import PhoneBookFields from './PhoneBookFields';

const mapStateToProps = state => ({
  phoneBookItems: getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onAddContact: obj => dispatch(postNewContactOpertation(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBookFields);
