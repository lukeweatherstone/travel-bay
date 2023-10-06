import dotenv from "dotenv";
dotenv.config();
import express from "express";

import db from "./db.js";

// Our routes
import blogPostRoutes from "./routes/blogPostRoutes.js";

// Connect to data base
db();
const app = express();

app.use(
  express.json({
    verify: (req, res, buf) => {
      req.rawBody = buf.toString();
    },
    limit: "50mb",
  })
);

app.use("/api/blog-posts", blogPostRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
