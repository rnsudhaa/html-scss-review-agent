import styles from './Card.module.scss';

export type CardItem = {
  id: string;
  label: string;
};

export type CardProps = {
  items: CardItem[];
  variant?: 'default' | 'featured';
  onOpen?: () => void;
};

export function Card({ items, variant = 'default', onOpen }: CardProps) {
  const variantClass = variant === 'featured' ? styles['card--featured'] : '';

  return (
    <article className={[styles.card, variantClass].filter(Boolean).join(' ')}>
      <button type="button" className={styles.action} onClick={onOpen}>
        Open details
      </button>

      <img className={styles.image} src="/card.png" alt="Preview of the card content" />

      <form className={styles.form}>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" aria-label="Email" />
      </form>

      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.id} className={styles.item}>
            {item.label}
          </li>
        ))}
      </ul>
    </article>
  );
}
