import { FC, useState } from "react";
import {
	Button,
	NavContainer,
	NavInner,
	DropdownContainer,
	DropdownItem,
	DropdownMenu,
	Logo,
} from "./TopNav.css";
import {MdOutlineKeyboardArrowUp} from 'react-icons/md'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'

const dropdownItems = [
	{
		title: 'See all',
		href: '/see-all'
	},
	{
		title: 'Events',
		href: '/events'
	},
	{
		title: 'Businesses',
		href: '/businesses'
	},
	{
		title: 'Resouces',
		href: '/resources'
	}
]

const TopNav: FC<{ windowWidth?: boolean }> = ({windowWidth}) => {
	const [visible, setVisible] = useState(false);
	// const [width, setWidth] = useState(window.innerWidth);

	// const updateWidth = () => setWidth(window.innerWidth);

	// const isWindowWidthMobile = width <= 500;

	// useEffect(() => {
	// 	window.addEventListener("resize", updateWidth);

	// 	return () => window.removeEventListener("resize", updateWidth);
	// }, []);

	return (
				<NavContainer>
					{/* <Logo /> */}
					<NavInner>

					<Button>About</Button>
						<DropdownContainer>
							<Button
							$position="relative"
							onClick={() => {
								setVisible((visible) => !visible)
							}}
							>
								Resources
								{visible === true ? <MdOutlineKeyboardArrowUp size={20} /> : <MdOutlineKeyboardArrowDown size={20}/> }
							</Button>
							{visible && (
								<DropdownMenu>

									{dropdownItems.map((item) => (
										<DropdownItem
										key={item.title}
										>
											{item.title}
										</DropdownItem>
									))}	
									</DropdownMenu>
							)}
							</DropdownContainer>
					<Button>Blog</Button>
					<Button $backgroundColor="#FF007F">Donate</Button>
					<Button $backgroundColor="white" $color="black">Sign Up</Button>
					</NavInner>
				</NavContainer>
	)
}

export default TopNav;