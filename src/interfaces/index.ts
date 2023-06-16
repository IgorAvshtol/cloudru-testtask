export interface RootState {
  currentStep: number;
  showSuccessModal: boolean;
  showErrorModal: boolean;
  loading: boolean;
  phone: string;
  email: string;
  nickname: string;
  name: string;
  surname: string;
  sex: SexField | null;
  advantages: string[];
  checkbox: number[];
  radio: number;
  about: string;
}

export type SendData = Omit<RootState, 'currentStep' | 'showSuccessModal' | 'showErrorModal' | 'loading'>

export interface HomePageForm {
  phone: string;
  email: string;
}

export enum SexField {
  MAN = 'man',
  WOMEN = 'women',
}

export interface StepOneForm {
  nickname: string;
  name: string;
  surname: string;
  sex: SexField;
}

export interface StepTwoForm {
  advantages: string[];
  checkbox: number[];
  radio: number;
}

export interface StepThreeForm {
  about: string;
}
