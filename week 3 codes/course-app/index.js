const express = require("express");
const bodyParser = require("body-parser");

app = express();
app.use(bodyParser.json());
const port = 3000;

const generateRandomId = () => {
  return Math.floor(Math.random() * 10000);
};

let ADMINS = [],
  USERS = [],
  COURSES = [];

const findIndex = (arr, id) => {
  for (let index = 0; index < arr.length; index++) {
    if (arr[i].id === id) {
      console.log(arr[i]);
      return i;
    }
  }
};

// app.put("/courses/:id", (req, res) => {
//   const idToBeFind = parseInt(req.params.id);
//   arrIndex = findIndex(COURSES, idToBeFind)
//   const changedData = 
// });

app.post("/courses", (req, res) => {
  console.log(req.body);
  const courseData = {
    id: generateRandomId(),
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    imgLink: req.body.imgLink,
  };
  COURSES.push(courseData);
  res.json(courseData);
});

//for displaying Admins
app.get("/admins", (req, res) => {
  res.json(ADMINS);
});

//for displaying Users
app.get("/users", (req, res) => {
  res.json(USERS);
});

//for displaying Courses
app.get("/courses", (req, res) => {
  res.json(COURSES);
});

app.listen(port, () => console.log(`App is listening to ${port}`));
