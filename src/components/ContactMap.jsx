import { useEffect, useRef, useState } from "react";

const locations = [
  {
    name: "Golden Score Judo Dojo",
    address: "104 Stegman St, Randgate, Randfontein",
    coordinates: [27.7021, -26.1866],
  },
  {
    name: "KJK Judo",
    address: "NGK Paardekraal, Krugersdorp",
    coordinates: [27.7738, -26.0925],
  },
  {
    name: "West Rand Judo Association (NPC office)",
    address: "3 Octavia, 49 Otto Street, Krugersdorp North",
    coordinates: [27.7667, -26.0833],
  },
];

function isLikelyValidToken(token) {
  return typeof token === "string" && /^pk\.[A-Za-z0-9._-]{20,}$/.test(token.trim());
}

export default function ContactMap() {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const didInitializeRef = useRef(false);
  const [mapError, setMapError] = useState(null);

  const token = import.meta.env.VITE_MAPBOX_TOKEN;
  const tokenLooksValid = isLikelyValidToken(token);

  useEffect(() => {
    if (!tokenLooksValid || !mapContainerRef.current || !window.mapboxgl || didInitializeRef.current) {
      return;
    }

    didInitializeRef.current = true;

    const mapboxgl = window.mapboxgl;
    mapboxgl.accessToken = token.trim();

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: locations[0].coordinates,
      zoom: 9.5,
    });

    map.on("error", (event) => {
      console.error("Mapbox error:", event?.error || event);
      setMapError("The map failed to load — check that your Mapbox token is valid.");
    });

    map.on("load", () => {
      map.addControl(new mapboxgl.NavigationControl(), "top-right");

      const bounds = new mapboxgl.LngLatBounds();

      locations.forEach((location) => {
        const popup = new mapboxgl.Popup({ offset: 24 }).setHTML(
          `<strong>${location.name}</strong><br />${location.address}`
        );

        new mapboxgl.Marker({ color: "#c9a227" })
          .setLngLat(location.coordinates)
          .setPopup(popup)
          .addTo(map);

        bounds.extend(location.coordinates);
      });

      map.fitBounds(bounds, { padding: 80, maxZoom: 12 });
    });

    mapRef.current = map;
  }, [token, tokenLooksValid]);

  return (
    <section className="contact-map">
      {tokenLooksValid && !mapError ? (
        <div ref={mapContainerRef} className="contact-map-canvas" />
      ) : (
        <div className="contact-map-placeholder">
          <p>
            {mapError ? (
              mapError
            ) : (
              <>
                Map not shown — add a real Mapbox public token as
                <code> VITE_MAPBOX_TOKEN</code> in <code>.env.local</code> to
                enable the live map. Get a free token at{" "}
                <a href="https://account.mapbox.com/" target="_blank" rel="noopener noreferrer">
                  account.mapbox.com
                </a>
                . It should start with <code>pk.</code> and be a long string —
                not a placeholder.
              </>
            )}
          </p>
        </div>
      )}
    </section>
  );
}
