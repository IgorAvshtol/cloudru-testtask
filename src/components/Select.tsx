import { ComponentProps, forwardRef, useEffect, useState } from 'react';
import styles from '@/styles/Select.module.css';
import { SexField } from '@/interfaces';

interface SelectProps extends ComponentProps<'div'> {
  setValue: (type: 'sex', value: SexField) => void;
  clearErrors: (value: any) => void;
  defaultValue: SexField | null;
}

export const Select = forwardRef<HTMLDivElement, SelectProps>((props, ref) => {
      const [showOptions, setShowOptions] = useState<boolean>(false);
      const [selectedOption, setSelectedOption] = useState<SexField | ''>(props.defaultValue || '');

      const { setValue, clearErrors } = props;
      const onSelectClick = () => {
        setShowOptions(!showOptions);
      };

      const onOptionClick = (value: SexField) => {
        setSelectedOption(value);
        clearErrors('sex');
        setValue('sex', value);
      };

      useEffect(() => {
        props.defaultValue && setValue('sex', props.defaultValue);
      }, []);

      return (
          <div className={styles.select} onClick={onSelectClick} ref={ref} {...props}>
            {selectedOption || <p className={styles.defaultOption}>Не выбрано</p>}
            {
                showOptions &&
                <div className={styles.optionsList}>
                  <p className={styles.option} onClick={() => onOptionClick(SexField.MAN)}>{SexField.MAN}</p>
                  <p className={styles.option} onClick={() => onOptionClick(SexField.WOMEN)}>{SexField.WOMEN}</p>
                </div>
            }
          </div>
      );
    }
);

