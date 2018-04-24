export const getMemberData = () => console.log('get memberData pressed');

export const login = (formData) => {
  const {
    email,
    password,
  } = formData;
  console.log(email, password);
};
