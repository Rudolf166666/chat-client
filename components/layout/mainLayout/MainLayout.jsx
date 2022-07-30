import { useRouter } from "next/router";
import { useMemo } from "react";
import { Navbar } from "../../navbar";
import { PageWrapper, Wrapper } from "./MainLayout.styled";

export const MainLayout = ({ children }) => {
  const routesWithoutNavbar = ["/"];
  const router = useRouter();
  const content = useMemo(() => {
    if (routesWithoutNavbar.includes(router.pathname)) {
      return children;
    }
    return (
      <PageWrapper>
        <Navbar />
        {children}
      </PageWrapper>
    );
  }, [router.pathname]);
  return <Wrapper>{content}</Wrapper>;
};
