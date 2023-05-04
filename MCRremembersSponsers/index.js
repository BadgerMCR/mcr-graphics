module.exports = {
	name: "MCRremembersSponsers",
	description: "Top right hand bug for MCR Logos",
	category: "Football",
	icon: "image",
	hasEntries: true,
	multipleVisibleEntries: false,
	default: {
		style: {
			horizontal_position: "center",
			vertical_position: "center",
			global_padding: "",
			widget_offset: "",
			width: "100",
			height: "100",
			widget_padding: "0"
		},
	},
	entry_props: [
		{
			name: "image1",
			description: "Show the Sponsor Logo 1",
			type: "ImageFile"
		},
		{
			name: "image2",
			description: "Show the Sponsor Logo 2",
			type: "ImageFile"
		},
		{
			name: "image3",
			description: "Show the Sponsor Logo 3",
			type: "ImageFile"
		},
		{
			name: "image4",
			description: "Show the Sponsor Logo 4",
			type: "ImageFile"
		},
		{
			name: "image5",
			description: "Show the Sponsor Logo 5",
			type: "ImageFile"
		},
		{
			name: "image6",
			description: "Show the Sponsor Logo 6",
			type: "ImageFile"
		},
		{
			name: "image7",
			description: "Show the Sponsor Logo 7",
			type: "ImageFile"
		},
		{
			name: "image8",
			description: "Show the Sponsor Logo 8",
			type: "ImageFile"
		},
		{
			name: "image9",
			description: "Show the Sponsor Logo 9",
			type: "ImageFile"
		},
		{
			name: "image10",
			description: "Show the Sponsor Logo 10",
			type: "ImageFile"
		},
		{
			name: "image11",
			description: "Show the Sponsor Logo 11",
			type: "ImageFile"
		},
		{
			name: "image12",
			description: "Show the Sponsor Logo 12",
			type: "ImageFile"
		},
		{
			name: "image113",
			description: "Show the Sponsor Logo 13",
			type: "ImageFile"
		},
		{
			name: "image14",
			description: "Show the Sponsor Logo 14",
			type: "ImageFile"
		},
		{
			name: "image15",
			description: "Show the Sponsor Logo 15",
			type: "ImageFile"
		},
		{
			name: "image16",
			description: "Show the Sponsor Logo 16",
			type: "ImageFile"
		},
		{
			name: "image17",
			description: "Show the Sponsor Logo 17",
			type: "ImageFile"
		},
		{
			name: "image18",
			description: "Show the Sponsor Logo 18",
			type: "ImageFile"
		},
		{
			name: "image19",
			description: "Show the Sponsor Logo 19",
			type: "ImageFile"
		},
		{
			name: "image20",
			description: "Show the Sponsor Logo 20",
			type: "ImageFile"
		},

	],


	vue_template: getFile("MCRremembersSponsers.html").toString(),
	vue_component: getFile("component.js").toString(),
	css: getFile("style.css").toString()
}

