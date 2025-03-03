import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar.jsx";

const MasterLayout = () => {
return (
<div className="flex min-h-screen">
    <div className=" text-white">
    <SideBar />
    </div>

    <div className="w-full">
    <Outlet />
    </div>
</div>
);
};

export default MasterLayout;
