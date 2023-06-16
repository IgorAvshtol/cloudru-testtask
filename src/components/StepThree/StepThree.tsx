import { ChangeEvent, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@store/store.ts';
import { setCurrentStep, setDataFromStepThreePage } from '@store/rootReducer.ts';
import { StepThreeForm } from '@/interfaces';
import styles from '@/styles/StepOne.module.css';
import style from '@/styles/StepThree.module.css';
import { sendUserData } from '@store/rootThunk.ts';

export function StepThree() {
  const dispatch = useAppDispatch();
  const root = useAppSelector(state => state.root);
  const {
    about,
    showSuccessModal,
    showErrorModal,
    currentStep,
    loading,
    ...userData
  } = root;
  const [text, setText] = useState<string>('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StepThreeForm>();

  const onSubmit: SubmitHandler<StepThreeForm> = (data) => {
    dispatch(setDataFromStepThreePage(data));
    const sendData = {
      ...userData,
      ...data
    };
    dispatch(sendUserData(sendData));
  };

  const onPrevPageBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(setCurrentStep(2));
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = e.target.value;
    const textWithoutSpaces = inputText.replace(/\s/g, '');
    const truncatedText = textWithoutSpaces.slice(0, 200);
    setText(truncatedText);
  };

  return (
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formBlock}>
        <div className={style.textareaBlock}>
          <label>About</label>
          <textarea
              {...register('about', { required: true })}
              className={style.textarea}
              onChange={handleChange}
              maxLength={200}
              defaultValue={about}
              placeholder='about'/>
          {errors.about && <p>Это поле обязательно</p>}
          <div className={style.counter}>
            {text.replace(/\s/g, '').length}
          </div>
        </div>
        <div className={styles.buttonsBlock}>
          <button
              className={styles.prevPageButton}
              onClick={(e) => onPrevPageBtnClick(e)}
              disabled={loading}
          >
            Назад
          </button>
          <button className={styles.nextPageButton} disabled={loading}>Отправить</button>
        </div>
      </form>
  );
}
