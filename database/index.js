// encapsula o mongoose
const mongoose = require('mongoose');

// conecta ao banco atlas do mongo
async function main() {
    await mongoose.connect(process.env.MONGODB_URI)
}

main()
    .then(() => console.log('Conectado ao Mongo'))
    .catch(() => console.log('Deu erro'));

module.exports = mongoose;