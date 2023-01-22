import { Button } from "@mui/material";
import React from "react";

const CustomButton = (props) => {
	return (
		<>
			<Button {...props}>{props.text}</Button>
		</>
	);
};

export default CustomButton;
