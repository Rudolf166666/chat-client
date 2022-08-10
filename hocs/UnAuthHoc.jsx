/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
/* eslint-disable-next-line react/display-name */
export const UnAuthHoc = (Wrapped) => (props) => {
  const { isAuthorized } = useSelector((state) => state.user);
  const router = useRouter();
  useEffect(() => {
    if (isAuthorized !== null && isAuthorized) router.replace("/chats");
  }, [isAuthorized]);
  return <Wrapped {...props} />;
};
