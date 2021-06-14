import Swal from "sweetalert2";

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
			failRegistered: false
		},
		actions: {
			// Use getActions to call a function within a fuction

			enviarAlerta: (text, icon, timer, confButton) => {
				Swal.fire({ text: text, icon: icon, timer: timer, ShowConfirmButton: confButton });
			},

			//login usuario
			login: async () => {
				const sendData = getStore().loginData;
				try {
					let resp = await fetch(process.env.BACKEND_URL + "/login", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(sendData)
					});
					let data = await resp.json();
					localStorage.setItem("token", data.token);
					if (data.token !== undefined) {
						setStore({ loggedIn: true });
						setStore({ userInfo: data.user });
						Swal.fire({
							position: "center-top",
							icon: "success",
							title: "Correcto",
							showConfirmButton: false,
							timer: 1500
						});
					}
					Swal.fire({
						position: "center-top",
						icon: "warning",
						title: "Email o contraseña incorrectos",
						showConfirmButton: false,
						timer: 1500
					});
				} catch (error) {
					console.error(error);
				}
			},
			loginData: e => {
				let data = { [e.target.name]: e.target.value };
				setStore({ loginData: { ...getStore().loginData, ...data } });
			},

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
						setStore({ registered: true });
					})
					.catch(error => {
						console.log(error);
						setStore({ failRegistered: true });
					});
			},
			signUpData: e => {
				let data = { [e.target.name]: e.target.value };
				setStore({ signUpData: { ...getStore().signUpData, ...data } });
			},

			//editar usuario
			editUser: newDataUser => {
				fetch(process.env.BACKEND_URL + "/user", {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						Authorization: localStorage.getItem("token")
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
				let localInfo = {
					nombre: getStore().localData.nombre,
					direccion: getStore().localData.direccion,
					telefono: getStore().localData.telefono,
					horario: getStore().localData.horario,
					descripcion: getStore().localData.descripcion
				};
				fetch(process.env.BACKEND_URL + "/local", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(localInfo)
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
			editLocal: newLocalData => {
				fetch(process.env.BACKEND_URL + "/local", {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						Authorization: localStorage.getItem("token")
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
