import styles from '@/styles/Modal.module.css';
import style from '@/styles/StepOne.module.css';
import { SuccessIcon } from '@assets/SuccessIcon.tsx';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@store/store.ts';
import { closeSuccessModal } from '@store/rootReducer.ts';

export function SuccessModal() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onHomeBtnClick = () => {
    dispatch(closeSuccessModal());
    navigate('/');
    window.location.reload();
  };

  return (
      <div className={styles.drawer}>
        <div className={styles.modalBlock}>
          <p className={styles.title}>Форма успешно отправлена</p>
          <div className={styles.iconBlock}>
            <SuccessIcon/>
          </div>
          <button className={style.nextPageButton} onClick={onHomeBtnClick}>
            На главную
          </button>
        </div>
      </div>
  );
}
