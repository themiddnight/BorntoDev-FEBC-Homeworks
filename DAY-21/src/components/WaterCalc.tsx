type WaterCalcProps = {
	weight: number
}

export const WaterCalc = ({ weight }: WaterCalcProps): React.ReactElement => {
	if (weight <= 0) weight = 0
	let result = (weight * 2.2 * 30 / 2).toLocaleString(
		'en-US', { minimumFractionDigits: 0, maximumFractionDigits: 3 })
	if (result === '0') result = '...'

	return (
		<div>
			<h2>ควรดื่มน้ำวันละ {result} มิลลิลิตร</h2>
		</div>
	)
}