import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loggedOut, updateUserInfo } from "../redux/user/slice";
import { useLazyGetUserInfoQuery } from "../redux/user/userAip";

export const UserHoc = ({ children }) => {
  const { isAuthorized } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [getUserInfo, { isFetching }] = useLazyGetUserInfoQuery();
  const onHandleGetUserInfo = () => {
    return new Promise((res, rej) => {
      try {
        res(getUserInfo().unwrap());
      } catch (error) {
        rej(error);
      }
    })
      .then((res) => {
        dispatch(updateUserInfo(res));
      })
      .catch((err) => dispatch(loggedOut()));
  };
  useEffect(() => {
    if (!isAuthorized && localStorage.getItem("access_token")) {
      onHandleGetUserInfo();
    }
  }, [isAuthorized]);
  return children;
};
