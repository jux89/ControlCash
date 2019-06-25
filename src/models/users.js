//importa o mongoose
const mongoose = require('mongoose');

//importa o mongoose paginate (paginacao)
const mongoosePaginate = require('mongoose-paginate');

const UsersSchema = new mongoose.Schema({

    name: {
            type: String,
            required: true,
    },

    email: {
        type: String,
        required: true,
    },

    telephone: {
        type: Number,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

    createAt: {
        type: Date,
        default: Date.now
    },
});

UsersSchema.plugin(mongoosePaginate);

mongoose.model('Users', UsersSchema);