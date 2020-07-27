import React from 'react';


class Success extends React.Component{
    componentDidMount(){
        window.setTimeout(()=>{
            this.props.history.go(-2)
        }, 3000)
        
    }

    render(){
        
        return(
            <div>
                <h1>登陆成功</h1>
                <h5>页面将在3秒后自动跳转至您登录前的页面</h5>
            </div>
        )
    }
}

export default Success