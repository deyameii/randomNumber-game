import { FC } from 'react'
interface IMainBtn {
	text: string
	type: 'x2' | '/2' | 'max' | 'min'
	inputFn: React.Dispatch<React.SetStateAction<number>>
	inputValue: number
	setter: React.Dispatch<React.SetStateAction<number>>
	balance: number
}

const MainBtn: FC<IMainBtn> = ({
	text,
	type,
	inputFn,
	inputValue,
	setter,
	balance
}) => {
	const onClick = () => {
		if (type === 'x2') {
			setter(prev => prev * 2)
		} else if (type === 'max') {
			setter(balance)
		} else if (type === 'min') {
			setter(1)
		} else if (type === '/2') {
			setter(prev => Math.round(prev / 2))
		}
	}

	return (
		<button
			onClick={onClick}
			type="button"
			className="rounded opacity-50 inline-block px-2 py-1 bg-blue-600 text-white font-normal text-xs leading-tight hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
		>
			{text}
		</button>
	)
}

export default MainBtn
