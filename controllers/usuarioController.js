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


const autenticar = async (req, res) => {

    const { email, password } = req.body;

    // Comprobar si el usuario existe
    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
        const error = new Error('El Usuario no existe');
        return res.status(404).json({ msg: error.message });
    }

    
    // Comprobar su password
    if (await usuario.comprobarPassword(password)) {
        res.json({
            _id: usuario._id,
            nombre: usuario.nombre,
            email: usuario.email,
        });       
    } else {
        const error = new Error('El password es incorrecto');
        return res.status(403).json({ msg: error.message });
    }

}

export {
    registrar,
    registrado, 
    autenticar
};