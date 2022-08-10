import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeNotification } from "../../redux/notifications/slice";
import { Notification } from "./Notification";

export const NotificationPortal = () => {
  const [NOTIFICATION_DOM_ELEMENT_ID] = useState("notification_container");
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const notifications = useSelector(
    (state) => state.notifications.notifications
  );

  const notificationDom = () =>
    document.getElementById(NOTIFICATION_DOM_ELEMENT_ID);

  const onHandleRemoveNotification = (id) => () => {
    dispatch(removeNotification(id));
  };

  useEffect(() => {
    const div = document.createElement("div");
    div.id = NOTIFICATION_DOM_ELEMENT_ID;
    document.getElementsByTagName("body")[0].prepend(div);
    div.style = "position:fixed;top:10px;right:10px;z-index:100";
    setIsLoaded(true);
  }, [NOTIFICATION_DOM_ELEMENT_ID]);

  return isLoaded ? (
    ReactDOM.createPortal(
      <>
        {notifications.map((el) => (
          <Notification
            color={el.color}
            key={el.createdAt}
            onClose={onHandleRemoveNotification(el.id)}
            message={el.message}
          />
        ))}
      </>,
      notificationDom()
    )
  ) : (
    <></>
  );
};
