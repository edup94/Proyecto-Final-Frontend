import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return <div className="container" />;
};
