const exspress = require("express");

const { users } = require("./data/user.json");

const app = exspress();

const PORT = 8081;

app.use(exspress.json());

// Health / Welcome route
app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Welcome to the library management system",
  });
});

/**
 * route : /users
 * method : GET
 * description : Get all users
 * access : public
 * parameters : none
 */
app.get("/users", (req, res) => {
  return res.status(200).json({
    success: "true",
    data: users,
  });
});

/**
 * route : /users/:id
 * method : GET
 * description : Get user by ID
 * access : public
 */
app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((u) => u.id === id);

  return res.status(200).json({
    success: "true",
    data: user,
  });
});

// 404 handler
app.use((req, res) => {
  return res.status(404).json({
    message: "Route not found",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
