import React from 'react';

import {Redirect} from 'react-router-dom'
class Login extends React.Component{
    constructor(){
        super()
        this.state={
            redirect:false,
        }
    }

    componentWillMount(){
        var storage = window.localStorage
        if(storage.getItem("name")&&storage.getItem("mima")){
            alert("已登录")
            this.setState({redirect:true})
        }
    }
    
    
    clickEvent = () => {
        var storage = window.localStorage;
        let x = document.getElementById('zh').value;
        let y = document.getElementById('mm').value;
        storage.setItem("name",x);
        storage.setItem("mima",y);
        this.props.history.push("/me")
        // let a = document.getElementById('zh').value === storage.getItem("name");
        // let b = document.getElementById('mm').value === storage.getItem("mima");
        // if( a && b === true){
        //     this.props.history.push("/me")
        // }else{
        //     this.props.history.push("/unlogin")
        // }
    }
    
    render(){
        if(this.state.redirect === true){
            return <Redirect to="/"></Redirect>
        }
        return(
            <div>
                    <h1>登录</h1>
                    账号：<br/>
                    <input type="text" name="name" id="zh"></input><br/>
                    密码：<br/>
                    <input type="password" name="password" id="mm"></input><br/>
                    <button type="submit" onClick={this.clickEvent}>登录</button>
            </div>
            
        )
    }
}
export default Login