import { PropTypes } from 'prop-types';
import { FriendListItem } from './FriendListItem/FriendListItem';
//------------------------------------------------------------------------//
export const FriendList = ({ friends }) => {
  return (
    <ul class="friend-list">
      {friends.map(({ avatar, name, id, isOnline }) => {
        return (
          <FriendListItem
            avatar={avatar}
            name={name}
            key={id}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
