



// ==================
// Puerto
// ==================
process.env.PORT = process.env.PORT || 3000;

// ==================
// Entorno
// ==================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ==================
// Base de Datos
// ==================

let urlDB;

if ( process.env.NODE_ENV === 'dev' ){
    urlDB = 'mongodb://localhost:27017/mezcal';
}else{
    urlDB = 'mongodb+srv://User:1234@cluster0.uts4c.mongodb.net/Mezcal'
}
process.env.urlDB = urlDB;