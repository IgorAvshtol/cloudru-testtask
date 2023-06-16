import { createAsyncThunk } from '@reduxjs/toolkit';

import { SendData } from '@/interfaces';
import { instance } from '@/api';

export const sendUserData = createAsyncThunk<void, SendData>('sendData', async (data: SendData) => {
  const response = await instance.post('', data);
  return response.data;
});
