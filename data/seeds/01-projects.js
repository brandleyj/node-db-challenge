exports.seed = function(knex) {
	return knex("projects")
		.truncate()
		.then(function() {
			return knex("projects").insert([
				{
					name: "Cook breakfast",
					description: "Cook bacon, eggs and toast",
					completed: true
				},
				{
					name: "Make cornhole board",
					description: "Make a board from scratch",
					completed: false
				},
				{
					name: "Build a computer",
					description: "Buy parts and put together",
					completed: false
				}
			]);
		});
};
