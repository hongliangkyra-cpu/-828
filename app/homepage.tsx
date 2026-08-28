'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight, BoxArrowDown, Buildings, CheckCircle, Cube, Envelope, Factory, GlobeHemisphereWest, HardHat, List, Package, Phone, ShieldCheck, Truck, WhatsappLogo, X } from '@phosphor-icons/react';

const products = [
  ['Stainless Steel Water Tank','/assets/banner-product.jpg','Modular sectional tanks in SS304 / SS316 for potable water, fire protection and industrial storage.'],
  ['BDF Underground Water Tank','/assets/generated-pages/products-hero.png','Space-saving underground storage engineered for demanding sites.'],
  ['Sectional Water Tank','/assets/generated-pages/projects-hero.png','Flexible panel systems designed around your required capacity.'],
  ['Integrated Tank & Pump System','/assets/generated-pages/applications-hero.png','Tank, pumps and controls configured as one project solution.'],
  ['Secondary Water Supply Equipment','/assets/generated-pages/factory-hero.png','Stable water pressure systems for commercial and industrial buildings.'],
];

const faqs = [
  ['What materials are available for HONG LIANG water tanks?','Configurations can be developed around SS304 or SS316 requirements. Final material selection should follow water quality, site conditions and the applicable project specification.'],
  ['Can the tanks be used for fire protection systems?','Yes. We support project-specific fire-water storage configurations. Capacity, accessories and system scope are reviewed against the project requirements before quotation.'],
  ['How do I determine the right tank capacity?','Send the required volume, available installation area, application and inlet/outlet requirements. Our team will help evaluate a practical configuration.'],
  ['What is the typical production and delivery time?','Lead time depends on tank size, material, configuration and order quantity. A project-specific schedule is provided with the quotation.'],
];

function Header(){
  const [open,setOpen]=useState(false);
  return <>
    <div className="utility"><div className="container utility-inner"><span><Envelope size={14}/>harris@hongliangglobal.com</span><span><WhatsappLogo size={15}/>WhatsApp&nbsp; +86 18127154227</span><span className="language"><GlobeHemisphereWest size={15}/>English</span></div></div>
    <header className="header"><div className="container nav-wrap">
      <a href="#top" className="brand" aria-label="HONG LIANG home"><Image src="/assets/logo.jpg" alt="HONG LIANG" width={210} height={86} priority/></a>
      <nav className={open?'nav home-standard-nav open':'nav home-standard-nav'} aria-label="Primary navigation">
        {['Products','Applications','Projects','Factory','Resources','About'].map(x=><a key={x} href={`#${x.toLowerCase()}`} onClick={()=>setOpen(false)}>{x}</a>)}
      </nav>
      <div className="header-actions"><a className="btn btn-outline" href="/assets/catalog.pdf" download>Download Catalog</a><a className="btn" href="#quote">Get a Quote</a></div>
      <button className="menu" onClick={()=>setOpen(v=>!v)} aria-label="Toggle menu">{open?<X/>:<List/>}</button>
    </div></header>
  </>
}

export function Homepage(){
 const [active,setActive]=useState<number|null>(null); const [sent,setSent]=useState(false);
 return <main id="top">
  <Header/>
  <section className="hero"><div className="container hero-grid"><div className="hero-copy"><p className="eyebrow">Water Storage & Supply Systems</p><h1>Reliable Water<br/>Storage for<br/>Global Projects.</h1><p className="lead">HONG LIANG manufactures stainless steel water tanks and water supply equipment engineered for safety, durability, and long-term performance.</p><div className="actions"><a href="#quote" className="btn">Get a Quote</a><a href="#quote" className="btn btn-outline">Talk to an Engineer</a></div></div><div className="hero-image"><Image src="/assets/banner.jpg" alt="Stainless steel sectional water tank" fill loading="eager" sizes="(max-width: 800px) 100vw, 62vw"/></div></div>
   <div className="container specs"><span><b>Material</b>Stainless Steel 304 / 316</span><span><b>Panel Type</b>Pressed Panel</span><span><b>Tank Type</b>Sectional Assembly</span><span><b>Applications</b>Potable Water / Fire / Industrial</span></div>
  </section>
  <section className="proof"><div className="container proof-grid">{[[Cube,'Custom Capacity','Engineered to project requirements'],[HardHat,'Project Support','Technical guidance from design to installation'],[ShieldCheck,'Industrial Quality Control','Manufactured under strict QC processes'],[GlobeHemisphereWest,'Export Coordination','Documentation and logistics for global delivery']].map(([Icon,t,d]:any)=><div className="proof-item" key={t}><Icon size={34}/><span><b>{t}</b><small>{d}</small></span></div>)}</div></section>
  <section id="products" className="section"><div className="container"><h2>Our Product Categories</h2><div className="blue-rule"/><div className="product-grid">{products.map((p,i)=><article key={p[0]} className={i===0?'product-card featured':'product-card'}><div className="product-image"><Image src={p[1]} alt={p[0]} fill loading="eager" sizes={i===0?'45vw':'24vw'}/></div><div className="product-copy"><h3>{p[0]}</h3>{i===0&&<p>{p[2]}</p>}<a href={i===0?'/products/stainless-steel-water-tank':'#quote'}>View Details <ArrowRight/></a></div></article>)}</div></div></section>
  <section className="process section-tight"><div className="container"><h2>From Requirements to Delivery</h2><div className="process-grid">{[[CheckCircle,'Engineering Review','We review drawings and requirements to confirm technical feasibility.'],[Cube,'Configuration','Tank size, materials and accessories configured to match the application.'],[ShieldCheck,'Production & Inspection','Manufactured under strict quality control and inspected before delivery.'],[Truck,'Packing & Project Support','Secure packing and export support for on-time delivery to site.']].map(([Icon,t,d]:any,i)=><div className="process-step" key={t}><b>{i+1}</b><Icon size={34}/><span><strong>{t}</strong><small>{d}</small></span></div>)}</div></div></section>
  <section id="applications" className="section-tight"><div className="container"><h2>Applications</h2><div className="application-grid">{[['Potable Water','/assets/generated-pages/products-hero.png'],['Fire Protection','/assets/factory-01.jpg'],['High-Rise Buildings','/assets/generated-pages/applications-hero.png'],['Industrial Facilities','/assets/generated-pages/projects-hero.png']].map(([t,img])=><div className="application" key={t}><Image src={img} alt={t} fill loading="eager" sizes="25vw"/><strong>{t}</strong></div>)}</div></div></section>
  <section id="factory" className="section"><div className="container factory-grid"><div className="factory-intro"><p className="eyebrow">Our Factory</p><h2>Production you can see.<br/>Quality you can trust.</h2><a href="#quote" className="btn btn-outline">Factory Overview <ArrowRight/></a></div><div className="factory-cards">{[[Factory,'Panel Forming','/assets/factory-01.jpg','Precision pressing for consistent panel quality.'],[HardHat,'Tank Assembly','/assets/factory-02.jpg','Skilled assembly for structural reliability.'],[ShieldCheck,'Quality Inspection','/assets/panels.jpg','Every tank undergoes rigorous inspection.'],[Package,'Packing & Loading','/assets/factory-03.jpg','Secure packing for safe transport and export.']].map(([Icon,t,img,d]:any)=><article key={t}><div className="factory-photo"><Image src={img} alt={t} fill loading="eager" sizes="20vw"/></div><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>
  <section id="projects" className="projects"><div className="container project-grid"><article><div className="project-photo"><Image src="/assets/generated-pages/projects-hero.png" alt="India stainless steel water tank project" fill loading="eager" sizes="25vw"/></div><div><span>India</span><h3>20m × 5m × 4m<br/>Stainless Steel Water Tank</h3><p>Potable water storage solution for a residential complex.</p><a href="#quote">View Project <ArrowRight/></a></div></article><article><div className="project-photo"><Image src="/assets/generated-pages/applications-hero.png" alt="Thailand integrated tank pump project" fill loading="eager" sizes="25vw"/></div><div><span>Thailand</span><h3>17m × 8m × 4m<br/>Integrated Tank-Pump System</h3><p>Integrated storage and pumping system for building water supply.</p><a href="#quote">View Project <ArrowRight/></a></div></article></div></section>
  <section id="resources" className="section"><div className="container"><h2>Resources & Knowledge</h2><div className="blue-rule"/><div className="resource-grid">{[
    ['Choosing 304 vs 316 Stainless Steel','Understand the differences and select the right material for your project.','/blog/ai/material-comparison.png','/blog/304-vs-316-stainless-steel-water-tanks'],
    ['Water Tank Capacity Planning','Key factors in calculating capacity for safe and efficient operation.','/blog/ai/capacity-cutaway.png','/blog/how-to-size-sectional-water-tank'],
    ['Preparing a Custom Tank RFQ','A checklist to help you provide complete and accurate information.','/blog/ai/rfq-engineering.png','/blog/stainless-steel-water-tank-rfq-checklist'],
  ].map(([t,d,img,href])=><article key={t}><div className="resource-photo"><Image src={img} alt={t} fill loading="eager" sizes="18vw"/></div><div><h3>{t}</h3><p>{d}</p><a href={href}>Read Article <ArrowRight/></a></div></article>)}</div></div></section>
  <section className="faq section-tight"><div className="container"><h2>Technical FAQ</h2><div className="faq-grid">{faqs.map((f,i)=><button key={f[0]} className={active===i?'faq-item active':'faq-item'} onClick={()=>setActive(active===i?null:i)}><span>{f[0]}<b>{active===i?'−':'+'}</b></span>{active===i&&<p>{f[1]}</p>}</button>)}</div></div></section>
  <section id="quote" className="quote"><div className="container quote-grid"><div><h2>Request a Project Quote</h2><p>Share your project details and our team will provide a tailored solution.</p><small><Phone/> We typically reply within 24 hours.</small></div>{sent?<div className="success"><CheckCircle size={38}/><h3>Thank you.</h3><p>Your request has been received. Our sales team will contact you soon.</p></div>:<form onSubmit={e=>{e.preventDefault();setSent(true)}}><input required placeholder="Name*"/><input required type="email" placeholder="Email*"/><input required placeholder="Country*"/><select required defaultValue=""><option value="" disabled>Product*</option>{products.map(p=><option key={p[0]}>{p[0]}</option>)}</select><input placeholder="Capacity / Dimensions*"/><input placeholder="Application*"/><input placeholder="WhatsApp"/><textarea placeholder="Message"/><button className="btn" type="submit">Request a Project Quote</button></form>}</div></section>
  <footer id="about"><div className="container footer-grid"><div><Image src="/assets/logo.jpg" alt="HONG LIANG" width={190} height={78}/><p>Stainless Steel Water Tanks &<br/>Water Supply Solutions</p></div><div><h3>Contact</h3><p>Harris<br/>harris@hongliangglobal.com<br/>WhatsApp +86 18127154227</p></div><div><h3>Address</h3><p>Room 1702, Building 2, Minsheng Finance Building,<br/>Dongguan City, Guangdong Province, China</p></div><div><h3>Follow Us</h3><GlobeHemisphereWest size={22}/></div></div><div className="container copyright">© 2026 HONG LIANG. All rights reserved.<span>Privacy Policy &nbsp; | &nbsp; Terms of Use</span></div></footer>
 </main>
}
