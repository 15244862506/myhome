import React from "react";
// 引入css文件
import "./Main.css";
// 导入semantic
import { Input, Grid, Icon, Menu, Item, Button, Dimmer, Loader } from "semantic-ui-react";
// 引入轮播图插件
import "react-image-gallery/styles/css/image-gallery.css";
// 导入轮播图组件
import ImageGallery from "react-image-gallery";
class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // 放置轮播图模块组件数据
      imageList: [],
      // 放置菜单模块组件数据
      menuList: [],
      // 放置咨询模块组件数据
      infoList: [],
      // 放置问答模块组件数据
      faqList: [],
      // 放置房屋模块组件数据
      houseList: []
    }
  }
  // 页面加载完成。，需要发送ajax请求，获取轮播图数据
  async componentDidMount() {
    this.getImageList()
    this.getMenuList()
    this.getInfoList()
    this.getFaqList()
    this.getHouseList()
  }
  // // 获取轮播图数据
  // getImageList = async () => {
  //   let res = await this.axios.post('homes/swipe', null, {
  //     // header: {
  //     //   Authorization: localStorage.getItem('myToken')
  //     // }
  //   })
  //   // console.log(res);
  //   let { meta, data } = res
  //   if (meta.status === 200) {
  //     this.setState({
  //       imageList: data.list
  //     })
  //   }
  // }
  // // 获取菜单数据
  // getMenuList = async () => {
  //   let res = await this.axios.post('homes/menu')
  //   let { meta, data } = res
  //   // console.log(res);
  //   if (meta.status === 200) {
  //     this.setState({
  //       menuList: data.list
  //     })
  //   }
  // }
  // // 获取咨询数据
  // getInfoList = async () => {
  //   let res = await this.axios.post('homes/info')
  //   let { meta, data } = res
  //   // console.log(res);
  //   if (meta.status === 200) {
  //     this.setState({
  //       infoList: data.list
  //     })
  //   }
  // }
  // // 获取问答数据
  // getFaqList = async () => {
  //   let res = await this.axios.post('homes/faq')
  //   let { meta, data } = res
  //   // console.log(res);
  //   if (meta.status === 200) {
  //     this.setState({
  //       faqList: data.list
  //     })
  //   }
  // }
  // // 获取问答数据
  // getHouseList = async () => {
  //   let res = await this.axios.post('homes/house')
  //   let { meta, data } = res
  //   if (meta.status === 200) {
  //     this.setState({
  //       houseList: data.list
  //     })
  //   }
  // }
  doRequest = (url, dataName) => {
    return this.axios.post(url).then(res => {
      let { meta, data } = res
      if (meta.status === 200) {
        this.setState({
          [dataName]: data.list
        })
      }
    })
  }
  // 页面加载完成，需要发送ajax请求，获取轮播图数据
  async componentDidMount() {
    // Promise.all()
    await Promise.all([
      this.doRequest('homes/swipe', 'imageList'),
      this.doRequest('homes/menu', 'menuList'),
      this.doRequest('homes/info', 'infoList'),
      this.doRequest('homes/faq', 'faqList'),
      this.doRequest('homes/house', 'houseList')
    ])
    this.setState({
      loading: false
    })
  }

  render() {
    return (
      <div className="main">
        <div className="search">
          <Input
            fluid
            icon={{ name: 'search', circular: true, link: true }}
            placeholder="搜房源..."
          />
        </div>
        <div className="content">
          <Dimmer inverted active={this.state.loading} page>
            <Loader>Loading</Loader>
          </Dimmer>
          {/* 轮播图 */}
          <ImageGallery
            items={this.state.imageList}
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
            showBullets={true}
          />
          {/* 菜单部分 */}
          <MenuList data={this.state.menuList}></MenuList>
          {/* 好客咨询 */}
          <InfoList data={this.state.infoList}></InfoList>
          {/* 好客问答 */}
          <FaqList data={this.state.faqList}></FaqList>
          {/* 房屋信息 */}
          <HouseList data={this.state.houseList}></HouseList>
        </div>
      </div>
    )
  }
}
export default Main
// 直接解构参数
function MenuList({ data }) {
  // 定义菜单组件，渲染菜单数据
  // let { data } = props
  return (
    <Grid className="menu" divided padded>
      <Grid.Row columns={4}>
        {data.map(item => (
          <Grid.Column key={item.id}>
            <div className="home-menu-item">
              <Icon name="home" size="big" />
            </div>
            <div>{item.menu_name}</div>
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  )
}
// 好客资讯组件
function InfoList({ data }) {
  return (
    <div className="home-msg">
      <Item.Group unstackable>
        <Item className="home-msg-img">
          <Item.Image
            size="tiny"
            src={'http://47.96.21.88:8086/public/zixun.png'}
          />
          <Item.Content verticalAlign="top">
            {data.map(item => (
              <Item.Header key={item.id}>
                <span>限购 ●</span>
                <span>{item.info_title}</span>
              </Item.Header>
            ))}
            <div className="home-msg-more">
              <Icon name="angle right" size="big" />
            </div>
          </Item.Content>
        </Item>
      </Item.Group>
    </div>
  )
}

// 好客问答组件
function FaqList({ data }) {
  return (
    <div className="home-ask">
      <div className="home-ask-title">好客问答</div>
      <ul>
        {data.map(item => (
          <li key={item.question_id}>
            <div>
              <Icon color="green" name="question circle outline" />
              <span>{item.question_name}</span>
            </div>
            <div>
              {item.question_tag.split(',').map(tag => (
                <Button key={tag} basic color="green" size="mini">
                  {tag}
                </Button>
              ))}
              <div>
                {item.atime} ● <Icon name="comment alternate outline" />{' '}
                {item.qnum}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

// 房屋组件
function HouseList({ data }) {
  let newHouse = []
  let oldHouse = []
  let hireHouse = []
  data.forEach(item => {
    let temp = (
      <Item key={item.id}>
        <Item.Image src="http://47.96.21.88:8086/public/home.png" />
        <Item.Content>
          <Item.Header>{item.home_name}</Item.Header>
          <Item.Meta>
            <span className="cinema">{item.home_desc}</span>
          </Item.Meta>
          <Item.Description>
            {item.home_tags.split(',').map(tag => (
              <Button key={tag} basic color="green" size="mini">
                {tag}
              </Button>
            ))}
          </Item.Description>
          <Item.Description>{item.home_price}</Item.Description>
        </Item.Content>
      </Item>
    )
    if (item.home_type === 1) {
      newHouse.push(temp)
    } else if (item.home_type === 2) {
      oldHouse.push(temp)
    } else {
      hireHouse.push(temp)
    }
  })
  // console.log(data)
  return (
    <div>
      <div>
        <div className="home-hire-title">最新开盘</div>
        <Item.Group divided unstackable>
          {newHouse}
        </Item.Group>
      </div>
      <div>
        <div className="home-hire-title">二手精选</div>
        <Item.Group divided unstackable>
          {oldHouse}
        </Item.Group>
      </div>
      <div>
        <div className="home-hire-title">组一个家</div>
        <Item.Group divided unstackable>
          {hireHouse}
        </Item.Group>
      </div>
    </div>
  )
}
