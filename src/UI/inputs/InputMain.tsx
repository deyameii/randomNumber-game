import { FC, useRef } from 'react'

interface IInputMain {
	id?: string
	value: string
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputMain: FC<IInputMain> = ({ value, onChange }) => {
	const sumInputRef = useRef<HTMLInputElement>(null)
	const chanceInputRef = useRef<HTMLInputElement>(null)

	return (
		<input
			onChange={onChange}
			value={value}
			type="text"
			id="sum_input"
			className=" form-control
              block
              w-full
              px-2
          py-1.5
              text-base
              font-normal
              text-white
              bg-navbar bg-clip-padding
              border border-solid border-gray-300
              rounded

              ease-in-out
              m-0
              focus:border-blue-600 focus:outline-none transition-all"
			required
		/>
	)
}

export default InputMain
