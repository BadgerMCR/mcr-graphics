module.exports = {
	name: "CTeamSheet",
	description: "Team Sheet for the Celebrities",
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
			name: "Cgk",
			description: "GoalKeeper Number",
			type: "String"
		},
		{
			name: "Cgkname",
			description: "GoalKeeper Name",
			type: "String"
		},
		{
			name: "Crb",
			description: "Right Back Number",
			type: "String"
		},
		{
			name: "Crbname",
			description: "Right Back Name",
			type: "String"
		},
		{
			name: "Ccb1",
			description: "Centre Back 1 Number",
			type: "String"
		},
		{
			name: "Ccb1name",
			description: "Centre Back 1 Name",
			type: "String"
		},
		{
			name: "Ccb2",
			description: "Centre Back 2 Number",
			type: "String"
		},
		{
			name: "Ccb2name",
			description: "Centre Back 2 Name",
			type: "String"
		},
		{
			name: "Ccb3",
			description: "Centre Back 3 Number",
			type: "String"
		},
		{
			name: "Ccb3name",
			description: "Centre Back 3 Name",
			type: "String"
		},
		{
			name: "Clb",
			description: "Left Back Number",
			type: "String"
		},
		{
			name: "Clbname",
			description: "Left Back Name",
			type: "String"
		},
		{
			name: "Crm",
			description: "Right Midfielder Number",
			type: "String"
		},
		{
			name: "Crmname",
			description: "Right Midfielder Name",
			type: "String"
		},
		{
			name: "Ccdm",
			description: "Centre Defensive Midfielder Number",
			type: "String"
		},
		{
			name: "Ccdmname",
			description: "Centre Defensive Midfielder Name",
			type: "String"
		},
		{
			name: "Ccm1",
			description: "Centre Midfielder 1 Number",
			type: "String"
		},
		{
			name: "Ccm1name",
			description: "Centre Midfielder 1 Name",
			type: "String"
		},
		{
			name: "Ccm2",
			description: "Centre Midfielder 2 Number",
			type: "String"
		},
		{
			name: "Ccm2name",
			description: "Centre Midfielder 2 Name",
			type: "String"
		},
		{
			name: "Ccm3",
			description: "Centre Midfielder 3 Number",
			type: "String"
		},
		{
			name: "Ccm3name",
			description: "Centre Midfielder 3 Name",
			type: "String"
		},
		{
			name: "Ccam",
			description: "Centre Attacking Midfielder Number",
			type: "String"
		},
		{
			name: "Ccamname",
			description: "Centre Attacking Midfielder Name",
			type: "String"
		},
		{
			name: "Clm",
			description: "Left Midfielder Number",
			type: "String"
		},
		{
			name: "Clmname",
			description: "Left Midfielder Name",
			type: "String"
		},
		{
			name: "Crw",
			description: "Right Wing Number",
			type: "String"
		},
		{
			name: "Crwname",
			description: "Right Wing Name",
			type: "String"
		},
		{
			name: "Cst1",
			description: "Striker 1 Number",
			type: "String"
		},
		{
			name: "Cst1name",
			description: "Striker 1 Name",
			type: "String"
		},
		{
			name: "Cst2",
			description: "Striker 2 Number",
			type: "String"
		},
		{
			name: "Cst2name",
			description: "Striker 2 Name",
			type: "String"
		},
		{
			name: "Cst3",
			description: "Striker 3 Number",
			type: "String"
		},
		{
			name: "Cst3name",
			description: "Striker 3 Name",
			type: "String"
		},
		{
			name: "Clw",
			description: "Left Wing Number",
			type: "String"
		},
		{
			name: "Clwname",
			description: "Left Wing Name",
			type: "String"
		},
		{
			name: "CTeamname",
			description: "Team Name",
			type: "String"
		},
		{
			name: "CmanName",
			description: "Manager Name",
			type: "String"
		},
		{
			name: "Cbench1",
			description: "Bench 1 Name",
			type: "String"
		},
		{
			name: "Cbench2",
			description: "Bench 2 Name",
			type: "String"
		},
		{
			name: "Cbench3",
			description: "Bench 3 Name",
			type: "String"
		},
		{
			name: "Cbench4",
			description: "Bench 4 Name",
			type: "String"
		},
		{
			name: "Cbench5",
			description: "Bench 5 Name",
			type: "String"
		},
		{
			name: "Cbench6",
			description: "Bench 6 Name",
			type: "String"
		},
		{
			name: "Cbench7",
			description: "Bench 7 Name",
			type: "String"
		},
		{
			name: "Cbench8",
			description: "Bench 8 Name",
			type: "String"
		},
		{
			name: "Cbench9",
			description: "Bench 9 Name",
			type: "String"
		},
		{
			name: "Cbench10",
			description: "Bench 10 Name",
			type: "String"
		},
		{
			name: "Cbench11",
			description: "Bench 11 Name",
			type: "String"
		},
		{
			name: "Cbench12",
			description: "Bench 12 Name",
			type: "String"
		},
	],
	vue_template: getFile("imgtest.html").toString(),
	//vue_component: getFile("component.js").toString(),
	css: getFile("style.css").toString()
}
