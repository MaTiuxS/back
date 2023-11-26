import mongoose from 'mongoose';

const conectarDB = async () => {

    try {
        const conecction = await mongoose.connect( process.env.MONGO_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
        });

        const url = `${conecction.connection.host}:${conecction.connection.port}`;
        console.log(`Mongo conectado en: ${url}`);
    } catch (error) {
        console.log(`error ${ error.message }`);
        process.exit(1);
    }
}

export default conectarDB;