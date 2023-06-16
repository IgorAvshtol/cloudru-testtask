import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@store/store.ts';
import { StepOneForm } from '@/interfaces';
import { setDataFromStepOnePage, setCurrentStep } from '@store/rootReducer.ts';
import { Select } from '../Select.tsx';
import styles from '@/styles/StepOne.module.css';

export function StepOne() {
  const dispatch = useAppDispatch();
  const { nickname, name, surname, sex } = useAppSelector(state => state.root);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<StepOneForm>();
  const onSubmit: SubmitHandler<StepOneForm> = (data) => {
    dispatch(setDataFromStepOnePage(data));
    dispatch(setCurrentStep(2));
  };

  const onPrevPageBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('/');
  };

  return (
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formBlock}>
        <div className={styles.inputBlock}>
          <label>Nickname</label>
          <input
              {...register('nickname', { required: true })}
              defaultValue={nickname}
              className={styles.input}
              type='text'
              placeholder='Nickname'/>
          {errors.nickname && <span>Это поле обязательно</span>}
        </div>
        <div className={styles.inputBlock}>
          <label>Name</label>
          <input
              {...register('name', { required: true })}
              defaultValue={name}
              className={styles.input}
              type='text'
              placeholder='Name'/>
          {errors.name && <span>Это поле обязательно</span>}
        </div>
        <div className={styles.inputBlock}>
          <label>Surname</label>
          <input
              {...register('surname', { required: true })}
              defaultValue={surname}
              className={styles.input}
              type='text'
              placeholder='Surname'/>
          {errors.surname && <span>Это поле обязательно</span>}
        </div>
        <div className={styles.inputBlock}>
          <label>Sex</label>
          <Select
              {...register('sex', { required: true })}
              setValue={setValue}
              clearErrors={clearErrors}
              defaultValue={sex}
          />
          {errors.sex && <span>Это поле обязательно</span>}
        </div>
        <div className={styles.buttonsBlock}>
          <button className={styles.prevPageButton} onClick={(e) => onPrevPageBtnClick(e)}>
            Назад
          </button>
          <button className={styles.nextPageButton}>Далее</button>
        </div>
      </form>
  );
}
