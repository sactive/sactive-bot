const WECHAT_ADAPTER_PREFIX = 'sbot-wechat-adapter:';
const WECHAT_URIS = {
  GETUUID: 'https://login.wx.qq.com/jslogin',
  GETQRCODE: 'https://login.weixin.qq.com/qrcode',
  WAITLOGIN: 'https://login.weixin.qq.com/cgi-bin/mmwebwx-bin/login'
};

const WECHAT_QRCODE_IMAGE_DIR = '/qrcodes';

module.exports = {
  WECHAT_ADAPTER_PREFIX,
  WECHAT_URIS,
  WECHAT_QRCODE_IMAGE_DIR
};