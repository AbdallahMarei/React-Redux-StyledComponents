import React from 'react'
import { useDispatch } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";
import { Button } from './styled/Button.styled';
import { CenteredContainer } from './styled/Container.styled';

const ToggleDarkMode = () => {
	const dispatch = useDispatch();

	return (
		<CenteredContainer>
			<span>Feel free to try our dark mode for better readability</span>
			<Button onClick={() => dispatch(toggleTheme())}>Try Dark Mode</Button>
		</CenteredContainer>
	)
}

export default ToggleDarkMode;
