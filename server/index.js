const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./src/routes/user-router");
const cartRouter = require("./src/routes/cart-router");
const authRouter = require("./src/routes/auth-router");
const orderRouter = require("./src/routes/order-router");
const stripeRouter = require("./src/routes/stripe-router");
const productsRouter = require("./src/routes/product-router");

const dotenv = require("dotenv");

dotenv.config();
const connectDB = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://mern:test12345@ecommerce.m34kr.mongodb.net/shop?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Successfully connected to Mongo DB");
  } catch (error) {
    console.log(error);
  }
};
connectDB();
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method token, Access-Control-Request-Headers"
  );
  next();
});

app.use(
  cors({
    origin: "https://bucolic-twilight-22ffee.netlify.app/",
    methods: ["GET", "POST", "DELETE", "PUT"],
  })
);
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/products", productsRouter);
app.use("/api/cart", cartRouter);
app.use("/api/orders", orderRouter);
app.use("/api/stripe", stripeRouter);

app.listen(process.env.PORT, () => {
  console.log("Backend server is running on port 5000");
});
