// Require the fastify framework and instantiate it
const fastify = require('fastify')({
	logger: true
})

// Require external modules
const mongoose = require('mongoose')

// Connect to DB
mongoose
	.connect('mongodb+srv://admin:admin@cluster0.kwkdd.mongodb.net/deportes')
	.then(() => console.log('MongoDB connected...'))
	.catch(err => console.log(err))

module.exports = fastify
