const exspress = require("express");

const app = exspress();

const PORT = 8081;

app.use(exspress.json());

app.get("/", (req, res) => {
  res.send("Welcome to the library management system");
  res.status(200).json({
    message: "Welcome to the library management system",
  });

  app.all("*", (req, res) => {
    res.status(404).json({
      message: "Route not found",
    });
  });

});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});