const A = "/assets/projects";

export const projects = [
  {
    slug: "universal-travel-adapter",
    title: "Universal Travel Adapter",
    category: "Product Design / Mechanism Design",
    discipline: "Product",
    context: "Personal innovation project — patent in progress",
    year: "2025",
    featured: true,
    problem:
      "Multi-region travel adapters often rely on bulky assemblies, multiple parts, and awkward plug-switching interactions.",
    description:
      "A compact, tool-less travel adapter built around a single-step twist mechanism for switching between plug configurations.",
    impact:
      "Patent in progress; unified plug-switching concept designed to reduce bulk and simplify the user interaction.",
    tools: ["Fusion 360", "SolidWorks", "KeyShot", "Rapid prototyping"],
    meta: ["Product architecture", "Mechanism design", "Component optimization"],
    image: `${A}/universal-travel-adapter-hero.jpg`,
    cardImage: `${A}/universal-travel-adapter-card.jpg`,
    imageAlt: "Universal Travel Adapter — final concept renders of the compact black adapter body",
    caseStudy: {
      outcome:
        "A compact universal travel adapter that simplifies plug switching through a single-step twist mechanism while optimizing the internal component layout.",
      type: "Personal innovation project",
      role: "Product & mechanism designer, end-to-end",
      timeline: "2024 – 2025",
      team: "Individual project",
      problemBody: [
        "Travellers typically rely on adapters that are region-specific, heavy multi-piece sets, or universal blocks with an array of sliders that confuse. Each approach adds friction: lost pieces, uncertainty about the pins, and a heavy housing that covers other outlets.",
        "The core challenge was mechanical: consolidating several plug standards into one unit while keeping the switching action obvious, single-handed, and safe.",
      ],
      problemImage: `${A}/universal-travel-adapter-problem.jpg`,
      problemCaption:
        "Existing universal adapters trade compactness for flexibility, often doing neither well.",
      insights: [
        "Users think in destinations, not pin standards — the interaction must hide the technical complexity of plug types.",
        "Slider-based universal adapters fail because each pin set moves independently; users want one confident action.",
        "Volume is the enemy: every cubic centimetre saved matters in carry-on travel, and oversized housings block neighbouring sockets.",
        "Safety interlocks can double as tactile feedback, turning a constraint into a usability feature.",
      ],
      direction: {
        body: "The central decision was to replace multiple independent sliders with a single rotational mechanism. One twist indexes between plug configurations, so the user's mental model becomes 'turn until it clicks' rather than 'find the right combination of switches'.",
        decisions: [
          {
            title: "Single-step twist switching",
            desc: "A rotary selector drives all plug configurations from one action, removing the multi-slider guesswork of conventional adapters.",
          },
          {
            title: "Unified internal architecture",
            desc: "Shared contact paths and a stacked component layout cut redundant parts, reducing bulk instead of adding a mechanism on top of it.",
          },
          {
            title: "Tool-less by principle",
            desc: "No detachable pieces to lose, no screws, no secondary accessories — the full function lives inside one enclosed body.",
          },
        ],
      },
      ideation: {
        body: "Exploration moved from slider arrays and flip-out pin clusters toward rotary architectures. Early slider concepts were rejected because they preserved the exact interaction problem they were meant to solve; flip-out clusters were rejected for part count and durability risk.",
        points: [
          "Configuration studies mapping US, UK, EU, and AU pin geometries onto shared axes",
          "Form studies balancing grip diameter against internal volume",
          "Interaction studies on twist direction, detent strength, and one-handed operation",
        ],
        image: `${A}/universal-travel-adapter-ideation.jpg`,
        imageAlt: "Sketch studies exploring travel adapter configurations and forms",
        caption: "Configuration and form studies converging on a rotary architecture.",
      },
      mechanisms: {
        body: "The mechanism chapter of this project is where the design was won or lost. Component breakdowns and exploded views were used to verify that every configuration could share the same electrical contacts and that the rotary selector could physically index each pin set.",
        items: [
          {
            title: "Exploded component layout",
            desc: "Verified stacked arrangement of contacts, selector drum, and housing halves to minimise overall volume.",
          },
          {
            title: "Rotary indexing sequence",
            desc: "Mapped detent positions to plug configurations so each click state corresponds to exactly one regional standard.",
          },
          {
            title: "User interaction sequence",
            desc: "Twist, confirm the detent click, plug in — a three-step sequence replacing multi-slider setup.",
          },
        ],
        image: `${A}/universal-travel-adapter-mechanism.jpg`,
        imageAlt: "Technical drawings of the adapter's rotary mechanism and component layout",
        caption: "Technical studies of the rotary selector and stacked internal layout.",
      },
      prototyping: {
        body: "Rapid prototypes were used to validate the twist action, detent feel, and overall volume. Each printed iteration informed tolerance adjustments in the selector drum and housing wall thicknesses.",
        tests: [
          "Fit and volume checks against carry-on travel constraints",
          "Detent strength tuning for confident, one-handed switching",
          "Wall-thickness and rib optimisation to keep the body rigid at reduced size",
        ],
      },
      solution: {
        body: "The final concept is a single enclosed adapter body with a rotary selector: one twist moves between plug configurations, with each position confirmed by a tactile detent. Internal components share contact paths, keeping the housing compact enough to leave neighbouring sockets free.",
        features: [
          "Single-step twist mechanism for all supported plug configurations",
          "Tool-less, enclosed architecture with no detachable parts",
          "Optimised internal component layout for minimum volume",
          "Tactile detent feedback doubling as a safety interlock",
        ],
        image: `${A}/universal-travel-adapter-solution.jpg`,
        imageAlt: "Final universal travel adapter render",
        caption: "Final concept — one compact body, one twist, every region.",
      },
      outcomes: [
        "Patent in progress for the unified plug-switching mechanism",
        "Improved compactness through internal component optimization",
        "Simplified user interaction from multi-slider setup to a single twist",
      ],
      reflection: {
        learned:
          "Mechanism design is interaction design. The tactile quality of the twist — detent strength, rotation angle, end stops — shaped the user experience as much as the architecture itself.",
        improve:
          "Next steps are electrical safety certification testing and design-for-manufacture refinement of the contact stamping and drum tolerances.",
        approach:
          "This project shows how I work from the detail outward: a single mechanism decision, rigorously resolved, can define an entire product.",
      },
    },
  },
  {
    slug: "dual-zone-smart-led-streetlight",
    title: "Dual-Zone Smart LED Streetlight",
    category: "Urban Infrastructure / Lighting Design",
    discipline: "Lighting",
    context: "Graduation project",
    year: "2025",
    featured: true,
    problem:
      "Conventional streetlights often treat roadways and pedestrian areas as one lighting zone, creating compromises in visibility, glare, and energy use.",
    description:
      "A dual-lighting housing system that provides independent illumination for roads and pedestrian zones through direct and indirect lighting configurations.",
    impact:
      "Two independently controlled lighting zones with PIR + LDR adaptive sensing, designed to improve uniformity, reduce glare, and cut wasted energy.",
    tools: ["Fusion 360", "KeyShot", "Adobe Illustrator", "Prototyping"],
    meta: ["Lighting systems", "Adaptive sensing", "Product architecture"],
    image: `${A}/dual-zone-smart-led-streetlight-hero.jpg`,
    imageAlt: "Dual-Zone Smart LED Streetlight — final luminaire render",
    caseStudy: {
      outcome:
        "A dual-zone streetlight that separates roadway and pedestrian illumination into independently controlled direct and indirect lighting systems within one housing.",
      type: "Graduation project",
      role: "Product / Industrial Design",
      timeline: "2025 – 2026",
      team: "Lighting design team",
      problemBody: [
        "Urban streets have to cater to two very different groups simultaneously: drivers requiring high-contrast lighting on the roads, and pedestrians needing comfortable eye-level lighting without glare. Conventional streetlights can accommodate both from one single source and one optic only.",
        "In essence, this results in compromise everywhere — glare for pedestrians, wasted spill light, and energy burned lighting zones that might not have people in them at all.",
      ],
      problemImage: `${A}/dual-zone-smart-led-streetlight-problem.jpg`,
      problemCaption:
        "Single-source streetlights force one optic to serve two incompatible lighting tasks.",
      insights: [
        "Road and pedestrian lighting have different optical needs — one luminaire must address both zones independently.",
        "Adaptive lighting can reduce unnecessary output by responding to ambient light and pedestrian movement.",
        "Maintenance creates a significant opportunity — tool-free access can reduce service effort and downtime.",
        "Modularity enables independent replacement of components instead of whole-fixture swaps.",
      ],
      direction: {
        body: "The design direction centered on integrating two lighting zones into one modular luminaire while prioritizing independent control, glare reduction, thermal management, and simple maintenance.",
        decisions: [
          {
            title: "Dual-zone optical architecture",
            desc: "Separate road and pedestrian optics provide targeted illumination for each zone.",
          },
          {
            title: "Independent adaptive control",
            desc: "PIR and LDR inputs allow each lighting zone to respond to changing conditions.",
          },
          {
            title: "Tool-less serviceability",
            desc: "Critical components are accessible without tools, reducing service time and downtime.",
          },
        ],
      },
      ideation: {
        body: "Exploration covered housing silhouettes, optic placement, and how two lighting systems could share one pole-mounted form without visual clutter. Single-optic concepts with dual beam shaping were rejected — they could not independently control glare and intensity per zone.",
        points: [
          "Housing form studies balancing heat dissipation with a clean urban silhouette",
          "Optic placement studies separating roadway throw from pedestrian wash",
          "Configuration studies for sensor placement and service access",
        ],
        image: `${A}/dual-zone-smart-led-streetlight-ideation.jpg`,
        imageAlt: "Housing and optic layout sketches for the streetlight",
        caption: "Housing and optic layout exploration during ideation.",
      },
      mechanisms: {
        body: "The system architecture integrates dual-zone optics, independent LED control, sensing, thermal management, and IoT communication. Component breakdowns define how each subsystem works together while maintaining modular access for service and replacement.",
        items: [
          {
            title: "Dual-zone optical architecture",
            desc: "Separate road and pedestrian optical chambers provide dedicated illumination from one housing.",
          },
          {
            title: "Adaptive sensing & control",
            desc: "PIR and LDR inputs independently control brightness through the dual-channel control board.",
          },
          {
            title: "Shared thermal spine",
            desc: "A shared aluminium heat-sink spine serves both lighting zones while protecting LED lifespan.",
          },
          {
            title: "IoT connectivity",
            desc: "Integrated communication enables responsive, remotely managed lighting.",
          },
        ],
        image: `${A}/dual-zone-smart-led-streetlight-mechanism.jpg`,
        imageAlt: "Diagram of independent roadway and pedestrian lighting zones",
        caption: "Independent zones: direct light for the roadway, indirect low-glare light for pedestrians.",
      },
      prototyping: {
        body: "Prototype housings were developed to evaluate form, optic layout, thermal behaviour, and service access, iterating toward a housing that could be opened, serviced, and resealed without specialist tools.",
        tests: [
          "Glare and uniformity evaluation across roadway and pedestrian zones",
          "Assembly and tool-free service access checks",
          "Sensor response validation for adaptive brightness control",
        ],
      },
      solution: {
        body: "The final concept is a single integrated dual-zone luminaire that separates road and pedestrian lighting within one housing, using independent optics, adaptive sensing, and modular tool-free access for maintenance.",
        features: [
          "Dual-zone optical system for road and pedestrian illumination",
          "Tool-free modular architecture for quick component replacement",
          "Independent PIR + LDR adaptive lighting control",
          "Shared aluminium heat-sink spine for both lighting zones",
        ],
        image: `${A}/dual-zone-smart-led-streetlight-solution.jpg`,
        imageAlt: "Dual-zone streetlight final render showing both lighting modules",
        caption: "One housing, two independent lighting systems.",
      },
      outcomes: [
        "Developed a unified dual-zone lighting system within a single luminaire housing",
        "Simplified maintenance through modular, tool-free component access",
        "Enabled independent adaptive control for road and pedestrian lighting",
        "Integrated sensing and IoT connectivity for responsive lighting management",
        "Established a modular architecture for easier component replacement and upgrades",
      ],
      reflection: {
        learned:
          "User research revealed that pedestrian glare and comfort can matter as much as illumination levels. I also learned that modularity must be considered from the beginning, because serviceability directly affects product architecture.",
        improve:
          "I would conduct more rigorous photometric and environmental testing, particularly to quantify energy performance, optical distribution, and thermal behaviour.",
        approach:
          "This project demonstrates systems thinking applied to a physical product: decompose the problem into zones, resolve each properly, then integrate without compromise.",
      },
    },
  },
  {
    slug: "hybrid-medical-vehicle",
    title: "Hybrid-Electric Medical Vehicle",
    category: "Mobility Systems / Human Factors",
    discipline: "Mobility",
    context: "Emergency medical evacuation concept",
    year: "2024",
    featured: true,
    problem:
      "Rough off-road environments make emergency transport physically demanding for both patients and medical operators.",
    description:
      "MonoHaul — an electrically driven, all-terrain medical stretcher designed for stable patient evacuation across rough and uneven terrain.",
    impact:
      "Quadruped-inspired suspension and a 48V electric drive for inclines up to 30°, designed to reduce patient shock and operator strain with single-attendant operation.",
    tools: ["Rhino", "Fusion 360", "SolidWorks", "KeyShot"],
    meta: ["Mobility design", "Ergonomics", "Mechanism design"],
    image: `${A}/hybrid-medical-vehicle-hero.jpg`,
    imageAlt: "MonoHaul all-terrain electric medical stretcher — full product render",
    caseStudy: {
      outcome:
        "MonoHaul is an all-terrain electric medical stretcher designed for stable patient evacuation across rough and uneven terrain.",
      type: "Medical Product Design",
      role: "Mobility & human-factors designer",
      timeline: "2024 – 2025",
      team: "Team project",
      problemBody: [
        "Traditional stretchers struggle in rural and remote rescue environments where rocky, muddy, uneven, or steep terrain creates instability, operator fatigue, poor traction, and patient discomfort.",
        "The design challenge was to create a mobile medical stretcher that could maintain patient stability while improving terrain adaptability and reducing physical effort during evacuation.",
      ],
      problemImage: `${A}/hybrid-medical-vehicle-problem.jpg`,
      problemCaption:
        "When stretchers are not made for off-road evacuation, patients and operators suffer.",
      insights: [
        "Terrain mobility and patient stability are one problem — solving locomotion alone still fails the patient.",
        "Operator fatigue is a safety issue: powered assistance protects the attendant as much as the patient.",
        "Independent wheel linkages can absorb terrain variation while keeping the platform level.",
        "Progressive spring stages handle both small bumps and large impacts in one system.",
      ],
      direction: {
        body: "The design direction combined large all-terrain wheels, independent suspension, high ground clearance, and a robotic quadruped-inspired linkage to stabilize the stretcher while reducing operator effort.",
        decisions: [
          {
            title: "Adaptive suspension",
            desc: "Independent mechanical linkages absorb terrain variation and maintain platform stability.",
          },
          {
            title: "High clearance",
            desc: "Sufficient clearance and optimized wheel geometry for obstacles, slopes, and uneven paths.",
          },
          {
            title: "Assisted mobility",
            desc: "Electric drive and intuitive controls reduce the physical effort of evacuation.",
          },
        ],
      },
      ideation: {
        body: "Four mobility architectures were compared before selecting the direction: a conventional four-wheel layout as the baseline, a rigid high-clearance frame prioritizing durability, a tracked crawler base for extreme terrain, and a quadruped-inspired suspension combining clearance, stability, and suspension — the selected direction.",
        points: [
          "Conventional four-wheel layout — established baseline for comparison",
          "Rigid high-clearance frame — prioritized durability and clearance",
          "Tracked crawler base — explored extreme terrain mobility, rejected for complexity",
          "Quadruped-inspired suspension — combined clearance, stability, and suspension",
        ],
        image: `${A}/hybrid-medical-vehicle-ideation.jpg`,
        imageAlt: "Configuration studies comparing stretcher mobility architectures",
        caption: "Vehicle and stretcher studies exploring isolation strategies.",
      },
      mechanisms: {
        body: "MonoHaul uses a single electric drive system, large all-terrain wheels, and a linkage-based suspension architecture. The suspension connects each wheel through separate linkages, allowing the platform to adapt to uneven ground while maintaining stability.",
        items: [
          {
            title: "Independent wheel linkages",
            desc: "Separate wheel linkages allow the platform to adapt to uneven ground while maintaining stability.",
          },
          {
            title: "Spring suspension",
            desc: "Hard and soft springs provide progressive terrain absorption across different impact conditions.",
          },
          {
            title: "Electric drive",
            desc: "A 48V BLDC motor provides powered movement, supporting operation on inclines up to 30°.",
          },
          {
            title: "Assisted control",
            desc: "Intuitive powered controls enable single-attendant operation during evacuation.",
          },
        ],
        image: `${A}/hybrid-medical-vehicle-mechanism.jpg`,
        imageAlt: "Detail render of MonoHaul's linkage suspension and wheel assembly",
        caption: "Linkage-based suspension connecting each wheel independently.",
      },
      prototyping: {
        body: "The concept was validated digitally: CAD motion studies of the linkage and suspension architecture, dimensional studies, and ergonomic evaluation of attendant positions during loading and transit.",
        tests: [
          "Motion simulation of the quadruped-inspired linkage across terrain profiles",
          "Ergonomic evaluation of attendant control and loading positions",
          "Dimensional studies of wheel geometry, clearance, and platform height",
        ],
      },
      solution: {
        body: "MonoHaul is an electrically driven, all-terrain medical stretcher designed for emergency transport across rough environments. Its robotic-inspired suspension, large wheels, high ground clearance, and assisted controls combine terrain adaptability with improved patient stability and reduced operator effort.",
        features: [
          "Quadruped-inspired suspension architecture",
          "Large all-terrain wheels with high clearance",
          "Single-attendant electric mobility",
          "Stable platform for rough-terrain evacuation",
        ],
        image: `${A}/hybrid-medical-vehicle-solution.jpg`,
        imageAlt: "MonoHaul final renders — stretcher engineered as one stability system",
        caption: "Vehicle and stretcher engineered as one stability system.",
      },
      outcomes: [
        "Reduced patient and operator strain through adaptive suspension and stretcher design",
        "Integrated vehicle-stretcher system architecture replacing piecemeal evacuation setups",
      ],
      reflection: {
        learned:
          "The project showed how mobility, suspension, patient stability, and operator ergonomics must be treated as one connected system. Solving terrain mobility alone was insufficient; the suspension architecture had to protect both the patient and the operator.",
        improve:
          "I would validate the suspension and linkage architecture through physical terrain testing, particularly under different loads and slopes, and evaluate actual patient comfort during transit.",
        approach:
          "This project shows how I handle complexity: map the whole system first, then design the interfaces where people feel the system most.",
      },
    },
  },
  {
    slug: "tool-less-modular-luminaire",
    title: "Tool-less Modular Outdoor Luminaire",
    category: "Urban Infrastructure / Lighting Design",
    discipline: "Lighting",
    context: "Wipro Consumer Lighting — 6-month industry internship",
    year: "2025",
    featured: false,
    problem:
      "Outdoor luminaire maintenance often requires trained technicians and tools, increasing service time, cost, and the risk of damage during repair.",
    description:
      "A modular outdoor luminaire architecture designed around tool-less maintenance, replaceable lighting modules, and long-term serviceability.",
    impact:
      "Three tool-less mechanism directions, five appearance prototypes, and a 1:1 prototype validating physical scale and handling.",
    tools: ["Fusion 360", "CAD Modelling", "KeyShot", "Sketching"],
    meta: ["Modular architecture", "Tool-less mechanisms", "Serviceability"],
    image: `${A}/tool-less-modular-luminaire-development.jpg`,
    imageAlt: "Quick-maintenance modular lighting module render for outdoor luminaire applications",
    heroCaption: "Quick-maintenance modular lighting module developed for outdoor luminaire applications.",
    caseStudy: {
      outcome:
        "A modular outdoor luminaire system with replaceable lighting modules and multiple tool-less access concepts, creating a foundation for repairable and upgradeable outdoor lighting.",
      type: "Industrial Design · Outdoor Lighting · Modular Product Design",
      role: "Product Design Intern",
      timeline: "6-month industry internship · 2025",
      team: "Industry mentors: Sachin Kumar Garg & Akash Singh · University mentor: Dr. Arunachalam",
      problemBody: [
        "Outdoor luminaire maintenance often requires trained technicians and tools, increasing service time, cost, and the risk of damage during repair.",
        "The design challenge was to create a modular lighting system that could be opened, removed, and serviced without tools while remaining mechanically reliable and suitable for outdoor conditions.",
      ],
      problemImage: `${A}/tool-less-modular-luminaire-problem.jpg`,
      problemCaption:
        "Servicing outdoor luminaires requires tools, time, and difficult access.",
      insights: [
        "Maintenance should be accessible — basic service shouldn't demand specialized tools or technicians.",
        "Tool-less mechanisms need intuitive interaction — latches, sliders, pins, and twist mechanisms offered references for simpler maintenance operations.",
        "Modularity must preserve sealing and mechanical reliability in outdoor conditions.",
        "Module placement — top versus bottom access — shapes both serviceability and the product's form.",
      ],
      direction: {
        body: "The design direction focused on creating a modular luminaire architecture where the lighting module could be accessed through simple mechanical actions while maintaining compatibility with the larger fixture system.",
        decisions: [
          {
            title: "Tool-less access",
            desc: "Develop a module that can be opened, removed, and serviced without conventional tools.",
          },
          {
            title: "Modular architecture",
            desc: "Simple mechanical actions translate into module removal while maintaining compatibility with the larger fixture system.",
          },
        ],
      },
      ideation: {
        body: "Multiple mechanical and configuration directions were explored for accessing the lighting module: quick-release latches, clips, twist attachments, thumb-screw interfaces, takedown pins, and hinged arrangements. Different top- and bottom-placement configurations were considered before refining the module forms. The exploration connected mechanism studies with physical appearance development, and three selected module types were further developed.",
        points: [
          "Quick-release latches, clips, and twist attachments for tool-less access",
          "Thumb-screw interfaces, takedown pins, and hinged arrangements",
          "Top- and bottom-placement configurations evaluated for service posture",
          "Three selected module types developed with attention to both mechanism and form",
        ],
        image: `${A}/tool-less-modular-luminaire-ideation.jpg`,
        imageAlt: "Form exploration studies for the modular luminaire housing",
        caption: "Housing exploration during ideation.",
      },
      mechanisms: {
        body: "The luminaire was developed as a layered system containing housing, gasket, driver, heat sink, PCB, reflector, glass, and associated mechanical interfaces. Different access mechanisms translated simple manual actions into module removal.",
        items: [
          {
            title: "Latch mechanism",
            desc: "The user turns the latch to unlock the module before pulling the lighting module upward.",
          },
          {
            title: "Twist mechanism",
            desc: "A thumb screw is loosened before the module is rotated approximately 55° and lifted.",
          },
          {
            title: "Module architecture",
            desc: "Top and bottom housings integrate the gasket, driver, heat sink, PCB, reflector, glass, and fastening elements.",
          },
          {
            title: "Replaceable light engine",
            desc: "The LED module and driver are treated as serviceable elements within the broader luminaire architecture.",
          },
        ],
        image: `${A}/tool-less-modular-luminaire-mechanism.jpg`,
        imageAlt: "Mechanism configuration studies for tool-less module access",
        caption: "Access mechanism configurations translating manual actions into module removal.",
      },
      prototyping: {
        body: "Appearance prototypes were developed to evaluate form, proportions, physical presence, and visual integration between the module and the fixture.",
        tests: [
          "Five appearance prototypes explored the module's form and visual identity",
          "A 1:1 prototype validated physical scale and handling considerations",
          "The final prototype established a consolidated form for further functional development",
        ],
        image: `${A}/tool-less-modular-luminaire-prototype.jpg`,
        imageAlt: "Appearance prototypes of the modular lighting module",
        caption: "Appearance prototypes evaluating form, proportion, and physical presence.",
      },
      solution: {
        body: "The final direction developed a modular outdoor luminaire system with replaceable lighting modules and multiple tool-less access concepts. The system combines a structured internal architecture with simplified mechanical interfaces, creating a foundation for repairable and upgradeable outdoor lighting products.",
        features: [
          "Tool-less module access and removal",
          "Replaceable LED and driver architecture",
          "Integrated housing, sealing, and thermal components",
          "Multiple modular interface configurations",
        ],
        image: `${A}/tool-less-modular-luminaire-solution.jpg`,
        imageAlt: "Final consolidated prototype of the tool-less modular luminaire housing",
        caption: "The final prototype established a consolidated form for further functional development.",
      },
      outcomes: [
        "Three modular mechanism directions were developed and refined",
        "Five appearance prototypes explored the module's form and visual identity",
        "A 1:1 prototype validated physical scale and handling considerations",
        "The final prototype established a consolidated form for further functional development",
      ],
      reflection: {
        learned:
          "Designing the exterior became an exercise in coordinating the complete product architecture rather than treating form as an isolated layer.",
        improve:
          "I would further develop and functionally validate the selected tool-less mechanisms under realistic outdoor-use conditions — with more detailed testing of sealing, mechanical durability, thermal performance, and repeated maintenance cycles.",
        approach:
          "The project reflects my approach of connecting mechanism exploration with physical appearance development from the very beginning.",
      },
    },
  },
  {
    slug: "osteoarthritis-mobility-aid",
    title: "Osteoarthritis Mobility Aid",
    category: "Medical Design / Human Factors",
    discipline: "Product",
    context: "Special-needs product design",
    year: "2023",
    featured: false,
    problem:
      "People with osteoarthritis experience joint pain, stiffness, reduced motion, weakness, and instability that make walking and prescribed exercise difficult.",
    description:
      "OsteoMove — a lightweight mobility aid designed to support safer walking, exercise, stability, and independence for people with osteoarthritis.",
    impact:
      "A physical, metal-fabricated frame prototype integrating walking assistance with exercise-oriented movement.",
    tools: ["Ergonomic analysis", "Sketching", "CAD modelling", "Prototyping", "Rendering", "Welding"],
    meta: ["Ergonomics", "Universal design", "Medical products"],
    image: `${A}/osteoarthritis-mobility-aid-hero.jpg`,
    imageAlt: "OsteoMove mobility aid — product render",
    caseStudy: {
      outcome:
        "OsteoMove is a lightweight mobility aid designed to support safer walking, exercise, stability, and independence for people with osteoarthritis.",
      type: "Special-needs product design",
      role: "Product designer",
      timeline: "2023 – 2024",
      team: "Individual project",
      problemBody: [
        "People with osteoarthritis experience joint pain, stiffness, reduced motion, weakness, and instability that can make walking and prescribed exercise difficult.",
        "The design challenge was to create a compact, controllable mobility aid that supports movement while reducing strain and improving stability.",
      ],
      problemImage: `${A}/osteoarthritis-mobility-aid-problem.jpg`,
      problemCaption:
        "Standard aids route force through the very joints their users need to protect.",
      insights: [
        "Joint stiffness limits movement — osteoarthritis causes pain and instability that conventional walking aids ignore.",
        "Exercise is part of therapy: the aid should support prescribed movement, not just walking.",
        "Stability fears stop usage — self-balance and anti-tip behaviour build the confidence to stay active.",
        "Adjustability matters: resistance and height must adapt to different users and stages of the condition.",
      ],
      direction: {
        body: "The design direction combined walking assistance with exercise-oriented movement, prioritizing stability, ergonomic support, controlled resistance, compactness, and safer interaction.",
        decisions: [
          {
            title: "Stability first",
            desc: "A self-balancing structure and anti-tip feature support safer movement and reduce instability concerns.",
          },
          {
            title: "Controlled movement",
            desc: "Adjustable wheel resistance allows the mobility aid to support exercise alongside everyday walking.",
          },
          {
            title: "Ergonomic support",
            desc: "Supported grips and seating elements provide a more comfortable and supportive posture.",
          },
        ],
      },
      ideation: {
        body: "The exploration focused on integrating support and mobility into a single product rather than treating the walking aid as only a support frame. The selected concept was developed through CAD modelling, rendering, dimensional studies, and physical prototyping.",
        points: [
          "Explored multiple side-view configurations for the overall product form",
          "Developed detailed studies of the selected concept",
          "Integrated seating and back-rest support into the structure",
          "Studied wheel and frame dimensions before prototyping",
        ],
        image: `${A}/osteoarthritis-mobility-aid-ideation.jpg`,
        imageAlt: "Side-view configuration sketches for the mobility aid",
        caption: "Support and grip geometry studies.",
      },
      mechanisms: {
        body: "Ergonomic studies defined the contact points, angles, and adjustment ranges that accommodate varying joint mobility across users.",
        items: [
          {
            title: "Main frame",
            desc: "The main frame creates the structural foundation connecting the seat, support elements, and wheel assembly.",
          },
          {
            title: "Wheel support",
            desc: "A main wheel and two supporting wheels create the product's mobility and stability structure.",
          },
          {
            title: "Back support",
            desc: "The back-rest support and suspension provide additional physical support while using the aid.",
          },
          {
            title: "Collapsible handle",
            desc: "The collapsible handle contributes to the product's compact configuration and handling.",
          },
        ],
        image: `${A}/osteoarthritis-mobility-aid-mechanism.jpg`,
        imageAlt: "Structural and component studies of the mobility aid frame",
        caption: "Frame, wheel, and support structure studies.",
      },
      prototyping: {
        body: "The prototype was developed through metal fabrication — cutting, welding, and finishing the frame from the selected concept — and evaluated in use.",
        tests: [
          "Physical frame prototype fabricated from the selected concept",
          "Posture and support evaluation in real use",
          "Compactness, handling, and stability checks",
        ],
        image: `${A}/osteoarthritis-mobility-aid-prototype.jpg`,
        imageAlt: "User testing the fabricated OsteoMove frame prototype",
        caption: "Evaluating the fabricated frame prototype in use.",
      },
      solution: {
        body: "OsteoMove is a mobility aid designed for people with osteoarthritis who need walking support while remaining active. Its structure combines ergonomic support, seating, multiple wheels, adjustable features, and stability-oriented elements into a compact product.",
        features: [
          "Cardiovascular exercise support",
          "Free arms and legs during movement",
          "Adjustable resistance and height",
          "Self-balance and anti-tip stability",
        ],
        image: `${A}/osteoarthritis-mobility-aid-solution.jpg`,
        imageAlt: "OsteoMove final concept renders with ergonomic mannequin",
        caption: "Support that works with compromised joints, not against them.",
      },
      outcomes: [
        "Integrated walking assistance with exercise-oriented functionality",
        "Combined seating, back support, and mobility into one system",
        "Developed a physical frame prototype from the selected concept",
        "Incorporated stability, shock absorption, and anti-tip requirements",
        "Created a compact mobility-aid configuration for independent movement",
      ],
      reflection: {
        learned:
          "This project showed me that designing for mobility requires balancing physical support with independence. Understanding joint limitations and exercise needs helped me think beyond a conventional walking aid and consider movement, stability, comfort, and activity together.",
        improve:
          "I would further validate the product with users and clinicians, especially the adjustable resistance, balance behaviour, and long-term comfort.",
        approach:
          "This project reflects my belief that good design begins with understanding people before shaping form.",
      },
    },
  },
  {
    slug: "zp-schools-systems-thinking",
    title: "Systems Thinking — ZP Schools",
    category: "Design Research / Systems Mapping",
    discipline: "Systems",
    context: "Field research project",
    year: "2023",
    featured: false,
    problem:
      "ZP schools operate within interconnected challenges — resources, infrastructure, teacher workload, attendance, technology access — that no isolated fix can solve.",
    description:
      "A systems map of Zilla Parishad school operations that surfaced hidden friction between stakeholders and pointed to leverage points for intervention.",
    impact:
      "Stakeholder-validated interventions connecting school activities with community participation and local income generation.",
    tools: ["Systems mapping", "Field research", "Stakeholder interviews", "Causal Loop Diagrams", "Iceberg Model", "Behaviour Over Time Graphs", "Kumu"],
    meta: ["Systems thinking", "Research synthesis", "Service mapping"],
    image: `${A}/zp-schools-systems-thinking-hero.jpg`,
    imageAlt: "A Zilla Parishad school building during field research",
    caseStudy: {
      outcome:
        "A systems map of Zilla Parishad school operations that surfaced hidden friction between stakeholders and pointed to leverage points for intervention.",
      type: "Field research project",
      role: "Design researcher",
      timeline: "2023",
      team: "Research team project",
      problemBody: [
        "ZP schools serve rural and low-income communities but operate within interconnected challenges involving limited resources, infrastructure, teacher workload, attendance, technology access, socioeconomic conditions, and community participation.",
        "The design challenge was to understand where interventions could create meaningful change within the wider education system, rather than treating individual problems in isolation.",
      ],
      problemImage: `${A}/zp-schools-systems-thinking-problem.jpg`,
      problemCaption:
        "Field research across schools revealed friction no single stakeholder could see alone.",
      insights: [
        "Digital learning creates opportunities, while device access and technical issues limit its reliability.",
        "Weather and natural conditions can disrupt school hours and course completion.",
        "Student attendance and motivation are influenced by wider socioeconomic and family conditions.",
        "The challenges are interconnected — treating any single problem in isolation misses how the system actually behaves.",
      ],
      direction: {
        body: "The project shifted from solving isolated school problems toward identifying relationships, feedback loops, and leverage points where relatively small interventions could influence the broader system.",
        decisions: [
          {
            title: "Map before intervening",
            desc: "Stakeholder interdependencies and operational flows were mapped in full before any recommendation was made.",
          },
          {
            title: "Leverage points over isolated fixes",
            desc: "Relationships, feedback loops, and hidden structures guided where small interventions could create outsized change.",
          },
        ],
      },
      ideation: {
        body: "The exploration focused on understanding the school through multiple system-thinking lenses before selecting interventions. Stakeholder mapping established the relationships surrounding students and teachers, while system hierarchy and element clustering exposed positive and negative factors. Causal loops, behaviour-over-time graphs, and iceberg models were then used to identify deeper relationships and hidden structures. Two leverage points emerged strongly.",
        points: [
          "Stakeholder mapping around students and teachers",
          "System hierarchy and element clustering of positive and negative factors",
          "Causal loop diagrams revealing reinforcing and balancing relationships",
          "Behaviour-over-time graphs and iceberg models connecting events to structures",
        ],
        image: `${A}/zp-schools-systems-thinking-ideation.jpg`,
        imageAlt: "Stakeholder network map of the ZP school system",
        caption: "Translating field notes into stakeholder system maps.",
      },
      mechanisms: {
        body: "The system was represented through interconnected academic, administrative, support, regulatory, and community structures. Causal loops revealed reinforcing and balancing relationships, while behaviour-over-time graphs and iceberg models helped connect visible events to underlying patterns and structures.",
        items: [
          {
            title: "Stakeholder dependency map",
            desc: "Who relies on whom, for what, and where those dependencies break down.",
          },
          {
            title: "Operational friction atlas",
            desc: "A catalogue of friction points clustered by root cause rather than by where they surface.",
          },
        ],
        image: `${A}/zp-schools-systems-thinking-mechanism.jpg`,
        imageAlt: "System hierarchy diagram of ZP school operations",
        caption: "The school system mapped across academic, administrative, and community structures.",
      },
      prototyping: {
        body: "Interventions were developed around the identified leverage points and then validated with stakeholders. The proposals were refined around practical school conditions.",
        tests: [
          "Protecting digital equipment from environmental damage",
          "Creating school-based vegetable cultivation",
          "Using craft activities to connect learning with local income",
        ],
      },
      solution: {
        body: "The final output was a set of system maps and stakeholder-validated interventions that gave every stakeholder, for the first time, a shared picture of how the whole system actually operates — and where small changes could compound.",
        features: [
          "Stakeholder interdependency mapping across the school system",
          "Causal loop and behaviour-over-time analysis",
          "Leverage-point identification for high-impact intervention",
          "Practical interventions designed around existing behaviours and resources",
        ],
        image: `${A}/zp-schools-systems-thinking-solution.jpg`,
        imageAlt: "Intervention concepts developed from the systems research",
        caption: "A shared picture of the system, built with the people inside it.",
      },
      outcomes: [
        "Teachers identified potential cost savings from school-grown vegetables",
        "Students gained opportunities for agricultural and practical skills",
        "Craft activities introduced potential local income generation",
        "The interventions connected school activities with community participation",
      ],
      reflection: {
        learned:
          "Systems thinking changed how I approached design problems. Instead of treating school challenges as independent issues, I learned to look for the relationships and feedback loops underneath them.",
        improve:
          "More sustained observation would help determine whether the proposed feedback loops actually strengthen the system over time.",
        approach:
          "This project reflects my interest in designing beyond individual products and considering the systems that shape their use. I approach complex problems by mapping relationships, identifying leverage points, and looking for practical interventions that work with existing behaviours and resources.",
      },
    },
  },
  {
    slug: "timber-market-machinery",
    title: "Timber Market Machinery",
    category: "Ethnographic Research / Industrial Modification",
    discipline: "Research",
    context: "Ethnographic case study · Product design",
    year: "2023",
    featured: false,
    problem:
      "Timber market workers spend long hours performing repetitive woodworking tasks in awkward, fixed positions, compounded by dusty workspaces and limited rest.",
    description:
      "An ergonomic, height-adjustable hybrid machine designed around carpenters' preferred working postures and repetitive timber-working tasks.",
    impact:
      "A hybrid turning-and-carving workstation that adapts to the worker, not the other way around.",
    tools: ["Ethnographic research", "Workflow mapping", "Mechanical modification"],
    meta: ["Ethnography", "Ergonomics", "Workflow optimization"],
    image: `${A}/timber-market-machinery-hero.jpg`,
    imageAlt: "Hybrid turning and carving workstation — final concept render",
    caseStudy: {
      outcome:
        "An ergonomic, height-adjustable hybrid machine designed around carpenters' preferred working postures and repetitive timber-working tasks.",
      type: "Ethnographic Case Study · Product Design",
      role: "Design researcher & modification designer",
      timeline: "2023 – 2024",
      team: "Research team project",
      problemBody: [
        "Timber market workers spend long hours performing repetitive woodworking tasks in awkward, fixed positions. The resulting physical discomfort is compounded by dusty workspaces and limited opportunities for rest.",
        "The design challenge was to support more comfortable postures while maintaining the functions required for timber turning and carving.",
      ],
      problemImage: `${A}/timber-market-machinery-problem.jpg`,
      problemCaption:
        "Improvised workflows revealed by ethnographic observation, not interviews alone.",
      insights: [
        "Awkward postures were a recurring complaint across cutting, turning, and carving tasks.",
        "Different processes require different positions — cutting, turning, carving, measuring, polishing, and joining each involve different working requirements.",
        "Workers needed flexibility in their workspace — adjustable working conditions rather than a fixed workstation posture.",
      ],
      direction: {
        body: "The design direction focused on creating one adaptable workstation that could accommodate different woodworking activities while allowing users to adjust working height and position.",
        decisions: [
          {
            title: "One adaptable workstation",
            desc: "Combine functions into a single machine rather than requiring separate workstations.",
          },
          {
            title: "Adjustable height and position",
            desc: "Let the worker adapt the machine to the task and their preferred posture, not the reverse.",
          },
        ],
      },
      ideation: {
        body: "Exploration covered adjustable turning machines, height-adjustable worktables, and combined turning-carving configurations, gradually focusing on combining functions rather than requiring separate workstations. The final direction developed into an adjustable turning and carving machine incorporating a movable hand rest, rotating body, adjustable height, and interchangeable working surface.",
        points: [
          "Adjustable turning machine with movable hand-rest bar",
          "Height-adjustable worktable with wood-husk collection",
          "Rotating workstation combining turning and carving",
          "Interchangeable table surfaces for different tasks",
        ],
        image: `${A}/timber-market-machinery-ideation.jpg`,
        imageAlt: "Concept sketches for the adjustable timber workstation",
        caption: "Modification concepts developed with, not for, the workers.",
      },
      mechanisms: {
        body: "The machine brings turning and carving into one adjustable system. A central pillar supports the rotating body, while the wood holder rotates the workpiece and the workstation can be repositioned for different tasks.",
        items: [
          {
            title: "Motorized wood holder",
            desc: "The wood holder incorporates the motor and rotates the wooden block for the turning process.",
          },
          {
            title: "Rotating workstation",
            desc: "The main body rotates around a single pillar, allowing the workstation to change configuration.",
          },
          {
            title: "Height adjustment",
            desc: "The overall working height adjusts to the task and the worker's preferred posture.",
          },
        ],
        image: `${A}/timber-market-machinery-mechanism.jpg`,
        imageAlt: "Technical drawings of the hybrid turning and carving machine",
        caption: "Mechanism drawings for the rotating, height-adjustable workstation.",
      },
      prototyping: {
        body: "The concept was developed through detailed CAD and ergonomic studies, with configuration and adjustment ranges validated against the working postures observed during field research.",
        tests: [
          "Ergonomic validation of adjustment ranges against observed postures",
          "Configuration studies of the turning-to-carving transition",
          "Dimensional studies of the rotating body and hand-rest positions",
        ],
      },
      solution: {
        body: "The final concept is an adjustable hybrid turning and carving machine for timber-market workers. Its rotating body, motorized wood holder, movable hand rest, and height adjustment allow the workstation to adapt between different woodworking activities.",
        features: [
          "Adjustable working height",
          "Motorized rotating wood holder",
          "Convertible turning-to-carving surface",
          "Movable ergonomic hand rest",
        ],
        image: `${A}/timber-market-machinery-solution.jpg`,
        imageAlt: "Final hybrid workstation renders in use positions",
        caption: "Safety that fits the workflow gets used; safety that fights it gets removed.",
      },
      outcomes: [
        "Developed a hybrid turning and carving workstation",
        "Integrated adjustable height into the machine architecture",
        "Supported multiple woodworking activities within one system",
        "Incorporated ergonomic considerations into the workstation design",
        "Developed a rotating configuration for changing work modes",
      ],
      reflection: {
        learned:
          "The project showed how direct observation can reveal ergonomic problems that are difficult to understand from the product alone. Studying workers' actual postures and preferences helped shift the design toward an adaptable workstation rather than a fixed machine.",
        improve:
          "I would further validate the machine with extended hands-on use, especially the adjustment mechanisms, the turning-to-carving transition, and ergonomic comfort across different woodworking tasks.",
        approach:
          "This project demonstrates field research translated directly into physical design — understanding context before shaping solutions.",
      },
    },
  },
];

export const disciplines = ["All", "Product", "Lighting", "Mobility", "Systems", "Research"];
