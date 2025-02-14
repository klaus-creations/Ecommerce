// This is our root server
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
dotenv.config();

// NOTE: FOR BETTER-AUTH
import { auth } from "./lib/auth";
import { toNodeHandler } from "better-auth/node";

const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());

app.all("/api/auth/*", toNodeHandler(auth));

// TODO: DEFINING THE ROUTES

app.get("/", function (req, res) {
  res.send("This is the homepage");
});

const port = process.env.PORT || 3000;

// CREATI THE RUNNING SERVER
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//TODO:  to check oue server is running we write curl localhost:8000o on the other terminal
