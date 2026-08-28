'use client';

import { useState } from 'react';

const groups = [
  {
    title: 'Water Tank Systems',
    items: [
      { label: 'Stainless Steel Water Tanks', href: '/products/stainless-steel-water-tank' },
      { label: 'Sectional Panel Tanks', href: '/products/stainless-steel-water-tank' },
      { label: 'Insulated Water Tanks', href: '/products/stainless-steel-water-tank' },
    ],
  },
  {
    title: 'By Application',
    items: [
      { label: 'Potable Water Storage', href: '/products/stainless-steel-water-tank#applications' },
      { label: 'Fire Protection Systems', href: '/products/stainless-steel-water-tank#applications' },
      { label: 'Industrial Water Storage', href: '/products/stainless-steel-water-tank#applications' },
    ],
  },
  {
    title: 'Engineering Support',
    items: [
      { label: 'Tank Capacity Guide', href: '/blog/how-to-choose-stainless-steel-water-tank#capacity' },
      { label: 'Material Selection', href: '/blog/how-to-choose-stainless-steel-water-tank#material' },
      { label: 'Installation & Maintenance', href: '/blog/how-to-choose-stainless-steel-water-tank#installation' },
    ],
  },
];

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="m5 3 5 5-5 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
    </svg>
  );
}

export default function MegaMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mega-shell" onMouseLeave={() => setOpen(false)}>
      <nav className="glass-nav" aria-label="Primary navigation">
        <button
          type="button"
          className={open ? 'mega-trigger active' : 'mega-trigger'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          Products
          <svg viewBox="0 0 16 16" aria-hidden="true"><path d="m4 6 4 4 4-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" /></svg>
        </button>
        <a href="#applications">Applications</a>
        <a href="#projects">Projects</a>
        <a href="#factory">Factory</a>
        <a href="/blog/how-to-choose-stainless-steel-water-tank">Resources</a>
        <a href="/contact">Contact</a>
      </nav>

      <section className={open ? 'mega-panel open' : 'mega-panel'} aria-hidden={!open}>
        <div className="mega-intro">
          <span>PRODUCT PORTFOLIO</span>
          <h2>Built for demanding water storage projects.</h2>
          <p>Explore modular stainless-steel systems engineered for reliable global delivery.</p>
          <a href="/products/stainless-steel-water-tank">View product template <Arrow /></a>
        </div>

        <div className="mega-groups">
          {groups.map((group) => (
            <div className="mega-group" key={group.title}>
              <h3>{group.title}</h3>
              {group.items.map((item) => (
                <a href={item.href} key={item.label} onClick={() => setOpen(false)}>
                  <span>{item.label}</span><Arrow />
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="mega-feature">
          <span>PROJECT ASSISTANCE</span>
          <strong>Need a custom tank configuration?</strong>
          <p>Send your capacity, dimensions and application requirements.</p>
          <a href="#quote">Talk to an engineer <Arrow /></a>
        </div>
      </section>
    </div>
  );
}
