import React from "react";
// 引入 Login样式
import './Login.css'
// 引入semantic-ui的组件,按序加载
// import { Button, Form, Input } from "semantic-ui-react";
import { Form } from "semantic-ui-react";
// 导入axios
// import axios from "axios";
// 引入withRouter实现编程式导航
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
  // 构造函数
  constructor(props) {
    super(props)
    this.state = {
      uname: '',
      pwd: ''
    }
  }
  // 方法实现，处理受控组件
  handleChange = (e) => {
    let { name, value } = e.target
    // console.log(name, value);
    this.setState({
      [name]: value
    })
  }
  // 登陆方法
  login = async (e) => {
    e.preventDefault()
    // console.log('222');
    // 发送请求
    let { history } = this.props
    console.log(history);

    let { uname, pwd } = this.state
    let res = await this.axios.post('users/login', {
      uname,
      pwd
    })
    // await 必须在函数async中使用，await可以在promise对象前使用，
    // await会暂停async的函数执行 会等待promise结果
    // console.log(res);
    let { meta, data } = res
    if (meta.status === 200) {
      // 1. 把token保存到浏览器本地
      localStorage.setItem('myToken', data.token)
      // 2.跳转到home去
      history.push('/home')
      // console.log("登录成功了,请跳转到主页去")
    } else {
      console.log(meta.msg);

    }



  }
  // 组件渲染方法
  render() {
    return (
      <div className="login_contanier">
        <div className="login_title">登录</div>
        <div className="login_form">
          <Form action="" onSubmit={this.login}>
            {/* Form表示整个表单，Field表示表单的一个字段 */}
            <Form.Field >
              <Form.Input
                size="big"
                icon="user"
                iconPosition="left"
                placeholder="请输入用户名..."
                name="uname"
                autoComplete="off"
                value={this.state.uname}
                onChange={this.handleChange}
                required
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                size="big"
                icon="lock"
                iconPosition="left"
                placeholder="请输入密码..."
                name="pwd"
                autoComplete="off"
                value={this.state.pwd}
                onChange={this.handleChange}
                required
              />
            </Form.Field>
            <Form.Field>
              <Form.Button type='submit' fluid positive size="big">登录</Form.Button>
            </Form.Field>
          </Form>
        </div>
      </div>
    )
  }
}
export default Login