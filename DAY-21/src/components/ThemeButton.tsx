import React from 'react'

let themeTxt: string = 'Dark 🌙';

export const ThemeButton = (): React.ReactElement => {
	const [theme, setTheme] = React.useState<string>('light')

	const onChangeTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
		if (theme === 'light') {
			themeTxt = 'Light ☀️'
			document.body.classList.remove('light-mode')
			document.body.classList.add('dark-mode')
		} else {
			themeTxt = 'Dark 🌙'
			document.body.classList.remove('dark-mode')
			document.body.classList.add('light-mode')
		}
	}

	return (
		<div style={{ position: 'fixed', bottom: '50px', right: '50px' }}>
			<button onClick={onChangeTheme} className='btn-theme'>{themeTxt}</button>
		</div>
	)
}