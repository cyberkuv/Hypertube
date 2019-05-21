const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://cyberkuv:Pa$$w0rd21101998@ds058548.mlab.com:58548/hypertube";
MongoClient.connect(url,
    { useNewUrlParser: true },
    async function(err, db) {
        const Cname = "RegUsers";
        if (err) throw err;
        const databaseObject = db.db("hypertube");
        const newUser = { name: "Emmanuel", surname: "Onwe", age: "21", email: "cyberkuv@gmail.com", gender: "Male", password: "Pa$$w0rd" };
        databaseObject.collection(Cname).insertOne(newUser, async function(err, res) {
            if (err) throw err;
            console.log(`new user ${newUser} created`);
            db.close();
        })
    });