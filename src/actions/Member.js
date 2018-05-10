import { Firebase, FirebaseRef } from '../lib/firebase';
import statusMessage from './status';

export const getMemberData = () => console.log('get memberData pressed');

const UserException = message => ({
  message,
  name: 'UserException',
});

export const signUp = (formData) => {
  const {
    email,
    password,
    password2,
    firstName,
    lastName,
  } = formData;
  return async (dispatch) => {
    if (!firstName) throw new UserException('missingFirstName');
    if (!lastName) throw new UserException('missingLastName');
    if (!email) throw new UserException('missingEmail');
    if (!password) throw new UserException('missingPassword');
    if (!password2) throw new UserException('missingPassword');
    if (password !== password2) throw new UserException('passwordsDontMatch');
    await statusMessage(dispatch, 'loading', true);

    try {
      const res = await Firebase.auth().createUserWithEmailAndPassword(email, password);
      if (res && res.uid) {
        try {
          const insertResponse = await FirebaseRef.child(`users/${res.uid}`).set({
            firstName,
            lastName,
            signedUp: Firebase.database.ServerValue.TIMESTAMP,
            lastLoggedIn: Firebase.database.ServerValue.TIMESTAMP,
          });
          await statusMessage(dispatch, 'loading', false);
        } catch (error) {
          throw (error);
        }
      }
    } catch (error) {
      throw error;
    }
  };
};

export const login = (formData) => {
  const {
    email,
    password,
  } = formData;

  return async (dispatch) => {
    const UID = (
      FirebaseRef
      && Firebase
      && Firebase.auth()
      && Firebase.auth().currentUser
      && Firebase.auth().currentUser.uid
    ) ? Firebase.auth().currentUser.uid : null;
    const ref = FirebaseRef.child(`users/${UID}`);
    ref.on('value', (snapshot) => {
      const userData = snapshot.val();
      console.log('user data', userData);
    });
  };
};
