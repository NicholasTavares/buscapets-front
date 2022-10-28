import { InfoWindowF } from "@react-google-maps/api";
import { MarkerF } from "@react-google-maps/api";
import { useState } from "react";
import * as S from "./styles";

type MarkerProps = {
  id: string;
  title: string;
  img: string;
  type: string;
  lat: number;
  lng: number;
};

export const Marker = ({ id, title, img, type, lat, lng }: MarkerProps) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const icon = `http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|${
    type === "missing" ? "9CA3AF" : "E11D48"
  }`;
  const formated_tag = type === "missing" ? "perdido" : "adoção";
  return (
    <MarkerF
      onClick={() => setShowPopUp(!showPopUp)}
      icon={{
        url: icon,
      }}
      position={{
        lat,
        lng,
      }}
    >
      {showPopUp && (
        <InfoWindowF
          onCloseClick={() => setShowPopUp(false)}
          position={{
            lat,
            lng,
          }}
        >
          <S.ContainerPopUp>
            <S.PreviewPublicationImage imageUrl={img} />
            <S.ContainerTitle>
              <S.Title>{title}</S.Title>
              <S.Tag type={type}>{formated_tag}</S.Tag>
            </S.ContainerTitle>
          </S.ContainerPopUp>
        </InfoWindowF>
      )}
    </MarkerF>
  );
};
