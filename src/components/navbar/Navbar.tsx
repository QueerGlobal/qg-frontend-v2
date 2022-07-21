import React, { FC, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavDropdown } from "react-bootstrap";
import {
	CanvasNavbarContainer,
	MenuButton,
	NavLink,
	NavDropdownItem,
	NavDropdownItemContainer,
	BottomNavLinks,
	MessagesContainer,
	EighteenPXSpan,
	ProfileThumbCont
} from "./Navbar.css";
import colors from "../../styles/colors";

const NavBar: FC = () => {
	const [profileThumbnail, setProfileThumbnail] = useState("");
	const [messages, setMessages] = useState(3);

	const MessagesIcon = () => {
		if (messages > 0) return <MessagesContainer>{messages}</MessagesContainer>;
	};

	const ProfilePic = () => {
		return <ProfileThumbCont src={profileThumbnail ? profileThumbnail : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Flove-wins%2F500%2FRainbow_Military-512.png&f=1&nofb=1"} alt="Profile Thumbnail" />
	}

	useEffect(() => {
		let url: string = "/user";
		fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
		}).then((response) => {
			if (response.ok) {
				return response.json()
			}
		}).then(({ profileThumbnail, messages }) => {
			setProfileThumbnail(profileThumbnail);
			setMessages(messages);
		});
	}, []);

	return (
		<>
			<MenuButton
				type="button"
				data-bs-toggle="offcanvas"
				data-bs-target="#sidebar"
				aria-controls="offcanvasScrolling"
			>
				<FontAwesomeIcon icon={faBars} style={{ color: `${colors.BLACK}` }} />
			</MenuButton>

			<CanvasNavbarContainer
				className="offcanvas offcanvas-start"
				data-bs-scroll="true"
				data-bs-backdrop="true"
				id="sidebar"
				aria-labelledby="offcanvasScrollingLabel"
			>
				<div className="offcanvas-body p-0 overflow-hidden">
					<NavLink href="/"> 
						HOME
					</NavLink>

					<NavLink href="/donate"> 
						DONATE
					</NavLink>

					<NavLink href="/about"> 
						ABOUT
					</NavLink>

					<NavLink href="/blog"> 
						BLOG
					</NavLink>

					{/** RESOURCES DROPDOWN MENU */}
					<NavDropdown
						id="resources"
						title={
							<EighteenPXSpan> 
								RESOURCES
							</EighteenPXSpan>
						}
					>
						<NavDropdownItemContainer>
							<NavDropdownItem href="/resources">SEE ALL</NavDropdownItem>
							<NavDropdownItem href="/events">EVENTS</NavDropdownItem>
							<NavDropdownItem href="/businesses">BUSINESSES</NavDropdownItem>
							<NavDropdownItem href="/add-resource">ADD A RESOURCE</NavDropdownItem>
						</NavDropdownItemContainer>
					</NavDropdown>

					<NavLink id="search" href="/search"> 
						SEARCH
					</NavLink>

					{/** CONTACT US DROPDOWN MENU */}
					<NavDropdown
						id="contact-us"
						title={
							<EighteenPXSpan> 
								CONTACT US
							</EighteenPXSpan>
						}
					>
						<NavDropdownItemContainer>
							<NavDropdownItem href="/contact-us">CONTACT US</NavDropdownItem>
							<NavDropdownItem href="/volunteer">VOLUNTEER</NavDropdownItem>
							<NavDropdownItem href="/give-feedback">GIVE FEEDBACK</NavDropdownItem>
						</NavDropdownItemContainer>
					</NavDropdown>

					{/** PROFILE DROPDOWN MENU */}
					<BottomNavLinks id="bottom-links">
						{ProfilePic()}
						<NavDropdown
							id="profile"
							title={
								<EighteenPXSpan> 
									PROFILE
								</EighteenPXSpan>
							}
						>
							<NavDropdownItemContainer>
								<NavDropdownItem href="/edit-profile">EDIT PROFILE</NavDropdownItem>
								<NavDropdownItem href="/messages">{MessagesIcon()} MESSAGES</NavDropdownItem>
								<NavDropdownItem href="/notifications">NOTIFICATIONS</NavDropdownItem>
								<NavDropdownItem href="/help">HELP/SUPPORT</NavDropdownItem>
								<NavDropdownItem href="/feedback">GIVE FEEDBACK</NavDropdownItem>
								<NavDropdownItem href="/logout">LOG OUT</NavDropdownItem>
							</NavDropdownItemContainer>
						</NavDropdown>
					</BottomNavLinks>
				</div>
			</CanvasNavbarContainer>
		</>
	);
};

export default NavBar;
