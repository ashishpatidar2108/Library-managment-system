const express = require("express");

const userData = require("./data/user.json");

const { books } = require("./data/books.js");
const { users } = userData;

const app = express();

const PORT = 8081;

app.use(express.json());



app.get("/", (req, res) => {
  return res.status(200).json({
    message :"Welcome to the library management system",
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


  if (!user) {
    return res.status(404).json({
      success: false,
      message: `User not found ${id}`,
    });
  }

  // (POST /users handler should be outside GET /users/:id)
});

/**
 * route : /users
 * method : POST
 * description : Create/register a new user
 */
app.post("/users", (req, res) => {
  const { id, name, email, subscriptionType } = req.body;

  if (!id || !name || !email || !subscriptionType) {
    return res.status(400).json({
      success: false,
      message: "id, name, email and subscriptionType are required",
    });
  }

  users.push({
    id,
    name,
    email,
    subscriptionType,
  });

  return res.status(201).json({
    success: false,
    data: "Please provide all the details",
  });
});
const user = users.find((u) => u.id === id);
if (!user) {
  return res.status(404).json({
    success: false,
    message: `User already exist with id ${id}`,
  });
}

users.push({
  id,
  name,
  email,
  subscriptionType,
});

res.status(201).json({
  success: true,
  message: "User created successfully",
});


app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: `User not found ${id}`,
    });
  }


  return res.status(200).json({
    success: true,
    data: user,
  });
});
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { data } = req.body;

  const user = users.find((u) => u.id === id);

  if (!user) {  
    return res.status(404).json({
      success: false,
      message: `User not found ${id}`,
    });
  }
 //
 Object.assign(user, {
    name: name || user.name,
    email: email || user.email,
    subscriptionType: subscriptionType || user.subscriptionType,
  });

  return res.status(200).json({
    success: true,
    message: "User updated successfully",
    data: user,
  });
});
const updatedUser = users.map((u) => u.id === id);
if (each.id === id) {
  return {
    ...each,
    ...data,
  };
}
return each;

res.status(200).json({
  success: true,
  message: "User updated successfully",
  data: updatedUser,
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
