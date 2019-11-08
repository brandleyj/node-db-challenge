const db = require("../../data/db-config");

module.exports = {
	find,
	findById,
	add
};

function find() {
	return db("projects");
}

function findById(id) {
	return db("projects")
		.where({ id })
		.first();
}

function add(projectData) {
	return db("projects")
		.insert(projectData)
		.then(ids => {
			return findById(ids[0]);
		});
}
