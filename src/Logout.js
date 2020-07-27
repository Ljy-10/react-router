import React from 'react';


class Logout extends React.Component{
    componentDidMount(){
        var storage = window.localStorage
        storage.clear()
        this.props.history.push('/')
    }
    
    render(){
        
        return(
            <div>
                <h1>退出登录</h1>
            </div>
        )
    }
}
export default Logout