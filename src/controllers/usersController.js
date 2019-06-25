const mongoose = require('mongoose');

const Users = mongoose.model('Users');

module.exports = {
    
    async index (req, res) {   
        const { page } = req.query;
        const users = await Users.paginate({}, { page, limit: 10 });
        return res.json(users);
    },

    async details (req, res) {
        const users = await Users.findById(req.params.id);
        return res.json(users);
    },

    async insert (req, res) {
        const users = await Users.create(req.body);
        return res.json(users);
    },
    
    async update (req, res) {
        const users = await Users.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(users);
    },

    async delete (req, res) {
        await Users.findByIdAndRemove(req.params.id);
        return res.send();
    },
};
