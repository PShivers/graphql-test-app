const db = require("./db");

const Query = {
  //resolver function for greeting
  greeting: () => {
    return "hello from me typing this again";
  },

  sayHello: (root, args, context, info) =>
    `Hi ${args.name} GraphQL server says Hello to you!!`,

  //resolver function for list of students
  students: () => db.students.list(),

  //resolver function for studentById
  studentById: (root, args, context, info) => {
    //args will contain parameter passed in query
    return db.students.get(args.id);
  },
  setFavouriteColor: (root, args) => {
    return "Your Fav Color is :" + args.color;
  },
};

//for each single student object returned, resolver is invoked
const Student = {
  fullName: (root, args, context, info) => {
    return root.firstName + " " + root.lastName;
  },

  //for each student that is returned we get the associated college by id
  college: (root) => {
    return db.colleges.get(root.collegeId);
  },
};

module.exports = { Query, Student };
