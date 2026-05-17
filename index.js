const express = require("express");


const dotenv = require("dotenv");

dotenv.config();


//importing the routes
const usersRouter = require("./routes/users");
const booksRouter = require("./routes/books");

//import database connection
const dbConnection = require("./databaseconnection");



const app = express();


dbConnection();

const port = 8081;

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to the library management system"
    });
});

app.use("/users", usersRouter);
app.use("/books", booksRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

