const connection = require('../database/connection')

module.exports = {
    async index(req, resp) {
        const ong_id = req.headers.autorization;
        
        const incidents = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*');

        return resp.json(incidents);
    }
}