import { memo, useMemo, useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import "@reach/combobox/styles.css";
import { Loading } from "../Loading";
import * as S from "./styles";
import { useAuth } from "../../hooks/useAuth";

type LibrariesGoogleMapsProps = (
    | "drawing"
    | "geometry"
    | "localContext"
    | "places"
    | "visualization"
)[];

type ResultAddress = {
    formatted_address: string;
}

const MapAddress = () => {
    const [selected, setSelected] = useState(null);
    const libraries: LibrariesGoogleMapsProps = useMemo(() => ["places"], []);
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        libraries,
    });
    const center = useMemo(
        () => ({ lat: -5.812544148028755, lng: -35.20508496744556 }),
        []
    );

    return isLoaded ? (
        <S.Container>
            <S.PlacesContainer>
                <PlacesAutocomplete setSelected={setSelected} />
            </S.PlacesContainer>
            <GoogleMap
                options={{ disableDefaultUI: true }}
                zoom={14}
                center={center}
                mapContainerStyle={{ width: "100%", height: "100%" }}
            >
                {selected && <Marker position={selected} />}
            </GoogleMap>
        </S.Container>
    ) : (
        <Loading />
    );
};

const PlacesAutocomplete = ({ setSelected }) => {
    const { state, setState } = useAuth();
    const {
        ready,
        value,
        setValue,
        suggestions: { status, data },
        clearSuggestions,
    } = usePlacesAutocomplete();

    const handleSelect = async (address: string) => {
        setValue(address, false);
        clearSuggestions();

        const results = await getGeocode({ address });
        const { lat, lng } = await getLatLng(results[0]);

        if (typeof results[0].formatted_address === 'string') {
            setState({ ...state, address: results[0].formatted_address, coordinates: { lat, lng } })
        }

        setSelected({ lat, lng });
    };

    return (
        <S.ComboboxContainer onSelect={handleSelect}>
            <S.AutoCompleteInput
                value={value}
                onChange={(e) => setValue(e.target.value)}
                disabled={!ready}
                placeholder="Procure um endereço..."
            />
            <S.ContainerPopUp>
                <S.ListOptions>
                    {status === "OK" &&
                        data.map(({ place_id, description }) => (
                            <S.PlaceOption key={place_id} value={description} />
                        ))}
                </S.ListOptions>
            </S.ContainerPopUp>
        </S.ComboboxContainer>
    );
};

export default memo(MapAddress);
