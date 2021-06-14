import Swal from "sweetalert2";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			loginData: {},
			loginInfo: {},
			signUpData: {},
			loggedIn: false
		},
		actions: {
			// Use getActions to call a function within a fuction
			enviarAlerta: (texto, icono, timer, confButton) => {
				Swal.fire({
					text: texto,
					icon: icono,
					timer: timer,
					showConfirmButton: confButton
				});
			},
			//login
			login: () => {
				const sendData = getStore().loginData;
				console.log(sendData);
				fetch(process.env.BACKEND_URL + "/login", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(sendData)
				})
					.then(resp => resp.json())
					.then(resp => {
						localStorage.setItem("token", resp.token);
						if (resp.token !== undefined) {
							setStore({ loggedIn: true });
							setStore({ loginInfo: resp.user });
						}
					})
					.catch(error => console.log(error));
			},
			loginData: e => {
				let data = { [e.target.name]: e.target.value };
				setStore({ loginData: { ...getStore().loginData, ...data } });
			},

			//registro
			signUp: () => {
				let userInfo = { email: getStore().signUpData.email, password: getStore().signUpData.password };
				setStore({ loginData: userInfo });
				const sendData = getStore().signUpData;
				fetch(process.env.BACKEND_URL + "/user", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(sendData)
				})
					.then(resp => resp.json())
					.then(resp => {
						console.log(resp), getActions().login();
					})
					.catch(error => console.log(error));
			},
			signUpData: e => {
				let data = { [e.target.name]: e.target.value };
				setStore({ signUpData: { ...getStore().signUpData, ...data } });
			}
		}
	};
};

export default getState;
