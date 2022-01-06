const options = {
    client : 'mysql',
    connection : {
        host : 'localhost',
        user : 'root',
        password : 'Kavi@123',
        database : 'mydata'
    }
}
const knex = require('knex')(options);

knex.schema.createTable('cars', (table)=>{
    table.increments('id')
    table.string('name')
    table.integer('price')
}).then(()=>{
    console.log('Table created')
}).catch((err)=>{
    console.log(err);
    throw err
}).finally(()=>{
    knex.destroy();
});