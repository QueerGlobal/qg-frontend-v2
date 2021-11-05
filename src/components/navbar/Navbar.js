import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBars,
	faHome,
	faDollarSign,
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
} from "./Navbar.Styled";

const NavBar = () => {
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
				tabIndex="-1"
				id="sidebar"
				aria-labelledby="offcanvasScrollingLabel"
			>
				<div className="offcanvas-body p-0 overflow-hidden">
					<NavLink href="/">
						<span>
							<FontAwesomeIcon icon={faHome} style={{ marginRight: "13px" }} />
						</span>
						Home
					</NavLink>
					<NavLink href="/donate">
						<span>
							<FontAwesomeIcon
								icon={faDollarSign}
								style={{ marginRight: "13px" }}
							/>
						</span>
						Donate
					</NavLink>
					<NavLink href="/profile">
						<span>
							<FontAwesomeIcon
								icon={faUserAlt}
								style={{ marginRight: "13px" }}
							/>
						</span>
						Profile
					</NavLink>
					<NavLink href="/blog">
						<span>
							<FontAwesomeIcon
								icon={faClipboardList}
								style={{ marginRight: "13px" }}
							/>
						</span>
						Blog
					</NavLink>

					<NavDropdown
						id="add-resource"
						title={
							<span style={{ fontSize: "18px" }}>
								<FontAwesomeIcon
									icon={faPlusSquare}
									style={{ marginRight: "13px" }}
								/>
								Add Resource
							</span>
						}
					>
						<NavDropdownItemContainer>
							<NavDropdownItem href="/add-resource">
								Add Resource
							</NavDropdownItem>
							<NavDropdownItem href="/add-business">
								Add Business
							</NavDropdownItem>
							<NavDropdownItem href="/add-event">Add Event</NavDropdownItem>

							<NavDropdownItem href="/share">Share With Us</NavDropdownItem>
						</NavDropdownItemContainer>
					</NavDropdown>

					<NavLink id="search" href="/search">
						<span>
							<FontAwesomeIcon
								icon={faSearch}
								style={{ marginRight: "13px" }}
							/>
						</span>
						Search
					</NavLink>
					<BottomNavLinks id="bottom-links">
						<NavLink href="/logout">
							<span>
								<FontAwesomeIcon
									icon={faSignOutAlt}
									style={{ marginRight: "13px" }}
								/>
							</span>
							Log Out
						</NavLink>
						<NavDropdown
							id="support"
							title={
								<span style={{ fontSize: "18px" }}>
									<FontAwesomeIcon
										icon={faQuestionCircle}
										style={{ marginRight: "13px" }}
									/>
									Support
								</span>
							}
						>
							<NavDropdownItemContainer>
								<NavDropdownItem href="/faq">FAQ</NavDropdownItem>
								<NavDropdownItem href="/contact-us">Contact Us</NavDropdownItem>
								<NavDropdownItem href="/report-something">
									Report Something
								</NavDropdownItem>
							</NavDropdownItemContainer>
						</NavDropdown>
					</BottomNavLinks>
				</div>
			</CanvasNavbarContainer>
		</>
	);
};

export default NavBar;
