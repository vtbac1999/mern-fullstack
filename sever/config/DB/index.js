const mongoose = require('mongoose')

async function connect (){
  try{  await mongoose.connect('mongodb+srv://vtbac123:pakpro123@cluster0.gdmo6.mongodb.net/tmdt?retryWrites=true&w=majority";',{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        console.log('ket noi db thanh cong')
}
        catch(error){
            console.log('ket noi db that bai')
        }    
}

   


module.exports = {connect}