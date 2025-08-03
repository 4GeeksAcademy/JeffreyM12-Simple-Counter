import React from "react";
import ReactDOM from "react-dom";


const Counter = (props) => {
	return (
		<div className="counter-display">
            <div className="clock-img" >
                <i class="fa-regular fa-clock"></i>
            </div>
            <div className="seconds ten-thousands">{props.tenthousandsDigit}</div>
            <div className="seconds thousands">{props.thousandsDigit}</div>
            <div className="seconds hundreds">{props.hundredsDigit}</div>
            <div className="seconds tens">{props.tensDigit}</div>
            <div className="seconds one">{props.onesDigit}</div>
		</div>
	);
};

export default Counter;