import Image from 'next/image';
import Link from 'next/link';

const specs = [
  ['Material', 'Food-grade SS304 / SS316'],
  ['Panel size', '1000 × 1000 mm / 1000 × 500 mm'],
  ['Capacity', '1 m³ – 5,000 m³, project configured'],
  ['Panel thickness', '1.0 – 4.0 mm, engineered by water depth'],
  ['Connections', 'Flange, inlet, outlet, overflow and drain'],
  ['Installation', 'Bolted sectional assembly on site'],
];

const advantages = [
  ['01', 'Food-grade materials', 'SS304 and SS316 options for potable water and demanding environments.'],
  ['02', 'Modular capacity', 'Panel-based construction adapts to restricted spaces and future expansion.'],
  ['03', 'Reliable sealing', 'Engineered gasket and bolted joint system supports long-term watertightness.'],
  ['04', 'Easy transportation', 'Flat-packed panels reduce shipping volume and simplify site handling.'],
  ['05', 'Low maintenance', 'Smooth stainless surfaces are corrosion resistant and easy to inspect.'],
  ['06', 'Project support', 'Capacity calculation, drawings, accessories and installation guidance included.'],
];

const applications = [
  ['Potable Water', '/assets/banner.jpg'],
  ['Fire Protection', '/assets/generated-pages/applications-hero.png'],
  ['High-Rise Buildings', '/assets/catalog-case.png'],
  ['Industrial Facilities', '/assets/generated-pages/projects-hero.png'],
];

export default function ProductDetailPage() {
  return (
    <main className="pd-page">
      <div className="pd-utility"><div className="pd-container"><span>✉ harris@hongliangglobal.com</span><span>◉ WhatsApp +86 18127154227</span><span className="pd-lang">◎ English⌄</span></div></div>
      <header className="pd-header">
        <div className="pd-container pd-head-inner">
          <Link href="/" className="pd-logo"><Image src="/assets/logo.jpg" alt="HONGLIANG" width={188} height={74} priority /></Link>
          <nav><Link href="/">Home</Link><a href="#overview">Overview</a><a href="#specifications">Specifications</a><a href="#applications">Applications</a><Link href="/contact">Contact</Link></nav>
          <a className="pd-button pd-button-small" href="#quote">Get a Quote</a>
        </div>
      </header>

      <div className="pd-container pd-breadcrumb"><Link href="/">Home</Link><span>/</span><span>Products</span><span>/</span><strong>Stainless Steel Water Tank</strong></div>

      <section className="pd-container pd-product-hero">
        <div className="pd-gallery">
          <div className="pd-main-image"><Image src="/assets/generated-pages/products-hero.png" alt="HONGLIANG stainless steel sectional water tank" fill priority sizes="(max-width: 900px) 100vw, 58vw" /></div>
          <div className="pd-thumbs">
            {['/assets/generated-pages/products-hero.png','/assets/banner-product.jpg','/assets/panels.jpg'].map((src, index) => <div className={index === 0 ? 'active' : ''} key={src}><Image src={src} alt="Product detail" fill sizes="110px" /></div>)}
          </div>
        </div>
        <div className="pd-product-copy">
          <h1>Stainless Steel Sectional Water Tank</h1>
          <p className="pd-intro">A modular, hygienic and long-life water storage system engineered for potable water, fire protection and industrial projects.</p>
          <div className="pd-quick-specs">
            <div><span>Material</span><strong>SS304 / SS316</strong></div>
            <div><span>Structure</span><strong>Bolted Sectional Panels</strong></div>
            <div><span>Capacity</span><strong>Custom Engineered</strong></div>
            <div><span>Application</span><strong>Potable / Fire / Industrial</strong></div>
          </div>
          <div className="pd-actions"><a className="pd-button" href="#quote">Request a Quote</a><a className="pd-button pd-outline" href="/assets/catalog.pdf" download>Download Datasheet</a></div>
          <div className="pd-assurance"><span>✓ Project-specific design</span><span>✓ Export documentation</span><span>✓ Installation support</span></div>
        </div>
      </section>

      <nav className="pd-anchor"><div className="pd-container"><a href="#overview">Overview</a><a href="#advantages">Advantages</a><a href="#specifications">Specifications</a><a href="#applications">Applications</a><a href="#quality">Quality Control</a><a href="#faq">FAQ</a></div></nav>

      <section id="overview" className="pd-section pd-container pd-overview">
        <div><p className="pd-label">PRODUCT OVERVIEW</p><h2>Engineered storage that adapts to the project.</h2><p>HONGLIANG sectional tanks are assembled from precision-pressed stainless steel panels. The modular system enables flexible dimensions, dependable hygiene and efficient transport to international project sites.</p><p>Each tank is configured around required capacity, installation space, water depth, environmental conditions and local connection standards.</p><a className="pd-text-link" href="#quote">Discuss your project →</a></div>
        <div className="pd-overview-image"><Image src="/assets/banner-product.jpg" alt="Pressed stainless steel tank panels" fill sizes="50vw" /></div>
      </section>

      <section id="advantages" className="pd-section pd-soft"><div className="pd-container"><div className="pd-section-head"><h2>Why choose a sectional stainless steel tank?</h2><p>A practical system designed around hygiene, installation efficiency and long service life.</p></div><div className="pd-advantages">{advantages.map(([n,title,copy]) => <article key={n}><span>{n}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></div></section>

      <section id="specifications" className="pd-section pd-container pd-spec-section">
        <div><p className="pd-label">TECHNICAL DATA</p><h2>Core specifications</h2><p>Final dimensions and component selection are confirmed against project drawings and operating conditions.</p></div>
        <div className="pd-spec-table">{specs.map(([key,value]) => <div key={key}><span>{key}</span><strong>{value}</strong></div>)}</div>
      </section>

      <section id="applications" className="pd-section pd-app-section"><div className="pd-container"><div className="pd-section-head"><h2>Typical applications</h2><p>One modular platform for a wide range of water storage requirements.</p></div><div className="pd-app-grid">{applications.map(([title,src]) => <article key={title}><Image src={src} alt={title} fill sizes="25vw" /><strong>{title}</strong></article>)}</div></div></section>

      <section id="quality" className="pd-section pd-container pd-quality">
        <div className="pd-quality-image"><Image src="/assets/generated-pages/factory-hero.png" alt="HONGLIANG engineers inspecting stainless steel panels" fill sizes="55vw" /></div>
        <div><p className="pd-label">QUALITY CONTROL</p><h2>Production you can see. Quality you can trust.</h2><ul><li>Incoming stainless steel material verification</li><li>Precision panel forming and dimensional inspection</li><li>Welding, sealing and accessory checks</li><li>Pre-shipment inspection and export packing review</li></ul><a className="pd-text-link" href="#quote">Request quality documents →</a></div>
      </section>

      <section id="faq" className="pd-section pd-soft"><div className="pd-container pd-faq"><div><p className="pd-label">TECHNICAL FAQ</p><h2>Questions from project buyers</h2></div><div>{[['Which stainless steel grade should I choose?','SS304 suits most potable-water projects. SS316 is recommended for more corrosive environments or where project standards require it.'],['How is tank capacity determined?','We calculate effective capacity from available dimensions, operating level, panel size, freeboard and project constraints.'],['Can the tank be installed in a restricted space?','Yes. Sectional panels are transported separately and assembled on site, which is well suited to plant rooms and retrofit projects.'],['What information is needed for a quotation?','Please provide required capacity, available L × W × H, water application, installation location and preferred material.']].map(([q,a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>

      <section id="quote" className="pd-quote"><div className="pd-container pd-quote-grid"><div><h2>Request a project quotation</h2><p>Share your capacity, dimensions and application. Our team will respond with a suitable configuration.</p><small>Typical response time: within 24 hours.</small></div><form><input aria-label="Name" placeholder="Name *" required /><input aria-label="Email" type="email" placeholder="Email *" required /><input aria-label="Country" placeholder="Country *" required /><select aria-label="Material" defaultValue=""><option value="" disabled>Preferred material</option><option>SS304</option><option>SS316</option><option>Need recommendation</option></select><input className="wide" aria-label="Capacity and dimensions" placeholder="Capacity / dimensions *" /><textarea className="wide" aria-label="Message" placeholder="Project requirements" /><button className="pd-button pd-light" type="submit">Request a Quote</button></form></div></section>

      <footer className="pd-footer"><div className="pd-container pd-footer-grid"><div><Image src="/assets/logo.jpg" alt="HONGLIANG" width={190} height={75} /><p>Stainless Steel Water Tanks &amp;<br />Water Supply Solutions</p></div><div><strong>Contact</strong><p>Harris<br />harris@hongliangglobal.com<br />WhatsApp +86 18127154227</p></div><div><strong>Address</strong><p>No. 10, Xinlong Road, Shangjiao Community,<br />Chang&apos;an Town, Dongguan City, China</p></div></div></footer>
    </main>
  );
}
