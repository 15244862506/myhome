import React from "react";
import Login from "./components/Login";
import Home from "./components/Home";

// 导入路由
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        {/* 配置路由 */}

        {/* <ul>
            <li>
              <Link to="/login">登录</Link>
            </li>
            <li>
              <Link to="/home">首页</Link>
            </li>
          </ul> */}
        <Switch>
          <Redirect exact path="/" to="home" ></Redirect>
          <Route path="/login" component={Login} ></Route>
          <Route path="/home" component={Home} ></Route>
        </Switch>

      </BrowserRouter>
    )
  }
}
export default App