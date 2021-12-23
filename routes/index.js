const express = require("express");
const router = express.Router();
const products = require("../data/products.json");

router.get("/", function (req, res) {
  const { filter } = req.query;
  if (!!filter) {
    const newProducts = products.filter(
      (el) =>
        el.title.includes(filter) ||
        el.model.includes(filter) ||
        el.material.includes(filter) ||
        el.color.includes(filter)
    );
    return res.render("index", { products: newProducts });
  }
  res.render("index", { products: products });
});

router.get("/home", function (req, res) {
  res.redirect("/");
});

router.get("/about", function (req, res) {
  res.render("about");
});

router.get("/contact", function (req, res) {
  res.render("contact");
});

router.get("/products/:id", function (req, res) {
  const targetProducts = products.find((el) => el.id === req.params.id);
  if (!targetProducts) {
    res.render("notfound");
  } else {
    res.render("products", { product: targetProducts });
  }
});

// router.get("*", function (req, res) {
//   res.render("notfound");
// });

module.exports = router;
