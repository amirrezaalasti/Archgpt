export const translations = {
  en: {
    // Header
    appTitle: 'ArchIng',
    newChat: 'New Chat',
    tools: 'Architectural Tools',
    switchTheme: 'Switch to {{mode}} mode',
    
    // Sidebar
    newConversation: 'New Conversation',
    today: 'Today',
    yesterday: 'Yesterday',
    previous7Days: 'Previous 7 Days',
    previous30Days: 'Previous 30 Days',
    noConversations: 'No conversations yet',
    startNewChat: 'Start a new chat to begin',
    
    // Chat
    initialMessage: "Hello! I'm ArchIng, your AI assistant for architecture. I can help you with design concepts, building codes, material selection, structural considerations, and more. How can I assist you today?",
    errorMessage: 'I apologize, but I encountered an error. Please try again.',
    typeMessage: 'Type your message...',
    send: 'Send',
    
    // Tools Panel
    architecturalTools: 'Architectural Tools',
    
    // Tool Tabs
    units: 'Units',
    scale: 'Scale',
    stairs: 'Stairs',
    beam: 'Beam',
    brick: 'Brick',
    hvac: 'HVAC',
    roof: 'Roof',
    golden: 'Golden',
    aiHelp: 'AI Help',
    reference: 'Reference',
    
    // Unit Converter
    unitConverter: 'Length Unit Converter',
    enterValue: 'Enter value',
    convert: 'Convert',
    askAIAboutThis: 'Ask AI About This',
    
    // Scale Calculator
    scaleCalculator: 'Scale Calculator',
    scaleRatio: 'Scale Ratio',
    actualSize: 'Actual Size (real world)',
    drawingSize: 'Drawing Size (on paper)',
    calculate: 'Calculate',
    scaleHint: 'Enter either actual size or drawing size, then calculate to find the other.',
    
    // Stair Calculator
    stairDesignCalculator: 'Stair Design Calculator',
    stairDescription: 'Calculate stair dimensions and check building code compliance.',
    totalRise: 'Total Rise (Floor to Floor Height) - cm',
    riserHeight: 'Desired Riser Height - cm',
    treadDepth: 'Tread Depth - cm',
    askAIDesignAdvice: 'Ask AI for Design Advice',
    stairHint: 'The 2R + T formula should equal 60-66 cm for comfortable stairs.',
    
    // Beam Calculator
    beamSpanCalculator: 'Beam Span Calculator',
    beamDescription: 'Estimate beam size requirements based on span and load.',
    materialType: 'Material Type',
    wood: 'Wood (Pine/Spruce)',
    steel: 'Steel (Structural)',
    concrete: 'Reinforced Concrete',
    spanLength: 'Span Length - meters',
    totalLoad: 'Total Uniform Load - kN/m',
    
    // Brick Calculator
    brickMortarEstimator: 'Brick & Mortar Estimator',
    brickDescription: 'Calculate materials needed for brick walls.',
    brickType: 'Brick Type',
    standardBrick: 'Standard Brick (19×5.7 cm)',
    modularBrick: 'Modular Brick (19.4×5.7 cm)',
    queenBrick: 'Queen Size (20.3×7 cm)',
    wallLength: 'Wall Length - meters',
    wallHeight: 'Wall Height - meters',
    brickHint: 'Calculation includes 15% deduction for openings and 5% waste factor.',
    
    // Ventilation Calculator
    ventilationCalculator: 'Ventilation & Window Calculator',
    ventilationDescription: 'Calculate HVAC requirements and natural ventilation areas.',
    roomType: 'Room Type',
    office: 'Office',
    classroom: 'Classroom',
    residential: 'Residential',
    restaurant: 'Restaurant',
    gym: 'Gym/Fitness',
    roomLength: 'Room Length - meters',
    roomWidth: 'Room Width - meters',
    roomHeight: 'Room Height - meters',
    
    // Roof Calculator
    roofPitchCalculator: 'Roof Pitch Calculator',
    roofDescription: 'Calculate roof angles, rise, and rafter lengths.',
    roofSpan: 'Roof Span - meters',
    roofPitch: 'Roof Pitch (in 12)',
    roofHint: 'Pitch is expressed as rise over run (e.g., 6:12 means 6 inches rise per 12 inches run).',
    
    // Golden Ratio
    goldenRatioCalculator: 'Golden Ratio Calculator',
    goldenDescription: 'The golden ratio (φ = 1.618) is used in architecture for aesthetically pleasing proportions.',
    baseDimension: 'Base Dimension',
    enterDimension: 'Enter a dimension',
    goldenHint: 'Examples: Parthenon, Notre Dame, and many Renaissance buildings use golden ratio proportions.',
    
    // AI Prompts
    aiQuickPrompts: 'AI Quick Prompts',
    aiPromptsDescription: 'Get instant architectural advice by asking the AI assistant these common questions.',
    buildingCodeCompliance: 'Building Code Compliance',
    sustainableDesign: 'Sustainable Design',
    materialSelection: 'Material Selection',
    structuralSystem: 'Structural System',
    siteAnalysis: 'Site Analysis',
    circulationFlow: 'Circulation & Flow',
    lightingDesign: 'Lighting Design',
    accessibility: 'Accessibility',
    promptHint: 'Click any prompt to instantly send it to the AI assistant for detailed guidance.',
    
    // Reference Guide
    quickReferenceGuide: 'Quick Reference Guide',
    referenceDescription: 'Common architectural standards and dimensions for quick lookup.',
    humanDimensions: 'Human Dimensions',
    roomHeights: 'Room Heights',
    doorDimensions: 'Door Dimensions',
    parkingStandards: 'Parking Standards',
    askAIAbout: 'Ask AI about',
    referenceHint: 'These are general guidelines. Always verify with local building codes and regulations.',
    
    // Prompts Content
    promptBuildingCode: 'What are the key building code requirements I should consider for residential construction?',
    promptSustainable: 'What sustainable design strategies would you recommend for a modern office building?',
    promptMaterial: 'Help me compare materials for exterior cladding - pros and cons of each?',
    promptStructural: 'What structural system would be most appropriate for a 5-story mixed-use building?',
    promptSite: 'What factors should I analyze when conducting a site analysis for a new project?',
    promptCirculation: 'What are best practices for designing circulation and spatial flow in commercial buildings?',
    promptLighting: 'Explain natural lighting strategies and their impact on interior design.',
    promptAccessibility: 'What are essential accessibility requirements for public buildings?',
  },
  
  de: {
    // Header
    appTitle: 'ArchIng',
    newChat: 'Neuer Chat',
    tools: 'Architektur-Werkzeuge',
    switchTheme: 'Zu {{mode}}-Modus wechseln',
    
    // Sidebar
    newConversation: 'Neue Unterhaltung',
    today: 'Heute',
    yesterday: 'Gestern',
    previous7Days: 'Letzte 7 Tage',
    previous30Days: 'Letzte 30 Tage',
    noConversations: 'Noch keine Unterhaltungen',
    startNewChat: 'Starten Sie einen neuen Chat',
    
    // Chat
    initialMessage: 'Hallo! Ich bin ArchIng, Ihr KI-Assistent für Architektur. Ich kann Ihnen bei Designkonzepten, Bauvorschriften, Materialauswahl, strukturellen Überlegungen und mehr helfen. Wie kann ich Sie heute unterstützen?',
    errorMessage: 'Entschuldigung, es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.',
    typeMessage: 'Geben Sie Ihre Nachricht ein...',
    send: 'Senden',
    
    // Tools Panel
    architecturalTools: 'Architektur-Werkzeuge',
    
    // Tool Tabs
    units: 'Einheiten',
    scale: 'Maßstab',
    stairs: 'Treppen',
    beam: 'Balken',
    brick: 'Ziegel',
    hvac: 'HLK',
    roof: 'Dach',
    golden: 'Goldener',
    aiHelp: 'KI-Hilfe',
    reference: 'Referenz',
    
    // Unit Converter
    unitConverter: 'Längeneinheiten-Umrechner',
    enterValue: 'Wert eingeben',
    convert: 'Umrechnen',
    askAIAboutThis: 'KI dazu befragen',
    
    // Scale Calculator
    scaleCalculator: 'Maßstab-Rechner',
    scaleRatio: 'Maßstabsverhältnis',
    actualSize: 'Tatsächliche Größe (real)',
    drawingSize: 'Zeichnungsgröße (auf Papier)',
    calculate: 'Berechnen',
    scaleHint: 'Geben Sie entweder die tatsächliche Größe oder die Zeichnungsgröße ein und berechnen Sie die andere.',
    
    // Stair Calculator
    stairDesignCalculator: 'Treppen-Design-Rechner',
    stairDescription: 'Berechnen Sie Treppenabmessungen und überprüfen Sie die Einhaltung der Bauvorschriften.',
    totalRise: 'Gesamtsteigung (Geschosshöhe) - cm',
    riserHeight: 'Gewünschte Stufenhöhe - cm',
    treadDepth: 'Auftrittstiefe - cm',
    askAIDesignAdvice: 'KI um Design-Beratung fragen',
    stairHint: 'Die 2R + T Formel sollte 60-66 cm für komfortable Treppen ergeben.',
    
    // Beam Calculator
    beamSpanCalculator: 'Balkenspannweiten-Rechner',
    beamDescription: 'Schätzen Sie Balkengrößenanforderungen basierend auf Spannweite und Last.',
    materialType: 'Materialtyp',
    wood: 'Holz (Kiefer/Fichte)',
    steel: 'Stahl (Baustahl)',
    concrete: 'Stahlbeton',
    spanLength: 'Spannweite - Meter',
    totalLoad: 'Gesamte Gleichlast - kN/m',
    
    // Brick Calculator
    brickMortarEstimator: 'Ziegel & Mörtel Kalkulator',
    brickDescription: 'Berechnen Sie benötigte Materialien für Ziegelwände.',
    brickType: 'Ziegeltyp',
    standardBrick: 'Standard-Ziegel (19×5,7 cm)',
    modularBrick: 'Modul-Ziegel (19,4×5,7 cm)',
    queenBrick: 'Queen-Größe (20,3×7 cm)',
    wallLength: 'Wandlänge - Meter',
    wallHeight: 'Wandhöhe - Meter',
    brickHint: 'Berechnung umfasst 15% Abzug für Öffnungen und 5% Verschnitt.',
    
    // Ventilation Calculator
    ventilationCalculator: 'Lüftungs- & Fenster-Rechner',
    ventilationDescription: 'Berechnen Sie HLK-Anforderungen und natürliche Lüftungsflächen.',
    roomType: 'Raumtyp',
    office: 'Büro',
    classroom: 'Klassenzimmer',
    residential: 'Wohnbereich',
    restaurant: 'Restaurant',
    gym: 'Fitnessstudio',
    roomLength: 'Raumlänge - Meter',
    roomWidth: 'Raumbreite - Meter',
    roomHeight: 'Raumhöhe - Meter',
    
    // Roof Calculator
    roofPitchCalculator: 'Dachneigung-Rechner',
    roofDescription: 'Berechnen Sie Dachwinkel, Steigung und Sparrenlängen.',
    roofSpan: 'Dachspannweite - Meter',
    roofPitch: 'Dachneigung (in 12)',
    roofHint: 'Neigung wird als Steigung über Auflage ausgedrückt (z.B. 6:12 bedeutet 6 Einheiten Steigung pro 12 Einheiten Auflage).',
    
    // Golden Ratio
    goldenRatioCalculator: 'Goldener-Schnitt-Rechner',
    goldenDescription: 'Der goldene Schnitt (φ = 1,618) wird in der Architektur für ästhetisch ansprechende Proportionen verwendet.',
    baseDimension: 'Basisdimension',
    enterDimension: 'Dimension eingeben',
    goldenHint: 'Beispiele: Parthenon, Notre-Dame und viele Renaissance-Gebäude verwenden den goldenen Schnitt.',
    
    // AI Prompts
    aiQuickPrompts: 'KI-Schnellfragen',
    aiPromptsDescription: 'Erhalten Sie sofortige Architekturberatung, indem Sie dem KI-Assistenten diese häufigen Fragen stellen.',
    buildingCodeCompliance: 'Bauvorschriften-Konformität',
    sustainableDesign: 'Nachhaltiges Design',
    materialSelection: 'Materialauswahl',
    structuralSystem: 'Tragwerkssystem',
    siteAnalysis: 'Standortanalyse',
    circulationFlow: 'Verkehrsfluss',
    lightingDesign: 'Lichtdesign',
    accessibility: 'Barrierefreiheit',
    promptHint: 'Klicken Sie auf eine beliebige Frage, um sie sofort an den KI-Assistenten zu senden.',
    
    // Reference Guide
    quickReferenceGuide: 'Schnell-Referenzleitfaden',
    referenceDescription: 'Gängige Architekturstandards und Abmessungen zur schnellen Nachschau.',
    humanDimensions: 'Menschliche Maße',
    roomHeights: 'Raumhöhen',
    doorDimensions: 'Türabmessungen',
    parkingStandards: 'Parkplatzstandards',
    askAIAbout: 'KI fragen über',
    referenceHint: 'Dies sind allgemeine Richtlinien. Überprüfen Sie immer die örtlichen Bauvorschriften.',
    
    // Prompts Content
    promptBuildingCode: 'Welche wichtigsten Bauvorschriften sollte ich für den Wohnungsbau beachten?',
    promptSustainable: 'Welche nachhaltigen Designstrategien würden Sie für ein modernes Bürogebäude empfehlen?',
    promptMaterial: 'Helfen Sie mir, Materialien für Außenverkleidungen zu vergleichen - Vor- und Nachteile?',
    promptStructural: 'Welches Tragwerkssystem wäre für ein 5-stöckiges gemischt genutztes Gebäude am geeignetsten?',
    promptSite: 'Welche Faktoren sollte ich bei einer Standortanalyse für ein neues Projekt analysieren?',
    promptCirculation: 'Was sind bewährte Verfahren für die Gestaltung von Verkehrsfluss in Gewerbegebäuden?',
    promptLighting: 'Erklären Sie natürliche Beleuchtungsstrategien und deren Auswirkungen auf die Innenarchitektur.',
    promptAccessibility: 'Was sind wesentliche Barrierefreiheitsanforderungen für öffentliche Gebäude?',
  }
}

export const getTranslation = (lang, key, replacements = {}) => {
  let text = translations[lang]?.[key] || translations['en'][key] || key
  
  // Replace placeholders like {{mode}}
  Object.keys(replacements).forEach(placeholder => {
    text = text.replace(`{{${placeholder}}}`, replacements[placeholder])
  })
  
  return text
}

