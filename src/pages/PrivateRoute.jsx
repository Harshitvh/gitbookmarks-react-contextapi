import React,{useContext} from 'react'
import {Route,Redirect} from 'react-router-dom'
import AuthContext from './../context/Auth/AuthContext'

const PrivateRoute = ({component:Component,...rest}) => {
    const authContext = useContext(AuthContext);
    const {isAuth} = authContext;
    return (
        <div>
            <Route {...rest}
            render ={ (props)=> (!isAuth) ?
                (<Redirect to ="/"></Redirect>) : (<Component{...props}></Component>)
            }></Route>
            </div>
    )
}

export default PrivateRoute;