import React, { FC, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBars,
	faHome,
	faDollarSign,
	faInfoCircle,
	faUserAlt,
	faPlusSquare,
	faSearch,
	faSignOutAlt,
	faQuestionCircle,
	faClipboardList,
} from "@fortawesome/free-solid-svg-icons";
import { NavDropdown } from "react-bootstrap";
import {
	NavButtonContainer,
	CanvasNavbarContainer,
	MenuButton,
	NavLink,
	NavDropdownItem,
	NavDropdownItemContainer,
	BottomNavLinks,
	MessagesContainer
} from "./Navbar.css";

const NavBar: FC = () => {
	const [profileThumbnail, setProfileThumbnail] = useState("");
	const [messages, setMessages] = useState(3);

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

	const MessagesIcon = () => {
		if (messages > 0) return <MessagesContainer>{messages}</MessagesContainer>;
	};

	const ProfilePic = () => {
		return <img src={profileThumbnail ? profileThumbnail : "../../assets/topnav/QG-Logo-V3-White-Transparent-PNG-1.png"} alt="Profile Thumbnail" />
	}

	return (
		<>
			<NavButtonContainer>
				<MenuButton
					className="float-end"
					type="button"
					data-bs-toggle="offcanvas"
					data-bs-target="#sidebar"
					aria-controls="offcanvasScrolling"
				>
					<FontAwesomeIcon icon={faBars} style={{ color: "000000" }} />
				</MenuButton>
			</NavButtonContainer>
			<CanvasNavbarContainer
				className="offcanvas offcanvas-start"
				data-bs-scroll="true"
				data-bs-backdrop="true"
				id="sidebar"
				aria-labelledby="offcanvasScrollingLabel"
			>
				<div className="offcanvas-body p-0 overflow-hidden">
					<NavLink href="/">
						<span>
							<FontAwesomeIcon icon={faHome} style={{ marginRight: "13px" }} />
						</span>
						HOME
					</NavLink>
					<NavLink href="/donate">
						<span>
							<FontAwesomeIcon
								icon={faDollarSign}
								style={{ marginRight: "13px" }}
							/>
						</span>
						DONATE
					</NavLink>
					<NavLink href="/about">
						<span>
							<FontAwesomeIcon
								icon={faInfoCircle}
								style={{ marginRight: "13px" }}
							/>
						</span>
						ABOUT
					</NavLink>
					<NavLink href="/blog">
						<span>
							<FontAwesomeIcon
								icon={faClipboardList}
								style={{ marginRight: "13px" }}
							/>
						</span>
						BLOG
					</NavLink>
					{/** RESOURCES DROPDOWN MENU */}
					<NavDropdown
						id="resources"
						title={
							<span style={{ fontSize: "18px" }}>
								<FontAwesomeIcon
									icon={faPlusSquare}
									style={{ marginRight: "13px" }}
								/>
								RESOURCES
							</span>
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
						<span>
							<FontAwesomeIcon
								icon={faSearch}
								style={{ marginRight: "13px" }}
							/>
						</span>
						SEARCH
					</NavLink>

					{/** PROFILE DROPDOWN MENU */}
					<BottomNavLinks id="bottom-links">
						{ProfilePic()}
						<NavDropdown
							id="profile"
							title={
								<span style={{ fontSize: "18px" }}>
									<FontAwesomeIcon
										icon={faUserAlt}
										style={{ marginRight: "13px" }}
									/>
									PROFILE
								</span>
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
