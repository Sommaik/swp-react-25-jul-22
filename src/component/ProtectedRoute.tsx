import { FC, Component, ReactNode } from "react";
import { Route, Navigate } from "react-router-dom";

interface IProtect
{
    isLoggedId: boolean;
    children: ReactNode;
}

const ProtectedRoute: FC<IProtect> = ({ isLoggedId, children }) =>
{
    let output;
    if (!isLoggedId)
    {
        output = <Navigate to="/hello" replace />;
    } else
    {
        output = <>{children}</>;
    }
    return output;
}

export default ProtectedRoute;