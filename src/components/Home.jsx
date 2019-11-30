import React from "react";
import './Home.css';
// 导入cemanticui组件库
import { Grid, Icon } from "semantic-ui-react";
// 导入路由
import { NavLink, Switch, Route } from "react-router-dom";
// 引入路由组件
import Chat from './home/Chat';
import Info from './home/Info';
import Main from './home/Main';
import My from './home/My';

class Home extends React.Component {
  // 点标记语法
  render() {
    return (
      <div className="home">
        <div className="home_content">
          <Switch>
            <Route exact path="/home" component={Main}></Route>
            <Route path="/home/info" component={Info}></Route>
            <Route path="/home/chat" component={Chat}></Route>
            <Route path="/home/my" component={My}></Route>
          </Switch>
        </div>
        <div className="home_menu">
          <Grid>
            <Grid.Row columns={4}>
              <Grid.Column>
                <NavLink exact to="/home">
                  <Icon name="hospital"></Icon>
                  <p>主页</p>
                </NavLink>
              </Grid.Column>
              <Grid.Column>
                <NavLink to="/home/info">
                  <Icon name="paste"></Icon>
                  <p>咨询</p>
                </NavLink>

              </Grid.Column>
              <Grid.Column>
                <NavLink to="/home/chat">
                  <Icon name="envelope"></Icon>
                  <p>微聊</p>
                </NavLink>

              </Grid.Column>
              <Grid.Column>
                <NavLink to="/home/my">
                  <Icon name="user"></Icon>
                  <p>我的</p>
                </NavLink>

              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    )
  }
}


export default Home