const { DataStore } = require("notarealdb");

const store = new DataStore("./data");

//this is a comment
module.exports = {
	students: store.collection("students"),
	colleges: store.collection("colleges"),
};
