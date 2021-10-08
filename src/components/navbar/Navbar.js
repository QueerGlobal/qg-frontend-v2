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
} from "@fortawesome/free-solid-svg-icons";
import { Container, NavDropdown } from "react-bootstrap";
import {
	NavButtonContainer,
	CanvasNavbarContainer,
	MenuButton,
	NavbarContainer,
	NavLink,
	NavDropdownItem,
	BottomNavLinks,
} from "./NavbarStyles";

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
				data-bs-backdrop="false"
				tabIndex="-1"
				id="sidebar"
				aria-labelledby="offcanvasScrollingLabel"
			>
				<div className="offcanvas-body">
					{/* <Container> */}
					<NavbarContainer
						className="me-auto"
						// style={{ width: "200px" }}
					>
						<NavLink href="/">
							<span>
								<FontAwesomeIcon
									icon={faHome}
									style={{ marginRight: "10px" }}
								/>
							</span>
							Home
						</NavLink>
						<NavLink href="/donate">
							<span>
								<FontAwesomeIcon
									icon={faDollarSign}
									style={{ marginRight: "10px" }}
								/>
							</span>
							Donate
						</NavLink>
						<NavLink href="/profile">
							<span>
								<FontAwesomeIcon
									icon={faUserAlt}
									style={{ marginRight: "10px" }}
								/>
							</span>
							Profile
						</NavLink>
						<NavLink href="/blog">
							<span>
								<FontAwesomeIcon
									icon={faPlusSquare}
									style={{ marginRight: "10px" }}
								/>
							</span>
							Blog
						</NavLink>

						<NavDropdown
							title={
								<span>
									<FontAwesomeIcon
										icon={faPlusSquare}
										style={{ marginRight: "10px" }}
									/>
									Add Resource
								</span>
							}
						>
							<NavDropdownItem href="/add-resource">
								Add Resource
							</NavDropdownItem>
							<NavDropdownItem href="/add-business">
								Add Business
							</NavDropdownItem>
							<NavDropdownItem href="/add-event">Add Event</NavDropdownItem>

							<NavDropdownItem href="/share">Share With Us</NavDropdownItem>
						</NavDropdown>

						<NavLink href="/search">
							<span>
								<FontAwesomeIcon
									icon={faSearch}
									style={{ marginRight: "10px" }}
								/>
							</span>
							Search
						</NavLink>
						<BottomNavLinks>
							<NavLink href="/logout">
								<span>
									<FontAwesomeIcon
										icon={faSignOutAlt}
										style={{ marginRight: "10px" }}
									/>
								</span>
								Log Out
							</NavLink>
							<NavDropdown
								title={
									<span>
										<FontAwesomeIcon
											icon={faQuestionCircle}
											style={{ marginRight: "10px" }}
										/>
										Support
									</span>
								}
							>
								<NavDropdownItem href="/faq">FAQ</NavDropdownItem>
								<NavDropdownItem href="/contact-us">Contact Us</NavDropdownItem>
								<NavDropdownItem href="/report-something">
									Report Something
								</NavDropdownItem>
							</NavDropdown>
						</BottomNavLinks>
					</NavbarContainer>
					{/* </Container> */}
				</div>
			</CanvasNavbarContainer>
		</>
	);
};

export default NavBar;
