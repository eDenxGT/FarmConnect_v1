import { useState } from "react";
import Button from '@mui/material/Button';
import {Button as Btn} from "@/components/ui/button"
import Signup from "./pages/Signup";

function App() {
	const [count, setCount] = useState<number>(0);

	const handleClick = () => {
		setCount((prev) => prev + 1);
	};

	return (
		<>
		<Signup />
		</>
	);
}

export default App;
