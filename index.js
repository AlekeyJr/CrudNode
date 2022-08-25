import express from "express"
import { crud_cliente } from "./controlador/crud_clientes.js";


const app_express = express();
app_express.use(express.urlencoded({extended:false}));
app_express.use(express.json());
app_express.use(express.static('./vista'))
app_express.use(express.static('./modelo'))
app_express.use(express.static('./controlador'))

app_express.set('views', './vista')
app_express.set('view engine', 'ejs')

app_express.listen('5000',function(){

    console.log('Aplicacion iniciada: http://localhost:5000')



})

app_express.get('/',crud_cliente.leer);

app_express.post('/crud_c',crud_cliente.cud);