import styled from "styled-components"
import Footer from "./components/common/footer/Footer"
import TopNav from "./components/common/topnav/TopNav"
import { Outlet } from "react-router-dom"
import BackgroundShapes from "./components/common/home/BackgroundShapes"
import colors from "./styles/colors"
import { Logo } from "./components/common/topnav/TopNav.css"

const LayoutContainer = styled.div`
    background-color: black;
    height: 100%;
  background-color: ${colors.PRIMARY};
    overflow-x: hidden;
`



const Layout = () => {
  return (
    <LayoutContainer>
      <Logo/>
      {/* <BackgroundShapes /> */}
    
    <TopNav windowWidth={false} />
        <Outlet />
    <Footer />
    </LayoutContainer>
  )
}

export default Layout