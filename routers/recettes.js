const router = require("express").Router();
const _ = require("lodash");
const Recette = require("../models/recette");

router.get("", async (req, res) => {
  res.send(await Recette.find());
});

//getByTitle
router.get("/title", async (req, res) => {
  // console.log('temchi');

  res
    .status(200)
    .send(await Recette.find({ title: req.query.title.split("+").join(" ") }));
});

//getRandomRecipy
router.get("/randomly", async (req, res) => {
  //console.log('temchi');

  res.status(200).send(await Recette.aggregate([{ $sample: { size: 1 } }]));
});



// getWithIngredient
router.get("/ingredient/:ing", async (req, res) => {
    // console.log("temchi Ingredients");
  
    let recette = await Recette.find({ingredients:req.params.ing})

    res.status(200).send(recette);
});



router.get("/id/:id", async (req, res) => {
  let recette = await Recette.findById(req.params.id);
  if (!recette) return res.status(404).send("Id not found");

  res.send(recette);
});


router.post("", async (req, res) => {


  let recette = new Recette(
    _.pick(req.body, [
      "title",
      "author",
      "ingredients",
      "description",
      "categorie",
    ])
  );

  try {
    recette = await recette.save();
    res.send(recette);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  let recette = await Recette.findById(req.params.id);
  if (!recette) return res.status(404).send("Id not found");
  recette = _.merge(recette, req.body);
  recette = await recette.save();
  res.send(recette);
});

router.delete("/:id", async (req, res) => {
  let recette = await Recette.findByIdAndDelete(req.params.id);
  if (!recette) return res.status(404).send("Id not found");

  res.send(recette);
});

module.exports = router;
