import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface IProtect {
    isLoggedIn: boolean;
    children: ReactNode;
}

const ProtectedRoute: FC<IProtect> = ({ isLoggedIn, children }) => {
    if (!isLoggedIn) {
        return <Navigate to="/hello" replace />;
    } 
    return <>(children)</>;
}

export { ProtectedRoute }