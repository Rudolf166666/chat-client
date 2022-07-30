import { MainLayout } from "../components/layout/mainLayout";
import "../styles/global.css";
function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <style jsx global>{`
        * {
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          scroll-behavior: smooth;
          box-sizing: border-box;
          margin: 0px;
          padding: 0px;
        }
        body {
          margin: 0px;
        }
        button {
          border: none;
          outline: none;
          cursor: pointer;
        }
      `}</style>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
