const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://cyberkuv:Pa$$w0rd21101998@ds058548.mlab.com:58548/hypertube";
MongoClient.connect(url,
    { useNewUrlParser: true, useCreateIndex: true },
    async function(err, db) {
        const Cname = "RegUsers";
        if (err) throw err;
        const databaseObject = db.db("hypertube");
        databaseObject.createCollection(Cname,
        async function(err, res) {
            if (err) throw err;
            console.log(`collection ${Cname} created`);
            db.close();
        });
    });