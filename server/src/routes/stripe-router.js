const stripeRouter = require("express").Router();
require("dotenv").config();

const stripe = require("stripe")(
  "sk_test_51KMRQSJIocWJmNbIFEDo5wieUq3pTNz2sDg0CFqvuHcBUbM65IU1PWn0V6Jj1fa1HLihD3YDkgsSoQNJi3A3Q0k2002ATsn947"
);

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
    success_url: "https://boardmern.herokuapp.com/checkout-success",
    cancel_url: "https://boardmern.herokuapp.com/cart",
  });

  res.send({ url: session.url });
});

module.exports = stripeRouter;
