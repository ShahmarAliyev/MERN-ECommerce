import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import axios from "axios";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  const config = {
    headers: {
      token: `Bearer ${process.env.REACT_APP_TOKEN}`,
    },
  };

  const bodyParameters = {
    key: "value",
  };
  try {
    console.log(user);
    const res = await axios.post(
      "https://mern-board-ecommerce.herokuapp.com/api/auth/login",
      user,
      bodyParameters,
      config
    );
    console.log(res);
    dispatch(loginSuccess(res.data));
    console.log(user);
  } catch (error) {
    dispatch(loginFailure());
  }
};
