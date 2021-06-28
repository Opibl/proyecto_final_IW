const express = require('express');

const AccessControl = require('accesscontrol');
const app = express();
const bodyParser = require("body-parser");

const mongoose = require('mongoose');
const jwt=require("jsonwebtoken");
const bcrypt = require('bcrypt');

const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

try {
  mongoose.connect('mongodb://localhost/webstore',{
      useUnifiedTopology:true,
      useNewUrlParser:true
  })
  console.log('base de datos conectada');

} catch (error) {
  console.log("base de datos no conectada");
}

const Schema = mongoose.Schema;

const productosSchema =  new Schema({
  _id:{type : Schema.ObjectId},
  nombre:{type : String},
  categoria:{type:String},
  descripcion:{type:String},
  cantidad:{type:Number},
  precio:{type:Number},
  imagen:{type:String},
  puntuacion:{type:Number},
},
{
  collection:'productos'
});


const usuarioSchema =  new Schema({
  nombres:{type : String},
  apellidos:{type:String},
  rut:{type:String},
  direccion:{type:String},
  region:{type:String},
  comuna:{type:String},
  email:{type:String},
  contraseña:{type:String}
},
{
  collection:'usuarios'
})


const adminSchema =  new Schema({
  nombre:{type : String},
  contraseña:{type:String}
},
{
  collection:'administrador'
});


const pedidosSchema =  new Schema({
  
  nombre:{type : String},
  nombreusuario:{type : String},
  direccion:{type : String},
  categoria:{type:String},
  precio:{type:Number},
},
{
  collection:'pedidos'
});



const comentariosSchema =  new Schema({
  
  nombre:{type : String},
  texto:{type : String},
  puntuacion:{type : Number},
},
{
  collection:'comentarios'
});


const user = mongoose.model('Usuario',usuarioSchema);



const productos = mongoose.model('Producto',productosSchema);
const usuarios = mongoose.model('Usuario',usuarioSchema);
const administrador = mongoose.model('Admin',adminSchema);
const pedidos = mongoose.model('Pedidos',pedidosSchema);
const comentarios = mongoose.model('Comentarios',comentariosSchema);


app.use(bodyParser.urlencoded({ extended: false }))

const listadedatosfigura1 = [];

const cors = require('cors');

const hostname = '127.0.0.1';
const port = 3030;




app.use(cors());
app.use(bodyParser.json());


app.get('/',async (req:any,res:any)=>{
  
  try{
    const arrayProductos = await productos.find();
    res.send(arrayProductos);
  }
  catch(error)
  {
    console.log(error);
    
  }

})


var BCRYPT_SALT_ROUNDS = 12;
app.post('/registrarse',async (req:any,res:any)=>{

  const usuario = new user(req.body);

  var byusuario = req.body.email;
  var bycontraseña = req.body.contraseña;

  
  try{
    await usuario.save();
    res.send(usuario);
  }
  catch(error)
  {
    console.log(error);
  }
  



})



app.post('/iniciarsesion',async (req:any,res:any)=>{

  let esta = false;
  try{
    const arrayUsuarios = await usuarios.find(req.body);
    
    if(arrayUsuarios.length > 0){
        esta = true
        console.log(arrayUsuarios);
        console.log(esta)
        res.send(arrayUsuarios);
    }
    else{
      console.log(arrayUsuarios);
      console.log(esta)
      res.send(arrayUsuarios);
    }
    
  }
  catch(error)
  {
    console.log(error);
    
  }



})


app.post('/recuperarContrasena',async (req:any,res:any)=>{
  
  
  console.log("solo email",req.body.email);
  console.log("el body",req.body);
  const arrayUsuarios = await usuarios.find({"email":`${req.body.email}`});
  console.log(arrayUsuarios);
  try{
    
    if(arrayUsuarios.length > 0 ){
      const fs = require('fs');
      let data = arrayUsuarios;
      
      data[0].contraseña = req.body.nuevaContraseña;
      console.log("data",data);
      
      const usuario = new user(data[0]);
      console.log("usuario",usuario);
      //console.log(data);
      await usuario.save();
      res.send(data[0]);
    }
    

  }
  catch(error)
  {
    console.log(error);
    
  }
});



app.post('/inicioAdmin',async (req:any,res:any)=>{

  let esta = false;
  try{
    const arrayAdmin = await administrador.find(req.body);
    
    if(arrayAdmin.length > 0){
        esta = true
        console.log(arrayAdmin);
        console.log(esta)
        res.send(arrayAdmin);
    }
    else{
      console.log(arrayAdmin);
      console.log(esta)
      res.send(arrayAdmin);
    }
    
  }
  catch(error)
  {
    console.log(error);
    
  }



})

app.get('/reportes',async (req:any,res:any)=>{
  
  try{
    const arrayUsuarios = await usuarios.find();
    res.send(arrayUsuarios);
  }
  catch(error)
  {
    console.log(error);
    
  }
  

})


app.get('/reporteProductos',async (req:any,res:any)=>{
  
  try{
    const arrayPedidos = await pedidos.find();
    res.send(arrayPedidos);
  }
  catch(error)
  {
    console.log(error);
    
  }
  

})


app.post('/carritoCompras2',async (req:any,res:any)=>{
  console.log("el del post",req.body);
 
  let lista:any = [];
  lista = req.body; 
  
  try
  {
    let  arrayProductos = await productos.find();

    
    for(let i = 0 ; i < lista.length ; i++ ){
      for(let j = 0 ; j < arrayProductos.length ;j++){
          if(lista[i].nombre == arrayProductos[j].nombre){
            
            arrayProductos[j].cantidad--;
            console.log(arrayProductos[j].cantidad);
            const producto = new productos(arrayProductos[j]);
            console.log(producto);
            await producto.save();
            
          }
      }
      const pedidosdeCarrito = new pedidos(lista[i]);
      
      await pedidosdeCarrito.save();
    }
    

    res.send(req.body);
  }
  catch(error)
  {
    console.log(error);
  }
});


app.post('/perfil',async (req:any,res:any)=>{
  let esta = false;
  try{
    const arrayUsuarios = await usuarios.find(req.body);
    
    if(arrayUsuarios.length > 0){
        esta = true
        console.log(arrayUsuarios);
        console.log(esta)
        res.send(arrayUsuarios);
    }
    else{
      console.log(arrayUsuarios);
      console.log(esta)
      res.send(arrayUsuarios);
    }
    
  }
  catch(error)
  {
    console.log(error);
    
  }
});



app.post('/carritoCompras',async (req:any,res:any)=>{
  console.log(req.body);
  const comentariosdeCarrito = new comentarios(req.body);
  console.log(comentariosdeCarrito);
  await comentariosdeCarrito.save();

  console.log(req.body.nombre);
  const arrayProductos = await productos.find({"nombre":`${req.body.nombre}`});
  const arrayComentarios = await comentarios.find({"nombre":`${req.body.nombre}`});

  let cant = arrayComentarios.length;
  let suma = 0;
  for(let i = 0 ; i< arrayComentarios.length;i++){
    suma =  suma + arrayComentarios[i].puntuacion;  
  }
  let promedio = suma / cant;
  arrayProductos[0].puntuacion = promedio;
  const producto = new productos(arrayProductos[0]);
  producto.save();

  res.send(req.body);
});

app.get('/producto:id',async (req:any,res:any)=>{
  
  try{
    const arrayComentarios = await comentarios.find();
    res.send(arrayComentarios);
  }
  catch(error)
  {
    console.log(error);
    
  }
  

})


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


