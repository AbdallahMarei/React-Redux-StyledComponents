import React from 'react';
import { useSelector } from "react-redux";
import HomeCard from '../components/HomeCard';
import { Container } from '../components/styled/Container.styled';
import ToggleDarkMode from '../components/ToggleDarkMode';


const HomePage = () => {
    const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <Container>
        <HomeCard />
        {!darkMode && <ToggleDarkMode />}
    </Container>
  )
}

export default HomePage;
