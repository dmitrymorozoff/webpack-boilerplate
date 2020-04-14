import * as express from "express";

const app = express();

app.use(
  express.static("client/assets", {
    maxAge: "30d",
  })
);

app.get("*", async (req, res, next) => {
  res.send(``);
});

app.listen(process.env.PORT || 3000, () => {
  console.info(`Server (${process.pid}) running on port ${process.env.PORT}`);
});
