import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Donate from "./components/donate/Donate";
import Profile from "./components/profile/Profile";
import Blog from "./components/blog/Blog";
import AddResource from "./components/add-resource/AddResource";
import Search from "./components/search/Search";
import Logout from "./components/logout/Logout";
//import GlobalStyles from "../src/Global.Styled";

const App = () => {
	return (
		<>
			<Router>
				<Navbar />
				<br />
				<Route path="/" exact component={Home} />
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
