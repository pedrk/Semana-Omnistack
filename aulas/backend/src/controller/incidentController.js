const connection = require('../database/connection')

module.exports = {
    async index(req, resp) {
        const { page = 1} = req.query; 

        const [ count ] = await connection('incidents')
            .count();

        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5)
        .offset((page-1) * 5)
        .select(['incidents.*',
         'ongs.name',
         'ongs.email',
         'ongs.whatsapp',
         'ongs.city',
         'ongs.uf'
        ]);

        resp.header('X-Total-Count', count['count(*)'])

        return resp.json(incidents)
    },

    async create(request, resp) {
        const {title, description, value} = request.body;
        const ong_id = request.headers.autorization;

        const [id] = await connection('incidents').insert ({
            title,
            description,
            value,
            ong_id,
        });

        return resp.json({ id })
    },

    async delete(req, resp){
        const { id } = req.params;
        const ong_id = req.headers.autorization;

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        if (incident.ong_id != ong_id) {
            return resp.status(401).json( { error: 'Operation not permitted'})
        }

        await connection('incidents').where('id', id).delete();

        return resp.status(204).send();
    }
};