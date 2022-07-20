import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Donate from "./components/donate/Donate.tsx";
import Profile from "./components/profile/Profile.tsx";
import Blog from "./components/blog/Blog.tsx";
import AddAResource from "./components/resources/add-a-resource/AddAResource.tsx";
import ViewAllResources from "./components/resources/view-all/ViewAllResources.tsx";
import Search from "./components/search/Search.tsx";
import Logout from "./components/logout/Logout";
import GlobalStyles from "../src/Global.css";
import TopNav from "./components/common/topnav/TopNav";

const App = () => {
	const windowWidth = window.innerWidth <= 375;

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
				<Route path="/add-resource" component={AddAResource} />
				<Route path="/resources" component={ViewAllResources} />
				<Route path="/search" component={Search} />
				<Route path="/logout" component={Logout} />
			</Router>
		</>
	);
};

export default App;
