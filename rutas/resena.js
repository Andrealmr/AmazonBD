const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemaresena = new eschema({
      product_id: String,
      product_name: String,
      category: String,
      discounted_price: String,
      actual_price: String,
      discount_percentaje: String,
      rating: String,
      rating_count: String,
      about_product: String,
      user_id: String,
      user_name: String,
      review_id: String,
      review_title: String,
      review_content: String,
      img_link: String


})

const ModeloResena = mongoose.model('amazon', eschemaresena, 'amazon' )
module.exports = router

/*
router.get('/ejemplo', (req, res) => {
    res.end('Carga desde ruta ejemplo')
}) */
//  AGREGAR 
router.post('/agregar', (req, res) =>{
    const nuevaresena = new ModeloResena({
       
        product_id:  req.body.product_id,
        product_name: req.body.product_name,
        category:  req.body.category,
        discounted_price:  req.body.discounted_price,
        actual_price:  req.body.actual_price,
        discount_percentaje:  req.body.discount_percentaje,
        rating:  req.body.rating,
        rating_count:  req.body.rating_count,
        about_product:  req.body.about_product,
        user_id:  req.body.user_id,
        user_name:  req.body.user_name,
        review_id: req.body.review_id,
        review_title:  req.body.review_title,
        review_content:  req.body.review_content,
        img_link: req.body.img_link,

    })
    nuevaresena.save()
        .then(() => {
            res.send('Resena agregada');
        })
        .catch(err => {
            res.send(err);
        });

})

// OBTENER
router.get('/obtener', (req, res) => {
    ModeloResena.find({})
        .then(docs => {
            res.send(docs);
        })
        .catch(err => {
            res.send(err);
        });
});

router.post('/obtenerdata', (req, res) => {
    ModeloResena.find({product_id:req.body.product_id})
        .then(docs => {
            res.send(docs);
        })
        .catch(err => {
            res.send(err);
        });
});

//Actualizar
router.post('/actualiza', async (req, res) => {
    try {
        const updatedResena = await ModeloResena.findOneAndUpdate(
            { product_id: req.body.product_id },
            {
                product_name: req.body.product_name,
                category: req.body.category,
                discounted_price: req.body.discounted_price,
                actual_price: req.body.actual_price,
                discount_percentaje: req.body.discount_percentaje,
                rating: req.body.rating,
                rating_count: req.body.rating_count,
                about_product: req.body.about_product,
                user_id: req.body.user_id,
                user_name: req.body.user_name,
                review_id: req.body.review_id,
                review_title: req.body.review_title,
                review_content: req.body.review_content,
                img_link: req.body.img_link
            }
        );

        if (updatedResena) {
            res.send('Reseña actualizada');
        } else {
            res.status(404).send('Reseña no encontrada');
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
});

//Borrar
router.post('/borrar', async (req, res) => {
    try {
        const deletedResena = await ModeloResena.findOneAndDelete({ product_id: req.body.product_id });

        if (deletedResena) {
            res.send('Reseña borrada');
        } else {
            res.status(404).send('Reseña no encontrada');
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
});
