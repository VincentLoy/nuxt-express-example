const express = require('express');
const proxy = require('http-proxy-middleware');
const Nuxt = require('nuxt');
const nuxtConfig = require('./config/nuxt.config');
const app = express();
const TOKEN = process.env.TOKEN;

new Nuxt(nuxtConfig).then((nuxt) => {
    let render = nuxt.render;
    let pro = proxy({
        target: process.env.PROXY_DOMAIN,
        changeOrigin: true,
        xfwd: true,
        headers: {
            'Authorization': `Token ${TOKEN}`,
            'X-Forwarded-For': '200.36.192.0' // MXN IP FOR EXAMPLE
        }
    });

    app.use('/v1', pro);
    app.use(render.bind(nuxt));

    app.listen(3000, function () {
        console.log('listening port 3000 my friend... http://localhost:3000')
    });
}).catch((error) => {
    console.log(error);
});
