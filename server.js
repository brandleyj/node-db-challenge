const express = require("express");
const helmet = require("helmet");

const projectRouter = require("./router/projects/projects-router");
const taskRouter = require("./router/tasks/tasks-router");
const resourceRouter = require("./router/resources/resources-router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use("/api/projects", projectRouter);
server.use("/api/tasks", taskRouter);
server.use("/api/resources", resourceRouter);

server.get("/", (req, res) => {
	return res.send("<h1>DB Challenge Sprint</h1>");
});

module.exports = server;
