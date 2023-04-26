module.exports = {
	name: "LTeamSheet",
	description: "Team Sheet for the Legends",
	category: "Football",
	icon: "user",
	hasEntries: true,
	multipleVisibleEntries: false,
	default: {
		style: {
			horizontal_position: "center",
			vertical_position: "center",
			width: "100",
			height: '100'
		}
	},
	entry_props: [
		{
			name: "Lgk",
			description: "GoalKeeper Number",
			type: "String"
		},
		{
			name: "Lgkname",
			description: "GoalKeeper Name",
			type: "String"
		},
		{
			name: "Lrb",
			description: "Right Back Number",
			type: "String"
		},
		{
			name: "Lrbname",
			description: "Right Back Name",
			type: "String"
		},
		{
			name: "Lcb1",
			description: "Centre Back 1 Number",
			type: "String"
		},
		{
			name: "Lcb1name",
			description: "Centre Back 1 Name",
			type: "String"
		},
		{
			name: "Lcb2",
			description: "Centre Back 2 Number",
			type: "String"
		},
		{
			name: "Lcb2name",
			description: "Centre Back 2 Name",
			type: "String"
		},
		{
			name: "Lcb3",
			description: "Centre Back 3 Number",
			type: "String"
		},
		{
			name: "Lcb3name",
			description: "Centre Back 3 Name",
			type: "String"
		},
		{
			name: "Llb",
			description: "Left Back Number",
			type: "String"
		},
		{
			name: "Llbname",
			description: "Left Back Name",
			type: "String"
		},
		{
			name: "Lrm",
			description: "Right Midfielder Number",
			type: "String"
		},
		{
			name: "Lrmname",
			description: "Right Midfielder Name",
			type: "String"
		},
		{
			name: "Lcdm",
			description: "Centre Defensive Midfielder Number",
			type: "String"
		},
		{
			name: "Lcdmname",
			description: "Centre Defensive Midfielder Name",
			type: "String"
		},
		{
			name: "Lcm1",
			description: "Centre Midfielder 1 Number",
			type: "String"
		},
		{
			name: "Lcm1name",
			description: "Centre Midfielder 1 Name",
			type: "String"
		},
		{
			name: "Lcm2",
			description: "Centre Midfielder 2 Number",
			type: "String"
		},
		{
			name: "Lcm2name",
			description: "Centre Midfielder 2 Name",
			type: "String"
		},
		{
			name: "Lcm3",
			description: "Centre Midfielder 3 Number",
			type: "String"
		},
		{
			name: "Lcm3name",
			description: "Centre Midfielder 3 Name",
			type: "String"
		},
		{
			name: "Lcam",
			description: "Centre Attacking Midfielder Number",
			type: "String"
		},
		{
			name: "Lcamname",
			description: "Centre Attacking Midfielder Name",
			type: "String"
		},
		{
			name: "Llm",
			description: "Left Midfielder Number",
			type: "String"
		},
		{
			name: "Llmname",
			description: "Left Midfielder Name",
			type: "String"
		},
		{
			name: "Lrw",
			description: "Right Wing Number",
			type: "String"
		},
		{
			name: "Lrwname",
			description: "Right Wing Name",
			type: "String"
		},
		{
			name: "Lst1",
			description: "Striker 1 Number",
			type: "String"
		},
		{
			name: "Lst1name",
			description: "Striker 1 Name",
			type: "String"
		},
		{
			name: "Lst2",
			description: "Striker 2 Number",
			type: "String"
		},
		{
			name: "Lst2name",
			description: "Striker 2 Name",
			type: "String"
		},
		{
			name: "Lst3",
			description: "Striker 3 Number",
			type: "String"
		},
		{
			name: "Lst3name",
			description: "Striker 3 Name",
			type: "String"
		},
		{
			name: "Llw",
			description: "Left Wing Number",
			type: "String"
		},
		{
			name: "Llwname",
			description: "Left Wing Name",
			type: "String"
		},
		{
			name: "LTeamname",
			description: "Team Name",
			type: "String"
		},
		{
			name: "LmanName",
			description: "Manager Name",
			type: "String"
		},
		{
			name: "Lbench1",
			description: "Bench 1 Name",
			type: "String"
		},
		{
			name: "Lbench2",
			description: "Bench 2 Name",
			type: "String"
		},
		{
			name: "Lbench3",
			description: "Bench 3 Name",
			type: "String"
		},
		{
			name: "Lbench4",
			description: "Bench 4 Name",
			type: "String"
		},
		{
			name: "Lbench5",
			description: "Bench 5 Name",
			type: "String"
		},
		{
			name: "Lbench6",
			description: "Bench 6 Name",
			type: "String"
		},
		{
			name: "Lbench7",
			description: "Bench 7 Name",
			type: "String"
		},
		{
			name: "Lbench8",
			description: "Bench 8 Name",
			type: "String"
		},
		{
			name: "Lbench9",
			description: "Bench 9 Name",
			type: "String"
		},
		{
			name: "Lbench10",
			description: "Bench 10 Name",
			type: "String"
		},
		{
			name: "Lbench11",
			description: "Bench 11 Name",
			type: "String"
		},
		{
			name: "Lbench12",
			description: "Bench 12 Name",
			type: "String"
		},
	],
	vue_template: getFile("imgtest.html").toString(),
	//vue_component: getFile("component.js").toString(),
	css: getFile("style.css").toString()
}
