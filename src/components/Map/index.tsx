import { memo, useMemo } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import "@reach/combobox/styles.css";
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
  publication_pictures: [
    {
      publication_picture: string
    }
  ];
  type: string;
  last_location: {
    type: string;
    coordinates: number[];
  };
};

type PlacesProps = {
  places: PlaceProps[];
};

type LibrariesGoogleMapsProps = (
  | "drawing"
  | "geometry"
  | "localContext"
  | "places"
  | "visualization"
)[];

const Places = ({ places }: PlacesProps) => {
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
      <GoogleMap
        zoom={14}
        center={center}
        mapContainerStyle={{ width: "100%", height: "100%" }}
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
      </GoogleMap>
    </S.Container>
  ) : (
    <Loading />
  );
};

export default memo(Places);
