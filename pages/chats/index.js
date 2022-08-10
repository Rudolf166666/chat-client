import { ChatLayout } from "../../components/layout/chatLayout";
import { AuthHoc } from "../../hocs/AuthHoc";

const Chat = () => {
  return <ChatLayout />;
};
export default AuthHoc(Chat);
