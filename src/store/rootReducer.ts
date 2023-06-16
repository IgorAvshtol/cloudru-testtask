import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HomePageForm, RootState, SexField, StepOneForm, StepThreeForm, StepTwoForm } from '@interfaces/index.ts';
import { sendUserData } from '@store/rootThunk.ts';

export const initialState: RootState = {
  currentStep: 0,
  showSuccessModal: false,
  showErrorModal: false,
  loading: false,
  phone: '',
  email: '',
  nickname: '',
  name: '',
  surname: '',
  sex: SexField.MAN,
  advantages: [],
  checkbox: [],
  radio: 0,
  about: '',
};

export const rootReducer = createSlice({
  name: 'rootReducer',
  initialState,
  reducers: {
    setDataFromHomePage: (state, action: PayloadAction<HomePageForm>) => {
      state.phone = action.payload.phone;
      state.email = action.payload.email;
    },
    setDataFromStepOnePage: (state, action: PayloadAction<StepOneForm>) => {
      state.nickname = action.payload.nickname;
      state.name = action.payload.name;
      state.surname = action.payload.surname;
      state.sex = action.payload.sex;
    },
    setDataFromStepTwoPage: (state, action: PayloadAction<StepTwoForm>) => {
      state.advantages = action.payload.advantages.map(obj => obj['name' as any]);
      state.checkbox = action.payload.checkbox;
      state.radio = action.payload.radio;
    },
    setDataFromStepThreePage: (state, action: PayloadAction<StepThreeForm>) => {
      state.about = action.payload.about;
    },
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
    closeSuccessModal: (state) => {
      state.showSuccessModal = false;
    },
    closeErrorModal: (state) => {
      state.showErrorModal = false;
    },
  },
  extraReducers: (builder) => {
    builder
        .addCase(sendUserData.pending, (state) => {
          state.loading = true;
        })
        .addCase(
            sendUserData.fulfilled.type,
            (state) => {
              state.showSuccessModal = true;
              state.loading = false;
            },
        )
        .addCase(sendUserData.rejected, (state) => {
          state.showErrorModal = true;
          state.loading = false;
        });
  },
});

export const {
  setDataFromHomePage,
  setDataFromStepOnePage,
  setCurrentStep,
  setDataFromStepTwoPage,
  setDataFromStepThreePage,
  closeSuccessModal,
  closeErrorModal
} = rootReducer.actions;
