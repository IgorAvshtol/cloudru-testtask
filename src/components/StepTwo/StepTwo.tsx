import { useEffect, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@store/store.ts';
import { setCurrentStep, setDataFromStepTwoPage } from '@store/rootReducer.ts';
import { StepTwoForm } from '@/interfaces';
import { DeleteIcon } from '@assets/DeleteIcon.tsx';
import { AddIcon } from '@assets/AddIcon.tsx';
import style from '@/styles/StepOne.module.css';
import styles from '@/styles/StepTwo.module.css';

const countOfCheckboxButtons = [1, 2, 3];
const countOfRadioButtons = [1, 2, 3];

export function StepTwo() {
  const dispatch = useAppDispatch();
  const { advantages, checkbox, radio } = useAppSelector(state => state.root);
  const {
    register,
    control,
    clearErrors, handleSubmit,
    formState: { errors },
    setValue
  } = useForm<StepTwoForm>(
      {
        defaultValues: {
          advantages: ['sd'],
        }
      }
  );

  useEffect(() => {
    if (advantages.length) {
      advantages.forEach((advantage, index) => {
        setValue(`advantages.${index}.name` as any, advantage as any);
      });
    }
  }, [advantages, setValue]);

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'advantages',
  });

  const [checkedCheckboxes, setCheckedCheckboxes] = useState<number[]>(checkbox.length ? checkbox : []);
  const [selectedRadio, setSelectedRadio] = useState<number>(radio || 1);

  const handleCheckboxChange = (value: number, isChecked: boolean) => {
    clearErrors('checkbox');
    if (isChecked) {
      setCheckedCheckboxes((prevCheckboxes) => [...prevCheckboxes, value]);
    } else {
      setCheckedCheckboxes((prevCheckboxes) =>
          prevCheckboxes.filter((checkbox) => checkbox !== value)
      );
    }
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(Number(e.target.value));
  };

  const onSubmit = (data: StepTwoForm) => {
    data.checkbox = checkedCheckboxes;
    data.radio = selectedRadio;
    dispatch(setDataFromStepTwoPage(data));
    dispatch(setCurrentStep(3));
  };

  const onPrevPageBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(setCurrentStep(1));
  };

  return (
      <form onSubmit={handleSubmit(onSubmit)} className={style.formBlock}>
        <label>Advantages</label>
        {fields.map((field, index) => (
            <div key={field.id} className={styles.advantageBlock}>
              <input
                  {...register(`advantages.${index}.name` as any, { required: true })}
                  className={style.input}
              />
              {errors.advantages && <p className={styles.errorMessage}>Это поле обязательно</p>}
              <button type='button' onClick={() => remove(index)} className={styles.deleteButton}
                      disabled={fields.length === 1}>
                <DeleteIcon/>
              </button>
            </div>
        ))}
        <button
            type='button'
            onClick={() => append({ name: '' } as any)}
            className={styles.addButton}
        >
          <AddIcon/>
        </button>
        <div className={styles.checkboxesBlock}>
          <label>Checkbox group</label>
          {
            countOfCheckboxButtons.map((button, index) => {
              return (
                  <div key={index} className={styles.checkboxBlock}>
                    <input
                        type='checkbox'
                        className={styles.checkbox}
                        value={button}
                        checked={checkedCheckboxes.includes(button)}
                        {...register('checkbox', { required: true })}
                        onChange={(e) => handleCheckboxChange(button, e.target.checked)}
                    />
                    <p className={styles.checkboxTitle}>{button}</p>
                  </div>
              );
            })
          }
          {errors.checkbox && <p className={styles.errorMessage}>Это поле обязательно</p>}
        </div>
        <div className={styles.radioGroup}>
          <label>Radio group</label>
          {
            countOfRadioButtons.map((button, index) => {
              return (
                  <div key={index} className={styles.checkboxBlock}>
                    <input
                        type='radio'
                        {...register('radio', { required: true })}
                        value={button}
                        checked={selectedRadio === button}
                        className={styles.radio}
                        onChange={handleRadioChange}
                    />
                    <p className={styles.checkboxTitle}>{button}</p>
                  </div>
              );
            })
          }
          {errors.radio && <p className={styles.errorMessage}>Это поле обязательно</p>}
        </div>
        <div className={style.buttonsBlock}>
          <button className={style.prevPageButton} onClick={(e) => onPrevPageBtnClick(e)}>
            Назад
          </button>
          <button className={style.nextPageButton}>Далее</button>
        </div>
      </form>
  );
}
