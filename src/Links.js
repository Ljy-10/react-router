import React from 'react';
import {Link,withRouter} from 'react-router-dom'
function Links(){
    let str = null
    var storage = window.localStorage
    if(storage.getItem("name")&&storage.getItem("mima")){
        str = ' log'
    }else{
        str = ''
    }
    return(
    <div className="nav">
        <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/self" className={"unlog" + str}>个人中心</Link></li>
            <li><Link to="/login">登录</Link>&nbsp;&nbsp;&nbsp;<Link to="/logout" className={"unlog" + str}>退出登录</Link></li>
            <li><Link to="/product">商品</Link></li>
            <li><Link to="/news">新闻</Link></li>
            <li><Link to="/sport">体育</Link></li>
        </ul>
    </div>)
}

export default withRouter(Links)