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

knex.from('cars').select('name','price').where('price', '>', '50000')
    .then((rows)=>{
        for (rows of rows){
            console.log(`${rows['name']} ${rows['price']}`)
        }
    }).catch((err)=>{
        console.log(err);
        throw err;
    }).finally(()=>{
        knex.destroy();
    });