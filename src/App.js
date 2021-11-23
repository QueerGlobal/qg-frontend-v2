import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About.tsx";
import Donate from "./components/donate/Donate";
import Profile from "./components/profile/Profile";
import Blog from "./components/blog/Blog";
import AddResource from "./components/add-resource/AddResource";
import Search from "./components/search/Search";
import Logout from "./components/logout/Logout";
import GlobalStyles from "../src/Global.css";
import Footer from "./components/common/footer/Footer";

//breakpoints for responsive web design
const theme = {
	colors: {
		xs: "320px",
		sm: "480px",
		md: "760px",
		xl: "1200px",
	},
};

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Router>
				<Navbar />
				<br />
				<Route path="/" exact component={Home} />
				<Route path="/about" exact component={About} />
				<Route path="/donate" component={Donate} />
				<Route path="/profile" component={Profile} />
				<Route path="/blog" component={Blog} />
				<Route path="/add-resource" component={AddResource} />
				<Route path="/search" component={Search} />
				<Route path="/logout" component={Logout} />
			</Router>
			<Footer />
		</ThemeProvider>
	);
};

export default App;
