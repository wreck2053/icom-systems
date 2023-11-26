import { Outlet } from "react-router-dom";
import MyHeader from "../HomePage/MyHeader";
import MyFooter from "../HomePage/MyFooter";

function Layout() {
  return (
    <>
      <MyHeader />
      <Outlet />
      <MyFooter />
    </>
  );
}

export default Layout;
