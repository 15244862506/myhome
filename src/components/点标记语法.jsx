import React from "react";

class Home extends React.Component {
  // 点标记语法
  render() {
    return (
      <div>
        <Form>
          <Form.Input />
          <Form.Button />
        </Form>
      </div>
    )
  }
}

class Form extends React.Component {
  render() {
    return (
      <div>
        我的一个form组件
        {this.props.children}
      </div>
    )
  }
  // 可以在组件内部定义组件
  static Input = () => {
    return <div>我是一个Input组件</div>
  }
  static Button() {
    return <div>我是一个Button组件</div>
  }
}

export default Home