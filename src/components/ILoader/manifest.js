module.exports = {
	name: 'loader',
	slots: [
		{
			name: 'default',
			description: 'Slot for default loader content',
			type: []
		}
	],
	props: [
		{
			name: 'color',
			description: 'The color variant of the loader',
			type: [
				'primary',
				'success',
				'light',
				'dark',
				'info',
				'success',
				'warning',
				'danger'
			],
			default: 'light'
		},
		{
			name: 'size',
			description: 'The size variant of the loader',
			type: [
				'sm',
				'md',
				'lg',
				'auto'
			],
			default: 'md'
		}
	],
	styles: [
		{
			name: 'animation-duration',
			description: 'The animation duration of the loader component',
			default: '1.2s'
		},
		{
			name: 'size',
			description: 'The size of the loader component',
			type: 'size',
			default: '64px'
		},
		{
			name: 'background',
			description: 'The background of the loader component',
			type: 'color',
			variants: {
				primary: 'color(\'primary\')',
				light: 'color(\'light\')',
				dark: 'color(\'dark\')'
			}
		}
	]
};