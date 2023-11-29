/* eslint-disable */
import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    let photo = await uploadPhoto();
    let user = await createUser();

    return Promise.resolve(
      { photo, user,}
    );
  } catch (e) {
    return Promise.resolve({
      photo: null,
      user: null,
    });
  }
}