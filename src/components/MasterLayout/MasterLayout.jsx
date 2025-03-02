import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar.jsx";

const MasterLayout = () => {
return (
<div className="flex min-h-screen">
    <div className="lg:w-2/12 bg-neutral-800 text-white p-4">
    <SideBar />
    </div>

    <div className="w-full lg:w-10/12">
    <Outlet />
    </div>
</div>
);
};

export default MasterLayout;
