const userController = require('../controllers/userControllers')


module.exports = (app)=>{
    app.post('/signup',userController.signup);
    app.post('/login', userController.loginUser);
}