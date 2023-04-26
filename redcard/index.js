module.exports = {
	name: "redcard-football",
	description: "lower third with red card",
	category: "Football",
	icon: "user",
	hasEntries: true,
	multipleVisibleEntries: false,

	default: {
		style: {
			"horizontal_position": "left",
			"vertical_position": "bottom",
			"width": "100",
			"height": "50"
		  },
	},

	props: 	[	

],

	entry_props: [
		{
			name: "playerName",
			description: "player Name",
			type: "String"
		},
		{
			name: "teamName5",
			description: "teamName5",
			type: "String"
		},
		{
			name: "cardColor",  //COLOUR INPUT A
			description: "Card color",
			type: "ColorPicker"
			
		},


	],
	vue_component: getFile("component.js").toString(),
	vue_template: getFile("index.html").toString(),
	css: getFile("style.css").toString()
}
