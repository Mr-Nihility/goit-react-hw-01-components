import { PropTypes } from 'prop-types';
//------------------------------------------------------------------------//
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li class="item">
      <span class={isOnline ? 'status true' : 'status false'}></span>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
