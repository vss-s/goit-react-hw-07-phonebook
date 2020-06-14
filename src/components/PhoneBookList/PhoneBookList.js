import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PhoneBookListItem from '../PhoneBookListItem/PhoneBookListItemContainer';
import Styles from './PhoneBookList.module.css';
import transitionsStyle from '../../Transitions/slideTransition.module.css';

export default class PhoneBookList extends Component {
  static propTypes = {
    phoneBookItems: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string,
      }),
    ).isRequired,
    onGetAllContact: PropTypes.func,
  };
  componentDidMount() {
    const { onGetAllContact } = this.props;
    onGetAllContact();
  }
  render() {
    const { phoneBookItems } = this.props;
    return (
      <TransitionGroup component="ul" className={Styles.container}>
        {phoneBookItems.map(contact => (
          <CSSTransition
            in
            timeout={500}
            classNames={transitionsStyle}
            key={contact.id}
            unmountOnExit
          >
            <PhoneBookListItem contact={contact} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    );
  }
}
