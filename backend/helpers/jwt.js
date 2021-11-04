const jwt = require('jsonwebtoken');

const generarJWT = (uid,email ,firstname, lastname) =>{

    return new Promise((resolve, reject)=>{

        const payload = { uid,email, firstname,lastname};

        jwt.sign( payload, process.env.SECRET_JWT_SEED, {
            expiresIn : '2h'
        },(err,token)=>{

            if(err){
                console.log(err);
                reject('No se pudo generar el token');
            }

            resolve(token);

        });

    });

}

module.exports = {
    generarJWT
}