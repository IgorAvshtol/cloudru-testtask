import { useForm, SubmitHandler } from 'react-hook-form';
import Input from 'react-input-mask';
import { useNavigate } from 'react-router-dom';
import styles from '@/styles/HomePage.module.css';
import { HomePageForm } from '@/interfaces';
import { setDataFromHomePage, setCurrentStep } from '@store/rootReducer.ts';
import { useAppDispatch } from '@/store/store.ts';

export function Form() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<HomePageForm>();

  const onSubmit: SubmitHandler<HomePageForm> = (data) => {
    dispatch(setDataFromHomePage(data));
    dispatch(setCurrentStep(1));
    navigate('/create');
  };

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputBlock}>
          <label>Номер телефона</label>
          <Input
              {...register('phone', {
                required: {
                  value: true,
                  message: 'Это поле обязательно'
                },
                minLength: {
                  value: 18,
                  message: 'Неверная длина'
                }
              })}
              className={styles.input}
              mask='+7 (999) 999-99-99'
              maskChar=''
              id='phone'
              type='text'
              placeholder='+7 (900) 000-00-00'/>
          {errors.phone?.message && <span>{errors.phone?.message}</span>}
        </div>
        <div className={styles.inputBlock}>
          <label>Email</label>
          <input
              {...register('email', { required: true })}
              type='email'
              className={styles.input}
              placeholder='tim.jennings@example.com'/>
          {errors.email && <span>Это поле обязательно</span>}
        </div>
        <button className={styles.button}>Начать</button>
      </form>
  );
}
