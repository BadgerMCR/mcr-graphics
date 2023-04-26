// Receives the widget, widgetModule and entries as props.
export default {
	computed: {
		solidColorStyle() {
			return {
				backgroundColor: this.visibleEntry.props.cardColor
			}
		}
	}
}
