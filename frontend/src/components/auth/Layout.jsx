import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <div className="flex min-h-screen w-full">
            <div className="hidden lg:flex items-center justify-center bg-black w-1/2">
                <h1 className="text-white text-4xl tracking-tight">Welcome to Rabbit.
                </h1>
            </div>
            
            <div className="w-full border border-red-500 flex justify-center items-center">
            <Outlet />
            </div>
        </div>
    );
};

export default AuthLayout;