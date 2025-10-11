import { useState } from 'react'
import { useLanguage } from '../LanguageContext'
import { getTranslation } from '../translations'
import './ToolsPanel.css'

function ToolsPanel({ isOpen, onClose, onSendToChat }) {
  const { language } = useLanguage()
  const t = (key, replacements) => getTranslation(language, key, replacements)
  const [activeTab, setActiveTab] = useState('converter')
  
  const [lengthValue, setLengthValue] = useState('')
  const [lengthFrom, setLengthFrom] = useState('meters')
  const [lengthResult, setLengthResult] = useState('')
  
  const [scaleRatio, setScaleRatio] = useState('1:100')
  const [scaleActual, setScaleActual] = useState('')
  const [scaleDrawing, setScaleDrawing] = useState('')
  
  const [areaLength, setAreaLength] = useState('')
  const [areaWidth, setAreaWidth] = useState('')
  const [areaHeight, setAreaHeight] = useState('')
  const [areaUnit, setAreaUnit] = useState('meters')
  
  const [goldenBase, setGoldenBase] = useState('')
  const [goldenResult, setGoldenResult] = useState('')
  
  const [stairTotalRise, setStairTotalRise] = useState('')
  const [stairRiserHeight, setStairRiserHeight] = useState('18')
  const [stairTreadDepth, setStairTreadDepth] = useState('28')
  
  const [beamSpan, setBeamSpan] = useState('')
  const [beamLoad, setBeamLoad] = useState('')
  const [beamMaterial, setBeamMaterial] = useState('wood')
  
  const [wallLength, setWallLength] = useState('')
  const [wallHeight, setWallHeight] = useState('')
  const [brickType, setBrickType] = useState('standard')
  
  const [roomLength, setRoomLength] = useState('')
  const [roomWidth, setRoomWidth] = useState('')
  const [roomHeight, setRoomHeight] = useState('')
  const [roomType, setRoomType] = useState('office')
  
  const [roofSpan, setRoofSpan] = useState('')
  const [roofPitch, setRoofPitch] = useState('6')
  
  const [lastCalculation, setLastCalculation] = useState(null)

  const sendResultToAI = (calculationType, inputs, result) => {
    const prompt = `I used the ${calculationType} and got these results:\n\nInputs:\n${inputs}\n\nResults:\n${result}\n\nCan you review these calculations and provide professional insights or recommendations?`
    onSendToChat(prompt)
    onClose()
  }

  const quickPrompts = [
    { title: t('buildingCodeCompliance'), prompt: t('promptBuildingCode') },
    { title: t('sustainableDesign'), prompt: t('promptSustainable') },
    { title: t('materialSelection'), prompt: t('promptMaterial') },
    { title: t('structuralSystem'), prompt: t('promptStructural') },
    { title: t('siteAnalysis'), prompt: t('promptSite') },
    { title: t('circulationFlow'), prompt: t('promptCirculation') },
    { title: t('lightingDesign'), prompt: t('promptLighting') },
    { title: t('accessibility'), prompt: t('promptAccessibility') }
  ]

  const architecturalReferences = [
    { category: t('humanDimensions'), items: [
      language === 'en' ? 'Standing height: 165-185 cm' : 'Stehhöhe: 165-185 cm',
      language === 'en' ? 'Sitting height: 40-45 cm' : 'Sitzhöhe: 40-45 cm',
      language === 'en' ? 'Reach height: 200-220 cm' : 'Greifhöhe: 200-220 cm',
      language === 'en' ? 'Personal space: 0.5-1.2 m²' : 'Persönlicher Raum: 0,5-1,2 m²',
      language === 'en' ? 'Wheelchair width: 70-80 cm' : 'Rollstuhlbreite: 70-80 cm'
    ]},
    { category: t('roomHeights'), items: [
      language === 'en' ? 'Residential: 2.4-2.7 m' : 'Wohnbereich: 2,4-2,7 m',
      language === 'en' ? 'Office: 2.7-3.0 m' : 'Büro: 2,7-3,0 m',
      language === 'en' ? 'Retail: 3.0-4.0 m' : 'Einzelhandel: 3,0-4,0 m',
      language === 'en' ? 'Gym/Sports: 4.0-6.0 m' : 'Fitnessstudio/Sport: 4,0-6,0 m',
      language === 'en' ? 'Auditorium: 5.0-8.0 m' : 'Auditorium: 5,0-8,0 m'
    ]},
    { category: t('doorDimensions'), items: [
      language === 'en' ? 'Interior door: 80-90 cm × 200 cm' : 'Innentür: 80-90 cm × 200 cm',
      language === 'en' ? 'Entry door: 90-100 cm × 210 cm' : 'Eingangstür: 90-100 cm × 210 cm',
      language === 'en' ? 'Accessible door: min 85 cm clear' : 'Barrierefreie Tür: min. 85 cm lichte Breite',
      language === 'en' ? 'Double door: 120-180 cm' : 'Doppeltür: 120-180 cm',
      language === 'en' ? 'Emergency exit: min 90 cm' : 'Notausgang: min. 90 cm'
    ]},
    { category: t('parkingStandards'), items: [
      language === 'en' ? 'Standard space: 2.4 × 5.0 m' : 'Standard-Stellplatz: 2,4 × 5,0 m',
      language === 'en' ? 'Accessible space: 3.6 × 5.0 m' : 'Barrierefreier Stellplatz: 3,6 × 5,0 m',
      language === 'en' ? 'Compact space: 2.0 × 4.5 m' : 'Kompaktplatz: 2,0 × 4,5 m',
      language === 'en' ? 'Aisle width: 6.0-7.0 m' : 'Fahrbahnbreite: 6,0-7,0 m',
      language === 'en' ? 'Turning radius: 6.0 m min' : 'Wendekreis: 6,0 m min.'
    ]}
  ]

  const lengthUnits = {
    meters: { name: 'Meters (m)', toMeters: 1 },
    centimeters: { name: 'Centimeters (cm)', toMeters: 0.01 },
    millimeters: { name: 'Millimeters (mm)', toMeters: 0.001 },
    feet: { name: 'Feet (ft)', toMeters: 0.3048 },
    inches: { name: 'Inches (in)', toMeters: 0.0254 },
    yards: { name: 'Yards (yd)', toMeters: 0.9144 }
  }

  const convertLength = (value, fromUnit, toUnit) => {
    const inMeters = value * lengthUnits[fromUnit].toMeters
    return inMeters / lengthUnits[toUnit].toMeters
  }

  const handleLengthConvert = () => {
    if (!lengthValue) return
    const value = parseFloat(lengthValue)
    if (isNaN(value)) return

    const results = Object.keys(lengthUnits)
      .filter(unit => unit !== lengthFrom)
      .map(unit => {
        const converted = convertLength(value, lengthFrom, unit)
        return `${lengthUnits[unit].name}: ${converted.toFixed(4)}`
      })
    
    const resultText = results.join('\n')
    setLengthResult(resultText)
    setLastCalculation({
      type: 'Unit Conversion',
      inputs: `${lengthValue} ${lengthUnits[lengthFrom].name}`,
      result: resultText
    })
  }

  const handleScaleCalculate = () => {
    const [, denominator] = scaleRatio.split(':').map(Number)
    
    if (scaleActual) {
      const actual = parseFloat(scaleActual)
      if (!isNaN(actual) && denominator) {
        setScaleDrawing((actual / denominator).toFixed(2))
      }
    } else if (scaleDrawing) {
      const drawing = parseFloat(scaleDrawing)
      if (!isNaN(drawing) && denominator) {
        setScaleActual((drawing * denominator).toFixed(2))
      }
    }
  }

  const handleAreaCalculate = () => {
    const l = parseFloat(areaLength)
    const w = parseFloat(areaWidth)
    const h = parseFloat(areaHeight)
    
    if (isNaN(l) || isNaN(w)) return

    const area = l * w
    const perimeter = 2 * (l + w)
    
    let results = `Area: ${area.toFixed(2)} ${areaUnit}²\nPerimeter: ${perimeter.toFixed(2)} ${areaUnit}`
    
    if (!isNaN(h)) {
      const volume = l * w * h
      const wallArea = 2 * h * (l + w)
      const totalSurfaceArea = 2 * (l * w + l * h + w * h)
      results += `\n\nVolume: ${volume.toFixed(2)} ${areaUnit}³`
      results += `\nWall Area: ${wallArea.toFixed(2)} ${areaUnit}²`
      results += `\nTotal Surface Area: ${totalSurfaceArea.toFixed(2)} ${areaUnit}²`
    }
    
    setAreaHeight(h || '')
    setLengthResult(results)
  }

  const handleGoldenRatio = () => {
    const base = parseFloat(goldenBase)
    if (isNaN(base)) return
    
    const phi = 1.618033988749
    const larger = base * phi
    const smaller = base / phi
    
    setGoldenResult(`Larger dimension (× φ): ${larger.toFixed(2)}\nSmaller dimension (÷ φ): ${smaller.toFixed(2)}\n\nφ (Phi) = 1.618`)
  }

  const handleStairCalculate = () => {
    const totalRise = parseFloat(stairTotalRise)
    const riserHeight = parseFloat(stairRiserHeight)
    const treadDepth = parseFloat(stairTreadDepth)
    
    if (isNaN(totalRise) || isNaN(riserHeight) || isNaN(treadDepth)) return
    
    const numberOfRisers = Math.ceil(totalRise / riserHeight)
    const actualRiserHeight = totalRise / numberOfRisers
    const numberOfTreads = numberOfRisers - 1
    const totalRun = numberOfTreads * treadDepth
    
    const twoRiserOneTread = (2 * actualRiserHeight) + treadDepth
    const riserTreadProduct = actualRiserHeight * treadDepth
    
    let codeCompliance = 'Check local codes'
    if (actualRiserHeight >= 10 && actualRiserHeight <= 20 && treadDepth >= 22 && treadDepth <= 30) {
      if (twoRiserOneTread >= 60 && twoRiserOneTread <= 66) {
        codeCompliance = '✓ Meets typical residential codes'
      } else {
        codeCompliance = '⚠ May not meet comfort standards'
      }
    } else {
      codeCompliance = '✗ Outside typical code requirements'
    }
    
    const resultText = `Number of Risers: ${numberOfRisers}\n` +
      `Actual Riser Height: ${actualRiserHeight.toFixed(2)} cm\n` +
      `Number of Treads: ${numberOfTreads}\n` +
      `Total Run: ${totalRun.toFixed(2)} cm\n\n` +
      `2R + T Formula: ${twoRiserOneTread.toFixed(2)} cm\n` +
      `(Ideal: 60-66 cm)\n\n` +
      `Code Compliance: ${codeCompliance}\n\n` +
      `Stair Angle: ${Math.atan(actualRiserHeight / treadDepth) * (180 / Math.PI).toFixed(1)}°`
    
    setLengthResult(resultText)
    setLastCalculation({
      type: 'Stair Design',
      inputs: `Total Rise: ${totalRise} cm, Riser: ${riserHeight} cm, Tread: ${treadDepth} cm`,
      result: resultText
    })
  }

  const handleBeamCalculate = () => {
    const span = parseFloat(beamSpan)
    const load = parseFloat(beamLoad)
    
    if (isNaN(span) || isNaN(load)) return
    
    const materialData = {
      wood: { name: 'Wood (Pine/Spruce)', modulus: 10000, density: 500, allowableStress: 10 },
      steel: { name: 'Steel (Structural)', modulus: 200000, density: 7850, allowableStress: 165 },
      concrete: { name: 'Reinforced Concrete', modulus: 25000, density: 2400, allowableStress: 20 }
    }
    
    const material = materialData[beamMaterial]
    const moment = (load * Math.pow(span, 2)) / 8
    const requiredSectionModulus = moment / material.allowableStress
    
    let recommendedDepth
    if (beamMaterial === 'wood') {
      recommendedDepth = span / 16
    } else if (beamMaterial === 'steel') {
      recommendedDepth = span / 20
    } else {
      recommendedDepth = span / 12
    }
    
    const deflection = (5 * load * Math.pow(span, 4)) / (384 * material.modulus * requiredSectionModulus)
    const maxAllowableDeflection = span / 360
    
    setLengthResult(
      `Material: ${material.name}\n\n` +
      `Maximum Bending Moment: ${moment.toFixed(2)} kN·m\n` +
      `Required Section Modulus: ${requiredSectionModulus.toFixed(2)} cm³\n\n` +
      `Recommended Depth: ${recommendedDepth.toFixed(1)} cm\n` +
      `(Based on span/depth ratio)\n\n` +
      `Estimated Deflection: ${deflection.toFixed(2)} cm\n` +
      `Max Allowable (L/360): ${maxAllowableDeflection.toFixed(2)} cm\n\n` +
      `Note: This is a simplified calculation.\nConsult a structural engineer for final design.`
    )
  }

  const handleBrickCalculate = () => {
    const length = parseFloat(wallLength)
    const height = parseFloat(wallHeight)
    
    if (isNaN(length) || isNaN(height)) return
    
    const brickSizes = {
      standard: { name: 'Standard Brick', length: 19, height: 5.7, perSqm: 57, mortarFactor: 1.10 },
      modular: { name: 'Modular Brick', length: 19.4, height: 5.7, perSqm: 67, mortarFactor: 1.08 },
      queen: { name: 'Queen Size', length: 20.3, height: 7, perSqm: 53, mortarFactor: 1.10 }
    }
    
    const brick = brickSizes[brickType]
    const wallArea = length * height
    const openingsArea = wallArea * 0.15
    const netArea = wallArea - openingsArea
    
    const bricksNeeded = Math.ceil(netArea * brick.perSqm)
    const bricksWithWaste = Math.ceil(bricksNeeded * 1.05)
    
    const mortarPerSqm = 0.03
    const mortarVolume = netArea * mortarPerSqm
    const mortarBags = Math.ceil(mortarVolume / 0.025)
    
    setLengthResult(
      `Wall Area: ${wallArea.toFixed(2)} m²\n` +
      `Net Area (15% openings): ${netArea.toFixed(2)} m²\n\n` +
      `Brick Type: ${brick.name}\n` +
      `Bricks Required: ${bricksNeeded}\n` +
      `With 5% Waste: ${bricksWithWaste}\n\n` +
      `Mortar Volume: ${mortarVolume.toFixed(3)} m³\n` +
      `Mortar Bags (25kg): ${mortarBags}\n\n` +
      `Coverage Rate: ${brick.perSqm} bricks/m²`
    )
  }

  const handleVentilationCalculate = () => {
    const length = parseFloat(roomLength)
    const width = parseFloat(roomWidth)
    const height = parseFloat(roomHeight)
    
    if (isNaN(length) || isNaN(width) || isNaN(height)) return
    
    const roomTypes = {
      office: { name: 'Office', airChanges: 4, personArea: 10, freshAir: 8 },
      classroom: { name: 'Classroom', airChanges: 6, personArea: 2, freshAir: 10 },
      residential: { name: 'Residential', airChanges: 0.5, personArea: 20, freshAir: 7.5 },
      restaurant: { name: 'Restaurant', airChanges: 8, personArea: 1.5, freshAir: 10 },
      gym: { name: 'Gym/Fitness', airChanges: 6, personArea: 5, freshAir: 10 }
    }
    
    const room = roomTypes[roomType]
    const volume = length * width * height
    const floorArea = length * width
    
    const airflowByACH = volume * room.airChanges
    const estimatedOccupancy = Math.floor(floorArea / room.personArea)
    const airflowByOccupancy = estimatedOccupancy * room.freshAir
    const requiredAirflow = Math.max(airflowByACH, airflowByOccupancy)
    
    const windowArea = floorArea * 0.10
    const minWindowArea = floorArea * 0.08
    const naturalVentArea = floorArea * 0.05
    
    setLengthResult(
      `Room Type: ${room.name}\n` +
      `Volume: ${volume.toFixed(2)} m³\n` +
      `Floor Area: ${floorArea.toFixed(2)} m²\n\n` +
      `Estimated Occupancy: ${estimatedOccupancy} people\n` +
      `Air Changes/Hour: ${room.airChanges}\n\n` +
      `Required Airflow: ${requiredAirflow.toFixed(1)} m³/h\n` +
      `(${(requiredAirflow / 3600).toFixed(3)} m³/s)\n\n` +
      `Min Window Area (10%): ${windowArea.toFixed(2)} m²\n` +
      `Code Min (8%): ${minWindowArea.toFixed(2)} m²\n` +
      `Natural Vent Area (5%): ${naturalVentArea.toFixed(2)} m²\n\n` +
      `Note: Check local building codes for requirements.`
    )
  }

  const handleRoofCalculate = () => {
    const span = parseFloat(roofSpan)
    const pitch = parseFloat(roofPitch)
    
    if (isNaN(span) || isNaN(pitch)) return
    
    const pitchAngle = Math.atan(pitch / 12) * (180 / Math.PI)
    const rise = (span / 2) * (pitch / 12)
    const rafterLength = Math.sqrt(Math.pow(span / 2, 2) + Math.pow(rise, 2))
    const roofArea = rafterLength * 2
    
    const pitchMultiplier = 1 / Math.cos(pitchAngle * Math.PI / 180)
    
    let roofType = ''
    if (pitch <= 2) roofType = 'Flat/Low Slope (requires special waterproofing)'
    else if (pitch <= 4) roofType = 'Low Pitch (suitable for metal roofing)'
    else if (pitch <= 6) roofType = 'Medium Pitch (versatile, common)'
    else if (pitch <= 12) roofType = 'Steep Pitch (traditional, good drainage)'
    else roofType = 'Very Steep (specialty applications)'
    
    const snowLoad = pitch < 6 ? 'Higher snow load consideration' : 'Good snow shedding'
    const walkability = pitch <= 6 ? 'Walkable for maintenance' : 'Requires safety equipment'
    
    setLengthResult(
      `Roof Pitch: ${pitch}:12 (${pitchAngle.toFixed(1)}°)\n` +
      `Type: ${roofType}\n\n` +
      `Rise: ${rise.toFixed(2)} m\n` +
      `Rafter Length: ${rafterLength.toFixed(2)} m\n` +
      `Roof Area Factor: ${pitchMultiplier.toFixed(3)}\n\n` +
      `Per Linear Meter:\n` +
      `Roof Surface: ${roofArea.toFixed(2)} m²\n\n` +
      `Characteristics:\n` +
      `• ${snowLoad}\n` +
      `• ${walkability}\n\n` +
      `Note: Add overhang length to rafter calculation.`
    )
  }

  if (!isOpen) return null

  return (
    <>
      <div className="tools-overlay" onClick={onClose} />
      <div className="tools-panel">
        <div className="tools-header">
          <h2>{t('architecturalTools')}</h2>
          <button className="close-button" onClick={onClose}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <div className="tools-tabs">
          <button 
            className={`tool-tab ${activeTab === 'converter' ? 'active' : ''}`}
            onClick={() => setActiveTab('converter')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M7 16V4M7 4L3 8M7 4l4 4M17 8v12m0 0l4-4m-4 4l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {t('units')}
          </button>
          <button 
            className={`tool-tab ${activeTab === 'scale' ? 'active' : ''}`}
            onClick={() => setActiveTab('scale')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {t('scale')}
          </button>
          <button 
            className={`tool-tab ${activeTab === 'stairs' ? 'active' : ''}`}
            onClick={() => setActiveTab('stairs')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M3 21h3v-3h3v-3h3v-3h3V9h3V6h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {t('stairs')}
          </button>
          <button 
            className={`tool-tab ${activeTab === 'beam' ? 'active' : ''}`}
            onClick={() => setActiveTab('beam')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="10" width="20" height="4" stroke="currentColor" strokeWidth="2"/>
              <path d="M6 10V6M18 10V6M6 14v4M18 14v4" stroke="currentColor" strokeWidth="2"/>
            </svg>
            {t('beam')}
          </button>
          <button 
            className={`tool-tab ${activeTab === 'brick' ? 'active' : ''}`}
            onClick={() => setActiveTab('brick')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M3 7h18M3 12h18M3 17h18M8 7v5M16 7v5M12 12v5" stroke="currentColor" strokeWidth="2"/>
            </svg>
            {t('brick')}
          </button>
          <button 
            className={`tool-tab ${activeTab === 'ventilation' ? 'active' : ''}`}
            onClick={() => setActiveTab('ventilation')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2"/>
            </svg>
            {t('hvac')}
          </button>
          <button 
            className={`tool-tab ${activeTab === 'roof' ? 'active' : ''}`}
            onClick={() => setActiveTab('roof')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M3 21h18M4 21V10l8-7 8 7v11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {t('roof')}
          </button>
          <button 
            className={`tool-tab ${activeTab === 'golden' ? 'active' : ''}`}
            onClick={() => setActiveTab('golden')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M4 4h16v10H4z" stroke="currentColor" strokeWidth="2"/>
              <path d="M14 4v10M4 9h16" stroke="currentColor" strokeWidth="2"/>
            </svg>
            {t('golden')}
          </button>
          <button 
            className={`tool-tab ${activeTab === 'prompts' ? 'active' : ''}`}
            onClick={() => setActiveTab('prompts')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {t('aiHelp')}
          </button>
          <button 
            className={`tool-tab ${activeTab === 'reference' ? 'active' : ''}`}
            onClick={() => setActiveTab('reference')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {t('reference')}
          </button>
        </div>

        <div className="tools-content">
          {activeTab === 'converter' && (
            <div className="tool-section">
              <h3>Length Unit Converter</h3>
              <div className="input-group">
                <input
                  type="number"
                  placeholder="Enter value"
                  value={lengthValue}
                  onChange={(e) => setLengthValue(e.target.value)}
                  className="tool-input"
                />
                <select 
                  value={lengthFrom} 
                  onChange={(e) => setLengthFrom(e.target.value)}
                  className="tool-select"
                >
                  {Object.entries(lengthUnits).map(([key, unit]) => (
                    <option key={key} value={key}>{unit.name}</option>
                  ))}
                </select>
              </div>
              <button onClick={handleLengthConvert} className="tool-button">
                Convert
              </button>
              {lengthResult && (
                <>
                  <div className="tool-result">
                    <pre>{lengthResult}</pre>
                  </div>
                  {lastCalculation && lastCalculation.type === 'Unit Conversion' && (
                    <button 
                      onClick={() => sendResultToAI(lastCalculation.type, lastCalculation.inputs, lastCalculation.result)}
                      className="ask-ai-button"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Ask AI About This
                    </button>
                  )}
                </>
              )}
            </div>
          )}

          {activeTab === 'scale' && (
            <div className="tool-section">
              <h3>Scale Calculator</h3>
              <div className="input-group">
                <label>Scale Ratio</label>
                <select 
                  value={scaleRatio} 
                  onChange={(e) => setScaleRatio(e.target.value)}
                  className="tool-select"
                >
                  <option value="1:1">1:1 (Full Size)</option>
                  <option value="1:5">1:5</option>
                  <option value="1:10">1:10</option>
                  <option value="1:20">1:20</option>
                  <option value="1:50">1:50</option>
                  <option value="1:100">1:100</option>
                  <option value="1:200">1:200</option>
                  <option value="1:500">1:500</option>
                </select>
              </div>
              <div className="input-group">
                <label>Actual Size (real world)</label>
                <input
                  type="number"
                  placeholder="e.g., 1000"
                  value={scaleActual}
                  onChange={(e) => {
                    setScaleActual(e.target.value)
                    setScaleDrawing('')
                  }}
                  className="tool-input"
                />
              </div>
              <div className="input-group">
                <label>Drawing Size (on paper)</label>
                <input
                  type="number"
                  placeholder="e.g., 10"
                  value={scaleDrawing}
                  onChange={(e) => {
                    setScaleDrawing(e.target.value)
                    setScaleActual('')
                  }}
                  className="tool-input"
                />
              </div>
              <button onClick={handleScaleCalculate} className="tool-button">
                Calculate
              </button>
              <div className="tool-hint">
                Enter either actual size or drawing size, then calculate to find the other.
              </div>
            </div>
          )}

          {activeTab === 'stairs' && (
            <div className="tool-section">
              <h3>Stair Design Calculator</h3>
              <p className="tool-description">
                Calculate stair dimensions and check building code compliance.
              </p>
              <div className="input-group">
                <label>Total Rise (Floor to Floor Height) - cm</label>
                <input
                  type="number"
                  placeholder="e.g., 300"
                  value={stairTotalRise}
                  onChange={(e) => setStairTotalRise(e.target.value)}
                  className="tool-input"
                />
              </div>
              <div className="input-group">
                <label>Desired Riser Height - cm</label>
                <input
                  type="number"
                  placeholder="16-18 recommended"
                  value={stairRiserHeight}
                  onChange={(e) => setStairRiserHeight(e.target.value)}
                  className="tool-input"
                />
              </div>
              <div className="input-group">
                <label>Tread Depth - cm</label>
                <input
                  type="number"
                  placeholder="25-30 recommended"
                  value={stairTreadDepth}
                  onChange={(e) => setStairTreadDepth(e.target.value)}
                  className="tool-input"
                />
              </div>
              <button onClick={handleStairCalculate} className="tool-button">
                Calculate
              </button>
              {lengthResult && (
                <>
                  <div className="tool-result">
                    <pre>{lengthResult}</pre>
                  </div>
                  {lastCalculation && lastCalculation.type === 'Stair Design' && (
                    <button 
                      onClick={() => sendResultToAI(lastCalculation.type, lastCalculation.inputs, lastCalculation.result)}
                      className="ask-ai-button"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Ask AI for Design Advice
                    </button>
                  )}
                </>
              )}
              <div className="tool-hint">
                The 2R + T formula should equal 60-66 cm for comfortable stairs.
              </div>
            </div>
          )}

          {activeTab === 'beam' && (
            <div className="tool-section">
              <h3>Beam Span Calculator</h3>
              <p className="tool-description">
                Estimate beam size requirements based on span and load.
              </p>
              <div className="input-group">
                <label>Material Type</label>
                <select 
                  value={beamMaterial} 
                  onChange={(e) => setBeamMaterial(e.target.value)}
                  className="tool-select"
                >
                  <option value="wood">Wood (Pine/Spruce)</option>
                  <option value="steel">Steel (Structural)</option>
                  <option value="concrete">Reinforced Concrete</option>
                </select>
              </div>
              <div className="input-group">
                <label>Span Length - meters</label>
                <input
                  type="number"
                  placeholder="e.g., 5"
                  value={beamSpan}
                  onChange={(e) => setBeamSpan(e.target.value)}
                  className="tool-input"
                />
              </div>
              <div className="input-group">
                <label>Total Uniform Load - kN/m</label>
                <input
                  type="number"
                  placeholder="e.g., 10"
                  value={beamLoad}
                  onChange={(e) => setBeamLoad(e.target.value)}
                  className="tool-input"
                />
              </div>
              <button onClick={handleBeamCalculate} className="tool-button">
                Calculate
              </button>
              {lengthResult && (
                <div className="tool-result">
                  <pre>{lengthResult}</pre>
                </div>
              )}
            </div>
          )}

          {activeTab === 'brick' && (
            <div className="tool-section">
              <h3>Brick & Mortar Estimator</h3>
              <p className="tool-description">
                Calculate materials needed for brick walls.
              </p>
              <div className="input-group">
                <label>Brick Type</label>
                <select 
                  value={brickType} 
                  onChange={(e) => setBrickType(e.target.value)}
                  className="tool-select"
                >
                  <option value="standard">Standard Brick (19×5.7 cm)</option>
                  <option value="modular">Modular Brick (19.4×5.7 cm)</option>
                  <option value="queen">Queen Size (20.3×7 cm)</option>
                </select>
              </div>
              <div className="input-group">
                <label>Wall Length - meters</label>
                <input
                  type="number"
                  placeholder="e.g., 10"
                  value={wallLength}
                  onChange={(e) => setWallLength(e.target.value)}
                  className="tool-input"
                />
              </div>
              <div className="input-group">
                <label>Wall Height - meters</label>
                <input
                  type="number"
                  placeholder="e.g., 3"
                  value={wallHeight}
                  onChange={(e) => setWallHeight(e.target.value)}
                  className="tool-input"
                />
              </div>
              <button onClick={handleBrickCalculate} className="tool-button">
                Calculate
              </button>
              {lengthResult && (
                <div className="tool-result">
                  <pre>{lengthResult}</pre>
                </div>
              )}
              <div className="tool-hint">
                Calculation includes 15% deduction for openings and 5% waste factor.
              </div>
            </div>
          )}

          {activeTab === 'ventilation' && (
            <div className="tool-section">
              <h3>Ventilation & Window Calculator</h3>
              <p className="tool-description">
                Calculate HVAC requirements and natural ventilation areas.
              </p>
              <div className="input-group">
                <label>Room Type</label>
                <select 
                  value={roomType} 
                  onChange={(e) => setRoomType(e.target.value)}
                  className="tool-select"
                >
                  <option value="office">Office</option>
                  <option value="classroom">Classroom</option>
                  <option value="residential">Residential</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="gym">Gym/Fitness</option>
                </select>
              </div>
              <div className="input-group">
                <label>Room Length - meters</label>
                <input
                  type="number"
                  placeholder="e.g., 8"
                  value={roomLength}
                  onChange={(e) => setRoomLength(e.target.value)}
                  className="tool-input"
                />
              </div>
              <div className="input-group">
                <label>Room Width - meters</label>
                <input
                  type="number"
                  placeholder="e.g., 6"
                  value={roomWidth}
                  onChange={(e) => setRoomWidth(e.target.value)}
                  className="tool-input"
                />
              </div>
              <div className="input-group">
                <label>Room Height - meters</label>
                <input
                  type="number"
                  placeholder="e.g., 3"
                  value={roomHeight}
                  onChange={(e) => setRoomHeight(e.target.value)}
                  className="tool-input"
                />
              </div>
              <button onClick={handleVentilationCalculate} className="tool-button">
                Calculate
              </button>
              {lengthResult && (
                <div className="tool-result">
                  <pre>{lengthResult}</pre>
                </div>
              )}
            </div>
          )}

          {activeTab === 'roof' && (
            <div className="tool-section">
              <h3>Roof Pitch Calculator</h3>
              <p className="tool-description">
                Calculate roof angles, rise, and rafter lengths.
              </p>
              <div className="input-group">
                <label>Roof Span - meters</label>
                <input
                  type="number"
                  placeholder="e.g., 10"
                  value={roofSpan}
                  onChange={(e) => setRoofSpan(e.target.value)}
                  className="tool-input"
                />
              </div>
              <div className="input-group">
                <label>Roof Pitch (in 12)</label>
                <select 
                  value={roofPitch} 
                  onChange={(e) => setRoofPitch(e.target.value)}
                  className="tool-select"
                >
                  <option value="1">1:12 (Low Slope)</option>
                  <option value="2">2:12</option>
                  <option value="3">3:12</option>
                  <option value="4">4:12</option>
                  <option value="5">5:12</option>
                  <option value="6">6:12 (Standard)</option>
                  <option value="7">7:12</option>
                  <option value="8">8:12</option>
                  <option value="9">9:12</option>
                  <option value="10">10:12</option>
                  <option value="12">12:12 (45°)</option>
                </select>
              </div>
              <button onClick={handleRoofCalculate} className="tool-button">
                Calculate
              </button>
              {lengthResult && (
                <div className="tool-result">
                  <pre>{lengthResult}</pre>
                </div>
              )}
              <div className="tool-hint">
                Pitch is expressed as rise over run (e.g., 6:12 means 6 inches rise per 12 inches run).
              </div>
            </div>
          )}

          {activeTab === 'golden' && (
            <div className="tool-section">
              <h3>Golden Ratio Calculator</h3>
              <p className="tool-description">
                The golden ratio (φ = 1.618) is used in architecture for aesthetically pleasing proportions.
              </p>
              <div className="input-group">
                <label>Base Dimension</label>
                <input
                  type="number"
                  placeholder="Enter a dimension"
                  value={goldenBase}
                  onChange={(e) => setGoldenBase(e.target.value)}
                  className="tool-input"
                />
              </div>
              <button onClick={handleGoldenRatio} className="tool-button">
                Calculate
              </button>
              {goldenResult && (
                <div className="tool-result">
                  <pre>{goldenResult}</pre>
                </div>
              )}
              <div className="tool-hint">
                Examples: Parthenon, Notre Dame, and many Renaissance buildings use golden ratio proportions.
              </div>
            </div>
          )}

          {activeTab === 'prompts' && (
            <div className="tool-section">
              <h3>AI Quick Prompts</h3>
              <p className="tool-description">
                Get instant architectural advice by asking the AI assistant these common questions.
              </p>
              <div className="prompts-grid">
                {quickPrompts.map((prompt, index) => (
                  <button
                    key={index}
                    className="prompt-card"
                    onClick={() => {
                      onSendToChat(prompt.prompt)
                      onClose()
                    }}
                  >
                    <div className="prompt-title">{prompt.title}</div>
                    <div className="prompt-preview">{prompt.prompt}</div>
                    <div className="prompt-arrow">→</div>
                  </button>
                ))}
              </div>
              <div className="tool-hint">
                Click any prompt to instantly send it to the AI assistant for detailed guidance.
              </div>
            </div>
          )}

          {activeTab === 'reference' && (
            <div className="tool-section">
              <h3>Quick Reference Guide</h3>
              <p className="tool-description">
                Common architectural standards and dimensions for quick lookup.
              </p>
              {architecturalReferences.map((section, index) => (
                <div key={index} className="reference-section">
                  <h4 className="reference-category">{section.category}</h4>
                  <ul className="reference-list">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                  <button
                    className="ask-about-reference"
                    onClick={() => {
                      onSendToChat(`Tell me more about ${section.category.toLowerCase()} in architectural design. What are the key considerations and best practices?`)
                      onClose()
                    }}
                  >
                    Ask AI about {section.category}
                  </button>
                </div>
              ))}
              <div className="tool-hint">
                These are general guidelines. Always verify with local building codes and regulations.
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ToolsPanel

