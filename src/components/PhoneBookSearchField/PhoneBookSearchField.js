import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import slideTransition from '../../Transitions/slideTransition.module.css';
import Styles from './PhoneBookSearchField.module.css';

const PhoneBookSearchField = ({ filterQuery, onChangeQuery, isActive }) => (
  <CSSTransition
    in={isActive}
    mountOnEnter
    unmountOnExit
    timeout={500}
    classNames={slideTransition}
  >
    <div className={Styles.container}>
      <input
        className={Styles.searchField}
        type="text"
        name="filterQuery"
        value={filterQuery}
        onChange={({ target }) => onChangeQuery(target.value)}
        placeholder="Search contact..."
      />
    </div>
  </CSSTransition>
);

PhoneBookSearchField.propTypes = {
  filterQuery: PropTypes.string.isRequired,
  onChangeQuery: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
};

export default PhoneBookSearchField;
