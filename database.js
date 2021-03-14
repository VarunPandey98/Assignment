const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
require('dotenv').config();

mongoose.connect(process.env.MongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
    if (err) throw console.log(err);
    console.log("Yes Database connected");
    // db.close();
});
