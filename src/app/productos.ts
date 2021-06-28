export interface Productos {
    _id:number;
    nombre:string;
    categoria:string;
    descripcion:string;
    cantidad:number;
    precio:number;
    imagen:string;
    puntuacion:number;
}

export const ListaProductos:Array<Productos>=
    [{
        _id:1,
        nombre:"zapatos rosados",
        categoria:"zapatos",
        descripcion:"dssadads",
        cantidad:4,
        precio:23000,
        imagen:"img/zapatos_rosados.jpg",
        puntuacion:5,
    },
    {
        _id:2,
        nombre:"polera negra",
        categoria:"poleras",
        descripcion:"dssadads",
        cantidad:4,
        precio:28000,
        imagen:"img/polera_negra.jpg",
        puntuacion:5,
    },
    {
        _id:3,
        nombre:"pantalon verde",
        categoria:"pantalones",
        descripcion:"dssadads",
        cantidad:0,
        precio:24000,
        imagen:"img/pantalon_verde.jpg",
        puntuacion:5,
    },

    {
        _id:4,
        nombre:"polera azul",
        categoria:"poleras",
        descripcion:"dssadads",
        cantidad:4,
        precio:25000,
        imagen:"img/polera_azul.jpg",
        puntuacion:5,
    },

    {
        _id:5,
        nombre:"zapatos blancos",
        categoria:"zapatos",
        descripcion:"dssadads",
        cantidad:4,
        precio:25000,
        imagen:"img/zapatos_blanco.jpg",
        puntuacion:5,
    },



];

