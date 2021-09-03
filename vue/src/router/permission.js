import router from './router'
router.beforeEach((to, from, next) => {
    // determine if there has token
    /* has token*/
    // let devUrl = `${process.env.VUE_APP_PUBLIC_PATH}:9999/index.html#/`
    // let prodUrl = `${location.protocol}//${location.host}${process.env.VUE_APP_PUBLIC_PATH}index.html#/`
    // if (process.env.VUE_APP_MODE === 'development') {
    //   location.href = devUrl
    // } else {
    //   location.href = prodUrl
    // }
    let url = `${process.env.VUE_APP_PUBLIC_PATH}:9999/index.html#/`
    console.error(url)
    location.href = url
})