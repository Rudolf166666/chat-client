import { useDispatch } from "react-redux";
import colors from "../../constants/colors";
import { addNotification } from "../../redux/notifications/slice";

export const useNotification = () => {
  const MESSAGE_TYPES = {
    WARNING: colors.warning,
    SUCCESS: colors.success,
    ERROR: colors.error,
  };
  const dispatch = useDispatch();
  const onHandleAddNotification = (message, type = MESSAGE_TYPES.SUCCESS) => {
    dispatch(
      addNotification({
        message,
        createdAt: Date.now(),
        id: Date.now(),
        color: type,
      })
    );
  };
  return { openNotification: onHandleAddNotification, MESSAGE_TYPES };
};
