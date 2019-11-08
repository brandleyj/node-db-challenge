const express = require("express");

const Projects = require("./projects-model");

const router = express.Router();

router.get("/", (req, res) => {
	Projects.find()
		.then(projects => {
			res.json(projects);
		})
		.catch(err => {
			res.status(500).json({ message: "failed to get projects" });
		});
});

router.get("/:id", (req, res) => {
	const { id } = req.params;

	Projects.findById(id)
		.then(project => {
			project
				? res.json(project)
				: res.status(404).json({ message: "Could not find project" });
		})
		.catch(err => {
			res.status(500).json({ message: `${err} -- failed to load` });
		});
});

router.post("/", (req, res) => {
	let projectData = req.body;

	if (!projectData.completed) {
		projectData = { ...projectData, completed: false };
	}

	Projects.add(projectData)
		.then(project => {
			res.status(201).json(project);
		})
		.catch(err => {
			res.status(500).json({ message: "Could not add project" });
		});
});

module.exports = router;
