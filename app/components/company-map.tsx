const COMPANY_ADDRESS =
  'Room 1702, Building 2, Minsheng Finance Building, No. 111, Nancheng Section, Wantai Road, Nancheng Sub-district, Dongguan City, Guangdong Province, China';

const GOOGLE_DIRECTIONS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY_ADDRESS)}`;
const OSM_SEARCH_URL = `https://www.openstreetmap.org/search?query=${encodeURIComponent(COMPANY_ADDRESS)}`;

export default function CompanyMap() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const googleEmbedUrl = apiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(apiKey)}&q=${encodeURIComponent(COMPANY_ADDRESS)}&zoom=15&language=en&region=CN`
    : null;

  // OSM fallback centers on Nancheng, Dongguan. The exact written address is
  // always used by the navigation/search links below.
  const osmEmbedUrl =
    'https://www.openstreetmap.org/export/embed.html?bbox=113.7280%2C22.9970%2C113.7780%2C23.0470&layer=mapnik&marker=23.0220%2C113.7530';

  return (
    <section className="company-map-card" aria-labelledby="company-location-title">
      <div className="company-map-head">
        <div>
          <span>COMPANY LOCATION</span>
          <h2 id="company-location-title">Visit our Dongguan office</h2>
        </div>
        <div className="company-map-actions">
          <a href={GOOGLE_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
          {!googleEmbedUrl ? <a className="map-secondary" href={OSM_SEARCH_URL} target="_blank" rel="noopener noreferrer">OpenStreetMap</a> : null}
        </div>
      </div>

      <div className="company-map-frame">
        <iframe
          title="HONGLIANG company location map"
          src={googleEmbedUrl ?? osmEmbedUrl}
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
        <div className="company-map-status">
          <span className="map-status-dot" />
          {googleEmbedUrl ? 'Google Maps' : 'OpenStreetMap preview'}
        </div>
      </div>

      <div className="company-map-address">
        <div className="map-pin-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z" fill="none" stroke="currentColor" strokeWidth="1.7" /><circle cx="12" cy="9" r="2.3" fill="none" stroke="currentColor" strokeWidth="1.7" /></svg>
        </div>
        <div><strong>HONGLIANG — Dongguan Office</strong><p>{COMPANY_ADDRESS}</p></div>
      </div>
    </section>
  );
}

export { COMPANY_ADDRESS };
