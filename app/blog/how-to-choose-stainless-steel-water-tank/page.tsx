import Image from 'next/image';
import Link from 'next/link';

const toc = [
  ['material', '1. Choose the right stainless steel grade'],
  ['capacity', '2. Calculate usable tank capacity'],
  ['structure', '3. Confirm panel and structural design'],
  ['installation', '4. Plan installation and maintenance access'],
  ['supplier', '5. Evaluate the manufacturer'],
  ['checklist', '6. RFQ information checklist'],
];

export default function BlogArticlePage() {
  return (
    <main className="blog-page">
      <div className="blog-utility"><div className="blog-container"><span>✉ harris@hongliangglobal.com</span><span>◉ WhatsApp +86 18127154227</span><span className="blog-language">◎ English⌄</span></div></div>
      <header className="blog-header"><div className="blog-container blog-header-inner">
        <Link href="/" className="blog-logo"><Image src="/assets/logo.jpg" alt="HONGLIANG" width={185} height={74} priority /></Link>
        <nav><Link href="/">Home</Link><Link href="/products/stainless-steel-water-tank">Products</Link><a href="#article">Resources</a><Link href="/contact">Contact</Link></nav>
        <a className="blog-header-cta" href="#sidebar-form">Get a Quote</a>
      </div></header>

      <div className="blog-container blog-breadcrumb"><Link href="/">Home</Link><span>/</span><span>Resources</span><span>/</span><strong>Water Tank Selection Guide</strong></div>

      <section className="blog-hero">
        <div className="blog-container blog-hero-grid">
          <div>
            <p className="blog-category">ENGINEERING GUIDE</p>
            <h1>How to Choose a Stainless Steel Water Tank for Your Project</h1>
            <p className="blog-deck">A practical buyer&apos;s guide to material grades, capacity planning, structural design and supplier evaluation.</p>
            <div className="blog-meta"><span>By HONGLIANG Engineering Team</span><span>Updated August 2026</span><span>9 min read</span></div>
          </div>
          <div className="blog-hero-image"><Image src="/assets/generated-pages/resources-hero.png" alt="Stainless steel water tank engineering documents" fill priority sizes="50vw" /></div>
        </div>
      </section>

      <div className="blog-container blog-layout" id="article">
        <article className="blog-article">
          <nav className="blog-toc" aria-label="Article table of contents">
            <div><span>QUICK CONTENTS</span><strong>Jump to a section</strong></div>
            <ol>{toc.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ol>
          </nav>

          <p className="blog-lead">A stainless steel sectional water tank is not an off-the-shelf commodity. The correct solution depends on water quality, usable installation space, operating conditions and local project requirements. The six checks below help buyers compare proposals on a like-for-like basis.</p>

          <section id="material"><span className="blog-number">01</span><h2>Choose the right stainless steel grade</h2><p>SS304 is widely used for potable water and general building-services applications. SS316 provides stronger resistance in coastal, chemically aggressive or higher-chloride environments. The material decision should follow water analysis, ambient conditions and the project specification—not price alone.</p><div className="blog-note"><strong>Engineering note</strong><p>Ask the supplier to confirm the panel material, internal components, fasteners and connection fittings separately. A tank described as “SS316” should clearly state which parts use that grade.</p></div></section>

          <figure className="blog-wide-image"><Image src="/assets/generated-pages/products-hero.png" alt="HONGLIANG stainless steel sectional water tank" fill sizes="820px" /><figcaption>Modular stainless steel panels allow capacity and dimensions to be configured around the project.</figcaption></figure>

          <section id="capacity"><span className="blog-number">02</span><h2>Calculate usable tank capacity</h2><p>Nominal dimensions do not equal usable storage volume. Capacity calculations should account for freeboard, overflow level, operating level, internal bracing and any compartment division. Provide the supplier with required effective capacity and the maximum available length, width and height.</p><div className="blog-data"><div><span>Required input</span><strong>Effective capacity</strong></div><div><span>Space constraint</span><strong>Maximum L × W × H</strong></div><div><span>Site condition</span><strong>Indoor / Outdoor</strong></div></div></section>

          <section id="structure"><span className="blog-number">03</span><h2>Confirm panel and structural design</h2><p>Panel thickness and reinforcement must be engineered according to water depth and load conditions. Review panel sizes, tie-rod configuration, roof support, base arrangement and seismic or wind requirements where relevant.</p><ul><li>Panel thickness schedule by tank level</li><li>Internal and external reinforcement materials</li><li>Roof loading and access requirements</li><li>Foundation flatness and support details</li></ul></section>

          <section id="installation"><span className="blog-number">04</span><h2>Plan installation and maintenance access</h2><p>Sectional construction is especially useful where access is restricted, but assembly still requires working clearance. Confirm doorway sizes, lifting routes, overhead restrictions and maintenance space around manholes, ladders, valves and flanges before approving the final layout.</p><blockquote>Good tank engineering begins with the installation room—not with a standard tank dimension.</blockquote></section>

          <section id="supplier"><span className="blog-number">05</span><h2>Evaluate the manufacturer</h2><p>A credible supplier should be able to explain its production and inspection process, provide relevant material documentation, issue coordinated drawings and support installation. Factory evidence is more useful when it shows real panel forming, assembly, inspection and export packing.</p><div className="blog-factory"><div><Image src="/assets/generated-pages/factory-hero.png" alt="HONGLIANG engineers inspecting panels" fill sizes="420px" /></div><div><h3>What to request</h3><ul><li>Material and quality documentation</li><li>General arrangement drawings</li><li>Accessory and connection schedule</li><li>Packing list and installation guidance</li></ul></div></div></section>

          <section id="checklist"><span className="blog-number">06</span><h2>RFQ information checklist</h2><p>Providing complete project information helps the engineering team respond faster and reduces quotation revisions.</p><div className="blog-checklist">{['Required effective capacity','Maximum available dimensions','Water application and quality','Installation country and location','Indoor or outdoor installation','Preferred SS304 or SS316','Required connections and accessories','Applicable project standard'].map(item => <span key={item}>✓ {item}</span>)}</div></section>

          <div className="blog-conclusion"><h2>Need help configuring your tank?</h2><p>Send us your capacity, available dimensions and water application. Our engineering team will recommend a suitable sectional tank configuration.</p><a href="#sidebar-form">Request an engineering review →</a></div>
        </article>

        <aside className="blog-sidebar" aria-label="Company information and inquiry form">
          <div className="blog-sticky">
            <section className="blog-company" id="company">
              <div className="blog-company-image"><Image src="/assets/generated-pages/about-hero.png" alt="HONGLIANG engineering and export team" fill sizes="330px" /></div>
              <div className="blog-company-copy"><span>ABOUT HONGLIANG</span><h2>Water storage expertise backed by real production.</h2><p>We manufacture stainless steel sectional water tanks and integrated water supply equipment for global building, fire protection and industrial projects.</p><ul><li>Project-specific engineering</li><li>Factory quality control</li><li>Export coordination</li></ul><Link href="/products/stainless-steel-water-tank">View our tank system →</Link></div>
            </section>

            <form className="blog-mini-form" id="sidebar-form">
              <h2>Ask an engineer</h2><p>Share a few project details. We typically reply within 24 hours.</p>
              <label>Name<input name="name" placeholder="Your name" required /></label>
              <label>Business email<input name="email" type="email" placeholder="name@company.com" required /></label>
              <label>Capacity / dimensions<input name="capacity" placeholder="e.g. 50 m³, 5 × 4 × 3 m" /></label>
              <label>Message<textarea name="message" placeholder="Application, country and requirements" /></label>
              <button type="submit">Request a Quote</button>
              <small>Or WhatsApp: +86 18127154227</small>
            </form>
          </div>
        </aside>
      </div>

      <footer className="blog-footer"><div className="blog-container"><strong>HONGLIANG</strong><span>Stainless Steel Water Tanks &amp; Water Supply Solutions</span><span>harris@hongliangglobal.com</span></div></footer>
    </main>
  );
}
