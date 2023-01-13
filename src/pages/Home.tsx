import { useEffect, useState } from 'react'
import Account from '../components/account/Account'
import Game from '../components/game/Game'

const nickname = 'luisa'

const Home = () => {
	const [balance, setBalance] = useState(1001)
	const [sumInput, setSumInput] = useState(1)
	const [chanceInput, setChangeInput] = useState(1)
	const [betProfit, setBetProfit] = useState(0)
	const [chanceNumbers, setChanceNumbers] = useState({
		min: `0 - 0`,
		max: '0 - 0'
	})

	useEffect(() => {
		setChanceNumbers({
			min: `0 - ${chanceInput}`,
			max: `${100 - chanceInput} - 99`
		})

		setBetProfit(+((100 / chanceInput) * +sumInput).toFixed(2))
	}, [chanceInput, sumInput])

	useEffect(() => {
		if (chanceInput > 95 || chanceInput < 1) {
			setChangeInput(95)
		}
	}, [chanceInput])

	return (
		<div className="container  max-w-[1444px] w-full mx-auto mt-5  rounded p-4  flex gap-12 flex-wrap max-md:items-center max-md:justify-center">
			<Account nickname={nickname} balance={balance} setBalance={setBalance} />
			<Game
				betProfit={betProfit}
				setBetProfit={setBetProfit}
				chanceNumbers={chanceNumbers}
				setChanceNumbers={setChanceNumbers}
				balance={balance}
				setBalance={setBalance}
				setSumInput={setSumInput}
				sumInput={sumInput}
				chanceInput={chanceInput}
				setChanceInput={setChangeInput}
			/>
		</div>
	)
}

export default Home
