import { CloseModalIcon } from '@assets/CloseModalIcon.tsx';
import { ErrorIcon } from '@assets/ErrorIcon.tsx';
import { useAppDispatch } from '@store/store.ts';
import { closeErrorModal } from '@store/rootReducer.ts';
import styles from '@/styles/Modal.module.css';
import style from '@/styles/StepOne.module.css';

export function ErrorModal() {
  const dispatch = useAppDispatch();

  const onCloseBtnClick = () => {
    dispatch(closeErrorModal());
  };

  return (
      <div className={styles.drawer}>
        <div className={styles.modalBlock}>
          <div className={styles.topBlock}>
            <p className={styles.title}>Ошибка</p>
            <button className={styles.closeButton} onClick={onCloseBtnClick}>
              <CloseModalIcon/>
            </button>
          </div>
          <div className={styles.iconBlock}>
            <ErrorIcon/>
          </div>
          <div className={styles.bottomBlock}>
            <button className={style.nextPageButton} onClick={onCloseBtnClick}>
              Закрыть
            </button>
          </div>
        </div>
      </div>
  );
}
