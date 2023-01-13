import { FC } from 'react'

interface IAccount {
	nickname: string
	balance: number
	setBalance: React.Dispatch<React.SetStateAction<number>>
}

const Account: FC<IAccount> = ({ balance, setBalance, nickname }) => {
	return (
		<div className="flex p-4 justify-center bg-navbar rounded text-center max-w-xs w-full">
			<div className="flex justify-center items-center gap-4 flex-col">
				<img
					src="/src/assets/img/avatarka.jpg"
					alt="user_logo"
					width={50}
					height={50}
					className="rounded-xl"
				/>
				<h3 className="username text-3xl text-[#74fffa]">{nickname}</h3>
				<div>
					<span className="balance text-4xl">{balance}</span>
				</div>
			</div>
		</div>
	)
}

export default Account
