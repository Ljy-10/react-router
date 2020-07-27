import React from 'react';
import Links from './Links.js'
import Login from './Login.js'
import Logout from './Logout.js'
import Success from './Success.js'
import PrivateRoute from './private.js'
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'


//hash模式
//history模式（配合后端使用）

 
// function Home(){
//     return(
//         <div>
//             <h1>admin首页</h1>
//         </div>
//     )
// }

// function Me(){
//     return(
//         <div>
//             <h1>admin个人中心</h1>
//         </div>
//     )
// }

// function Product(){
//     return(
//         <div>
//             <h1>admin产品</h1>
//         </div>
//     )
// }
//第一种，router组件可放在另一个组件中，通过组件调用完成路由功能
//也可以使用<link>加<route>标签实现，在router标签上可以设置basename用来设置根路径节点
//该属性会自动添加到该<router>中所有的路径的最前面
// function Product(){
//     return(
//         <Router>
//                     {/* <div className="nav">
//                         <Link to="/">Home</Link>
//                         <Link to="/product">Product</Link>
//                         <Link to="/me">个人中心</Link>
//                     </div> */}
//             <Route path="/admin" exact component={Home}></Route>
//             <Route path="/admin/product" component={Product}></Route>
//             <Route path="/admin/me" exact component={Me}></Route>
//         </Router>
//     )
// }

// class App extends React.Component{
//     render(){
//         return(
//             <div id="app">
//                 {/* <div>欢迎来到411</div> */}
//                 {/* let meObj = {pathname:"/me",search:"?username=admin",hash:"#ljy",state:{msg:'helloworld'}} */}
//                 <Router>
//                     <Route path="/" exact component={()=>(<div>首页</div>)}></Route>
//                     <Route path="/me" component={()=>(<div>me</div>)}></Route>
//                     <Route path="/product" component={()=>(<div>产品</div>)}></Route>
//                 </Router> 
                
//                 <Product></Product>

//             </div>
//         )
//     }
// }

//动态路由
// function News(props){
//     return(
//         <div>
//             新闻页，新闻id：{props.match.id}
//         </div>
//     )
// }

// class App extends React.Component{
//         render(){
//             let meObj = {
//                 pathname:"/me",//跳转的路径
//                 search:"?username=admin",//get请求的参数
//                 hash:"#ljy",//设置的HASH值
//                 state:{msg:'helloworld'}//传入的组件的数据
//             };
//             return(
//                 <div id="app">
//                     {/* <div>欢迎来到411</div> */}
//                     <Router>
//                         <div className="nav">
//                             <Link to="/">Home</Link>
//                             <Link to="/product">Product</Link>
//                             <Link to={meObj} replace>个人中心</Link>
//                             <Link to="/news/456789">新闻中心</Link>
//                         </div>
//                         <Route path="/" exact component={Home}></Route>
//                         <Route path="/product" component={Product}></Route>
//                         <Route path="/me" exact component={Me}></Route>
//                         <Route path="/news/:id" component={News}></Route>
//                     </Router>
    
//                 </div>
//             )
//         }
//     }


// function LoginInfo(props){
//     //props.loginState = 'success';
//     //props.loginState = 'fail';
//     if(props.location.state.loginState === 'success'){
//         return <Redirect to = "/admin"></Redirect>
//     }
//     else{
//         return <Redirect to="/login"></Redirect>
//     }
// }

// let FormCom = ()=>{
//     let pathObj = {
//         pathname:"/loginInfo",
//         state:{
//             loginState:'success'
//         }
//     }
//     return(
//         <div>
//             <h1>表单验证</h1>
//             <Link to={pathObj}>登录验证后页面</Link>
//         </div>
//     )
// }

// class ChildCom extends React.Component{
//     neirong ={
//         pathname:'/',
//         state:{
//         msg:"这是从组件childcom传送给首页的数据信息"
//     }}
//     render(){
//         return(
//         <div>
//             <button onClick = {this.clickEvent}>跳转到首页</button>
//         </div>
//         )
//     }
//     clickEvent=()=>{
//         console.log(this.props)
//         this.props.history.push(
//             {
//                 pathname:'/',
//                 state:{
//                 msg:"这是从组件childcom传送给首页的数据信息"
//                 }
//             }
//         )
//     }
// }

// class App extends React.Component{
//     render(){
//         return(
//             <div>
//                 <Router>
//                     <Switch>
//                     <Route path ="/" exact component={(props)=>{console.log(props);return (<h1>首页</h1>)}}></Route>
//                     <Route path ="/form" exact component={FormCom}></Route>
//                     <Route path ="/login" exact component={()=>(<h1>登录</h1>)}></Route>
//                     <Route path = "/loginInfo" exact component={LoginInfo}></Route>
//                     <Route path = "/admin" exact component={()=>(<h1>admin页面，登陆成功</h1>)}></Route>
//                     <Route path = "/abc" exact component={()=>(<h1>abc1页面，登陆成功</h1>)}></Route>
//                     <Route path = "/abc" exact component={()=>(<h1>abc2页面，登陆成功</h1>)}></Route>
//                     <Route path = "/child" component={ChildCom}></Route>
//                     </Switch>
//                 </Router>
//             </div>
//         )
//     }
// }

// export default App;

//登录页面，首页，登录之后进入的页面，不登陆进入的页面
//登录后返回到进入登陆之前的页面
//使用localstorage验证登录

    function Home(){
        return(
            <div>
                <h1>首页</h1>
            </div>
        )
    }
    
    

    function Product(){
        return(
            <div>
                <h1>商品页面</h1>
            </div>
        )
    }

    function News(){
        return(
            <div>
                <h1>新闻中心</h1>
            </div>
        )

    }

    function Sport(){
        return(
            <div>
                <h1>体育中心</h1>
            </div>
        )
    }

    
    
    function Fail(){
        return(
            <div>
                <h1>登陆失败</h1>
            </div>
        )
    }

    function Self(){
        
        return(
            <div>
                <h1>个人中心</h1>
            </div>
        )
    }

    
    

    class App extends React.Component{
        render(){  
            
            return(
                <div>
                    <Router>
                        <Links></Links>
                        <Route path = "/" ><Home /></Route>
                        <Route path = "/unlogin" ><Fail/></Route>
                        <Route path = "/logout" ><Logout /></Route>
                        <Route path = "/login" ><Login /></Route>
                        <Route path = "/me" exact component={Success}></Route>
                        <Route path = "/product" exact component={Product}></Route>
                        <Route path = "/news" exact component={News}></Route>
                        <Route path = "/sport" exact component={Sport}></Route>
                        <PrivateRoute path = "/self" exact component={Self}></PrivateRoute>
                    </Router>
                </div>
            )
        }
       
    }

export default App;