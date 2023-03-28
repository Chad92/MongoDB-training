const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://maxime:t2im3wo7reBU7DoW@cluster0.0e8gtjr.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

async function run() {

        await client.connect();
        console.log("TEST ?");
        const db = client.db('Taches');
        const collection = db.collection('documents');
   // CREATE
        try {
            const insertData = await collection.insertMany([
                {
                name : 'Alex',
                age : '30',
                ville : 'Paris'
                },
                {
                    name : 'Marie',
                    age : '25',
                    ville : 'Lille'
                },
                {
                    name : 'Bruno',
                    age : '55',
                    ville : 'Marseille'
                    },
                
]);
        console.log('Docouments inseres =>', insertData);
        return 'done'
    }
    catch (err) {
        console.log(err.stack);
    }
    //
    // READ
    try {

    }
    catch (err) {
        console.log(err.stack);
    }
    //
    // DELETE
    try {


    }
    catch (err) {
        console.log(err.stack);
    }
    //
    // UPDATE
    try {

    }
    catch (err) {
        console.log(err.stack);
    }
    
    
    finally {
        await client.close();
    }
}

run().catch(console.dir);
