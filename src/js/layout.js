import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";
import { Landing } from "./views/landing";
import { Login } from "./views/login";
import { Home } from "./views/home";
import { Register } from "./views/register";
import { Terminos } from "./views/terminos";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Recover } from "./views/recover";
import { Map } from "./component/mapa";
import { CrearLocales } from "./views/crearLocales";
import { EditarLocales } from "./views/editarLocales";
import { LocalesFavoritos } from "./views/localesFavoritos";
import error from "../img/404.png";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Landing />
						</Route>
						<Route exact path="/map">
							<Map />
						</Route>
						<Route exact path="/home">
							<Home />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/register">
							<Register />
						</Route>
						<Route exact path="/recover">
							<Recover />
						</Route>
						<Route exact path="/createlocal">
							<CrearLocales />
						</Route>
						<Route exact path="/editlocal/:id">
							<EditarLocales />
						</Route>
						<Route exact path="/favoritelocal">
							<LocalesFavoritos />
						</Route>
						<Route exact path="/terminos">
							<Terminos />
						</Route>
						<Route>
							<img src={error} />
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
