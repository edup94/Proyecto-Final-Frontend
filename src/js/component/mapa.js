import React, { useState, useCallback, useRef } from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { formatRelative } from "date-fns";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox";
import "@reach/combobox/styles.css";
import "../../styles/searchStyles.scss";
import PropTypes from "prop-types";
import icon from "../../img/IconoNegocio.png";

const libraries = ["places"];

//estilo inicial del mapa
const mapContainerStyle = {
	width: "1200px",
	height: "600px"
};

//coordenadas iniciales del mapa
const center = {
	lat: -34.91711,
	lng: -56.15877
};

//desactivar controles innecesarios, activar controles de zoom
const options = {
	disableDefaultUI: true,
	zoomControl: true
};
export const Map = () => {
	//credenciales google
	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
		libraries
	});

	//hook para los marcadores
	const [markers, setMarkers] = useState([]);

	//guardo el marcador seleccionado para ver sus detalles, lo inicio en null
	const [selected, setSelected] = useState(null);

	//este hook evita que esta función vuelva a ejecutarse en cada re-renderizado
	const onMapClick = useCallback(event => {
		setMarkers(current => [
			...current,
			{
				lat: event.latLng.lat(),
				lng: event.latLng.lng(),
				time: new Date()
			}
		]);
	}, []);

	//asi puedo acceder al mapa sin tener que re-renderizar
	const mapRef = useRef();
	const onMapLoad = useCallback(map => {
		mapRef.current = map;
	}, []);

	//desplazarme hacia la búsqueda
	const setCenter = ({ lat, lng }) => {
		mapRef.current.setCenter({ lat, lng });
		mapRef.current.setZoom(15);
	};

	if (loadError) return "Error al cargar mapa";
	if (!isLoaded) return "Cargando el mapa";

	return (
		<div className="d-flex justify-content-center">
			<Search setCenter={setCenter} />
			<GoogleMap
				mapContainerStyle={mapContainerStyle}
				zoom={8}
				center={center}
				options={options}
				onClick={onMapClick}
				onLoad={onMapLoad}>
				{markers.map(marker => (
					<Marker
						key={marker.time.toISOString()}
						position={{
							lat: marker.lat,
							lng: marker.lng
						}}
						icon={icon}
						onClick={() => {
							setSelected(marker);
						}}
					/>
				))}
				{selected ? (
					//agrego el texto informativo sobre el marcador seleccionado
					<InfoWindow
						position={{ lat: selected.lat, lng: selected.lng }}
						//regreso el estado del texto a null, para que pueda volver a mostrarse al cerrarlo
						onCloseClick={() => {
							setSelected(null);
						}}>
						<div>
							<h2 className="text-primary">Nombre del Local</h2> {/*cambiar a algo acorde*/}
							<p className="text-primary">Creado: {formatRelative(selected.time, new Date())}</p>
						</div>
					</InfoWindow>
				) : null}
			</GoogleMap>
		</div>
	);
};

//función de búsqueda con autocompletado
function Search({ setCenter }) {
	const {
		ready,
		value,
		suggestions: { status, data },
		setValue,
		clearSuggestions
	} = usePlacesAutocomplete({
		requestOptions: {
			//busco lugares cerca de donde estoy
			location: {
				lat: () => -34.91711,
				lng: () => -56.15877
			},
			radius: 200 * 1000
		}
	});

	return (
		//componentes de búsqueda
		<div className="search d-flex justify-content-center">
			<Combobox
				onSelect={async address => {
					setValue(address, false); //actualizo la búsqueda
					clearSuggestions(); //limpio las sugerencias
					try {
						const results = await getGeocode({ address }); //obtengo las coordenadas de la dirección
						const { lat, lng } = await getLatLng(results[0]); //convierto el primer resultado a lat y lng
						setCenter({ lat, lng });
					} catch (error) {
						console.log("Error");
					}
				}}>
				<ComboboxInput
					value={value}
					onChange={e => {
						setValue(e.target.value);
					}}
					disabled={!ready}
					placeholder="Ingresa una dirección"
				/>
				<ComboboxPopover>
					<ComboboxList>
						{status === "OK" &&
							data.map(({ place_id, description }) => (
								<ComboboxOption key={place_id} value={description} />
							))}
					</ComboboxList>
				</ComboboxPopover>
			</Combobox>
		</div>
	);
}
Search.propTypes = {
	setCenter: PropTypes.func
};
