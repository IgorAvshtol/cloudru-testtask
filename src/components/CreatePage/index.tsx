import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { useAppSelector } from '@store/store.ts';
import { StepOne } from '../StepOne/StepOne.tsx';
import { StepTwo } from '../StepTwo/StepTwo.tsx';
import { StepThree } from '../StepThree/StepThree.tsx';
import { SuccessModal } from '../Modals/SuccessModal.tsx';
import { ErrorModal } from '../Modals/ErrorModal.tsx';
import { Stepper } from '../Stepper.tsx';
import styles from '@/styles/CreatePage.module.css';

export function CreatePage() {
  const navigate = useNavigate();
  const { currentStep, showSuccessModal, showErrorModal } = useAppSelector(state => state.root);

  useEffect(() => {
    !currentStep && navigate('/');
  }, []);

  return (
      <div className={styles.main}>
        <div className={styles.formBlock}>
          <Stepper step={currentStep}/>
          {currentStep === 1 && <StepOne/>}
          {currentStep === 2 && <StepTwo/>}
          {currentStep === 3 && <StepThree/>}
        </div>
        {showErrorModal && createPortal(
            <ErrorModal/>,
            document.body
        )}
        {showSuccessModal && createPortal(
            <SuccessModal/>,
            document.body
        )}
      </div>
  );
}
