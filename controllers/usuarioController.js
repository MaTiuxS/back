import Usuario from "../models/Usuario.js";



const registrar = async(req, res) => {
    const { email } = req.body;
    const usuarioExiste = await Usuario.findOne({email});

    if (usuarioExiste) {
        const error = new Error('Usuario ya existe');
        return res.status(400).json({msg: error.message})
    }

    try {
        const usuario = new Usuario(req.body);
        const usuarioAlmacenado = await usuario.save();
        res.json(usuarioAlmacenado);
        
    } catch (error) {
        console.log(error)
    }
}

const registrado = async (req, res) => {
    return res.json({msg: "metodo get"})
}

export {
    registrar,
    registrado
};