import { FC } from 'react'
import MainBtn from '../../UI/buttons/MainBtn'
import InputMain from '../../UI/inputs/InputMain'

interface IMathField {
	text: string
	balance: number
	setter: React.Dispatch<React.SetStateAction<number>>

	inputFn: React.Dispatch<React.SetStateAction<number>>
	inputValue: number
}

const MathField: FC<IMathField> = ({
	inputFn,
	inputValue,
	text,
	setter,
	balance
}) => {
	return (
		<div>
			<label className="block mb-2 text-sm font-medium text-white">
				{text}
			</label>
			<InputMain
				value={inputValue.toString()}
				onChange={event => inputFn(+event.target.value)}
			/>
			<div className="flex items-center justify-center mt-2">
				<div className="flex flex-wrap gap-1" role="group">
					<MainBtn
						balance={balance}
						setter={setter}
						text="Удвоить"
						type="x2"
						inputFn={inputFn}
						inputValue={inputValue}
					/>
					<MainBtn
						balance={balance}
						setter={setter}
						text="Половина"
						type="/2"
						inputFn={inputFn}
						inputValue={inputValue}
					/>
					<MainBtn
						balance={balance}
						setter={setter}
						text="Макс"
						type="max"
						inputFn={inputFn}
						inputValue={inputValue}
					/>
					<MainBtn
						balance={balance}
						setter={setter}
						text="Мин"
						type="min"
						inputFn={inputFn}
						inputValue={inputValue}
					/>
				</div>
			</div>
		</div>
	)
}

export default MathField
