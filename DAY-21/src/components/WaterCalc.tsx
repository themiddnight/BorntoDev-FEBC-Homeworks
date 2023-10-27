type WaterCalcProps = {
	weight: number
}

export const WaterCalc = ({ weight }: WaterCalcProps): React.ReactElement => {
	if (weight <= 0) weight = 0
	const result = weight * 2.2 * 30 / 2
	let resultStr: string = result.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 3 })
	if (resultStr === '0') resultStr = '...'

	const glasses = Math.round(result / 250)
	let glassesStr: string = glasses.toString()
	if (glassesStr === '0') glassesStr = '...'

	return (
		<div>
			<h2>ควรดื่มวันละ {resultStr} มิลลิลิตร</h2>
			<p style={{ marginTop: 10 }}>หรือประมาณ {glassesStr} แก้ว/วัน</p>
		</div>
	)
}