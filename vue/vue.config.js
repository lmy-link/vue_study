
const port = 9999
var puPath = ''
if(process.env.NODE_ENV === 'development'){
  puPath = `${process.env.VUE_APP_PUBLIC_PATH}:${port}/`
} else {
  puPath = `${process.env.VUE_APP_PUBLIC_PATH}:${port}/`
}
console.log(process.env.NODE_ENV)
// 根据当前环境动态判断入口 
function func(val){
  if(val == 'user'){
    return {
      user: {
        // page 的入口
        entry: 'src/USER/user.js',
        // 模板来源
        template: 'public/user.html',
        // 在 dist/index.html 的输出
        filename: 'user.html',
        // 当使用 title 选项时，
        // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
        title: 'User Page',
        // 在这个页面中包含的块，默认情况下会包含
        // 提取出来的通用 chunk 和 vendor chunk。
        chunks: ['chunk-vendors', 'chunk-common', 'user']
      },
    }
  } else {
    return {
      index: {
        // page 的入口
        entry: 'src/App/main.js',
        // 模板来源
        template: 'public/index.html',
        // 在 dist/index.html 的输出
        filename: 'index.html',
        // 当使用 title 选项时，
        // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
        title: 'Index Page',
        // 在这个页面中包含的块，默认情况下会包含
        // 提取出来的通用 chunk 和 vendor chunk。
        chunks: ['chunk-vendors', 'chunk-common', 'index']
      },
      // 当使用只有入口的字符串格式时，
      // 模板会被推导为 `public/subpage.html`
      // 并且如果找不到的话，就回退到 `public/index.html`。
      // 输出文件名会被推导为 `subpage.html`。
      // subpage: 'src/subpage/main.js'
      user: {
        // page 的入口
        entry: 'src/USER/user.js',
        // 模板来源
        template: 'public/user.html',
        // 在 dist/index.html 的输出
        filename: 'user.html',
        // 当使用 title 选项时，
        // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
        title: 'User Page',
        // 在这个页面中包含的块，默认情况下会包含
        // 提取出来的通用 chunk 和 vendor chunk。
        chunks: ['chunk-vendors', 'chunk-common', 'user']
      },
    }
  }
}
module.exports = {
  // 选项...
  publicPath: puPath,
  outputDir: 'Page', //打包后输出的文件名字
  assetsDir: 'static', // 静态资源文件夹的名字
  // WEBPACK 配置
  devServer: {
    // 所有 webpack-dev-server 的选项都支持
    open: true, // 项目启动时是否直接打开浏览器
    port,  //更改默认的端口号
    index: process.env.VUE_APP_USER == 'user'?'user.html':'index.html', // 多页面入口下，配置项目默认启动的入口
    historyApiFallback: {
      rewrites: [
        {
          from: /.*/g,
          to: '/index.html'
        },
        {
          from: /.*/g,
          to: '/public.html'
        },
      ]
    },
    // historyApiFallback: true, //使用Html5 Hisstory API 时,index.html可能必须提供页面来代替任何404响应
  },
  // 页面入口配置
  pages: func(process.env.VUE_APP_USER)
}