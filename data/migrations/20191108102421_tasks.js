exports.up = function(knex) {
	return knex.schema.createTable("tasks", tbl => {
		tbl.increments();
		tbl.string("description").notNullable();
		tbl.string("notes");
		tbl.boolean("completed");
		tbl
			.integer("project_id")
			.unsigned()
			.notNullable()
			.references("id")
			.inTable("projects")
			.onUpdate("CASCADE")
			.onDelete("CASCADE");
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists("tasks");
};
