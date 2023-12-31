'use strict'
const express = require('express')
const MovieController = require('../controllers/movies')
const authentication = require('../middlewares/authentication')
const router = express.Router()

router.get('/', authentication, MovieController.fetchMovies)
router.post('/', authentication, MovieController.createMovie)
router.get('/:id', authentication, MovieController.fetchMovieById)
router.put('/:id', authentication, MovieController.updateMovie)
router.delete('/:id', authentication, MovieController.deleteMovie)

module.exports = router