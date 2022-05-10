import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRepuest } from "./../ResponseMethod";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRepuest.post("/auth/login", user);
    console.log(res.data);
    res.data && dispatch(loginSuccess(res.data));
  } catch (err) {
    // console.log(err);
    dispatch(loginFailure({ error: true }));
  }
};
