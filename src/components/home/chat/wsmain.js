import IMEvent from './IMEvent.js'
import IMClient from './IMClient.js'
import DataPacket from './DataPacket.js'
// import config from '../../common.js';

// 用来处理服务器进行通讯的js文件
const handle = (currentUser, handleMsg) => {
  const client = new IMClient('ws://127.0.0.1:8087');
  // 发送消息
  client.addEventListener(IMEvent.MSG_TEXT_SEND, data => {
    let dataPacket = new DataPacket({
      type: IMEvent.MSG_TEXT_SEND,
      content: data
    })
    client.sendDataPacket(dataPacket)
  })
  // 接收消息
  client.addEventListener(IMEvent.MSG_TEXT_REC, data => {
    handleMsg(data)
  })
  // 注册身份
  client.addEventListener(IMEvent.CONNECTED, () => {
    let dataPacket = new DataPacket({
      type: IMEvent.USER_REG,
      content: currentUser
    })
    client.sendDataPacket(dataPacket)
    console.log('success')
  })
  client.connect();
  return client;
}
export default handle;
