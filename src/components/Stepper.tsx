import styles from '../styles/Stepper.module.css';
import { CurrentStepIcon } from '../assets/CurrentStepIcon.tsx';
import { CompletedStepIcon } from '../assets/CompletedStepIcon.tsx';

interface StepperProps {
  step: number;
}

export function Stepper({ step }: StepperProps) {
  return (
      <div className={styles.main}>
        <div className={styles.currentCircle}>
          {
              step === 1 && <CurrentStepIcon/>
          }
          {
              (step === 2 || step === 3) && <CompletedStepIcon/>
          }
        </div>
        {
            step === 1 && <div className={styles.grayLine}/>
        }
        {
            step > 1 && <div className={styles.doneLine}/>
        }
        {
            step === 1 && <div className={styles.grayCircle}/>
        }
        {
            step === 2 &&
            <div className={styles.currentCircle}>
              <CurrentStepIcon/>
            </div>
        }
        {
            step === 3 &&
            <div className={styles.currentCircle}>
              <CompletedStepIcon/>
            </div>
        }
        {
            (step === 1 || step === 2) && <div className={styles.grayLine}/>
        }
        {
            step > 2 && <div className={styles.doneLine}/>
        }
        {
            (step === 1 || step === 2) && <div className={styles.grayCircle}/>
        }
        {
            step > 2 &&
            <div className={styles.currentCircle}>
              <CurrentStepIcon/>
            </div>
        }
      </div>
  );
}
