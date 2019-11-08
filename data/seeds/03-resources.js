exports.seed = function(knex) {
	return knex("resources")
		.truncate()
		.then(function() {
			return knex("resources").insert([
				{ name: "eggs", description: "food" },
				{ name: "milk", description: "food" },
				{ name: "bacon", description: "food" },
				{ name: "bread", description: "food" },
				{ name: "wood", description: "cornhole hardware" },
				{ name: "nails", description: "cornhole hardware" },
				{ name: "bolts", description: "cornhole hardware" },
				{ name: "nuts", description: "cornhole hardware" },
				{ name: "MOBO", description: "computer parts" },
				{ name: "CPU", description: "computer parts" },
				{ name: "CPU cooler", description: "computer parts" },
				{ name: "PSU", description: "computer parts" },
				{ name: "RAM", description: "computer parts" },
				{ name: "SSD", description: "computer parts" },
				{ name: "RGB", description: "computer parts" }
			]);
		});
};
