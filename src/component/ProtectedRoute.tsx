import { FC, Component, ReactNode } from "react";
import { Route, Navigate } from "react-router-dom";

interface IProtect
{
    isLoggedId: boolean;
    children: ReactNode;
}

const ProtectedRoute: FC<IProtect> = ({ isLoggedId, children }) =>
{
    if (!isLoggedId)
    {
        return <Navigate to="/hello" replace />;
    } else
    {
        return <>{children}</>;
    }
}

export default ProtectedRoute;