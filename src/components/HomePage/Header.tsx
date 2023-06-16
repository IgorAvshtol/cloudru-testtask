import styles from '@/styles/HomePage.module.css';
import { FolderIcon } from '@assets/FolderIcon.tsx';

export function Header() {
  return (
      <div className={styles.formHeader}>
        <div className={styles.avatar}>ИА</div>
        <div className={styles.information}>
          <p className={styles.name}>Игорь Авштоль</p>
          <div className={styles.contacts}>
            <div className={styles.contact}>
              <FolderIcon/>
              <a href='https://t.me/ihariharihar' target='_blank'>Telegram</a>
            </div>
            <div className={styles.contact}>
              <FolderIcon/>
              <a href='https://github.com/IgorAvshtol' target='_blank'>GitHub</a>
            </div>
            <div className={styles.contact}>
              <FolderIcon/>
              <a
                  href='https://drive.google.com/file/d/1mcAFZQXdqh8_0VzPTwvdpZ1Wj3HIIg-y/view?usp=sharing'
                  target='_blank'
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
  );
}
