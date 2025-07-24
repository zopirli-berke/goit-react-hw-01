import css from "./Profile.module.css";

export default function Profile({ name, tag, stats, image, location }) {
  return (
    <div className={css.profile}>
      <div className={css.bio}>
        <img src={image} alt={name} className={css.avatar} />
        <h2 className={css.name}>{name}</h2>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.stats}>
        <li className={css.list}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li className={css.list}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li className={css.list}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
