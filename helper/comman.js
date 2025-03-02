const jwt = require('jsonwebtoken')

module.exports ={

    getToken: async (payload) => {
        var token =  jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.EXPIRATION_TIME })
        return token;
      },


    }