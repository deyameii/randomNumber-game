const MainSpinner = () => {
	return (
		<div className=" bg-background flex gap-2 rounded mt-2 justify-center items-center py-2 px-2 text-center text-sm  font-normal h-9">
			<div className="bg-blue-200  w-2 h-2 rounded-full animate-bounce blue-circle"></div>
			<div className="bg-green-200  w-2 h-2 rounded-full animate-bounce green-circle"></div>
			<div className="bg-red-200  w-2 h-2 rounded-full animate-bounce red-circle"></div>
		</div>
	)
}

export default MainSpinner
