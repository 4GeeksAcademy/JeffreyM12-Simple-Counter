import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import {useState} from "react"

import Counter from "./Counter";


//create your first component
const Home = () => {
	const [counter, setCounter] = useState(0);

	// used to increase the counter by seconds
	useEffect(() =>{
		const interval = setInterval(() => {
			setCounter(counter => counter + 1)
		}, 1000)
		console.log(counter)

		return () => clearInterval(interval)
	}, [counter])

	// Function to calculate seconds in the timer counter
	function calculateSeconds(aCounter, placeValue){
		return Math.floor(aCounter/placeValue) % 10
	}

	return (
		<>
			<Counter 
				tenthousandsDigit = {calculateSeconds(counter, 10000)}
				thousandsDigit = {calculateSeconds(counter, 1000)}
				hundredsDigit = {calculateSeconds(counter, 100)}
				tensDigit = {calculateSeconds(counter, 10)}
				onesDigit = {calculateSeconds(counter, 1)}
			/>
		</>
	);
};

export default Home;