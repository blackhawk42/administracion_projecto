require('dotenv').config({ path: 'string.env' });
redisCache = require('express-redis-cache');

conectarRedisCache = () => {
	var cache;

	try {
		cache = redisCache({
			host: process.env.REDIS_SERVER,
			port: parseInt(process.env.REDIS_PORT),
			expire: parseInt(process.env.REDIS_CACHE_DEFAULT_EXPIRATION)
		});

		console.log("Cache de Redis conectado")
	} catch(error) {
		console.log("error conectando el cache de Redis: ", error);
	}

	return cache;
}

module.exports = conectarRedisCache;

