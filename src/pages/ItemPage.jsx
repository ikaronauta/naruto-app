import items from "../assets/items.json";
import { useParams } from "react-router-dom";
import styles from "../assets/css/ItemPage.module.css";

export function ItemPage() {
  const { itemId } = useParams();
  const item = items.find((index) => {
    return index.mal_id === parseFloat(itemId);
  });

  return (
    <div className={styles.contenedor}>
      <img
        className={`${styles.col} ${styles.itemImage}`}
        src={item.image_url}
        alt={item.title}
      />
      <div className={`${styles.col} ${styles.itemDetails}`}>
        <p className={styles.firstItem}>
          <strong>Title:</strong> {item.title}
        </p>
        <p>
          <strong>Description:</strong> {item.synopsis}
        </p>
      </div>
    </div>
  );
}
