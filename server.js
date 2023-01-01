const express = require('express'); 
const app = express(); 
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));//used to access information coming in form
app.use(express.json()) //used to read json input
app.listen(3000);

app.set('view engine', 'ejs'); 

app.get('/', logger, (req, res) => {
    res.render("index", {name: 'Abuthakir'});
})

const userRouter = require('./routes/users');
app.use('/users', userRouter)

function logger(req, res, next) {
    console.log('req.originalUrl', req.originalUrl);
    next()
}
