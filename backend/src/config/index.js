const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    URI: process.env.URI,
    JWT_SECRET: process.env.JWT_SECRET,
}