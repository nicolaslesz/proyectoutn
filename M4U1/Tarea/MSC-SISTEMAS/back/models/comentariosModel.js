var pool = require('./bd');

async function getComentarios(){
    var query = "select * from comentarios order by com_id desc limit 5";
    var rows = await pool.query(query);
    return rows
}

async function insertComentario(obj){
try{
var query = "insert into comentarios set ? ";
var rows = await pool.query(query, [obj]);
return rows;
}catch (error){
    console.log(error);
    throw error;
}
}

async function deleteComentarioById(id){

    var query = " delete from comentarios where com_id = ? ";
    var rows  = await pool.query(query, [id]);
    return rows;

}

async function getComentarioById(id){

    var query = " select * from comentarios where com_id = ? ";
    var rows  = await pool.query(query, [id]);
    return rows[0];

}


async function modificarComentarioById(obj,id){
    try{
        var query = "update comentarios set ? where com_id = ?";
        var rows = await pool.query(query, [obj,id]);
        return rows;
        }catch (error){
            console.log(error);
            throw error;
        }
}


module.exports = { getComentarios, insertComentario, deleteComentarioById,getComentarioById,modificarComentarioById }