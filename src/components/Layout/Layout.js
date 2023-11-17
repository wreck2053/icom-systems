import { Outlet } from "react-router-dom";
import MyHeader from "../HomePage/MyHeader";

function Layout(){
    return(
        <>
            <MyHeader />
            <Outlet />
        </>
    );
}

export default Layout;