const stripeRouter = require("express").Router();
require("dotenv").config({ path: "./.env" });

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

stripeRouter.post("/create-checkout-session", async (req, res) => {
  const line_items = req.body.cartProducts.map((cartProduct) => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: cartProduct.title,
          images: [cartProduct.img],
          description: cartProduct.desc,
          metadata: {
            id: cartProduct._id,
          },
        },
        unit_amount: cartProduct.price * 100,
      },
      quantity: cartProduct.quantity,
    };
  });
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items,
    mode: "payment",
    success_url: "https://mern-board-ecommerce.herokuapp.com/checkout-success",
    cancel_url: "https://mern-board-ecommerce.herokuapp.com/cart",
  });

  res.send({ url: session.url });
});

module.exports = stripeRouter;
