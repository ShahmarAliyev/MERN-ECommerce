const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const dotenv = require("dotenv");
const cors = require("cors");
const userRouter = require("./src/routes/user-router");
const cartRouter = require("./src/routes/cart-router");
const authRouter = require("./src/routes/auth-router");
const orderRouter = require("./src/routes/order-router");
const stripeRouter = require("./src/routes/stripe-router");
const productsRouter = require("./src/routes/product-router");

require("dotenv").config({ path: ".env" });

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfully connected to Mongo DB");
  } catch (error) {
    console.log(error);
  }
};
connectDB();
app.use(express.json());
app.use(cors());

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/products", productsRouter);
app.use("/api/cart", cartRouter);
app.use("/api/orders", orderRouter);
app.use("/api/stripe", stripeRouter);

app.listen(process.env.PORT, () => {
  console.log("Backend server is running on port 5000");
});
