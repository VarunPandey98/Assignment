const express = require('express');
const app = express();
const Port = 3000;
const records = require('./model/Post');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
require('./database')

app.listen(Port, () => {
  console.log(`server run on port ${Port}`)
})

//API To Save records (Question-1)
app.post('/data', async (req, res) => {
  try {

    var incomingData = req.body;

    for (let i = 0; i < incomingData.length; i++) {

      for (let j = 0; j < incomingData[i].length; j++) {

        const post = new records({
          name: incomingData[i][j].name,
          age: incomingData[i][j].age,
          marks: incomingData[i][j].marks
        });
        var response = await post.save();
      }

    }

    res.json({ "message": "Data Saved successfully" });
  } catch (err) {
    console.log("Error Occured-->", err);
    res.send({ "message": err });
  }

})

//API to get Age records in Acending Order (Question-2)
app.get('/ascending', async (req, res) => {
  try {

    var asc = await records.find().sort({ "age": 1 });
    res.json(asc);
  } catch (err) {
    console.log("Error Occured-->", err);
    res.send({ "message": err });
  }
})

//API to get Total Marks (Question-3)
app.get('/summarks', async (req, res) => {
  try {

    var asc = await records.aggregate([{ $group:
      { _id : 'anyuuid', sum : { $sum: "$marks" } }
    }]);
    res.json(asc);
  } catch (err) {
    console.log("Error Occured-->", err);
    res.send({ "message": err });
  }
})


