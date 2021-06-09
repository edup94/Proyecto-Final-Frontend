const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			loginData: {},
			loginInfo: {},
			signUpData: {},
			loggedIn: false
		},
		actions: {
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
						sessionStorage.setItem("token", resp.token);
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
				let userInfo = {
					username: getStore().signUpData.username,
					nombre: getStore().signUpData.nombre,
					apellido: getStore().signUpData.apellido,
					email: getStore().signUpData.email,
					perfil: getStore().signUpData.perfil,
					contrasena: getStore().signUpData.contrasena
				};
				console.log(userInfo);
				fetch(process.env.BACKEND_URL + "/user", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(userInfo)
				})
					.then(resp => resp.json())
					.then(resp => {
						console.log(resp);
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
