const express = require("express");

const Tasks = require("./tasks-model");

const router = express.Router();

router.get("/", (req, res) => {
	Tasks.find()
		.then(tasks => {
			res.json(tasks);
		})
		.catch(err => {
			res.status(500).json({ message: "failed to load" });
		});
});

router.get("/:id", (req, res) => {
	const { id } = req.params;

	Tasks.findById(id)
		.then(task => {
			task
				? res.json(task)
				: res.status(404).json({ message: "could not find" });
		})
		.catch(err => {
			res.status(500).json({ message: "could not process request" });
		});
});

router.post("/", (req, res) => {
	let taskData = req.body;

	if (!taskData.completed) {
		taskData = { ...taskData, completed: false };
	}

	Tasks.add(taskData)
		.then(task => {
			res.status(201).json(task);
		})
		.catch(err => {
			res.status(500).json({ message: "could not add task" });
		});
});

module.exports = router;
