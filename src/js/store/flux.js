const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			loginData: {},
			userInfo: {},
            signUpData: {},
            localData: {},
            localInfo: {},
            loggedIn: false,
            registered: false,
            errorRegistered: false
		},
		actions: {
			// Use getActions to call a function within a fuction

			//login
			login: () => {
				const sendData = getStore().loginData;
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
							setStore({ userInfo: resp.user });
						}
					})
					.catch(error => console.log(error));
			},
			loginData: e => {
				let data = { [e.target.name]: e.target.value };
				setStore({ loginData: { ...getStore().loginData, ...data } });
			},

            //registro usuario
            // signUp: () => {
			// 	const sendData = getStore().signUpData;
			// 	fetch(process.env.BACKEND_URL + "/user", {
			// 		method: "POST",
			// 		headers: {
			// 			"Content-Type": "application/json"
			// 		},
			// 		body: JSON.stringify(sendData)
			// 	})
			// 		.then(resp => resp.json())
			// 		.then(resp => {
            //             console.log(resp);
			// 			setStore({ registered: true });
			// 		})
			// 		.catch(error => {
			// 			console.log(error);
			// 			setStore({ errorRegistered: true });
			// 		});
            // },
            
            //registro usuario
			signUp: () => {
				let userInfo = {
					username: getStore().signUpData.username,
					nombre: getStore().signUpData.nombre,
					apellido: getStore().signUpData.apellido,
					email: getStore().signUpData.email,
					perfil: getStore().signUpData.perfil,
					contrasena: getStore().signUpData.contrasena
				};
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
            },

            //editar usuario
            editUser: (newDataUser) => {
				fetch(process.env.BACKEND_URL + "/user", {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						Authorization: sessionStorage.getItem("token")
					},
					body: JSON.stringify(newDataUser)
				})
					.then(resp => resp.json())
					.then(resp => {
						console.log(resp);
						setStore({ userInfo: resp });
					})
					.catch(error => {
						console.log(error);
					});
            },
            
            //registro local
            createLocal: () => {
				const sendData = getStore().localData;
				fetch(process.env.BACKEND_URL + "/local", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(sendData)
				})
					.then(resp => resp.json())
					.then(resp => {
                        console.log(resp);
                        setStore({ localInfo: resp });
                        
					})
					.catch(error => console.log(error));
            },
            localData: e => {
				let data = { [e.target.name]: e.target.value };
				setStore({ localData: { ...getStore().localData, ...data } });
            },

            //editar local
            editLocal: (newLocalData) => {
				fetch(process.env.BACKEND_URL + "/local", {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						Authorization: sessionStorage.getItem("token")
					},
					body: JSON.stringify(newLocalData)
				})
					.then(resp => resp.json())
					.then(resp => {
						console.log(resp);
						setStore({ localInfo: resp });
					})
					.catch(error => {
						console.log(error);
					});
            }
		}
	};
};

export default getState;
