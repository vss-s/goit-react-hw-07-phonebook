import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import xIcon from '@iconify/icons-cil/x';
import Styles from './PhoneBookListItem.module.css';

export default class PhoneBookListItem extends Component {
  static propTypes = {
    onDeleteContact: PropTypes.func.isRequired,
    contact: PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired,
  };

  handleDelete = () => {
    const { onDeleteContact, contact } = this.props;
    onDeleteContact(contact.id);
  };

  render() {
    const { name, number } = this.props.contact;
    return (
      <li className={Styles.listItem}>
        <span className={Styles.name}>
          {name} : {number}
        </span>
        <button
          onClick={this.handleDelete}
          className={Styles.Btn}
          type="button"
        >
          <Icon icon={xIcon} color="red" width="40px" height="40px" />
        </button>
      </li>
    );
  }
}
