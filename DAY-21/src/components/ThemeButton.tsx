import React from 'react'

type ThemeType = {
	current: string
	btnText: string
}

export const ThemeButton = (): React.ReactElement => {
	const [theme, setTheme] = React.useState<ThemeType>({ current: 'Light', btnText: '🌙' })

	const onChangeTheme = () => {
		setTheme(theme.current === 'Light' ? { current: 'Dark', btnText: '☀️' } : { current: 'Light', btnText: '🌙' })
		if (theme.current === 'Light') {
			document.body.classList.remove('light-mode')
			document.body.classList.add('dark-mode')
		} else {
			document.body.classList.remove('dark-mode')
			document.body.classList.add('light-mode')
		}
	}

	return (
		<div style={{ position: 'fixed', bottom: '50px', right: '50px', display: 'flex', alignItems: 'center', gap: '10px' }}>
			<button onClick={onChangeTheme} className='btn-theme'>{theme.btnText}</button>
		</div>
	)
}