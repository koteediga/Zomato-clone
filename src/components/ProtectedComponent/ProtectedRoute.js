
import Cookies from 'js-cookie';
import {Route, Navigate} from 'react-router-dom';
const ProtectedRoute=({children})=>{
    const jwtToken=Cookies.get('jwt_token');
    if(jwtToken===undefined){
        return <Navigate to="/login"/>
    }
    return children;
}

export {ProtectedRoute};

