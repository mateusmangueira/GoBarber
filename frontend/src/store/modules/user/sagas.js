import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;

    const profile = Object.assign(
      { name, email },
      rest.oldPassword ? rest : {}
    );

    const response = yield call(api.put, 'users', profile);

    yield put(updateProfileSuccess(response.data));

    toast.success('Seu perfil foi atualizado com sucesso!');

  } catch (error) {
    yield put(updateProfileFailure());
    toast.error('Error ao atualizar seu perfil');
  }
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)
]);
