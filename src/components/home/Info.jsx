import React from "react";
// 导入css
import './Info.css'
// 导入semanticui组件库
import { Tab, Item, Icon } from "semantic-ui-react";

class Info extends React.Component {
  render() {
    const panes = [
      {
        menuItem: '资讯', render: () => <Tab.Pane>
          {/* <RecoMessage /> */}
          < Message />
        </Tab.Pane>
      },
      {
        menuItem: '头条', render: () => <Tab.Pane>
          {/* <TopMessage /> */}
          < Message />
        </Tab.Pane>
      },
      {
        menuItem: '问答', render: () => <Tab.Pane>
          <AskAnswer />
        </Tab.Pane>
      },
    ]
    return (
      <div className="find-container">
        <div className="find-topbar">咨询</div>
        <div className="find-content">
          <Tab panes={panes} />
        </div>
      </div>
    )
  }
}
export default Info

// 定义Message组件
function Message() {
  return (
    <Item.Group unstackable>
      <Item >
        <Item.Image size='small' src='http://47.96.21.88:8086/public/1.png' />
        <Item.Content verticalAlign='middle'>
          <Item.Header className='info-title'>半年销售业绩</Item.Header>
          <Item.Meta>
            <span className='price'>$1200</span>
            <span className='stay'>1 Month</span>
          </Item.Meta>
        </Item.Content>
      </Item>
    </Item.Group>
  )
}
function AskAnswer() {
  return (
    <ul className='info-ask-list'>
      <li>
        <div className='title'>
          <span className='cate'>
            <Icon color='green' name='users' size='small' />
            思维
          </span>
          <span>
            你好你好你好你好你好你好你好你好你好你好你好你好
          </span>
        </div>
        <div className='user'>
          <Icon circular name='users' size='mini' />
          张三的回答
          </div>
        <div className="info">
          你好你好你好你好你好你好你好你好你好你好你好你好
        </div>
        <div className="tag">
          <span >你好X</span>
          <span >你好X</span>
          <span >你好X</span>
          <span>123个回答</span>
        </div>
      </li>
    </ul>
  )
}