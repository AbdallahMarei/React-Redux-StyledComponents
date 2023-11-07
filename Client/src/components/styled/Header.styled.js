import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

const LogoImg = styled.img`
	width: 150px;
`;

const LogoLink = styled(Link)`
	align-self: start;
`;

const NavbarWrapper = styled.nav`
	align-items: center;
	background: ${({ theme }) => theme.colors.navColor};
	box-shadow: 0 10px 10px rgba(0, 0, 0, 0.15);
	display: flex;
	justify-content: space-between;
	padding: 20px 40px;
	position: relative;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

const NavLinkWrapper = styled.div`
	@media (max-width: 768px) {
		display: ${({ active }) => (active ? "block" : "none")};
		padding-top: 20px;
		text-align: center;
	}
`;

const StyledNavLink = styled(NavLink)`
	color: ${({ theme }) => theme.colors.fontColor};
	font-size: 24px;
	margin-left: 20px;
	text-decoration: none;
	transition: 0.2s;

	&.${({ activeclassname }) => activeclassname} {
		color: ${({ theme }) => theme.colors.hoverFontColor};
	}

	&:hover {
		color: ${({ theme }) => theme.colors.hoverFontColor};
	}

	@media (max-width: 768px) {
		display: block;
		margin: 30px 0;
	}
`;

const BurgerMenuIcon = styled(FontAwesomeIcon)`
	color: ${({ theme }) => theme.colors.fontColor};
	cursor: pointer;
	font-size: 30px;
	display: none;
	position: absolute;
	right: 20px;
	top: 30px;

	@media (max-width: 768px){
		display: block;
	}
`;

const ThemeToggleIcon = styled(FontAwesomeIcon)`
	color: ${({ theme }) => theme.colors.fontColor};
	cursor: pointer;
	font-size: 30px;
	position: absolute;
	left: 200px;
	top: 30px;
`;

export {
	LogoImg,
	LogoLink,
	NavbarWrapper,
	NavLinkWrapper,
	StyledNavLink,
	BurgerMenuIcon,
	ThemeToggleIcon,
};
