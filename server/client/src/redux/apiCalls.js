import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import axios from "axios";

export const login = async (dispatch, user) => {
  dispatch(loginStart());

  try {
    const res = await axios.post(
      "https://boardmern.herokuapp.com/api/auth/login",
      user
    );
    dispatch(loginSuccess(res.data));
    console.log(user);
  } catch (error) {
    // dispatch(loginFailure(error));
    console.log(error.message);
  }
};
