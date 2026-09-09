import styles from './Card.module.scss';

export type CardItem = {
  id: string;
  label: string;
};

export type CardProps = {
  items: CardItem[];
};

export function Card({ items }: CardProps) {
  return (
    <div className={styles.wrapper} style={{ backgroundColor: '#ffffff', padding: '24px' }}>
      <div className={styles.action} onClick={() => console.log('open details')}>
        Open details
      </div>

      <img className={styles.image} src="/card.png" />

      <form className={styles.form}>
        <label>Email</label>
        <input id="email" />
      </form>

      <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={index} className={styles.item}>
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Card;
