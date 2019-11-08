exports.seed = function(knex) {
	return knex("tasks")
		.truncate()
		.then(function() {
			return knex("tasks").insert([
				{
					description: "Scramble eggs",
					notes: "Add cheese near end",
					completed: false,
					project_id: 1
				},
				{
					description: "Toast bread",
					notes: "Don't toast too much or you'll get yelled at",
					completed: false,
					project_id: 1
				},
				{
					description: "Cook bacon",
					notes: "Nice and crispy",
					completed: false,
					project_id: 1
				},
				{
					description: "Buy wood, nails, bolts and nuts",
					notes: "2 nuts and 2 bolts for legs to be able to swing",
					completed: false,
					project_id: 2
				},
				{
					description: "Cut wood to length",
					notes: "Cut hole and cut the leg at an angle for more secure footing",
					completed: false,
					project_id: 2
				},
				{
					description: "Assemble boards with parts",
					notes: "Use a Nail gun if available",
					completed: false,
					project_id: 2
				},
				{
					description: "Buy all computer parts",
					notes: "Need PSU, MOBO, GPU, CPU, CPU cooler, SSD, RAM, RGB",
					completed: false,
					project_id: 3
				},
				{
					description: "Clean building surface and put all parts on surface",
					notes:
						"Make sure surface is clean and have PSU on touching from time to time to take static away from your body",
					completed: false,
					project_id: 3
				},
				{
					description: "Assemble computer and install OS",
					notes: "Carefully assemble",
					completed: false,
					project_id: 3
				}
			]);
		});
};
