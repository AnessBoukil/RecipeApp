import styles from "./item.module.css";
export default function Item({ item }) {
  return (
    <div>
      <div className={styles.itemContainer}>
        <div className={styles.nameContainer}></div>
        <h3>{item.name}</h3>
        <h3>
          {item.amount} {item.unit}
        </h3>
      </div>
    </div>
  );
}
