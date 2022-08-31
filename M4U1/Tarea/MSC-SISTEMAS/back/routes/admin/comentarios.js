var express = require('express');
var router = express.Router();
var comentariosModel = require('../../models/comentariosModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;

const uploader = util.promisify(cloudinary.uploader.upload);

/*
router.get('/',function(req,res,next){
    res.render('admin/comentarios',{
        layout: 'admin/layout',
        usuario: req.session.nombre,
    });
});*/

router.get('/',async function(req,res,next){
    var comentarios = await comentariosModel.getComentarios();

    comentarios = comentarios.map(comentario => {
        if(comentario.com_foto_id){
            const foto = cloudinary.image(comentario.com_foto_id,{
                width: 40,
                height: 40,
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

res.render('admin/comentarios',{
    layout: 'admin/layout',
    usuario: req.session.nombre,
    comentarios
});
});

router.get('/agregar',(req,res,next) => {
    res.render('admin/agregar',{
        layout:'admin/layout'
    });
});

router.post('/agregar',async(req,res,next) => {
    try{
        var com_foto_id = '';
        console.log(req.files.foto_id)
    
      console.log(req.files)
        if(req.files && Object.keys(req.files).length > 0){                         
            console.log("paso")
            foto = req.files.foto_id;        
            com_foto_id = (await uploader(foto.tempFilePath)).public_id;      
        }             
        if(req.body.com_nombre != "" && req.body.com_comentario != ""){            
            await comentariosModel.insertComentario({           
                ...req.body,
               com_foto_id});
            res.redirect('/admin/comentarios')
        }else{
                res.render('admin/agregar',{
                    layout: 'admin/layout',
                    error:true,message:'Todos los campos son requeridos'
                })            
            }        
    }catch(error){
        console.log(error)
        res.render('admin/agregar',{
            layout: 'admin/layout',
            error: true, message:'No se cargo el comentario'
        });
    }
});


router.get('/eliminar/:com_id', async (req,res,next) => {
    var id = req.params.com_id  //ojo aca puede ir id solo

    let comentario = await comentariosModel.getComentarioById(id);
    if(comentario.com_foto_id){
        await(destroy(comentario.com_foto_id));
    }

    await comentariosModel.deleteComentarioById(id);
    res.redirect('/admin/comentarios')
});


router.get('/modificar/:com_id',async (req,res,next) => {
    let id = req.params.com_id;
    let comentario = await comentariosModel.getComentarioById(id);
    res.render('admin/modificar',{
        layout:'admin/layout',
        comentario
    });
});


const destroy = util.promisify(cloudinary.uploader.destroy);

router.post('/modificar', async (req,res,next) => {
    try{ 
        let com_foto_id = req.body.foto_original;
        
        let borrar_foto_vieja = false;
        
        if(req.body.foto_delete === "1"){
            com_foto_id = null;
            borrar_foto_vieja = true;
        }else{
            if(req.files && Object.keys(req.files).length > 0){
                foto = req.files.com_foto_id;
                com_foto_id = (await uploader(foto.tempFilePath)).public_id;
                borrar_foto_vieja = true;
            }
        }
        if(borrar_foto_vieja && req.body.foto_original){
            await(destroy(req.body.foto_original));
        }
        

        let obj = {
            com_nombre: req.body.com_nombre,
            com_comentario: req.body.com_comentario,
            com_foto_id
        }

        await comentariosModel.modificarComentarioById(obj,req.body.com_id);
        res.redirect('/admin/comentarios');
    }
catch (error){
    console.log(error)
    res.render('admin/modificar', {
        layout: 'admin/layout',
        error:true, message: 'No se modificó el comentario'
    })
}
})

module.exports = router