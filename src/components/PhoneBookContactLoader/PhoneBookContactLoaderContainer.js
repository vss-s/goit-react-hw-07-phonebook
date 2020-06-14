import { connect } from 'react-redux';
import { getIsLoadingStatus } from '../../redux/contactReducer/contactSelectors';
import PhoneBookContactLoader from './PhoneBookContactLoader';

const mapStateToProps = state => ({
  isLoading: getIsLoadingStatus(state),
});

export default connect(mapStateToProps)(PhoneBookContactLoader);
