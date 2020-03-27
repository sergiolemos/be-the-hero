const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const ong_id = request.headers.authorization;
    const incidents = await connection('incidents').where('ong_id', ong_id).select('*');
    // console.log(incidents.length);
    // if (indicents.length == 0) {
    //   return response.status(404).json({ error: "Not found" });
    // }
    return response.json(incidents);
  }
}