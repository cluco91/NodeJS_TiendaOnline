var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/8/83/Fallout_3_cover_art.PNG',
        title:'Fallout 3',
        description: 'Videojuego con gran historia.',
        price: 7500
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Maniac_Mansion_artwork.jpg',
        title:'Maniac Mansion',
        description: 'Una aventura grafica divertida..',
        price: 4500
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/6/68/Elvira_Mistress_of_the_Dark_Cover.jpg',
        title:'Elvira Mistress of The Dark',
        description: 'Videojuego de la vieja escuela.',
        price: 4500
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Halo_3_final_boxshot.JPG',
        title:'Halo 3',
        description: 'Muy buen shooter.',
        price: 7500
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/8/80/Diablo_III_cover.png',
        title:'Diablo III',
        description: 'Excelente RPG.',
        price: 9500
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/2/25/Half-Life_2_cover.jpg',
        title:'Half Life 2',
        description: 'Obra Maestra de Valve.',
        price: 7500
    }),

];

var done = 0;
for (var i=0; i < products.length; i++){
    products[i].save(function(err, result){
        done++;
        if(done === products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}

