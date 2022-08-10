import { HomeLayout } from "../components/layout/homeLayout";
import { UnAuthHoc } from "../hocs/UnAuthHoc";
function Home() {
  return <HomeLayout />;
}
export default UnAuthHoc(Home);
