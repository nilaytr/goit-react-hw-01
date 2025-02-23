import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
    return (
<div className={css.profileContainer}>
  <div className={css.imgDiv}>
    <img className={css.profileImg}
      src={image}
      alt={name}
    />
    <p className={css.infoName}>{name}</p>
    <p className={css.infoTag}>@{tag}</p>
    <p className={css.infoLocation}>{location}</p>
  </div>

  <ul className={css.ulList}>
    <li className={css.listItem}>
      <span>Followers</span>
      <span className={css.stat}>{stats.followers}</span>
    </li>
    <li className={css.listItem}>
      <span>Views</span>
      <span className={css.stat}>{stats.views}</span>
    </li>
    <li className={css.listItem}>
      <span>Likes</span>
      <span className={css.stat}>{stats.likes}</span>
    </li>
  </ul>
</div>
);
};

export default Profile;