const mongoose = require('mongoose');

const Category = mongoose.model('Category');

module.exports = {
    
    async index (req, res) {   
        const { page } = req.query;
        const category = await Category.paginate({}, { page, limit: 10 });
        return res.json(category);
    },

    async details (req, res) {
        const category = await Category.findById(req.params.id);
        return res.json(category);
    },

    async insert (req, res) {
        const category = await Category.create(req.body);
        return res.json(category);
    },
    
    async update (req, res) {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(category);
    },

    async delete (req, res) {
        await Spends.findByIdAndRemove(req.params.id);
        return res.send();
    },
};
