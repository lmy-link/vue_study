
const port = 9999
var puPath = ''
if(process.env.NODE_ENV === 'development'){
  puPath = `${process.env.VUE_APP_PUBLIC_PATH}:${port}/`
}
module.exports = {
  // 选项...
  publicPath: puPath,
  devServer: {
    // 所有 webpack-dev-server 的选项都支持
    open: true, // 项目启动时是否直接打开浏览器
    port  //更改默认的端口号
  },
}