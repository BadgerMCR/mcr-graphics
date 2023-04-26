module.exports = {
	name: "Lower Third - Football",
	description: "Displays a lower third for a football game",
	category: "Football",
	icon: "user",
	hasEntries: true,
	multipleVisibleEntries: false,

	//default: {
		//style: {
			//horizontal_position: "left",
			//vertical_position: "bottom",
			//width: "50"
		//}
	//},

	entry_props: [
		{
			name: "l3fName",
			description: " Name",
			type: "String"
		},

		{
			name: "l3ftitle",
			description: "job/career",
			type: "String"
		}
	],
	vue_template: getFile("template.html").toString(),
	css: getFile("style.css").toString()
}
