const mongoose = require('mongoose')

const Connect = (url)=>{
    mongoose.connect(url)
    .then(()=>console.log("DB Connected"))
    .catch((e)=>console.log(e))
}
module.exports = Connect