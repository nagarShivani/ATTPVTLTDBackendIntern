const mongoose = require('mongoose');


mongoose.connect(`mongodb://${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`).then(()=>{
    console.log("Database connected successfully")
})  