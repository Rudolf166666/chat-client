/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
/* eslint-disable-next-line react/display-name */
export const AuthHoc = (Wrapped) => (props) => {
  const user = useSelector((state) => state.user);
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("access_token")) router.replace("/");
  }, [user]);
  return <Wrapped {...props} />;
};
