var students = [
  {
    name: "John Smith",
    age: 20,
    grade: "A",
    address: "Kathmandu",
    contact: "9841xxxxxx",
  },
  {
    name: "Sita Gurung",
    age: 21,
    grade: "B",
    address: "Pokhara",
    contact: "9812xxxxxx",
  },
  {
    name: "Michael Sharma",
    age: 19,
    grade: "C",
    address: "Biratnagar",
    contact: "9863xxxxxx",
  },
  {
    name: "Ram Bahadur Thapa",
    age: 22,
    grade: "B",
    address: "Chitwan",
    contact: "9804xxxxxx",
  },
  {
    name: "David Rai",
    age: 20,
    grade: "A",
    address: "Butwal",
    contact: "9821xxxxxx",
  },
  {
    name: "Gita Tamang",
    age: 21,
    grade: "C",
    address: "Dharan",
    contact: "9851xxxxxx",
  },
  {
    name: "Daniel Joshi",
    age: 22,
    grade: "A",
    address: "Nepalgunj",
    contact: "9867xxxxxx",
  },
  {
    name: "Asha Devi",
    age: 19,
    grade: "B",
    address: "Birgunj",
    contact: "9818xxxxxx",
  },
  {
    name: "Robert Thapa",
    age: 20,
    grade: "A",
    address: "Hetauda",
    contact: "9845xxxxxx",
  },
  {
    name: "Sunita Rai",
    age: 21,
    grade: "C",
    address: "Janakpur",
    contact: "9803xxxxxx",
  },
];

// Using for...of loop to iterate over the students array
function displayStudents() {
  var container = document.getElementById("studentsContainer");
  var records = "";

  // Generate records for each student
  for (const student of students) {
    records +=
      "<div class='student'>" +
      "<h3>Name: " +
      student.name +
      "</h3>" +
      "<p>Age: " +
      student.age +
      "</p>" +
      "<p>Grade: " +
      student.grade +
      "</p>" +
      "<p>Address: " +
      student.address +
      "</p>" +
      "<p>Contact: " +
      student.contact +
      "</p>" +
      "</div>";
  }

  container.innerHTML = records;
}

// Call the function to display students
displayStudents();
