import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { Button } from "@mui/material";

const libraries = ["places"];
const mapContainerStyle = {
  height: "60vh",
  width: "62.5vw",
};
const options = {
  disableDefaultUI: false,
  zoomControl: true,
};
const center = {
  lat: 43.6532,
  lng: -79.3832,
};

export default function MapLocation({
  setInput,
  setOpenMap,
  map,
  edit,
  record,
}) {
  const [center, setCenter] = useState({
    lat: 35.701205,
    lng: 51.391105,
  });
  useEffect(() => {
    if (!!record) {
      setCenter({
        lat: record.map.lat,
        lng: record.map.lng,
      });
    }
  }, [edit]);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "",
    libraries,
  });
  const [markers, setMarkers] = useState();
  const [selected, setSelected] = useState(null);

  const onMapClick = useCallback((e) => {
    setMarkers({
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
      time: new Date(),
    });
    setInput((prevState) => ({
      ...prevState,
      map: { lat: e.latLng.lat(), lng: e.latLng.lng(), time: new Date() },
    }));
  }, []);
  const onClick = () => {
    if (!!map) {
      setSelected(map);
    } else {
      setSelected(markers);
    }
  };
  const handleClick = () => {
    setOpenMap(false);
  };
  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div>
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        <Marker
          key={
            edit
              ? `${record.map.lat}-${record.map.lng}`
              : `${markers?.lat}-${markers?.lng}`
          }
          position={
            edit
              ? { lat: record.map.lat, lng: record.map.lng }
              : { lat: markers?.lat, lng: markers?.lng }
          }
          onClick={onClick}
          icon={{
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(15, 15),
            scaledSize: new window.google.maps.Size(30, 30),
          }}
        />
        {selected ? (
          <InfoWindow
            position={{ lat: record.map.lat, lng: record.map.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2>{record.title}</h2>
              <p>{record.type}</p>
              <p
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {record.description}
              </p>
            </div>
          </InfoWindow>
        ) : null}
        <Button
          size="large"
          onClick={handleClick}
          variant="contained"
          style={{ top: "85%", left: "35%" }}
        >
          {"choose this location"}
        </Button>
      </GoogleMap>
    </div>
  );
}
