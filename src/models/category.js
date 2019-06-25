const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate');

const CategorySchema = new mongoose.Schema({

    name: {
            type: String,
            required: true,
    }
});

CategorySchema.plugin(mongoosePaginate);

mongoose.model('Category', CategorySchema);