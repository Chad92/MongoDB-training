const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://maxime:t2im3wo7reBU7DoW@cluster0.0e8gtjr.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        console.log("TEST ?");
        const db = client.db('Taches');
        const collection = db.collection('documents');
        const insertStuff = await collection.insertMany(
            [{a : 1}, {b : 2}, {c : 3},]
        );
        console.log(`Docouments inseres => ${insertStuff}`);
        return 'done'

    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}

run().catch(console.dir);
