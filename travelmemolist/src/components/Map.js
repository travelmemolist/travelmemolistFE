import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import L from "leaflet";

const icon = L.icon({
  iconUrl: "/images/icon.png",
  iconSize: [28, 28],
});

const position = [21.0283334, 105.854041];

const ResetCenterView = (props) => {
  const { selectPosition } = props;
  const map = useMap();
  useEffect(() => {
    if (selectPosition) {
      map.setView(
        L.latLng(selectPosition?.lat, selectPosition?.lon),
        map.getZoom(),
        { animate: true }
      );
    }
  }, [selectPosition]);
  return null;
};

const Map = ({ selectPosition }) => {
  const locationSelection = [selectPosition?.lat, selectPosition?.lon];
  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=HVKbIU3Pn5JbwtN5U63O"
      />
      {selectPosition && (
        <Marker position={locationSelection} icon={icon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      )}
      <ResetCenterView selectPosition={selectPosition} />
    </MapContainer>
  );
};

export default Map;
