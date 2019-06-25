const mongoose = require('mongoose');

const Spends = mongoose.model('Spends');

module.exports = {
    
    async index (req, res) {   
        const { page } = req.query;
        const spends = await Spends.paginate({}, { page, limit: 10 });
        return res.json(spends);
    },

    async details (req, res) {
        const spends = await Spends.findById(req.params.id);
        return res.json(spends);
    },

    async insert (req, res) {
        const spends = await Spends.create(req.body);
        return res.json(spends);
    },
    
    async update (req, res) {
        const spends = await Spends.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(spends);
    },

    async delete (req, res) {
        await Spends.findByIdAndRemove(req.params.id);
        return res.send();
    },
};
