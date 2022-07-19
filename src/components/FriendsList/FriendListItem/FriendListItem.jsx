import { PropTypes } from 'prop-types';
import css from './FriendListItem.module.css';
//------------------------------------------------------------------------//
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li class={css.item}>
      <span class={isOnline ? css.online : css.offline}></span>
      <img class={css.avatar} src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
