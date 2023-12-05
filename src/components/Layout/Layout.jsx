import { Outlet } from "react-router-dom";
import MyHeader from "../HomePage/MyHeader";
import MyFooter from "../HomePage/MyFooter";
import "./Layout.css";

function Layout() {
  return (
    <>
      <MyHeader />
      <div id="main-content">
        <Outlet />
      </div>

      <MyFooter />
    </>
  );
}

export default Layout;
