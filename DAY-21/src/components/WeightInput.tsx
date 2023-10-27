import React from 'react';

type WeightInputProps = {
	setWeight: React.Dispatch<React.SetStateAction<number>>;
}

export const WeightInput = ({ setWeight }: WeightInputProps): React.ReactElement => {

	const onChangeWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
		setWeight(+e.target.value);
	}

	return (
		<div>
			<label htmlFor="weight">น้ำหนักของคุณ:</label>
			<input style={{ width: 100 }} type="number" id="weight" placeholder='น้ำหนัก' onChange={onChangeWeight} />
			<label>กิโลกรัม</label>
		</div>
	);
}
