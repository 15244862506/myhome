import React from "react";
// 引入css文件
import "./Main.css";
// 导入semantic
import { Input } from "semantic-ui-react";
// 引入轮播图插件
import "react-image-gallery/styles/css/image-gallery.css";
// 导入轮播图组件
import ImageGallery from "react-image-gallery";
class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imageList: []
    }
  }
  // 页面加载完成。，需要发送ajax请求，获取轮播图数据
  async componentDidMount() {
    let res = await this.axios.post('homes/swipe', null, {
      // header: {
      //   Authorization: localStorage.getItem('myToken')
      // }
    })
    // console.log(res);
    let { meta, data } = res
    if (meta.status === 200) {
      this.setState({
        imageList: data.list
      })
    }

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
          {/* 轮播图 */}
          <ImageGallery
            items={this.state.imageList}
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
            showBullets={true}
          />
        </div>
      </div>
    )
  }
}
export default Main