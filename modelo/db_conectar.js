import mysql from 'mysql'
var conectar = mysql.createConnection({

    host: 'localhost',
    user: 'usr_empresa',
    password: 'empresa@123',
    database : 'db_empresa'

});

conectar.connect(function(err){
    if(err){
        console.error('Error en conexion' + err.stack)
        return;
    }
    console.log('Conexion exitosa ID: ' + conectar.threadId);

});

export {conectar}