const express = require("express");
const stripe = require("stripe")("sk_test_..."); // your secret key
const app = express();
app.use(express.static("public"));
app.use(express.json());

const products = {
  titanx: { name: "ARZA Titan X", price: 499900 },
  nova: { name: "ARZA Nova", price: 379900 },
  phantom: { name: "ARZA Phantom", price: 289900 },
};

app.post("/create-checkout-session", async (req, res) => {
  const id = req.body.id;
  const product = products[id];

  if (!product) return res.status(400).send("Invalid product");

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: { name: product.name },
          unit_amount: product.price,
        },
        quantity: 1,
      },
    ],
    success_url: `success.html`,
    cancel_url: `cancel.html`,
  });

  res.json({ url: session.url });
});

app.listen(4242, () => console.log("Running on port 4242"));
