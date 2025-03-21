// This is our root server
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
dotenv.config();

import "./config/passport";

// NOTE: FOR THE AUTHENTICATION
import passport from "passport";
import session from "express-session";

import { PORT, SESSION_SECRET } from "./config/env";
import connectDB from "./config/mongodb";

// NOTE: IMPORTING ALL ROUTES HERE
import authRouter from "./routes/auth.routes";
import categoryRouter from "./routes/category.routes";
import errorMiddleware from "./middlewares/error.middleware";
import reviewsRouter from "./routes/reviews.routes";
import productRoute from "./routes/product.routes";

const app = express();

// NOTE: SOME USEFU; MIDDLEWARES
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

app.use(
  session({
    secret: SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// TODO: DEFINING THE ROUTES
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/products", productRoute);
app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/reviews", reviewsRouter);

app.get("/", function (req, res) {
  res.send("This is the homepage");
});

app.use(errorMiddleware);

// CREATING THE RUNNING SERVER
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await connectDB();
});
