import { useState } from "react";
import Button from '@mui/material/Button';
import {Button as Btn} from "@/components/ui/button"

function App() {
	const [count, setCount] = useState<number>(0);

	const handleClick = () => {
		setCount((prev) => prev + 1);
	};

	return (
		<>
			<div className="text-red-400 bg-red-500 h-[100vh] flex flex-col gap-4 items-center justify-center">
				<p className="bg-amber-50 p-5">{count}</p>
				<Button onClick={handleClick} className="bg-amber-400">Click me heahahhahahah</Button>
				<Btn onClick={handleClick} className="bg-amber-400">Click me heahahhahahah</Btn>
			</div>
		</>
	);
}

export default App;
