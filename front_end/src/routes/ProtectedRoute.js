import { Navigate } from "react-router-dom";
export default function ProtectedRoute({ children, role, allowedRoles }) {
    if (!allowedRoles.includes(role)) {
        return <Navigate to="/acueil" replace />;
    }
    return children
}