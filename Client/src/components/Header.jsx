import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";
import {
	NavLinkWrapper,
	NavbarWrapper,
	StyledNavLink,
	BurgerMenuIcon,
	ThemeToggleIcon,
	LogoImg,
	LogoLink
} from "./styled/Header.styled";
import { faBars, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { navLinks } from "../data/navLinks";

const Header = () => {
	const dispatch = useDispatch();
	const [active, setActive] = useState(false);

	return (
		<NavbarWrapper>
			<LogoLink to='/'><LogoImg src={'https://shahid.mbc.net/mediaObject/shahidlogo/light/Shahid_logo_light/original/Shahid_logo_light.png?height=72&width=auto&croppingPoint=mc&type=webp'} alt="logo" /></LogoLink>
			<ThemeToggleIcon icon={faLightbulb} onClick={() => dispatch(toggleTheme())} />
			<BurgerMenuIcon icon={faBars} onClick={() => setActive(!active)} />
			<NavLinkWrapper active={active}>
				{navLinks.map((link) => (
					<StyledNavLink
						activeclassname="active"
						key={link.page}
						to={link.href}
					>
						{link.page}
					</StyledNavLink>
				))}
			</NavLinkWrapper>
		</NavbarWrapper>
	);
};

export default Header;
