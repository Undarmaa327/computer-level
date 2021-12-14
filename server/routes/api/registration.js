const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();

// Get Posts
router.get("/", async (req, res) => {
  const registrations = await loadRegistrationCollection();
  res.send(await registrations.find({}).toArray());
});

// Add Post
router.post("/signup", async (req, res) => {
  const registrations = await loadRegistrationCollection();
  await registrations.insertOne({
    email: req.body.email,
    password: req.body.password,
  });
  res.status(201).send();
});

router.post("/signin", async (req, res) => {
  const registrations = await loadRegistrationCollection();
  const data = await registrations
    .find({ email: req.body.email, password: req.body.password })
    .toArray();
  if (!data.length) {
    res.status(501).send("Email эсвэл Нууц үг буруу байна.");
  } else {
    var randomNumber = Math.random().toString();
    randomNumber = randomNumber.substring(2, randomNumber.length);
    res.cookie("session", randomNumber, { maxAge: 900000, httpOnly: true });
    res.send({ session: randomNumber, email: req.body.email });
  }
});

// Delete Post
router.delete("/:id", async (req, res) => {
  const posts = await loadRegistrationCollection();
  await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
  res.status(200).send({});
});

async function loadRegistrationCollection() {
  const client = await mongodb.MongoClient.connect(
    "mongodb+srv://aadhav:Vahdaa%40sideik@cluster0.gaygu.mongodb.net/leveldb?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  );

  return client.db("leveldb").collection("user");
}

module.exports = router;
