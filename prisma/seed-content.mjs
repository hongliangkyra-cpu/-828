import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const figure = (src, alt, caption) => `<figure><img src="${src}" alt="${alt}" loading="lazy" width="1600" height="900"><figcaption>${caption}</figcaption></figure>`;
const cta = (title, body) => `<div class="article-cta"><strong>${title}</strong><p>${body}</p><a href="/contact">Request an engineering review →</a></div>`;
const section = (id, title, paragraphs, bullets = []) => `<h2 id="${id}">${title}</h2>${paragraphs.map(p => `<p>${p}</p>`).join('')}${bullets.length ? `<ul>${bullets.map(b => `<li>${b}</li>`).join('')}</ul>` : ''}`;
const faq = (items) => `<h2 id="frequently-asked-questions">Frequently asked questions</h2>${items.map(([q,a]) => `<h3>${q}</h3><p>${a}</p>`).join('')}`;

const materialContent = `
<p>Choosing between 304 and 316 stainless steel is one of the first questions in a sectional water tank specification, but the grade name alone cannot guarantee service life. Water chemistry, airborne salt, cleaning chemicals, temperature, fabrication quality, crevices, drainage and maintenance all influence performance. A reliable selection process therefore starts with the actual exposure conditions and ends with a complete bill of materials—not with a one-line request for “a stainless steel tank.”</p>
<p>This guide is written for consultants, contractors, distributors and project buyers comparing SS304 and SS316 water tank quotations. It explains where each grade is commonly used, why chloride exposure changes the decision, which tank parts must be identified separately, and what evidence to request before approving a proposal. It is general engineering guidance rather than a substitute for the project designer, local authority or water-quality specialist.</p>
${figure('/blog/ai/material-comparison.png','SS304 and SS316 stainless steel water tank panel comparison','Material selection should consider the complete exposure—not only the nominal alloy designation.')}
${section('quick-answer','Quick answer: 304 or 316?',[
  'Type 304 is the widely used general-purpose austenitic stainless steel for potable-water and building-services equipment under suitable conditions. Type 316 contains molybdenum, which generally improves resistance to pitting and crevice corrosion in chloride-bearing environments. That makes 316 a frequent candidate for coastal locations, more aggressive water, chemical exposure or projects that explicitly require the grade.',
  'The practical answer is conditional. A well-designed and properly fabricated 304 tank can be appropriate for many normal indoor potable-water duties. A poorly detailed 316 tank can still develop localized corrosion if deposits, stagnant crevices, iron contamination or inappropriate cleaners compromise its passive surface. Grade selection must be combined with correct detailing, fabrication, commissioning and maintenance.'
])}
${section('what-the-grades-mean','What the grade designations mean',[
  'Both 304 and 316 belong to the austenitic stainless steel family. Chromium helps form the thin passive film that gives stainless steel its corrosion resistance. Nickel supports the austenitic structure and contributes to fabrication characteristics. The distinguishing addition in 316 is molybdenum, which improves resistance to localized attack in many chloride-containing environments. Low-carbon variants such as 304L and 316L are often discussed for welded fabrications because lower carbon content helps reduce sensitization risk around welds.',
  'Commercial tank specifications may use SS304, SUS304, AISI 304 or EN 1.4301 for related grade designations, and equivalent naming appears for 316. These systems are not interchangeable in every detail. The project document should state the required standard, product form and certificate expectation rather than relying on an informal name. The supplier should also clarify whether panels, tie rods, bolts, ladders, flanges and accessories use the same grade.'
],[
  'Confirm the requested grade and the governing material standard.',
  'Identify whether regular or low-carbon variants are required for welded parts.',
  'Request material documentation appropriate to the project contract.',
  'Avoid assuming that every visible metallic component matches the panel grade.'
])}
${section('water-chemistry','Start with water chemistry and operating conditions',[
  'Chloride concentration is an important input, but it is not the only one. Temperature, pH, oxidizing disinfectants, deposits, residual cleaning agents, flow conditions and the possibility of evaporation can all change localized exposure. A bulk-water analysis may not represent the concentration that develops in a splash zone, underneath a deposit or at a poorly drained connection. When water quality varies seasonally, use the credible worst operating condition rather than an average that hides peaks.',
  'For potable-water service, the designer should review the incoming water report, treatment method and planned disinfection procedure. For process or fire-water service, document whether the tank may receive recycled water, softened water, seawater influence, foam concentrate residue or other chemicals. If water composition is unknown, that uncertainty should be visible in the quotation rather than converted into an unsupported material promise.'
])}
${section('coastal-exposure','Coastal and marine-influenced sites',[
  'A tank can be exposed to chlorides from both inside and outside. Coastal air carries salt droplets that may settle on roofs, external bolts, ladders and sheltered surfaces. Evaporation concentrates deposits, while areas that are not naturally washed by rain may remain contaminated. Outokumpu’s atmospheric-corrosion guidance links marine influence with the need for more corrosion-resistant grades and emphasizes that local microclimates matter.',
  'For a coastal project, provide the distance from the shoreline, whether the tank is indoors or outdoors, ventilation conditions, nearby cooling towers or chemical exhaust, cleaning frequency and the accessibility of external surfaces. Grade 316 is often considered, but the final selection and detailing should be confirmed by the project engineer. External washing, drainage and avoidance of contaminated carbon-steel tools remain important regardless of grade.'
])}
${figure('/blog/ai/coastal-tank.png','Stainless steel sectional water tank at a coastal industrial facility','Coastal exposure affects external surfaces, fasteners, accessories and sheltered details as well as the water-contact side.')}
${section('fabrication','Fabrication quality can outweigh a simple grade label',[
  'Stainless steel performs through a clean, continuous passive surface. Fabrication can damage that condition through embedded iron, excessive heat tint, rough grinding, poorly finished welds or cross-contamination from carbon-steel tools. Crevices at joints and accessories can create locally different chemistry. A credible manufacturer controls material segregation, tooling, forming, welding where applicable, surface cleaning and final inspection.',
  'Sectional tanks also depend on gasketed joints, bolts, internal bracing and penetrations. The corrosion behavior of an assembly is not defined by the panel alone. Ask for a component schedule that identifies the material of panels, internal structural parts, roof supports, bolts, washers, ladders, flanges and nozzles. Where dissimilar metals are proposed, the designer should consider electrical contact and the exposure environment.'
])}
${section('potable-water','Potable-water considerations',[
  'The Nickel Institute reports successful use of 304L and 316L stainless steels in potable-water treatment and related applications, while noting that optimum performance depends on understanding the conditions that affect stainless steel. World Stainless likewise describes stainless steel as useful across water intake, treatment, storage and distribution when the relevant properties and costs are understood.',
  'A potable-water tank still requires hygienic design. A secure cover, screened vents and overflow openings, appropriate drainage, accessible inspection points and a documented commissioning procedure matter. Oversized storage can increase stagnation risk. The material must also comply with the project’s local drinking-water and product-approval requirements. Do not treat “food grade” as a universal regulatory approval; request the specific evidence required by the destination country.'
])}
${section('cleaning','Cleaning, passivation and maintenance',[
  'Cleaning chemicals must be selected for the actual stainless grade and contamination. Chloride-bearing cleaners and tools previously used on carbon steel can create avoidable problems. After fabrication or site work, the specified cleaning and, where required, passivation process should remove free iron and residues without damaging seals or adjacent components. The tank should then be thoroughly rinsed and commissioned under an approved water-hygiene procedure.',
  'Maintenance planning begins at design stage. Provide safe access to manholes, ladders, valves and drains. Tank entry may meet the definition of a permit-required confined space depending on jurisdiction and hazards; OSHA guidance stresses that limited egress and physical or atmospheric hazards require formal controls. Routine inspection should therefore prioritize external observation, water-quality management and methods that minimize entry.'
])}
${figure('/blog/ai/internal-inspection.png','Engineer inspecting internal stainless steel water tank details','Inspection access, clean fabrication and a documented maintenance method are part of material performance.')}
${cta('Need a project-specific material recommendation?','Send the water analysis, installation location, temperature range and project standard. HONG LIANG can prepare a material and component schedule for engineering review.')}
${section('quotation-checklist','304 vs 316 quotation checklist',[
  'When comparing suppliers, normalize every quotation. A lower price may reflect a different panel grade, thickness schedule, bracing material, accessory scope or testing requirement. Ask each bidder to state assumptions and exclusions. If a proposal changes the specified grade, the technical deviation should be explicit and approved by the responsible designer.',
  'The most useful quotation is traceable from duty conditions to configuration. It should identify effective capacity, dimensions, compartment arrangement, panel and reinforcement schedule, material grades, gaskets, connections, accessories, design basis, inspection, packing and installation responsibilities. This prevents a grade comparison from becoming disconnected from the overall tank system.'
],[
  'Water application, analysis and maximum operating temperature',
  'Indoor, outdoor, coastal or chemically influenced atmosphere',
  'Panel, internal bracing, bolt and accessory material grades',
  'Material certificate and inspection-document requirements',
  'Cleaning, hydrostatic testing and commissioning scope',
  'Applicable local codes, authority approvals and client specifications'
])}
${section('decision-matrix','A practical decision framework',[
  'Use 304 as the baseline only when the project conditions support it. Escalate the review when chloride exposure, coastal atmosphere, higher temperature, chemicals, uncertain water quality or critical continuity increase risk. Consider 316 when the environment justifies its added resistance, but do not use it to compensate for poor detailing or incomplete maintenance. More demanding conditions may require a grade beyond 316 or a different solution; that judgment belongs to a qualified materials specialist.',
  'Finally, record why the grade was chosen. A short design-basis note should capture the water data, external environment, expected cleaning method, selected materials and responsible approvals. That record supports procurement, fabrication, commissioning and future maintenance—and is much more valuable than a generic statement that one grade is always better.'
])}
${faq([
  ['Is 316 stainless steel always better than 304 for a water tank?','316 generally offers greater resistance to localized corrosion in chloride-bearing conditions because of its molybdenum content, but “better” depends on duty, environment, fabrication and cost. For normal indoor potable-water service, 304 may be appropriate when water chemistry and local requirements support it. 316 does not eliminate the need for clean fabrication, drainage, maintenance and compatible accessories. A qualified project engineer should approve the selection.'],
  ['Can I select the grade using chloride concentration alone?','No. Chloride is important, but temperature, pH, disinfectant chemistry, deposits, evaporation, flow, crevices and external marine exposure also matter. A single laboratory result may not represent seasonal peaks or local concentration at splash zones. Give the material specialist the complete water report and operating range, and state whether chemical cleaning or disinfection will occur.'],
  ['Does an SS316 quotation mean every component is 316?','Not necessarily. Some quotations describe only the water-contact panels, while internal bracing, bolts, washers, ladders, flanges or external supports may use other materials. Require a component-level material schedule and list permitted deviations. This is particularly important where mixed metals, coastal exposure or client specifications create additional compatibility requirements.'],
  ['What documentation should confirm stainless steel grade?','The contract should state the required standard and inspection document. Depending on project requirements, buyers may request material certificates linked to heats or batches, incoming inspection records and traceability to fabricated components. The exact document type must be agreed before ordering; a generic marketing certificate is not a substitute for contractually required material evidence.'],
  ['Can 304 be used near the coast if the tank is indoors?','Indoor location can reduce direct salt deposition, but ventilation, open doors, cooling towers and unfiltered coastal air may still create marine influence. Sheltered surfaces can accumulate salt because rain does not wash them. Provide site distance, enclosure and ventilation details. Grade selection, external cleaning and component materials should be reviewed together.'],
  ['Why do weld color and surface contamination matter?','Heat tint and embedded iron can reduce local corrosion resistance by disturbing the passive surface or introducing contamination. Appropriate welding procedure, cleaning, tooling segregation and post-fabrication treatment help restore a clean stainless surface. Acceptance criteria should be defined in the quality plan rather than judged only from distant photographs.'],
  ['Is stainless steel maintenance free?','No engineering material is maintenance free. Stainless tanks require appropriate water management, inspection of covers and screens, control of deposits, accessible drainage and cleaning compatible with the selected grade and seals. External salt or industrial deposits may require washing. Maintenance frequency should follow the risk assessment, local water-hygiene plan and manufacturer instructions.'],
  ['When should a specialist consider grades beyond 316?','More aggressive chlorides, higher temperatures, seawater, chemical process water or critical service may exceed the comfortable application range of 316. Duplex or higher-alloy materials, linings or alternative systems may be evaluated. Do not make that escalation from a keyword chart; use actual chemistry, design conditions and a corrosion specialist’s assessment.'],
  ['Does a thicker 304 panel equal a thinner 316 panel?','Thickness and corrosion resistance answer different design questions. Panel thickness is primarily part of the structural system, while alloy selection addresses environmental compatibility. A thicker 304 panel does not automatically provide the localized-corrosion resistance associated with 316, and a 316 panel still needs adequate structural thickness. Compare proposals only after both structural and material requirements are normalized.'],
  ['Should bolts and washers match the panel grade?','Compatibility depends on location, exposure, mechanical demand and the complete joint design. Matching grades may be specified, but designers also consider strength, galling, availability and isolation. Ask the manufacturer to identify every fastener material and protective measure. Unspecified “stainless hardware” is not precise enough for a critical or coastal project.'],
  ['Can water testing after installation prove the grade was correct?','Water-quality results after commissioning can support hygiene management but do not prove alloy identity or long-term suitability. Grade verification comes from procurement traceability and, where required, material identification testing. Performance monitoring should be part of operation, yet it cannot replace a documented material selection made before fabrication.'],
  ['What should be written in the material approval note?','Record the design water analysis and temperature, external atmosphere, selected panel and component grades, fabrication and cleaning assumptions, required certificates, known limitations and the approving engineer. Also note unresolved risks or owner maintenance obligations. A concise approval note keeps procurement substitutions and future cleaning decisions aligned with the original basis.']
])}
${section('references','Technical references',[
  '<a href="https://nickelinstitute.org/en/resources/technical-guides/stainless-steel-for-potable-water-treatment-plants-10087/" target="_blank" rel="noopener">Nickel Institute — Stainless Steel for Potable Water Treatment Plants</a><br><a href="https://worldstainless.org/applications/applications-for-the-protection-of-the-environment-and-human-health/protection-of-water/" target="_blank" rel="noopener">World Stainless — Protection of Water</a><br><a href="https://www.outokumpu.com/en/expertise/2025/stainless-steel-and-atmospheric-corrosion-what-you-need-to-know" target="_blank" rel="noopener">Outokumpu — Atmospheric Corrosion Guidance</a><br><a href="https://www.osha.gov/laws-regs/standardinterpretations/2016-09-08" target="_blank" rel="noopener">OSHA — Construction Work in Water Storage Tanks</a>'
])}`;

const sizingContent = `
<p>A sectional water tank should be sized from the building’s demand, supply reliability and operating strategy—not from the largest rectangle that fits the plant room. Too little storage can leave a project exposed during peak demand or supply interruption. Too much storage adds structural load, capital cost and water age. The correct capacity balances resilience, water quality, pump operation, maintenance and the rules of the local authority.</p>
<p>This guide provides a transparent workflow for early design and supplier quotation. It does not replace the hydraulic calculations, fire strategy, public-health design or approval required for a specific project. Use it to organize inputs, challenge assumptions and prepare a tank configuration that the responsible engineer can verify.</p>
${figure('/blog/ai/capacity-cutaway.png','Cutaway visualization of usable water tank volume and freeboard','Nominal geometric volume is not the same as effective operating storage.')}
${section('define-duty','1. Separate the storage duties',[
  'Begin by defining what the tank serves. Potable domestic water, process water, fire protection, irrigation and emergency reserve have different demand patterns and regulatory controls. Combining duties may be allowed in some jurisdictions and prohibited or constrained in others. Even when a common structure is used, compartments, suction levels and reserved volumes may need to remain functionally separate.',
  'Create a one-page design-basis table listing each duty, governing authority, required autonomy period, peak flow, refill conditions and minimum operating level. This avoids a common error: adding unrelated quantities without checking whether they occur simultaneously. Fire-water storage, for example, should follow the approved fire strategy and applicable standard rather than a general domestic-consumption formula.'
])}
${section('demand-inputs','2. Establish credible demand inputs',[
  'Demand may be based on occupants, apartments, hotel rooms, hospital beds, production batches, fixtures, irrigation zones or a measured consumption profile. The correct unit rate comes from the local plumbing code, utility, client brief or design standard. Do not copy a liters-per-person value from another country without confirming its scope and safety factors.',
  'Where operating data is available, examine daily totals, hourly peaks, seasonal variation and exceptional events. Averages alone are insufficient. For a new building, document the occupancy assumptions and future expansion included in the design. For an industrial facility, coordinate production schedules, cleaning cycles and any simultaneous process demands. Record whether demand already includes losses or contingency.'
])}
${section('supply-reliability','3. Model the incoming supply',[
  'Storage compensates for the difference between demand and reliable inflow. Confirm the utility connection capacity, supply pressure, permitted filling period, frequency and duration of interruptions, borehole or treatment-plant output, and any tariff-driven operating schedule. If the tank refills continuously, the required storage may differ from a design that assumes a single daily filling window.',
  'Use a time-based mass balance when demand and inflow vary. For each interval, starting volume plus inflow minus demand equals ending volume. The lowest calculated volume must stay above the required reserve and pump submergence level. This method makes assumptions visible and is more robust than applying an unexplained multiplier to daily consumption.'
])}
${section('autonomy','4. Select the required autonomy period',[
  'Autonomy is the period the system must continue operating when normal supply is limited or unavailable. The appropriate value depends on utility reliability, building criticality, local rules, client risk tolerance and the ability to bring in alternative water. A hospital, data center support facility, hotel and ordinary office do not carry the same consequence of interruption.',
  'The World Health Organization notes that building water storage depends on factors such as mains capacity and pressure and the probability of interruption. Some guidance uses one day of consumption as a general practice, while local authorities may specify different values. Treat any rule of thumb as a starting point only; the project authority has precedence.'
])}
${section('operating-levels','5. Convert required storage into tank volume',[
  'The effective storage sits between the normal high and low operating levels. Above it, the tank needs freeboard and overflow allowance. Below it, water may remain as unusable dead volume because of outlet elevation, sump geometry, sediment clearance or pump suction requirements. Internal partitions and structural members also occupy space. A supplier should state both gross geometric capacity and effective capacity at the agreed levels.',
  'For a rectangular sectional tank, geometric volume is length multiplied by width multiplied by water depth. Do not use overall external height as water depth. Confirm panel module dimensions, roof space, foundation or plinth height, and the actual overflow centerline. If the tender requires a precise effective volume, ask the supplier to show the calculation on the general-arrangement drawing.'
])}
${section('worked-example','6. Worked planning example',[
  'Assume an early-stage building estimate indicates 72 cubic meters of daily potable-water demand. The authority and client require 18 hours of operating autonomy, and reliable inflow during the interruption is assumed to be zero. The preliminary operating storage is therefore 72 × 18 ÷ 24 = 54 cubic meters. This is not yet the selected tank size.',
  'The designer then adds the required operational reserve, checks peak-hour drawdown, establishes low and high levels, and accounts for unusable volume and compartment operation. If two compartments must each support partial service during maintenance, simply dividing the total in half may not meet the operating strategy. The worked result must be reconciled with structural limits, available modules and authority approval before procurement.'
])}
${figure('/blog/ai/high-rise-system.png','High-rise water tank and variable-speed booster pump system','Tank capacity, pump selection, controls and pressure zones should be designed as one operating system.')}
${section('pump-coordination','7. Coordinate the tank with pumps and controls',[
  'Tank sizing affects pump starts, refill rate, pressure stability and energy use. A small operating band can cause frequent starts; a very large band can increase water age or create unacceptable level variation. The controls designer should coordinate level sensors, duty and standby pumps, low-level protection, high-level alarm, valve logic and communication with the building management system.',
  'For booster systems, confirm the pump suction arrangement and required net positive suction head under the lowest operating level. Avoid layouts that introduce air pockets, vortexing or inaccessible isolation valves. Where the tank supplies multiple pressure zones, document which pumps draw from which compartment and how service is maintained during cleaning.'
])}
${cta('Send us your demand and available dimensions','HONG LIANG can translate the approved effective capacity into a sectional module arrangement, preliminary dimensions and accessory schedule for consultant review.')}
${section('space-structure','8. Check space, structure and installation access',[
  'A tank that fits in plan may still be impossible to install or maintain. Verify access doors, corridors, lifting routes, roof openings, ceiling height, columns, beams, ducts and pipe crossings. Provide working clearance around manholes, ladders, flanges, valves and external bolts. The installation sequence may require temporary space that is not obvious in the completed layout.',
  'Coordinate the support arrangement with the structural engineer. Water weighs approximately one metric tonne per cubic meter, before tank self-weight, fittings and dynamic or seismic effects are considered. The base must provide the flatness and continuous support required by the tank design. Do not assume that an existing slab can accept a new point-load pattern.'
])}
${section('water-quality','9. Control water age and hygiene',[
  'More storage is not automatically safer. The UK Drinking Water Inspectorate advises that storage should meet peak demand and interruption needs without allowing water to remain static for long periods. Covered construction, screened vents and overflows, temperature control, regular inspection and a suitable commissioning process support water quality.',
  'Consider twin compartments when uninterrupted service during cleaning is required. The Water Supplies Department in Hong Kong recommends twin-tank arrangements in relevant contexts so one tank can remain operational during maintenance. The exact requirement varies by jurisdiction, but maintainability should be decided before the tank is ordered.'
])}
${figure('/blog/ai/internal-inspection.png','Inspection access inside a stainless steel sectional water tank','Capacity planning must reserve practical access for inspection, cleaning and safe maintenance.')}
${section('rfq-data','10. Information to send with a capacity RFQ',[
  'A complete RFQ allows suppliers to compare configurations consistently. State whether the capacity is gross or effective, the operating level assumptions, the maximum external dimensions and any compartment requirement. Include drawings of the plant room and access route rather than relying on a text dimension alone.',
  'Ask the supplier to return a general arrangement, capacity calculation, panel and reinforcement schedule, nozzle list, accessory scope, support requirement and stated exclusions. The design consultant should review hydraulic, structural, hygienic and authority requirements before approval.'
],[
  'Demand basis and required autonomy',
  'Effective capacity and high/low operating levels',
  'Maximum length, width, height and installation clearances',
  'Indoor/outdoor location and design loads',
  'Water application, material grade and hygiene requirements',
  'Connections, compartments, ladders, manholes and instruments',
  'Applicable code, approval authority and documentation scope'
])}
${faq([
  ['What is the difference between nominal and effective tank capacity?','Nominal or gross capacity is usually derived from geometric dimensions. Effective capacity is the usable water between defined operating levels after allowing for freeboard, overflow elevation, low-level cutout, outlet position, internal displacement and any reserved volume. Procurement documents should state which value is required and ask the supplier to show the effective-capacity calculation.'],
  ['Should I size a tank as one day of building demand?','One day is a common planning reference in some guidance, but it is not universal. The correct autonomy depends on local utility and plumbing rules, interruption risk, building use, refill capacity and client requirements. Hospitals, hotels, residential towers and industrial plants can require different approaches. Use the adopted local criteria and document the basis.'],
  ['How does incoming flow reduce required storage?','If reliable inflow continues during demand, a time-step mass balance can show how much storage bridges the maximum deficit. However, inflow assumed during an outage must be credible. Model the permitted filling window, minimum supply pressure and worst interruption. Do not subtract an optimistic average inflow from peak demand without checking timing.'],
  ['Why can an oversized tank create water-quality risk?','Large storage can increase residence time and reduce turnover, particularly where demand is lower than forecast or compartments do not exchange evenly. Longer stagnation can affect temperature, disinfectant residual and aesthetic quality. Sizing should meet resilience needs without creating unnecessary static volume, and the design should support regular turnover and inspection.'],
  ['When are twin compartments useful?','Twin compartments can allow one side to remain in service while the other is inspected or cleaned. They can also improve operational flexibility, but only when valves, suction connections, controls and usable capacity are designed for partial operation. Two equal geometric chambers do not automatically guarantee adequate service during maintenance.'],
  ['Does the supplier design the building foundation?','The tank supplier normally states support and flatness requirements and may provide reaction or load information. The building structural engineer remains responsible for verifying the slab, beams, foundations, seismic restraint and load path under the project code. Clarify this interface in the RFQ and approval drawing.'],
  ['How should fire-water capacity be calculated?','Fire-water volume must follow the approved fire strategy, system demand, duration, replenishment assumptions, adopted code and authority having jurisdiction. It should not be inferred from domestic daily use. If a tank combines fire and domestic duties, controls must protect the reserved fire volume as required by the approved design.'],
  ['What information produces the fastest preliminary layout?','Send effective capacity, maximum room length/width/height, access opening, water duty, compartment requirement and drawings showing columns, beams and pipe routes. Also state material grade, indoor/outdoor location and required connections. With these inputs a manufacturer can propose panel modules without hiding major assumptions.'],
  ['How should uncertainty be shown in an early-stage calculation?','Use a range or scenario table instead of hiding uncertainty inside one oversized safety factor. Show low, expected and high occupancy, credible inflow cases and interruption periods. State which scenario controls the preliminary volume. As the project develops, replace assumptions with approved criteria and record the change in the design basis.'],
  ['Can usable capacity be increased without enlarging the room?','Sometimes the panel arrangement, water depth, outlet elevation or compartment configuration can be optimized, but every change affects structure, access and operation. Reducing freeboard or dead volume without engineering review can create overflow, suction or maintenance problems. Ask the supplier for options and compare effective capacity—not only external dimensions.'],
  ['What happens if the final pump flow changes after the tank is ordered?','A higher pump flow can change drawdown, suction hydraulics, connection size, anti-vortex requirements and control behavior. A lower flow may affect refill and turnover. Treat pump changes as an interface review: update the hydraulic calculation, nozzle schedule and operating levels before approving fabrication or site modification.'],
  ['How often should the capacity basis be reviewed?','Review it at concept design, authority submission, coordinated design, tender clarification and before production release. Recheck when occupancy, process demand, utility connection, fire strategy, pressure zones or room dimensions change. The calculation should carry a revision number and reference the drawings and criteria used, so procurement never relies on an obsolete volume.']
])}
${section('references','References and further guidance',[
  '<a href="https://www.who.int/publications/b/31288" target="_blank" rel="noopener">WHO — Water Safety in Buildings</a><br><a href="https://iris.who.int/bitstream/handle/10665/43423/9241563184_eng.pdf?sequence=1" target="_blank" rel="noopener">WHO — Health Aspects of Plumbing</a><br><a href="https://www.dwi.gov.uk/private-water-supplies/pws-installations/private-supply-networks/water-storage/" target="_blank" rel="noopener">UK Drinking Water Inspectorate — Water Storage</a><br><a href="https://www.wsd.gov.hk/en/water-matters/inside-service/02/" target="_blank" rel="noopener">Hong Kong WSD — Water Matters</a>'
])}`;

const rfqContent = `
<p>An accurate stainless steel water tank quotation is an engineering response to a defined duty. If an RFQ contains only “50 m³ stainless tank,” each supplier will fill the missing information with different assumptions. The resulting prices may look comparable while representing different capacities, materials, reinforcement, accessories, testing, packing and installation responsibilities.</p>
<p>This checklist helps international buyers prepare a quotation package that reduces revisions and technical ambiguity. It is designed for sectional stainless steel tanks used in potable water, fire protection, commercial buildings and industrial projects. Requirements must still be checked by the responsible consultant and local approval authority.</p>
${figure('/blog/ai/rfq-engineering.png','Engineers reviewing stainless steel water tank drawings and material samples','A useful RFQ connects project duty, drawings, materials, interfaces, inspection and logistics.')}
${section('project-summary','1. Start with a one-page project summary',[
  'State the project name, country, site type, buyer role and procurement stage. Explain whether the request is for budgeting, tender submission, consultant approval or a final purchase order. This tells the manufacturer what level of engineering, documentation and price validity is expected.',
  'Identify the intended water duty: potable, domestic, process, fire, irrigation, treated water or another service. If the tank combines duties, describe the compartment and reserve philosophy. Include the planned installation date and destination port or site so production and logistics can be assessed realistically.'
])}
${section('capacity-dimensions','2. Define capacity and dimensional constraints',[
  'Specify required effective capacity rather than only nominal volume. Provide maximum external length, width and height, available room dimensions, door openings, corridor restrictions, columns, beams and overhead services. State whether the tank can be assembled in an open area or must pass through an existing building.',
  'If dimensions are flexible, ask the manufacturer to optimize the panel-module arrangement. If one dimension is fixed, label it clearly. Include the foundation or support elevation, maintenance clearance and any split-compartment requirement. A marked-up plan and section are far more reliable than a list of numbers in an email.'
])}
${section('material-water','3. Describe water quality and material requirements',[
  'State the specified stainless steel grade and the reason if known. Attach water analysis for chloride, pH, temperature and treatment chemicals when material selection depends on them. Describe the external environment, including coastal influence, industrial pollution, indoor humidity or chemical exposure.',
  'Require a component-level material schedule. Panels, internal bracing, bolts, washers, flanges, ladders and external supports may not all use the same grade. If substitutions are permitted, require the bidder to identify them as deviations. Avoid vague phrases such as “food grade” unless the project also names the approval or material evidence required.'
])}
${section('design-basis','4. Provide the structural and regulatory design basis',[
  'List the applicable tank standard, building code, seismic parameters, wind exposure, roof live load, operating water depth and any unusual load. Confirm whether the design is atmospheric and vented. For fire-water tanks, identify the approved fire strategy and applicable standard; NFPA 22 is one recognized standard for water tanks used in private fire protection, but the current adopted edition and authority requirements must be confirmed.',
  'Ask the bidder to state panel thicknesses by level, internal reinforcement arrangement, roof support, base support and anchor requirements. Structural design information should be reviewable by the consultant and coordinated with the building structure.'
])}
${figure('/blog/ai/panel-forming.png','Precision forming of stainless steel sectional water tank panels','Production scope should be traceable to the approved panel and reinforcement schedule.')}
${section('connections','5. Issue a nozzle and accessory schedule',[
  'For each connection, state service, nominal size, flange or thread standard, centerline elevation and preferred location. Common connections include inlet, outlet, overflow, drain, vent, pump suction, level instruments and cleaning points. Conflicts frequently arise when pipe standards or final elevations are left until after production.',
  'List accessories such as internal and external ladders, manholes, vents, screened overflow, level indicators, float valves, level switches, anti-vortex plates, supports and insulation. Indicate which items are supplied loose, factory fitted or installed on site. Coordinate any electrical instrumentation with control voltage and signal requirements.'
])}
${section('drawings','6. Define drawing and submittal deliverables',[
  'Request a general arrangement with overall and internal dimensions, panel layout, connection coordinates, ladders, manholes, compartments and foundation loads. Include a bill of materials, accessory schedule and installation requirements. Agree the number of review cycles and the language and file format for submittals.',
  'Establish approval gates: quotation drawing, order confirmation, consultant-approved drawing and production release. A disciplined hold point prevents fabrication from starting against an outdated layout. Changes after release should be documented for cost and schedule impact.'
])}
${cta('Have drawings but no final tank configuration?','Send the plan, section, capacity and connection schedule. Our engineering team can prepare a coordinated preliminary arrangement for review.')}
${section('quality','7. Specify inspection and quality documentation',[
  'State the required material certificates, incoming inspection, dimensional checks, visual inspection, gasket or seal controls and hydrostatic test. If third-party inspection is required, define the inspection agency, witness points, notice period and acceptance criteria before pricing. Avoid requesting generic “all certificates” because the phrase is impossible to cost consistently.',
  'The inspection and test plan should identify who performs, witnesses and approves each stage. Photography can support records but should not replace defined acceptance criteria. If the tank will be disinfected or commissioned by another contractor, clarify the handover condition and required cleanliness.'
])}
${figure('/blog/ai/hydrostatic-test.png','Hydrostatic leak test of a completed stainless steel sectional water tank','Inspection requirements are most useful when the method, hold point and acceptance responsibility are defined before production.')}
${section('packing','8. Plan export packing and logistics',[
  'Sectional construction is efficient for export, but panels and accessories require protection against scratches, deformation, moisture and loss. State the destination, shipping method, container limitations, lifting constraints and whether wooden packaging must meet import rules. Ask for a packing list that links packages to installation sequence.',
  'Confirm the Incoterm, port, insurance responsibility, customs documentation and site unloading scope. Freight prices change, so record the quotation validity and whether logistics is included, estimated or excluded. For difficult sites, provide the last-mile access route, crane limits and storage conditions.'
])}
${figure('/blog/ai/export-packing.png','Export packing of stainless steel water tank components','Package identification, hardware control and protection of panel surfaces reduce site delays and damage risk.')}
${section('installation','9. Clarify installation and commissioning responsibilities',[
  'Define whether the manufacturer supplies materials only, a supervisor, a complete installation crew or remote guidance. State who provides foundations, lifting equipment, temporary power, water for testing, sealants, tools, scaffolding and safety management. International travel, visas, accommodation and local labor should be assigned explicitly.',
  'Commissioning scope may include assembly inspection, hydrostatic filling, leakage observation, cleaning, disinfection, instrument checks and training. Potable-water commissioning must follow the approved local hygiene procedure. Tank entry and internal work require appropriate confined-space controls where applicable.'
])}
${section('commercial','10. Normalize commercial terms before comparison',[
  'Request a price breakdown for the tank, accessories, engineering, documentation, packing, freight, supervision, installation and optional items. Record currency, taxes, Incoterm, payment schedule, lead time, quotation validity and warranty boundary. Ask each supplier to list exclusions and deviations in one place.',
  'A procurement comparison should include total delivered scope, not only tank price. Missing supports, flanges, instruments, packing or site services can outweigh an apparent saving. Technical compliance and commercial comparison should therefore use the same line-item structure for every bidder.'
])}
${section('final-checklist','Final RFQ checklist',[
  'Before issuing the RFQ, perform a completeness review with engineering, procurement, logistics and the site team. Mark unknown items rather than silently choosing values. Invite suppliers to submit technical questions by a fixed date, then issue the same clarifications to all bidders where the procurement process requires equal treatment.',
  'A complete RFQ shortens the path from inquiry to approved drawing. It also creates a traceable basis for change control if capacity, connections, materials or site conditions later change.'
],[
  'Project, location, application and procurement stage',
  'Effective capacity, operating levels and compartment strategy',
  'Maximum dimensions, room drawings and installation route',
  'Water analysis, material grades and environmental exposure',
  'Design standard, loads and approval authority',
  'Nozzle, accessory and instrumentation schedules',
  'Drawing, certificate, inspection and test requirements',
  'Packing, Incoterm, destination and unloading constraints',
  'Installation, commissioning, training and warranty scope',
  'Price breakdown, lead time, validity, exclusions and deviations'
])}
${faq([
  ['Can I request a quotation before final drawings are available?','Yes, but label it as budgetary and identify the assumptions that remain open. Provide a capacity range, site country, application, preferred material and likely dimensions. Ask the supplier to state exclusions and price-sensitive variables. Do not use a budget quote as a final order without a coordinated drawing and technical review.'],
  ['Which drawing is most important for a first RFQ?','A plant-room plan and section showing clear internal dimensions, doors, columns, beams, pipe routes and foundation elevation usually provide the most value. Add a connection schedule and effective capacity. A simple sketch with accurate constraints is better than a polished rendering that omits access and interfaces.'],
  ['What is a technical deviation list?','It is a consolidated record of every way the supplier’s offer differs from the RFQ or specification. Deviations can cover material, dimensions, standards, accessories, documents, inspection, delivery or installation. Requiring one list prevents important differences from being scattered across emails and makes consultant approval more reliable.'],
  ['Should freight be included in the tank price?','Either approach can work if the scope is explicit. Record the Incoterm, named place, container assumptions, insurance, customs and local delivery. Freight is time-sensitive, so quotations should show validity. Compare suppliers using the same delivered-scope basis rather than mixing ex-works and site-delivered prices.'],
  ['How do I compare two different panel-thickness schedules?','First confirm that both schedules address the same water depth, design loads, panel geometry, reinforcement and standard. Thickness alone does not describe structural capacity. Ask for the design basis and arrangement. The responsible engineer should evaluate the complete system, not select the thickest isolated number.'],
  ['What should a hydrostatic test requirement include?','Define where the test occurs, filling medium, water level, stabilization or observation period, inspection points, leakage acceptance, witness responsibility, drainage and documentation. Confirm whether the test is repeated after site assembly. Avoid assuming that a factory test of components replaces the final assembled-tank test.'],
  ['Why is the packing list part of engineering quality?','Sectional tanks contain panels, fasteners, gaskets, bracing and accessories that must arrive complete and identifiable. A structured packing list linked to drawings and installation sequence reduces lost hardware, incorrect site storage and delays. Protection of finished surfaces and import-compliant wood packaging should also be specified.'],
  ['When should the manufacturer be involved in design coordination?','Early involvement is useful when the plant room is constrained, access is difficult, multiple compartments are required or connection coordinates affect structure and piping. The consultant retains design authority, but supplier module knowledge can identify conflicts before tender drawings become expensive to change.'],
  ['Should the RFQ include a required response format?','Yes. A compliance schedule, price breakdown, deviation list and document register make offers easier to evaluate. Give every bidder the same fields and revision of drawings. A structured response reduces the chance that a low price hides excluded accessories, different materials or an unpriced installation responsibility.'],
  ['How should warranty requirements be written?','Define start date, duration, covered defects, excluded operating conditions, response method, parts and labor responsibility, site-access costs and required maintenance records. An extended headline warranty has limited value if its boundary is unclear. Confirm whether workmanship, gaskets, accessories, instruments and installation are covered by the same party.'],
  ['What information is needed for site supervision pricing?','State country and city, expected assembly duration, local workweek, visa requirements, travel class, accommodation, local transport, interpreter need and whether the site provides skilled labor, tools, lifting and safety equipment. Ask for day rates and assumptions for delays. This prevents supervision from becoming an undefined provisional amount.'],
  ['When is third-party inspection worth specifying?','It may be appropriate when required by the client, authority, financing, risk classification or contract. Define the inspector, scope, hold points, notice period and document language before quotation. Third-party presence does not transfer design or quality responsibility; it verifies agreed activities against stated acceptance criteria.']
])}
${section('references','Reference points',[
  '<a href="https://link.nfpa.org/all-publications/22/2018" target="_blank" rel="noopener">NFPA 22 — Standard for Water Tanks for Private Fire Protection</a><br><a href="https://www.osha.gov/laws-regs/standardinterpretations/2016-09-08" target="_blank" rel="noopener">OSHA — Construction Work in Water Storage Tanks</a><br><a href="https://www.dwi.gov.uk/private-water-supplies/pws-installations/private-supply-networks/water-storage/" target="_blank" rel="noopener">UK Drinking Water Inspectorate — Water Storage</a>'
])}`;

let category = await prisma.category.findUnique({ where: { slug: 'engineering-guides' } });
if (!category) {
  category = await prisma.category.create({ data: { name: 'Engineering Guides', slug: 'engineering-guides', description: 'Technical guidance for water storage projects', type: 'POST', sortOrder: 1 } });
}

const articles = [
  {
    title: '304 vs 316 Stainless Steel Water Tanks: An Engineering Selection Guide',
    slug: '304-vs-316-stainless-steel-water-tanks',
    excerpt: 'A specification-led comparison of SS304 and SS316 for potable, coastal and industrial water tank projects.',
    coverImage: '/blog/ai/material-comparison.png',
    coverImageAlt: 'SS304 and SS316 stainless steel sectional water tank panels under engineering review',
    seoTitle: '304 vs 316 Stainless Steel Water Tanks | Selection Guide',
    seoDescription: 'Compare SS304 and SS316 water tanks by chloride exposure, coastal environment, fabrication, components, hygiene and project documentation.',
    content: materialContent,
  },
  {
    title: 'How to Size a Sectional Water Tank for a Building Project',
    slug: 'how-to-size-sectional-water-tank',
    excerpt: 'A transparent workflow for demand, autonomy, effective capacity, operating levels, pump coordination and installation constraints.',
    coverImage: '/blog/ai/capacity-cutaway.png',
    coverImageAlt: 'Cutaway illustration showing effective capacity in a sectional stainless steel water tank',
    seoTitle: 'How to Size a Sectional Water Tank | Capacity Planning Guide',
    seoDescription: 'Plan sectional water tank capacity using demand, supply reliability, autonomy, operating levels, water quality and installation constraints.',
    content: sizingContent,
  },
  {
    title: 'Stainless Steel Water Tank RFQ Checklist for Global Projects',
    slug: 'stainless-steel-water-tank-rfq-checklist',
    excerpt: 'The project information, drawings, specifications, inspection and logistics details needed for an accurate international quotation.',
    coverImage: '/blog/ai/rfq-engineering.png',
    coverImageAlt: 'Engineering team reviewing stainless steel water tank RFQ drawings and material samples',
    seoTitle: 'Stainless Steel Water Tank RFQ Checklist | HONG LIANG',
    seoDescription: 'Prepare a complete stainless steel water tank RFQ covering capacity, materials, drawings, accessories, inspection, packing and installation.',
    content: rfqContent,
  },
];

for (const article of articles) {
  const existing = await prisma.post.findUnique({ where: { slug: article.slug }, select: { id: true } });
  if (existing) {
    if (process.argv.includes('--refresh-generated')) {
      await prisma.post.update({ where: { id: existing.id }, data: { ...article, categoryId: category.id, status: 'PUBLISHED', authorName: 'HONG LIANG Engineering Team' } });
      console.log(`${article.slug}: refreshed generated content`);
    } else {
      console.log(`${article.slug}: skipped because the slug already exists`);
    }
    continue;
  }
  await prisma.post.create({ data: { ...article, categoryId: category.id, status: 'PUBLISHED', authorName: 'HONG LIANG Engineering Team', publishedAt: new Date() } });
}

for (const article of articles) {
  const words = article.content.replace(/<[^>]+>/g, ' ').trim().split(/\s+/).length;
  console.log(`${article.slug}: ${words} words`);
}

await prisma.$disconnect();
