import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.card}>
      <li className={css.item}>
        <img className={css.avatar} src={avatar} alt={name} width="48" />
        <p className={css.name}>{name}</p>
        <p className={isOnline ? css.online : css.offline}>
          {isOnline ? "Online" : "Offline"}
        </p>
      </li>
    </div>
  );
}
