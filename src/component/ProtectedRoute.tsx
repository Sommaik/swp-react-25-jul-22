import { FC, ReactNode } from 'react';
import { Navigate, Route } from 'react-router-dom';

interface IProtect {
    isLoggedIn: boolean;
    children: ReactNode;
}

// function ProtectedRoute ({ component: Component, ...restProps }) {
//     const isAuthenticated = localStorage.getItem("isAuthenticated");
//     console.log("this", isAuthenticated);

//     return (
//         <Route
//             {...restProps}
//             render={(props) =>
//                 isAuthenticated ? <Component {...props} /> : <Navigate to="/" />
//             }
//         />
//     );
// }

const ProtectedRoute: FC<IProtect> = ({ isLoggedIn, children }) => {
    if(!isLoggedIn) {
        return <Navigate to="/hello" replace />;
    }
    return <>{children}</>
};

export default ProtectedRoute;