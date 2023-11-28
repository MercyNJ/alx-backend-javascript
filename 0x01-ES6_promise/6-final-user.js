import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpUserPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  return Promise.allSettled([signUpUserPromise, uploadPhotoPromise]).then((values) => {
    const res = [];
    values.forEach((promiseResult) => {
      if (promiseResult.status === 'fulfilled') {
        res.push({ status: promiseResult.status, value: promiseResult.value });
      } else {
        res.push({ status: promiseResult.status, value: `${promiseResult.reason}` });
      }
    });
    return res;
  });
}
