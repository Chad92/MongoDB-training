const { MongoClient } = require("mongodb");
// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://maxime:t2im3wo7reBU7DoW@cluster0.0e8gtjr.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

async function run() {

        await client.connect();
        console.log("TEST ?");
        const db = client.db('Taches');
        const collection = db.collection('documents');
   // CREATE : ajouter des datas dans mon tableau Mongo db atlas
//         try {
//             const insertData = await collection.insertMany([
//                 {
//                 name : 'Alex',
//                 age : '30',
//                 ville : 'Paris'
//                 },
//                 {
//                     name : 'Marie',
//                     age : '25',
//                     ville : 'Lille'
//                 },
//                 {
//                     name : 'Bruno',
//                     age : '55',
//                     ville : 'Marseille'
//                     },
                
// ]);
//         console.log('Docouments inseres =>', insertData);
//         return 'done'
//     }
//     catch (err) {
//         console.log(err.stack);
//     }
    //
    // READ : permet de retrouver des docouments dans ma collection
    // try {

    //     //Pour trouver une data : 
    //     const findData = await collection.findOne({name: 'Alex'})
    //     console.log('Docouments trouvés =>', findData)
    //     // Pour trouver des datas , on va retrouver les données des gens qui ont 30 ans
    //     const findMultipleDatas = await collection.find({age: '30'})
    //     console.log(await findMultipleDatas.toArray())
    // }
    // catch (err) {
    //     console.log(err.stack);
    // }
    //
    // DELETE : supprimer une data 
    try {
        // delete une data d'une collection, exemple
        const deleteData = collection.deleteOne({ name : 'Bruno'})
        console.log(await deleteData)
        // delete les ,datas qui contiennent l'age 31
        const deleteMultipleData = collection.deleteMany({ age : '31'})
        console.log(await deleteMultipleData)
        
    }
    catch (err) {
        console.log(err.stack);
    }
    //
    // UPDATE : pour mettre a jour une donnée
    try {
//Update une data
        const updataData = collection.updateOne({ name: 'Marie'}, {
            $set : { name : 'Camille', ville: 'Rouen'}
        });
        console.log(await updataData)
        // updata plusieurs datas 
        const updataMultipleDatas = collection.updateMany({ name: 'Marie'}, {
            $set : { name : 'Camille', ville: 'Rouen'}
        });
        console.log(await updataMultipleDatas)
    }
    catch (err) {
        console.log(err.stack);
    }
    
    
    finally {
        await client.close();
    }

    // Index : permet de faire une analyse sur un docoument qui est indéxé dans ma collection (table de données),
    // permet de faire une requete plus rapide et claire sur une donnée qu'on a besoin de retrouver
// Lien api index mongodb : https://mongodb.github.io/node-mongodb-native/5.1/classes/Collection.html#createIndex
    // exemple : db.nomDeLaCollection.createIndex({"cle": 1}) 
    // le chiffre 1 dans clé : 1 va trier les resultats dans l'ordre croissant et -1 en ordre décroissant
    // Le résultat se présente comme ça :
        // {
        //     "createdCollectionAutomatically" : false,
        //     "numIndexesBefore" : 1,
        //     "numIndexesAfter": 2,
        //     "ok" : 1
        //     }
    // Creer une date : 
   // new ISODate : permet de creer ma date
//      db.cakeSales.insertMany( [
//    { _id: 0, type: "chocolate", orderDate: new ISODate("2020-05-18T14:10:30Z") },
//    { _id: 1, type: "strawberry", orderDate: new ISODate("2021-03-20T11:30:05Z") },
//    { _id: 2, type: "vanilla", orderDate: new ISODate("2021-01-15T06:31:15Z") }
// ] )
}

run().catch(console.dir);
