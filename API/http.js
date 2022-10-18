import axios from "axios";
const APIKey = "AIzaSyD2rQcy55mrMvQgnmVkLMuwnh0zN65IPm8";

const authications = async (mode, email, password) => {
  const res = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${APIKey}`,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );

  return res.data.idToken;
};

export const createUser = (email, password) => {
  return authications("signUp", email, password);
};

export const loginUser = (email, password) => {
  return authications("signInWithPassword", email, password);
};
