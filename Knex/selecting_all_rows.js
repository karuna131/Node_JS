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
knex.from('cars').select("*")
    .then((rows)=>{
    for (rows of rows){
        console.log(`${rows['id']} ${rows['name']} ${rows['price']}`);
    }
    }).catch((err)=>{
        console.log(err);
        throw err;
    }).finally(()=>{
        knex.destroy();
    });