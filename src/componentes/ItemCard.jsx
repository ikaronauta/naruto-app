import { Link } from "react-router-dom";
import styles from "../assets/css/ItemCard.module.css"


export function ItemCard({ item }) {
  return (
    <li className={styles.itemCard}>
      <Link to={item.mal_id.toString()}>
        <img
          className={styles.itemImage}
          src={item.image_url}
          alt={item.title}
        />
        <div>{item.title}</div>
      </Link>
    </li>
  )
}
