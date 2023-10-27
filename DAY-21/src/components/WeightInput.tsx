import React from 'react';

type WeightInputProps = {
	setWeight: React.Dispatch<React.SetStateAction<number>>;
}

export const WeightInput = ({ setWeight }: WeightInputProps): React.ReactElement => {

	const onChangeWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
		setWeight(+e.target.value);
	}

	return (
		<div className='form-control'>
			<label htmlFor="weight">น้ำหนักของคุณ:</label>
			<div style={{display:'flex', alignItems:'center'}}>
				<input style={{ width: 100 }} type="number" id="weight" placeholder='น้ำหนัก' onChange={onChangeWeight} />
				<label style={{ marginInlineStart: '10px'}}>กก.</label>
			</div>
		</div>
	);
}
