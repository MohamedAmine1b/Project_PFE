import {Routes, Route, useNavigate } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import Login from '../pages_principales/Login'
import { useEffect } from 'react'
import UpdateDatabase from '../pages_principales/gestionnaire/DatabasePage';
import FeuilleAbscene from '../pages_principales/formateur/FeuilleAbscene';
export default function App() {
    const navigate = useNavigate();
    const user = {
        role: 'formateur',
        isAuthenticated: true,
    }
    useEffect(() => {
        if (!user.isAuthenticated) {
            navigate("/login");
        }
    }, [user.isAuthenticated, navigate]);
    return (
            <Routes>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/update-database' element={<ProtectedRoute role={user.role} allowedRoles={['gestionnaire']}><UpdateDatabase/></ProtectedRoute>}/>
                <Route path='/feuille-abscence' element={<ProtectedRoute role={user.role} allowedRoles={['gestionnaire','formateur']}><FeuilleAbscene/></ProtectedRoute>}/>
                {/* Tous les routes ici avec meme code */}
            </Routes>
    )
}