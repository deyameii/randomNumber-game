import { FC, useRef, useState } from 'react'
import BetBtn from '../../UI/buttons/BetBtn'
import ResultLabel from './ResultLabel'

interface IBetProfit {
	value: number
	setChanceNumbers: React.Dispatch<
		React.SetStateAction<{
			min: string
			max: string
		}>
	>
	chanceNumbers: {
		min: string
		max: string
	}

	balance: number
	setBalance: React.Dispatch<React.SetStateAction<number>>

	chanceInput: number

	betProfit: number
	setBetProfit: React.Dispatch<React.SetStateAction<number>>

	sumInput: number
	setSumInput: React.Dispatch<React.SetStateAction<number>>
}

const BetProfit: FC<IBetProfit> = ({
	value,
	chanceNumbers,
	setChanceNumbers,
	chanceInput,
	balance,
	setBalance,
	betProfit,
	setBetProfit,
	setSumInput,
	sumInput
}) => {
	const [resultState, setResultState] = useState<
		'money' | 'lose' | 'win' | 'waiting' | null
	>(null)

	// const buttonMin = useRef<HTMLButtonElement>(null)
	// const buttonMax = useRef<HTMLButtonElement>(null)
	const buttonRefs = {
		buttonMin: useRef<HTMLButtonElement>(null),
		buttonMax: useRef<HTMLButtonElement>(null)
	}

	return (
		<div>
			<h2 className="numbers text-center">{value}</h2>
			<div className="text-center text-sm font-medium mt-1 opacity-40">
				Возможный выигрыш
			</div>
			<div className="flex gap-4 mt-10">
				<div className="flex flex-col">
					<span className="text-xs text-center font-normal opacity-60 mb-1">
						{chanceNumbers.min}
					</span>
					<BetBtn
						buttonRefs={buttonRefs}
						setResultState={setResultState}
						setSumInput={setSumInput}
						sumInput={sumInput}
						betProfit={betProfit}
						setBetProfit={setBetProfit}
						text="Меньше"
						type="min"
						balance={balance}
						chanceInput={chanceInput}
						setBalance={setBalance}
					/>
				</div>
				<div className="flex flex-col">
					<span className="text-xs text-center font-normal opacity-60 mb-1">
						{chanceNumbers.max}
					</span>
					<BetBtn
						buttonRefs={buttonRefs}
						setResultState={setResultState}
						setSumInput={setSumInput}
						sumInput={sumInput}
						betProfit={betProfit}
						setBetProfit={setBetProfit}
						text="Больше"
						type="max"
						balance={balance}
						chanceInput={chanceInput}
						setBalance={setBalance}
					/>
				</div>
			</div>
			<ResultLabel state={resultState} />
		</div>
	)
}

export default BetProfit
