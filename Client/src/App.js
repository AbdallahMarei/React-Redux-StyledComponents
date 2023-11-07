import { useSelector } from "react-redux";
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styled/Global.styled';
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import NotFoundPage from "./pages/NotFoundPage";


function App() {
	const theme = useSelector((state) => state.theme);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Header />
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route exact path="/about" element={<AboutPage />} />
				<Route exact path="/contact" element={<ContactPage />} />
				<Route exact path="/blog" element={<BlogPage />} />
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</ThemeProvider>
	);
}

export default App;
