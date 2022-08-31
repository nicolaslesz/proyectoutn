
var express = require('express');
var router = express.Router();
var comentariosModel = require('./../models/comentariosModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

router.post('/contacto', async (req,res) => {
    const mail = {
        to: 'nicolaslesz@gmail.com',
        subject: 'Contacto Web',
        html: `${req.body.nombre} se contactó a traves de la web y quiere mas información a este correo:
                 ${req.body.email} <br> además, hizo el siguiente comentario : ${req.body.mensaje}
                <br>su tel es: ${req.body.telefono}`
            }
    
    

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth:{
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    await transport.sendMail(mail)

    res.status(201).json({
        error:false,
        message:'Mensaje enviado'
        
    });
    
});



router.get('/comentarios', async function(req,res,next){
    let comentarios = await comentariosModel.getComentarios();

    comentarios = comentarios.map(comentario => {
        if(comentario.com_foto_id){
            const foto = cloudinary.url(comentario.com_foto_id,{
                width: 960,
                height: 200,
                crop: 'fill'
            });
            return {
                ...comentario,
                foto
            }
        }else{
            return{
                ...comentario,
                foto: ''
            }
        }
    });
    
    res.json(comentarios);
})

module.exports = router;

