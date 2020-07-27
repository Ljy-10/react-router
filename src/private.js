import React from 'react';
import {Redirect} from 'react-router-dom';

class PrivateRoute extends React.Component{
    render(){
        var storage = window.localStorage
        var isLog = false;
        if(storage.getItem("name")&&storage.getItem("mima")){
            isLog = true
        }else{
            isLog = false
        }
        const {component:Component, ...props} = this.props.component
        return(
            isLog ? (<Component {...props}/>) : (<Redirect to={{pathname:"/login"}}></Redirect>)
        )
    }
}

export default PrivateRoute;

