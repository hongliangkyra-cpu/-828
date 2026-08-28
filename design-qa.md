# Homepage localization design QA

## Comparison target

- Source visual truth: `C:/Users/86153/AppData/Local/Temp/codex-clipboard-1b08ab1f-c75d-43fe-ba3b-108eca78e377.png`
- Source pixels: 864 × 1821 (aspect ratio 1:2.108)
- Implementation: `http://127.0.0.1:4173/`
- Implementation screenshot: in-app Browser capture from the deliverable homepage tab
- Desktop comparison viewport: 1440 × 900 CSS px with a measured full document height of exactly 3035 CSS px
- Responsive verification viewport: 390 × 844 CSS px
- State: default homepage, Products menu open, and first FAQ expanded

## Required fidelity surfaces

- Typography: native browser text follows the design hierarchy and is no longer a scaled raster.
- Spacing/layout: section order remains hero → proof → products → process → applications → factory → projects → resources → FAQ → quote → footer.
- Colors/tokens: white, dark navy and brand blue tokens match the selected design.
- Image quality: original local assets are served directly; factory images resolve at 2364–4096px and resource images at 2364–2917px.
- Copy/content: design headings, product labels, steps, applications, FAQ and quote copy are retained.

## Full-view comparison evidence

- The 864 × 1821 source was opened at original resolution and compared with desktop and mobile browser captures.
- The former `.strict-preview` long-image node is absent.
- DOM counts match the selected layout: 5 product cards, 4 applications, 4 factory cards and 3 resource cards.

## Focused comparison evidence

- Hero: native headline and CTA group remain left of the tank visual; specifications remain beneath the image.
- Product area: one large card plus four small cards is preserved.
- Lower page: factory photography, resources, FAQ and quote form load as independent components.
- Mobile: product grid collapses to one column; no horizontal overflow; WhatsApp remains visible.

## Comparison history

1. P1: the homepage was one enlarged raster, so non-overlay content was soft and non-interactive. Fixed by rendering `Homepage`.
2. P1: catalog-page screenshots and lazy loading left blank or low-fidelity card areas. Fixed with individual high-resolution local assets and eager loading.
3. P2: live sections were vertically looser than the source. Fixed by tightening only section padding and media heights while preserving grid placement.
4. Post-fix: console has no application warnings/errors; lower-page assets load at original resolution.
5. P2: the first native desktop pass measured 3593px tall rather than the selected 3035px design baseline. Section-owned spacing and media containers were calibrated without transform scaling or cropping. The final 1440px render measures exactly 3035px.

## Findings

- No remaining actionable P0/P1/P2 localization gaps were found.
- P3: some supporting photography is a high-quality project-equivalent rather than the exact photograph in the 864px source, avoiding enlarged blurry thumbnail crops.

## Interaction verification

- Products mega menu opens.
- FAQ expands and reveals the answer.
- Product and article links point to existing local pages.
- WhatsApp is present on desktop and mobile.
- Console has no errors or warnings in the final pass.
- Desktop document measurement: 1440 × 3035 CSS px, with no broken images.

final result: passed
