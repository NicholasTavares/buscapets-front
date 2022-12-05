import { Dispatch, memo, SetStateAction, useMemo, useState } from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import "@reach/combobox/styles.css";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { ComboboxPopover } from "@reach/combobox";
import { Marker } from "../Marker";
import { Loading } from "../Loading";
import * as S from "./styles";

type PublicationPictureProps = {
  id: string;
  publication_picture: string;
};

type PlaceProps = {
  id: string;
  title: string;
  description: string;
  pet_name: string;
  publication_pictures: PublicationPictureProps[];
  type: string;
  last_location: {
    type: string;
    coordinates: number[];
  };
};

type PlacesProps = {
  places?: PlaceProps[];
  form: boolean;
};

type SelectedProps = {
  lat: number;
  lng: number;
};

type LibrariesGoogleMapsProps = (
  | "drawing"
  | "geometry"
  | "localContext"
  | "places"
  | "visualization"
)[];

const Places = ({ places, form = false }: PlacesProps) => {
  const libraries: LibrariesGoogleMapsProps = useMemo(() => ["places"], []);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const center = useMemo(
    () => ({ lat: -5.812544148028755, lng: -35.20508496744556 }),
    []
  );
  const [selected, setSelected] = useState<SelectedProps | null>(null);

  return isLoaded ? (
    <S.Container form={form}>
      {form && (
        <S.AutoComplete>
          <PlacesAutocomplete setSelected={setSelected} />
        </S.AutoComplete>
      )}
      <GoogleMap
        zoom={14}
        center={center}
        mapContainerStyle={{ width: "100%", height: "100%" }}
        options={{
          streetViewControl: !form,
          clickableIcons: !form,
          scaleControl: !form,
          mapTypeControl: !form,
          fullscreenControl: !form,
        }}
      >
        {places &&
          places.map(
            ({ id, title, publication_pictures, last_location, type }) => (
              <Marker
                key={id}
                id={id}
                title={title}
                img={publication_pictures[0].publication_picture}
                lat={last_location.coordinates[1]}
                lng={last_location.coordinates[0]}
                type={type}
              />
            )
          )}
        {selected && (
          <MarkerF
            position={selected}
            icon="http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|E11D48"
          />
        )}
      </GoogleMap>
    </S.Container>
  ) : (
    <Loading />
  );
};

const PlacesAutocomplete = (
  setSelected: ({ lat, lng }: SelectedProps) => void
) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address: any) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = getLatLng(results[0]);
    console.log(lat, lng);
    setSelected({ lat, lng });
  };

  return (
    <S.ComboBoxStyled onSelect={handleSelect}>
      <S.ComboboxInputStyled
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        className="combobox-input"
        placeholder="Procure o últímo lugar que seu pet esteve"
      />
      <ComboboxPopover>
        <S.ComboBoxListStyled>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <S.ComboBoxOptionStyled key={place_id} value={description} />
            ))}
        </S.ComboBoxListStyled>
      </ComboboxPopover>
    </S.ComboBoxStyled>
  );
};

export default memo(Places);
