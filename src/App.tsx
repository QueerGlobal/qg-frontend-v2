import { BrowserRouter as Router, Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from "react-router-dom";
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
import Footer from './components/common/footer/Footer';
import Layout from "./Layout";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
							<Route path="/"  index element={<Home/>} />
				<Route path="/about" element={<About/>} />
				<Route path="/donate" element={<Donate/>} />
				<Route path="/profile" element={<Profile/>} />
				<Route path="/blog" element={<Blog/>} />
				<Route path="/add-resource" element={<AddResource/>} />
				<Route path="/search" element={<Search/>} />
				<Route path="/logout" element={<Logout/>} />
		</Route>
	)
)

const App = () => {
	return (
		<>
			<GlobalStyles />
			<RouterProvider router={router} />

		</>
	);
};

export default App;
