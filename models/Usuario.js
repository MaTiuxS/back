import mongoose from "mongoose";

const usuarioSchema = mongoose.Schema({
        nombre: {
            type: String,
            required: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true
        }
    },
    {
        timestamps: true,
    }
);



usuarioSchema.methods.comprobarPassword = async function(passwordFormulario){
    return (usuarioSchema.password === passwordFormulario ) ? true : false;
};

const Usuario = mongoose.model('Usuario', usuarioSchema);


export default Usuario;