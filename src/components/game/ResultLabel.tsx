import { FC } from 'react'
import MainSpinner from '../../UI/spinner/MainSpinner'

interface IResultLabel {
	state: 'money' | 'lose' | 'win' | 'waiting' | null
}

const ResultLabel: FC<IResultLabel> = ({ state }) => {
	if (state === 'money') {
		return (
			<div className="py-2 px-2 bg-red-500 rounded mt-2 text-center text-xs  font-normal ">
				Недостаточно средств
			</div>
		)
	}
	if (state === 'win') {
		return (
			<div className="py-2 px-2 bg-green-500 rounded mt-2 text-center text-sm  font-normal">
				Победа
			</div>
		)
	}
	if (state === 'waiting') {
		return <MainSpinner />
	}

	if (state === 'lose') {
		return (
			<div className="py-2 px-2 bg-red-500 rounded mt-2 text-center text-sm  font-normal">
				Поражение
			</div>
		)
	}
	return (
		<div className="py-2 px-2 bg-red-500 rounded mt-2 text-center text-sm opacity-0 font-normal">
			пусто
		</div>
	)
}

export default ResultLabel
