import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Donate from "./components/donate/Donate";
import Profile from "./components/profile/Profile";
import Blog from "./components/blog/Blog";
import AddResource from "./components/add-resource/AddResource";
import Search from "./components/search/Search";
import Logout from "./components/logout/Logout";
import GlobalStyles from "./Global.css";
import TopNav from "./components/common/topnav/TopNav";

const App = (): JSX.Element => {
	const windowWidth = window.innerWidth <= 375; // TODO: Delete windowWidth; Moved to TopNav

	return (
		<>
			<GlobalStyles />
      		<TopNav windowWidth={windowWidth} />
			<Router>
				<Route path="/" exact component={Home} />
				<Route path="/about" exact component={About} />
				<Route path="/donate" component={Donate} />
				<Route path="/profile" component={Profile} />
				<Route path="/blog" component={Blog} />
				<Route path="/add-resource" component={AddResource} />
				<Route path="/search" component={Search} />
				<Route path="/logout" component={Logout} />
			</Router>
		</>
	);
};

export default App;