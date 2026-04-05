import { Outlet } from "react-router-dom";
import Sidebar from "../HomePage/Sidebar";

const Root = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className=" w-full">
                <Outlet />
            </div>
        </div>
    );
};

export default Root;