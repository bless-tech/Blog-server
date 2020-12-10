const User = require("../models/user.js")
const bcrypt = require("bcrypt")

const authCtrl = {}


authCtrl.signup = async (request,response) => {
    const {firstName, lastName, email, password} = request.body;

    const user = new User({
         firstName: firstName,
         lastName: lastName,
         email: email,
         password: password
    })

    try{
        user.password = bcrypt.hashSync(user.password, 10)
        const newUser = await user.save()
        response.send({
            message: "User created successful", newUser
    })
        
    } 
       catch (exeption) {
           console.log(exeption)
        response.status(500).send({error: "Internal Server error"})
    }
}



module.exports = authCtrl