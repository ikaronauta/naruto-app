import { ItemCard } from "./ItemCard";
import { useSearchParams } from "react-router-dom";
import styles from "../assets/css/GridItems.module.css";
import { useEffect, useState } from "react";

export function GridItems() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://api.jikan.moe/v3/search/anime?q=naruto")
      .then((result) => result.json())
      .then((data) => {
        setItems(data.results);
      });
  }, []);

  const buscador = (e) => {
    setSearchParams({ search: e.target.value });
  };

  const busqueda = searchParams.get("search") ?? "";

  return (
    <div>
      <div className={styles.buscadorContenedor}>
        <input
          className={styles.buscador}
          value={busqueda}
          onChange={buscador}
          type="text"
          placeholder="Busqueda"
        />
      </div>
      <ul className={styles.itemGrid}>
        {items
          .filter((item) => {
            if (!busqueda) return true;
            const titulo = item.title.toLowerCase();
            return titulo.includes(busqueda.toLowerCase());
          })
          .map((item) => {
            return <ItemCard key={item.mal_id} item={item} />;
          })}
      </ul>
    </div>
  );
}
