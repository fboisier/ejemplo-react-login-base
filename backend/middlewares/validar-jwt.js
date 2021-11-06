const jwt = require('jsonwebtoken');

const validarJWT = (req, res, next) => {

    const token = req.header('x-token');

    if (!token)
        return res.status(401).json({
            ok: false,
            msg: 'no hay token en la petición'
        });


    try {

        const { uid, email, firstname, lastname } = jwt.verify(token, process.env.SECRET_JWT_SEED);

        req.uid = uid;
        req.firstname = firstname;
        req.lastname = lastname;
        // req.avatar = avatar;

    } catch (error) {
        console.log(error);
        return res.status(401).json({
            ok: false,
            msg: 'token no válido'
        });
    }

    next();
}

module.exports = validarJWT;
