import Swal from "sweetalert2";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			loginData: {},
			userInfo: {},
			signUpData: {},
			localData: [],
			createLocal: {},
			editDataLocal: {},
			readLocalById: {},
			localInfo: {},
			comments: [],
			favorites: null,
			loggedIn: false,
			registered: false,
			failRegistered: false
		},
		actions: {
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
							timer: 1000
						});
					} else {
						Swal.fire({
							position: "center-top",
							icon: "warning",
							title: "Email o contraseña incorrectos",
							showConfirmButton: false,
							timer: 1500
						});
					}
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
					.then(function(response) {
						if (!response.ok) {
							Swal.fire({
								position: "top",
								icon: "warning",
								title: "Ya existe un usuario con este email o username.",
								showConfirmButton: false,
								timer: 2500
							});
							throw Error(response.statusText);
						}
						return response;
					})
					.then(function(response) {
						Swal.fire({
							position: "top",
							icon: "success",
							title: "Usuario creado!",
							showConfirmButton: false,
							timer: 1000
						});
						setStore({ registered: true });
					})
					.catch(function(error) {
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
					.then(result => {
						console.log(result);
						setStore({ userInfo: result });
					})
					.catch(error => {
						console.log(error);
					});
			},

			//registro/crear local
			createLocal: () => {
				const data = getStore().createLocal;
				fetch(process.env.BACKEND_URL + "/local", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: localStorage.getItem("token")
					},
					body: JSON.stringify(data)
				})
					.then(resp => resp.json())
					.then(resp => console.log(resp))
					.catch(error => console.log(error));
			},
			localData: e => {
				let data = { [e.target.name]: e.target.value };
				setStore({ localData: { ...getStore().localData, ...data } });
			},

			createLocalData: e => {
				let data = { [e.target.name]: e.target.value };
				setStore({ createLocal: { ...getStore().createLocal, ...data } });
			},

			//editar local
			editLocal: newData => {
				let id = getStore().readLocalById.id;
				fetch(process.env.BACKEND_URL + "/local/" + id, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						Authorization: localStorage.getItem("token")
					},
					body: JSON.stringify(newData)
				})
					.then(resp => resp.json())
					.then(result => {
						getActions().getLocales();
					})
					.catch(error => console.log(error));
			},

			editLocalData: e => {
				let data = { [e.target.name]: e.target.value };
				setStore({ editDataLocal: { ...getStore().editDataLocal, ...data } });
			},

			//obtener locales
			getLocales: () => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

				var requestOptions = {
					method: "GET",
					headers: myHeaders,
					redirect: "follow"
				};

				fetch(process.env.BACKEND_URL + "/local", requestOptions)
					.then(response => response.json())
					.then(response => setStore({ localData: response }))
					.catch(error => console.log("error", error));
			},

			//obtener local por id
			getLocalById: id => {
				fetch(process.env.BACKEND_URL + "/local/" + id, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: localStorage.getItem("token")
					}
				})
					.then(resp => resp.json())
					.then(resp => {
						console.log(resp);
						setStore({ readLocalById: resp });
					})
					.catch(error => console.log(error));
			},

			//crear comentario
			createComentario: () => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

				var raw = JSON.stringify();

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					redirect: "follow"
				};

				fetch(process.env.BACKEND_URL + "/post", requestOptions)
					.then(response => response.json())
					.then(result => setStore({ comments: result }))
					.catch(error => console.log("error", error));
			},
			//obtener comentarios
			getComentarios: () => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

				var requestOptions = {
					method: "GET",
					headers: myHeaders,
					redirect: "follow"
				};

				fetch(process.env.BACKEND_URL + "/local", requestOptions)
					.then(response => response.json())
					.then(response => setStore({ comments: response }))
					.catch(error => console.log("error", error));
			},

			//agregar favorito
			addFavorite: () => {
				const sendData = getStore();
				fetch(process.env.BACKEND_URL + "/localFav", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: localStorage.getItem("token")
					},
					body: JSON.stringify(sendData)
				})
					.then(resp => resp.json())
					.then(resp => {
						setStore({ favorites: resp });
					})
					.catch(error => console.log(error));
			},

			//obtener Favorites
			getLocalFav: async () => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

				var requestOptions = {
					method: "GET",
					headers: myHeaders,
					redirect: "follow"
				};

				fetch(process.env.BACKEND_URL + "/localFav", requestOptions)
					.then(response => response.json())
					.then(response => setStore({ favorites: response }))
					.catch(error => console.log("error", error));
			},

			//borrar favorito
			deleteFavorite: id => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

				var requestOptions = {
					method: "DELETE",
					headers: myHeaders,
					redirect: "follow"
				};
				fetch(`${process.env.BACKEND_URL}/localFav/${id}`, requestOptions)
					.then(response => response.json())
					.then(result => setStore({ favorites: result }))
					.catch(error => console.log("error", error));
			},
			verDetalles: id => {
				let numIndex = process.env.BACKEND_URL + "/local" + id;
				fetch(numIndex)
					.then(response => response.json())
					.then(response => setStore({ localData: response }))
					.catch(error => console.log(true));
			}
		}
	};
};

export default getState;
