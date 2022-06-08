import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Donate from "./components/donate/Donate.tsx";
import Profile from "./components/profile/Profile.tsx";
import Blog from "./components/blog/Blog.tsx";
import AddResource from "./components/add-resource/AddResource.tsx";
import Search from "./components/search/Search.tsx";
import Logout from "./components/logout/Logout";
import GlobalStyles from "../src/Global.css";
import TopNav from "./components/common/topnav/TopNav";
import Footer from "./components/common/footer/Footer";

// Business-related components
import BusinessBasicInfo from "./components/business/add-a-business/BusinessBasicInfo";
import BusinessDetails from "./components/business/add-a-business/BusinessDetails";
import BusinessLocation from "./components/business/add-a-business/BusinessLocation";
import BusinessReview from "./components/business/add-a-business/BusinessReview";
import BusinessSubmit from "./components/business/add-a-business/BusinessSubmit";
import ViewAllBusinesses from "./components/business/view-all/ViewAllBusinesses";
import ViewOneBusiness from "./components/business/view-one/ViewOneBusiness";

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
				<Route path="/add-resource" component={AddResource} />
				<Route path="/search" component={Search} />
				<Route path="/logout" component={Logout} />

				{/** Business-related links */}
				<Route path="/add-a-business" component={BusinessBasicInfo} />
				<Route path="/business-details" component={BusinessDetails} />
				<Route path="/business-location" component={BusinessLocation} />
				<Route path="/business-review" component={BusinessReview} />
				<Route path="/business-submit" component={BusinessSubmit} />
				<Route path="/view-all-businesses" component={ViewAllBusinesses} />
				<Route path="/view-one-business" component={ViewOneBusiness} />
			</Router>
			<Footer />
		</>
	);
};

export default App;
