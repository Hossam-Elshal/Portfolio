import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar.jsx";

const MasterLayout = () => {
return (
    <>
        <div className="flex h-screen">
            <SideBar />
            <div className="w-full overflow-y-auto">
            <Outlet/>
            </div>
        </div>
    </>
);
};

export default MasterLayout;
