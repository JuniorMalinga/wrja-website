// Static placeholder for now. Once the club's location is confirmed, swap
// this div for an actual map component (e.g. Google Maps JS API or an
// embedded iframe) driven by coordinates fetched from an API/config value
// instead of being hardcoded here.
export default function LocationSection() {
  return (
    <section className="location">
      <div className="location-map-placeholder">
        <p>Map placeholder — business location will be set from an API</p>
      </div>
    </section>
  );
}
