import { FC } from 'react'
import BetProfit from './BetProfit'
import MathField from './MathField'

interface IGame {
	betProfit: number
	setBetProfit: React.Dispatch<React.SetStateAction<number>>

	balance: number
	setBalance: React.Dispatch<React.SetStateAction<number>>

	sumInput: number
	setSumInput: React.Dispatch<React.SetStateAction<number>>

	chanceInput: number
	setChanceInput: React.Dispatch<React.SetStateAction<number>>

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
}

const Game: FC<IGame> = ({
	balance,
	setBalance,
	setSumInput,
	sumInput,
	chanceInput,
	setChanceInput,
	chanceNumbers,
	setChanceNumbers,
	betProfit,
	setBetProfit
}) => {
	const changeSumInput = (valueInput: number) => {
		if (valueInput < 1) {
			setSumInput(1)
		} else if (isFinite(valueInput)) {
			setSumInput(valueInput)
		} else {
			setSumInput(1)
		}
	}

	const changeChanceInput = (valueInput: number) => {
		if (valueInput > 95) {
			setChanceInput(50)
		} else {
			if (isFinite(valueInput)) {
				setChanceInput(+valueInput)
			} else {
				setChanceInput(1)
			}
		}
	}

	return (
		<div className="flex flex-col max-w-4xl w-full bg-navbar rounded py-4 px-14 font-bold">
			<h2>Игра</h2>
			<div className="flex flex-wrap justify-between max-md:justify-center items-center">
				<div className="w-1/2 p-4 ">
					<div className="flex justify-center gap-12">
						<MathField
							balance={balance}
							setter={setSumInput}
							inputFn={changeSumInput}
							inputValue={sumInput}
							text="Сумма"
						/>
						<MathField
							balance={balance}
							setter={setChanceInput}
							inputFn={changeChanceInput}
							inputValue={chanceInput}
							text="Процент"
						/>
					</div>
				</div>
				<BetProfit
					setSumInput={setSumInput}
					sumInput={sumInput}
					betProfit={betProfit}
					setBetProfit={setBetProfit}
					balance={balance}
					chanceInput={chanceInput}
					setBalance={setBalance}
					value={betProfit}
					chanceNumbers={chanceNumbers}
					setChanceNumbers={setChanceNumbers}
				/>
			</div>
		</div>
	)
}

export default Game
