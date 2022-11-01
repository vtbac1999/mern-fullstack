const homeRouter = require('./home')
const blogRouter = require('./blog')
const cartRouter = require('./cart')
const showcartRouter = require('./showcart')
const contactRouter = require('./contact')
const shopgirdRouter = require('./shopgird')
const shopdetailRouter = require('./shopdetail')
const loginRouter = require('./login')
const succesRouter = require('./succes')
const payRouter = require('./pay')
const orderRouter = require('./order')
const registerRouter = require('./register')
function route (app){
   app.use('/succes', succesRouter)
   app.use('/blog', blogRouter)
   app.use('/pay', payRouter)
   app.use('/order', orderRouter)
   app.use('/login', loginRouter)
   app.use('/register', registerRouter)
   app.post('/cart', cartRouter)
   app.post('/showcart', showcartRouter)
   app.use('/shopdetail', shopdetailRouter)
   app.use('/contact', contactRouter)
   app.use('/shopgird', shopgirdRouter)
   app.use('/home', homeRouter)
}
module.exports = route