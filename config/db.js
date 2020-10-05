const mongoose = require('mongoose')


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            process.env.MONGODB_URI || 'mongodb://localhost:27017/miam',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true
            })
        console.log(' DB connected : ' + conn.connection.host)
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}
module.exports = connectDB