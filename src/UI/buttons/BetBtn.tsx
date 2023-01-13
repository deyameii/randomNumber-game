import React, { FC, useState } from 'react'
import getRandomNumber from '../../api/getRandomNumber'

interface IBetBtn {
	text: string
	type: 'min' | 'max'
	balance: number
	setBalance: React.Dispatch<React.SetStateAction<number>>
	chanceInput: number
	betProfit: number
	setBetProfit: React.Dispatch<React.SetStateAction<number>>
	sumInput: number
	setSumInput: React.Dispatch<React.SetStateAction<number>>
	setResultState: React.Dispatch<
		React.SetStateAction<'money' | 'lose' | 'win' | null | 'waiting'>
	>
	buttonRefs: {
		buttonMin: React.RefObject<HTMLButtonElement>
		buttonMax: React.RefObject<HTMLButtonElement>
	}
}

const BetBtn: FC<IBetBtn> = React.forwardRef(
	({
		text,
		type,
		balance,
		setBalance,
		chanceInput,
		betProfit,
		setBetProfit,
		setSumInput,
		sumInput,
		setResultState,
		buttonRefs
	}) => {
		const [disable, setDisable] = useState(false)
		const [q, setQ] = useState(false)
		const getCurrentRef = () => {
			if (type === 'min') {
				return buttonRefs.buttonMin
			} else if (type === 'max') {
				return buttonRefs.buttonMax
			}
		}

		const disableButtons = () => {
			buttonRefs.buttonMax.current!.disabled = true
			buttonRefs.buttonMin.current!.disabled = true
		}
		const unDisableButtons = () => {
			buttonRefs.buttonMax.current!.disabled = false
			buttonRefs.buttonMin.current!.disabled = false
		}

		const clickOnBetBtn = (event: React.MouseEvent<HTMLElement>) => {
			disableButtons()
			setResultState('waiting')
			if (sumInput > balance) {
				setResultState('money')
			} else {
				if (type === 'min') {
					getRandomNumber().then((num: number) => {
						if (num <= chanceInput) {
							setBalance(prev => +(prev + betProfit - sumInput).toFixed(2))
							setResultState('win')
							unDisableButtons()
						} else {
							setBalance(prev => +prev - sumInput)
							setResultState('lose')
							unDisableButtons()
						}
					})
				} else {
					if (type === 'max') {
						getRandomNumber().then((num: number) => {
							if (num >= (chanceInput - 100) * -1) {
								setBalance(prev => +(prev + betProfit - sumInput).toFixed(2))
								setResultState('win')
								unDisableButtons()
							} else {
								setBalance(prev => +prev - sumInput)
								setResultState('lose')
								unDisableButtons()
							}
						})
					}
				}
			}
		}
		return (
			<button
				disabled={disable}
				ref={getCurrentRef()}
				onClick={clickOnBetBtn}
				type="button"
				data-mdb-ripple="true"
				data-mdb-ripple-color="light"
				className="inline-block px-6 py-2.5 bg-slate-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out disabled:bg-gray-700 disabled:opacity-50"
			>
				{text}
			</button>
		)
	}
)

export default BetBtn
