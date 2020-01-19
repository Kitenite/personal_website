const express = require('express')
const next = require('next')
const proxy = require('express-http-proxy');
const wakeUpDyno = require("./utils/wakeDyno.js"); // my module!

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const dyno_url = "https://madebykiet.herokuapp.com"; // the url of your dyno

app.prepare().then(() => {
  const server = express()
  var my_proxy = proxy('54.197.197.40')

  server.use('/api', my_proxy)
  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
    wakeUpDyno(dyno_url);

  })
})
