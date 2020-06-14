import { connect } from 'react-redux';
import App from './App';
import { getContacts } from '../redux/contactReducer/contactSelectors';

const mapStateToProps = state => ({
  phoneBookItems: getContacts(state),
});

export default connect(mapStateToProps)(App);
