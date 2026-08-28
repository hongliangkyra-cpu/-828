import Image from 'next/image';
import Link from 'next/link';
import CompanyMap, { COMPANY_ADDRESS } from '../components/company-map';

export default function ContactPage() {
  return (
    <main className="contact-page">
      <div className="contact-utility"><div className="contact-container"><span>✉ harris@hongliangglobal.com</span><span>◉ WhatsApp +86 18127154227</span><span className="contact-lang">◎ English⌄</span></div></div>
      <header className="contact-header"><div className="contact-container contact-header-inner">
        <Link href="/" className="contact-logo"><Image src="/assets/logo.jpg" alt="HONGLIANG" width={185} height={74} priority /></Link>
        <nav><Link href="/">Home</Link><Link href="/products/stainless-steel-water-tank">Products</Link><Link href="/blog/how-to-choose-stainless-steel-water-tank">Resources</Link><span>Contact</span></nav>
        <a href="#contact-form" className="contact-cta">Get a Quote</a>
      </div></header>

      <section className="contact-intro"><div className="contact-container">
        <div><h1>Let&apos;s discuss your water storage project.</h1><p>Send your capacity, dimensions and application requirements. Our team will help you identify a suitable tank configuration.</p></div>
        <div className="contact-direct"><div><span>EMAIL</span><a href="mailto:harris@hongliangglobal.com">harris@hongliangglobal.com</a></div><div><span>WHATSAPP</span><a href="https://wa.me/8618127154227" target="_blank" rel="noopener noreferrer">+86 18127154227</a></div><div><span>LOCATION</span><strong>Dongguan, Guangdong, China</strong></div></div>
      </div></section>

      <section className="contact-container contact-map-section"><CompanyMap /></section>

      <section className="contact-contact-band" id="contact-form"><div className="contact-container contact-form-grid">
        <div><span>PROJECT INQUIRY</span><h2>Tell us what you need.</h2><p>For an accurate response, include the required capacity, maximum installation dimensions, water application and destination country.</p><div className="contact-address-block"><strong>Office address</strong><p>{COMPANY_ADDRESS}</p></div></div>
        <form><div><label>Name *</label><input name="name" required /></div><div><label>Business email *</label><input name="email" type="email" required /></div><div><label>Country *</label><input name="country" required /></div><div><label>Product</label><select name="product" defaultValue="Stainless Steel Water Tank"><option>Stainless Steel Water Tank</option><option>Integrated Tank & Pump System</option><option>Water Supply Equipment</option></select></div><div className="contact-wide"><label>Capacity / Dimensions</label><input name="capacity" placeholder="e.g. 50 m³, 5 × 4 × 3 m" /></div><div className="contact-wide"><label>Project requirements *</label><textarea name="message" required /></div><button type="submit">Request a Project Quote</button></form>
      </div></section>

      <footer className="contact-footer"><div className="contact-container"><strong>HONGLIANG</strong><span>Stainless Steel Water Tanks &amp; Water Supply Solutions</span><span>harris@hongliangglobal.com</span></div></footer>
    </main>
  );
}
