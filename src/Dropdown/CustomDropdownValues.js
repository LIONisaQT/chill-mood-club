// sauce: https://github.com/dbilgili/Custom-ReactJS-Dropdown-Components

const navy = '#2C3281';
const lightPurple = '#ACA7E8';
const lightPurpleFade = '#ACA7E857';
const lightYellow = '#FFE0B1';

module.exports = {
	styles: {
		wrapper: {
			color: navy,
			fontSize: 'medium',
			width: '100%',
		},
		header: {
			color: lightYellow,
			background: lightPurpleFade,
			border: 'none',
			borderRadius: '6px',
		},
		headerTitle: { 'fontWeight': 'normal' },
		// headerArrowUpIcon: { color: 'red' },
		// headerArrowDownIcon: { color: 'blue' },
		// checkIcon: { color: 'red' },
		list: {
			boxShadow: '0 0',
			WebkitBoxShadow: 0,
			background: 'transparent',
			border: 'none',
		},
		scrollList: {
			border: `2px solid ${lightPurpleFade}`,
			padding: '0',
			background: navy,
			borderRadius: '6px',
			maxHeight: '100%',
			overflow: 'hidden'
		},
		listItem: {
			color: lightPurple,
			fontSize: 'medium',
			fontWeight: 'normal',
			borderRadius: '6px',
		},
	},
	onClick: function(item, name) {
		console.log(item);
	}
}
