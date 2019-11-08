const db = require("../../data/db-config");

module.exports = {
	find,
	findById,
	add
};

function find() {
	return db("tasks").orderBy("project_id");
}

function findById(id) {
	return db("tasks")
		.where({ id })
		.first();
}

function add(taskData) {
	return db("tasks")
		.insert(taskData)
		.then(ids => {
			return findById(ids[0]);
		});
}
