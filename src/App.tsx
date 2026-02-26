import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const Embers = () => {
  const [windowSize, setWindowSize] = useState({ width: 1000, height: 1000 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-yellow-500 rounded-full blur-[1px]"
          initial={{ 
            x: Math.random() * (windowSize.width / 2), 
            y: windowSize.height + 10,
            opacity: Math.random() * 0.5 + 0.2
          }}
          animate={{ 
            y: -10,
            x: `+=${Math.random() * 100 - 50}`,
            opacity: [0, 0.8, 0]
          }}
          transition={{ 
            duration: Math.random() * 8 + 4, 
            repeat: Infinity, 
            delay: Math.random() * 5,
            ease: "linear" 
          }}
        />
      ))}
    </div>
  );
};

const DataStreams = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-50"
          style={{ 
            height: Math.random() * 150 + 50,
            left: `${Math.random() * 100}%`
          }}
          initial={{ y: -200 }}
          animate={{ y: 2000 }}
          transition={{ 
            duration: Math.random() * 2 + 1.5, 
            repeat: Infinity, 
            delay: Math.random() * 2,
            ease: "linear" 
          }}
        />
      ))}
    </div>
  );
};

const Pagoda = () => (
  <svg viewBox="0 0 200 400" className="absolute bottom-0 left-[5%] md:left-[10%] w-48 md:w-64 h-auto fill-[#2A0800] opacity-95 z-10">
    {/* Base */}
    <path d="M40,400 L160,400 L150,360 L50,360 Z" />
    <path d="M20,360 L180,360 L160,330 L40,330 Z" />
    <rect x="60" y="280" width="80" height="50" />
    {/* Level 1 */}
    <path d="M10,280 L190,280 L150,240 L50,240 Z" />
    <rect x="65" y="190" width="70" height="50" />
    {/* Level 2 */}
    <path d="M20,190 L180,190 L140,150 L60,150 Z" />
    <rect x="70" y="110" width="60" height="40" />
    {/* Level 3 */}
    <path d="M30,110 L170,110 L130,70 L70,70 Z" />
    <rect x="80" y="40" width="40" height="30" />
    {/* Top */}
    <path d="M50,40 L150,40 L100,0 Z" />
    <line x1="100" y1="0" x2="100" y2="-40" stroke="#2A0800" strokeWidth="4" />
    <circle cx="100" cy="-40" r="6" />
    
    {/* Roof curves */}
    <path d="M10,280 Q50,260 50,240" fill="none" stroke="#2A0800" strokeWidth="4" />
    <path d="M190,280 Q150,260 150,240" fill="none" stroke="#2A0800" strokeWidth="4" />
    <path d="M20,190 Q60,170 60,150" fill="none" stroke="#2A0800" strokeWidth="4" />
    <path d="M180,190 Q140,170 140,150" fill="none" stroke="#2A0800" strokeWidth="4" />
    <path d="M30,110 Q70,90 70,70" fill="none" stroke="#2A0800" strokeWidth="4" />
    <path d="M170,110 Q130,90 130,70" fill="none" stroke="#2A0800" strokeWidth="4" />
    <path d="M50,40 Q100,20 100,0" fill="none" stroke="#2A0800" strokeWidth="4" />
    <path d="M150,40 Q100,20 100,0" fill="none" stroke="#2A0800" strokeWidth="4" />
  </svg>
);

const CitySkyline = () => (
  <svg viewBox="0 0 400 200" className="absolute bottom-0 right-0 w-full h-64 fill-[#0A1118] opacity-95 z-10" preserveAspectRatio="none">
    {/* Background buildings */}
    <rect x="10" y="120" width="40" height="80" fill="#111D28" />
    <rect x="80" y="90" width="30" height="110" fill="#111D28" />
    <rect x="150" y="110" width="50" height="90" fill="#111D28" />
    <rect x="250" y="80" width="40" height="120" fill="#111D28" />
    <rect x="330" y="100" width="30" height="100" fill="#111D28" />

    {/* Foreground buildings */}
    <rect x="30" y="100" width="30" height="100" />
    <rect x="65" y="50" width="40" height="150" />
    <rect x="110" y="130" width="25" height="70" />
    <rect x="140" y="30" width="45" height="170" />
    <rect x="190" y="80" width="35" height="120" />
    <rect x="230" y="20" width="45" height="180" />
    <rect x="280" y="60" width="35" height="140" />
    <rect x="320" y="110" width="40" height="90" />
    <rect x="365" y="40" width="35" height="160" />
    
    {/* Antennas */}
    <line x1="85" y1="50" x2="85" y2="10" stroke="#0A1118" strokeWidth="2" />
    <line x1="162" y1="30" x2="162" y2="0" stroke="#0A1118" strokeWidth="3" />
    <line x1="252" y1="20" x2="252" y2="-10" stroke="#0A1118" strokeWidth="2" />
    <line x1="382" y1="40" x2="382" y2="10" stroke="#0A1118" strokeWidth="2" />
    
    {/* Windows */}
    <g fill="#88C0D0" opacity="0.6">
      <rect x="75" y="70" width="4" height="4" />
      <rect x="85" y="70" width="4" height="4" />
      <rect x="75" y="90" width="4" height="4" />
      <rect x="85" y="90" width="4" height="4" />
      
      <rect x="150" y="50" width="4" height="4" />
      <rect x="170" y="50" width="4" height="4" />
      <rect x="150" y="70" width="4" height="4" />
      <rect x="170" y="70" width="4" height="4" />
      
      <rect x="240" y="40" width="4" height="4" />
      <rect x="260" y="40" width="4" height="4" />
      <rect x="240" y="60" width="4" height="4" />
      <rect x="260" y="60" width="4" height="4" />
      <rect x="240" y="80" width="4" height="4" />
      <rect x="260" y="80" width="4" height="4" />
    </g>
  </svg>
);

const Bridge = () => (
  <div className="absolute bottom-12 right-0 w-full h-40 z-20">
    <svg viewBox="0 0 400 100" className="w-full h-full" preserveAspectRatio="none">
      {/* Deck */}
      <path d="M0,80 L400,80 L400,85 L0,85 Z" fill="#1A2B3C" />
      <path d="M0,80 Q200,60 400,80" fill="none" stroke="#F5A623" strokeWidth="2" className="opacity-80" />
      
      {/* Suspension Cables */}
      <path d="M0,0 Q100,80 200,0 T400,0" fill="none" stroke="#F5A623" strokeWidth="1.5" className="opacity-60" />
      
      {/* Vertical Suspenders */}
      {[...Array(40)].map((_, i) => {
        const x = i * 10;
        const normalizedX = (x % 200) / 100 - 1;
        const y = (normalizedX * normalizedX) * 80;
        return (
          <line key={i} x1={x} y1={y} x2={x} y2="80" stroke="#F5A623" strokeWidth="0.5" className="opacity-40" />
        );
      })}
      
      {/* Towers */}
      <rect x="190" y="0" width="20" height="100" fill="#0A1118" />
      <path d="M195,20 L205,20 L205,80 L195,80 Z" fill="#1A2B3C" />
      
      {/* Lights on bridge */}
      {[...Array(20)].map((_, i) => (
        <circle key={`light-${i}`} cx={i * 20 + 10} cy="78" r="1.5" fill="#FDE08B" className="opacity-80" />
      ))}
    </svg>
    
    {/* Moving cars on bridge */}
    <div className="absolute bottom-[18px] left-0 w-full h-1 overflow-hidden">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`car-r-${i}`}
          className="absolute top-0 w-3 h-1 bg-red-500 rounded-full blur-[1px]"
          initial={{ left: '-10%' }}
          animate={{ left: '110%' }}
          transition={{ duration: 4, repeat: Infinity, delay: i * 1.2, ease: "linear" }}
        />
      ))}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`car-w-${i}`}
          className="absolute top-0 w-3 h-1 bg-white rounded-full blur-[1px]"
          initial={{ left: '110%' }}
          animate={{ left: '-10%' }}
          transition={{ duration: 3.5, repeat: Infinity, delay: i * 0.9, ease: "linear" }}
        />
      ))}
    </div>
  </div>
);

const CenterGlobe = () => (
  <motion.div 
    className="relative w-48 h-48 md:w-72 md:h-72 rounded-full flex items-center justify-center z-40"
    style={{
      background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)',
      boxShadow: '0 0 50px rgba(255,255,255,0.15)'
    }}
  >
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 w-full h-full rounded-full border border-white/30"
    >
      {/* Longitude lines */}
      {[...Array(8)].map((_, i) => (
        <div key={`lon-${i}`} className="absolute inset-0 w-full h-full rounded-full border border-white/20" style={{ transform: `rotateY(${i * 22.5}deg)` }} />
      ))}
      {/* Latitude lines */}
      {[...Array(5)].map((_, i) => (
        <div key={`lat-${i}`} className="absolute w-full rounded-full border border-white/20" style={{ height: `${100 - Math.abs(2 - i) * 35}%`, top: `${Math.abs(2 - i) * 17.5}%` }} />
      ))}
    </motion.div>
    
    {/* Map overlay (abstract) */}
    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-white/50 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
      <motion.path 
        d="M20,40 Q30,30 40,45 T60,35 T80,50 Q70,70 50,60 T20,40 Z" 
        fill="currentColor" 
        animate={{ scale: [1, 1.02, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path 
        d="M65,20 Q75,15 85,25 T75,40 Q60,30 65,20 Z" 
        fill="currentColor" 
        animate={{ scale: [1, 1.03, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.path 
        d="M15,65 Q25,75 35,60 T25,50 Q10,55 15,65 Z" 
        fill="currentColor" 
        animate={{ scale: [1, 1.02, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </svg>
    
    {/* Glowing dots on globe */}
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={`dot-${i}`}
        className="absolute w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]"
        style={{
          top: `${Math.random() * 60 + 20}%`,
          left: `${Math.random() * 60 + 20}%`,
        }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: Math.random() * 2 + 1, repeat: Infinity, delay: Math.random() * 2 }}
      />
    ))}
  </motion.div>
);

export default function App() {
  return (
    <div className="flex h-screen w-full overflow-hidden font-sans text-white bg-black">
      {/* Left Side - Silk Road */}
      <div className="relative w-1/2 h-full bg-gradient-to-b from-[#8B231A] via-[#C84B24] to-[#E66A25] overflow-hidden border-r border-black/20">
        <Embers />
        
        {/* Sun */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1], opacity: [0.9, 1, 0.9] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-80 md:h-80 bg-gradient-to-br from-[#FFD700] to-[#FF8C00] rounded-full blur-[2px] shadow-[0_0_60px_rgba(255,165,0,0.6)]"
        />
        
        {/* Mountains Silhouette */}
        <svg viewBox="0 0 400 100" className="absolute bottom-0 left-0 w-full h-48 fill-[#3A1108] opacity-80 z-0" preserveAspectRatio="none">
          <path d="M0,100 L0,60 Q50,40 100,70 T200,50 T300,80 T400,40 L400,100 Z" />
          <path d="M0,100 L0,80 Q80,50 150,90 T300,60 T400,80 L400,100 Z" fill="#2A0800" />
        </svg>

        <Pagoda />
        
        {/* Calligraphy */}
        <div className="absolute top-[15%] left-[10%] md:left-[15%] flex flex-col items-center gap-2 opacity-70 mix-blend-multiply">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 1 }}
            className="text-7xl md:text-9xl font-serif text-[#3A1108]" style={{ writingMode: 'vertical-rl' }}>
            谭
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3, duration: 1 }}
            className="text-7xl md:text-9xl font-serif text-[#3A1108]" style={{ writingMode: 'vertical-rl' }}>
            台
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6, duration: 1 }}
            className="text-7xl md:text-9xl font-serif text-[#3A1108]" style={{ writingMode: 'vertical-rl' }}>
            甬
          </motion.div>
        </div>
      </div>
      
      {/* Right Side - Digital Highway */}
      <div className="relative w-1/2 h-full bg-gradient-to-b from-[#0F2027] via-[#203A43] to-[#2C5364] overflow-hidden">
        <DataStreams />
        
        {/* Moon */}
        <motion.div 
          animate={{ y: [0, -10, 0], boxShadow: ['0 0 20px rgba(136,192,208,0.4)', '0 0 40px rgba(136,192,208,0.6)', '0 0 20px rgba(136,192,208,0.4)'] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] right-[20%] w-16 h-16 md:w-24 md:h-24 bg-[#88C0D0] rounded-full blur-[1px]"
        />
        
        <CitySkyline />
        <Bridge />
      </div>

      {/* Center Overlay */}
      <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-between py-12 md:py-20 z-50">
        
        {/* Title */}
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center"
        >
          <motion.h1 
            animate={{ textShadow: ['0 4px 20px rgba(0,0,0,0.6)', '0 4px 30px rgba(253,224,139,0.4)', '0 4px 20px rgba(0,0,0,0.6)'] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-[0.1em] text-transparent bg-clip-text bg-gradient-to-b from-[#FDE08B] via-[#D4AF37] to-[#AA7C11]"
          >
            Where<br/>Worlds Collide
          </motion.h1>
        </motion.div>

        {/* Globe */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <CenterGlobe />
        </div>

        {/* Side Titles */}
        <div className="flex w-full h-full absolute top-0 left-0 pointer-events-none">
          <div className="w-1/2 h-full relative">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase leading-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
                The<br/>Silk<br/>Road
              </h2>
            </motion.div>
          </div>
          
          <div className="w-1/2 h-full relative">
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase leading-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
                The<br/>Digital<br/>Highway
              </h2>
            </motion.div>
          </div>
        </div>

        {/* Event Details */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-center mt-auto bg-black/40 backdrop-blur-sm px-8 py-4 rounded-xl border border-white/10 shadow-2xl"
        >
          <h3 className="text-lg md:text-xl font-bold tracking-[0.3em] mb-3 text-[#FDE08B]">SAVE THE DATE</h3>
          <div className="space-y-1 text-sm md:text-base font-medium tracking-widest text-gray-200">
            <p>MARCH 10, 2026</p>
            <p>TIME: 11:30 PM</p>
            <p>WHERE: NDS PANTRY</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
