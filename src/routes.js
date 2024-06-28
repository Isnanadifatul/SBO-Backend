const { path } = require('@hapi/joi/lib/errors');
const {createHandler, readAllindikator_people, updateIndikatorHandler, deleteIndikatorHandler} = require('./handler_indikator_people');

const routes = [
    {
        method: 'POST',
        path: '/indikator_people_post',
        handler: createHandler,
    },
    {
        method: 'GET',
        path: '/indikator_people_get',
        handler: readAllindikator_people
    },
    {
        method: 'PUT',
        path: '/indikator_people_update/{id}',
        handler: updateIndikatorHandler
    },
    {
        method: 'DELETE',
        path: '/indikator_people_delete/{id}',
        handler: deleteIndikatorHandler
    }
];

module.exports = routes;