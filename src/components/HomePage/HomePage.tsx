import styles from '@/styles/HomePage.module.css';
import { Header } from './Header.tsx';
import { Form } from './Form.tsx';

export function HomePage() {
  return (
      <div className={styles.main}>
        <div className={styles.formBlock}>
          <Header/>
          <div className={styles.divider}/>
          <Form/>
        </div>
      </div>
  );
}
