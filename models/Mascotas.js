import mongoose from "mongoose";

const mascotasSchema = mongoose.Schema(
    {
        nombreMascota: {
            type: String, // tipo cadena
            required: true, // dato requerido
            trim: true // borra espacios
        },
        edadMascota: {
            type: Number,
            required: false,
            trim: true
        },
        diagnostico: {
            type: String,
            required: true,
            trim: true
        }
    },
    {
        timestamps: true,
    }
)

const Mascota = mongoose.model('Mascota', mascotasSchema);

export {
    Mascota
}