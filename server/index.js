const app = require("express")();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});

app.get("/resume", (req, res) => {
  const file = `${__dirname}/Treavor Gagne - Resume.pdf`;
  res.download(file);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
