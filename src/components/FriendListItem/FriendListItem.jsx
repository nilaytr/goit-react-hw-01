import css from "../../components/FriendList/FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return (
        <li className={css.listElement}>
        <div key={id}>
            <img src={avatar} alt={name} width="48" />
            <p>{name}</p>
            <p className={`${isOnline ? css.online : css.offline}`}>
                {isOnline ? "Online" : "Offline"}</p>
        </div>
        </li>
    );
};

export default FriendListItem;