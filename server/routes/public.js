'use strict'
const express = require('express')
const MovieController = require('../controllers/movies')
const router = express.Router()

router.get('/movies', MovieController.fetchMovies)
router.get('/movies/:slug', MovieController.fetchMovieBySlug)

module.exports = router