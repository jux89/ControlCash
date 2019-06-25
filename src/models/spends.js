//importa o mongoose
const mongoose = require('mongoose');

//importa o mongoose paginate (paginacao)
const mongoosePaginate = require('mongoose-paginate');

const SpendSchema = new mongoose.Schema({

    category: {
            type: String,
            required: true,
    },

    value: {
        type: Number,
        required: true,
    },

    date: {
        type: Date,
        required: true,
    },

    observation: {
        type: String,
        required: true,
    },

    createAt: {
        type: Date,
        default: Date.now
    },
});

SpendSchema.plugin(mongoosePaginate);

mongoose.model('Spends', SpendSchema);