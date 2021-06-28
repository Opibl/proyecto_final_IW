"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var express = require('express');
var AccessControl = require('accesscontrol');
var app = express();
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var jwt = require("jsonwebtoken");
var bcrypt = require('bcrypt');
var saltRounds = 10;
var myPlaintextPassword = 's0/\/\P4$$w0rD';
var someOtherPlaintextPassword = 'not_bacon';
try {
    mongoose.connect('mongodb://localhost/webstore', {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log('base de datos conectada');
}
catch (error) {
    console.log("base de datos no conectada");
}
var Schema = mongoose.Schema;
var productosSchema = new Schema({
    _id: { type: Schema.ObjectId },
    nombre: { type: String },
    categoria: { type: String },
    descripcion: { type: String },
    cantidad: { type: Number },
    precio: { type: Number },
    imagen: { type: String },
    puntuacion: { type: Number },
}, {
    collection: 'productos'
});
var usuarioSchema = new Schema({
    nombres: { type: String },
    apellidos: { type: String },
    rut: { type: String },
    direccion: { type: String },
    region: { type: String },
    comuna: { type: String },
    email: { type: String },
    contraseña: { type: String }
}, {
    collection: 'usuarios'
});
var adminSchema = new Schema({
    nombre: { type: String },
    contraseña: { type: String }
}, {
    collection: 'administrador'
});
var pedidosSchema = new Schema({
    nombre: { type: String },
    nombreusuario: { type: String },
    direccion: { type: String },
    categoria: { type: String },
    precio: { type: Number },
}, {
    collection: 'pedidos'
});
var comentariosSchema = new Schema({
    nombre: { type: String },
    texto: { type: String },
    puntuacion: { type: Number },
}, {
    collection: 'comentarios'
});
var user = mongoose.model('Usuario', usuarioSchema);
var productos = mongoose.model('Producto', productosSchema);
var usuarios = mongoose.model('Usuario', usuarioSchema);
var administrador = mongoose.model('Admin', adminSchema);
var pedidos = mongoose.model('Pedidos', pedidosSchema);
var comentarios = mongoose.model('Comentarios', comentariosSchema);
app.use(bodyParser.urlencoded({ extended: false }));
var listadedatosfigura1 = [];
var cors = require('cors');
var hostname = '127.0.0.1';
var port = 3030;
app.use(cors());
app.use(bodyParser.json());
app.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var arrayProductos, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, productos.find()];
            case 1:
                arrayProductos = _a.sent();
                res.send(arrayProductos);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.log(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
var BCRYPT_SALT_ROUNDS = 12;
app.post('/registrarse', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var usuario, byusuario, bycontraseña, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                usuario = new user(req.body);
                byusuario = req.body.email;
                bycontraseña = req.body.contraseña;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, usuario.save()];
            case 2:
                _a.sent();
                res.send(usuario);
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                console.log(error_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.post('/iniciarsesion', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var esta, arrayUsuarios, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                esta = false;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, usuarios.find(req.body)];
            case 2:
                arrayUsuarios = _a.sent();
                if (arrayUsuarios.length > 0) {
                    esta = true;
                    console.log(arrayUsuarios);
                    console.log(esta);
                    res.send(arrayUsuarios);
                }
                else {
                    console.log(arrayUsuarios);
                    console.log(esta);
                    res.send(arrayUsuarios);
                }
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                console.log(error_3);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.post('/recuperarContrasena', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var arrayUsuarios, fs, data, usuario, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("solo email", req.body.email);
                console.log("el body", req.body);
                return [4 /*yield*/, usuarios.find({ "email": "" + req.body.email })];
            case 1:
                arrayUsuarios = _a.sent();
                console.log(arrayUsuarios);
                _a.label = 2;
            case 2:
                _a.trys.push([2, 5, , 6]);
                if (!(arrayUsuarios.length > 0)) return [3 /*break*/, 4];
                fs = require('fs');
                data = arrayUsuarios;
                data[0].contraseña = req.body.nuevaContraseña;
                console.log("data", data);
                usuario = new user(data[0]);
                console.log("usuario", usuario);
                //console.log(data);
                return [4 /*yield*/, usuario.save()];
            case 3:
                //console.log(data);
                _a.sent();
                res.send(data[0]);
                _a.label = 4;
            case 4: return [3 /*break*/, 6];
            case 5:
                error_4 = _a.sent();
                console.log(error_4);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); });
app.post('/inicioAdmin', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var esta, arrayAdmin, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                esta = false;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, administrador.find(req.body)];
            case 2:
                arrayAdmin = _a.sent();
                if (arrayAdmin.length > 0) {
                    esta = true;
                    console.log(arrayAdmin);
                    console.log(esta);
                    res.send(arrayAdmin);
                }
                else {
                    console.log(arrayAdmin);
                    console.log(esta);
                    res.send(arrayAdmin);
                }
                return [3 /*break*/, 4];
            case 3:
                error_5 = _a.sent();
                console.log(error_5);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.get('/reportes', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var arrayUsuarios, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, usuarios.find()];
            case 1:
                arrayUsuarios = _a.sent();
                res.send(arrayUsuarios);
                return [3 /*break*/, 3];
            case 2:
                error_6 = _a.sent();
                console.log(error_6);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.get('/reporteProductos', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var arrayPedidos, error_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, pedidos.find()];
            case 1:
                arrayPedidos = _a.sent();
                res.send(arrayPedidos);
                return [3 /*break*/, 3];
            case 2:
                error_7 = _a.sent();
                console.log(error_7);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.post('/carritoCompras2', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var lista, arrayProductos, i, j, producto, pedidosdeCarrito, error_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("el del post", req.body);
                lista = [];
                lista = req.body;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 11, , 12]);
                return [4 /*yield*/, productos.find()];
            case 2:
                arrayProductos = _a.sent();
                i = 0;
                _a.label = 3;
            case 3:
                if (!(i < lista.length)) return [3 /*break*/, 10];
                j = 0;
                _a.label = 4;
            case 4:
                if (!(j < arrayProductos.length)) return [3 /*break*/, 7];
                if (!(lista[i].nombre == arrayProductos[j].nombre)) return [3 /*break*/, 6];
                arrayProductos[j].cantidad--;
                console.log(arrayProductos[j].cantidad);
                producto = new productos(arrayProductos[j]);
                console.log(producto);
                return [4 /*yield*/, producto.save()];
            case 5:
                _a.sent();
                _a.label = 6;
            case 6:
                j++;
                return [3 /*break*/, 4];
            case 7:
                pedidosdeCarrito = new pedidos(lista[i]);
                return [4 /*yield*/, pedidosdeCarrito.save()];
            case 8:
                _a.sent();
                _a.label = 9;
            case 9:
                i++;
                return [3 /*break*/, 3];
            case 10:
                res.send(req.body);
                return [3 /*break*/, 12];
            case 11:
                error_8 = _a.sent();
                console.log(error_8);
                return [3 /*break*/, 12];
            case 12: return [2 /*return*/];
        }
    });
}); });
app.post('/perfil', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var esta, arrayUsuarios, error_9;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                esta = false;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, usuarios.find(req.body)];
            case 2:
                arrayUsuarios = _a.sent();
                if (arrayUsuarios.length > 0) {
                    esta = true;
                    console.log(arrayUsuarios);
                    console.log(esta);
                    res.send(arrayUsuarios);
                }
                else {
                    console.log(arrayUsuarios);
                    console.log(esta);
                    res.send(arrayUsuarios);
                }
                return [3 /*break*/, 4];
            case 3:
                error_9 = _a.sent();
                console.log(error_9);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.post('/carritoCompras', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var comentariosdeCarrito, arrayProductos, arrayComentarios, cant, suma, i, promedio, producto;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log(req.body);
                comentariosdeCarrito = new comentarios(req.body);
                console.log(comentariosdeCarrito);
                return [4 /*yield*/, comentariosdeCarrito.save()];
            case 1:
                _a.sent();
                console.log(req.body.nombre);
                return [4 /*yield*/, productos.find({ "nombre": "" + req.body.nombre })];
            case 2:
                arrayProductos = _a.sent();
                return [4 /*yield*/, comentarios.find({ "nombre": "" + req.body.nombre })];
            case 3:
                arrayComentarios = _a.sent();
                cant = arrayComentarios.length;
                suma = 0;
                for (i = 0; i < arrayComentarios.length; i++) {
                    suma = suma + arrayComentarios[i].puntuacion;
                }
                promedio = suma / cant;
                arrayProductos[0].puntuacion = promedio;
                producto = new productos(arrayProductos[0]);
                producto.save();
                res.send(req.body);
                return [2 /*return*/];
        }
    });
}); });
app.get('/producto:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var arrayComentarios, error_10;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, comentarios.find()];
            case 1:
                arrayComentarios = _a.sent();
                res.send(arrayComentarios);
                return [3 /*break*/, 3];
            case 2:
                error_10 = _a.sent();
                console.log(error_10);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.listen(port, hostname, function () {
    console.log("Server running at http://" + hostname + ":" + port + "/");
});
