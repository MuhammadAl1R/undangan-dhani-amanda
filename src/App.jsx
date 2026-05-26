import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [size, setSize] = useState({ w: window.innerWidth, h: window.innerHeight });

  useEffect(() => {
    const update = () => setSize({ w: window.innerWidth, h: window.innerHeight });
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const handleOpen = () => {
    if (isOpened) return;
    setIsOpened(true);
    setTimeout(() => setShowCard(true), 900);
  };

  const envW = Math.min(size.w * 0.88, 380);
  const envH = envW * 0.68;
  const stampSize = envW * 0.48;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: '#f0ece3',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      fontFamily: "'Playfair Display', serif",
    }}>

      {/* ===== SCENE 1: AMPLOP REALISTIK ===== */}
      <AnimatePresence>
        {!showCard && (
          <>
            <motion.div
              key="env"
              exit={{ y: size.h * 1.2, opacity: 0, rotate: -2 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
              onClick={handleOpen}
              style={{ cursor: 'pointer', perspective: 1200 }}
              animate={!isOpened ? {
                y: [0, -5, 0, -3, 0],
                transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
              } : {}}
            >
              <div style={{
                position: 'relative',
                width: envW,
                height: envH,
              }}>

                {/* === BADAN AMPLOP UTAMA === */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: 6,
                  overflow: 'hidden',
                  boxShadow: '0 24px 64px rgba(0,0,0,0.28), 0 6px 16px rgba(0,0,0,0.18)',
                }}>
                  {/* Background amplop */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(160deg, #1e3260 0%, #1b2b4a 40%, #162240 100%)',
                  }} />

                  {/* Lipatan segitiga KIRI (dari pojok kiri-bawah ke tengah) */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0, left: 0,
                    width: '100%', height: '100%',
                    background: 'linear-gradient(135deg, #243d63 0%, #1a2f50 50%, transparent 50%)',
                    zIndex: 2,
                  }} />

                  {/* Lipatan segitiga KANAN */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0, right: 0,
                    width: '100%', height: '100%',
                    background: 'linear-gradient(225deg, #1f3459 0%, #192b47 50%, transparent 50%)',
                    zIndex: 2,
                  }} />

                  {/* Lipatan segitiga BAWAH */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0, left: 0,
                    width: '100%', height: '100%',
                    background: 'linear-gradient(0deg, #131e36 0%, #182444 45%, transparent 45%)',
                    zIndex: 3,
                  }} />

                  {/* Garis lipatan kiri (diagonal dari pojok kiri ke tengah bawah) */}
                  <svg style={{ position:'absolute', inset:0, width:'100%', height:'100%', zIndex:4 }} viewBox={`0 0 ${envW} ${envH}`} preserveAspectRatio="none">
                    <line x1="0" y1={envH} x2={envW/2} y2={envH * 0.55} stroke="rgba(255,255,255,0.10)" strokeWidth="1"/>
                    <line x1={envW} y1={envH} x2={envW/2} y2={envH * 0.55} stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
                  </svg>
                </div>

                {/* === FLAP ATAS === */}
                <motion.div
                  initial={{ rotateX: 0 }}
                  animate={{ rotateX: isOpened ? -178 : 0 }}
                  transition={{ duration: 0.85, ease: [0.4, 0, 0.2, 1] }}
                  style={{
                    transformOrigin: 'top center',
                    position: 'absolute',
                    top: 0, left: 0,
                    width: '100%',
                    height: '52%',
                    zIndex: 10,
                    filter: isOpened ? 'none' : 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
                    clipPath: 'polygon(0 0, 100% 0, 86% 100%, 14% 100%)',
                    background: 'linear-gradient(170deg, #253e66 0%, #1d3058 60%, #182a4e 100%)',
                    borderRadius: '6px 6px 0 0',
                  }}
                >
                  {/* Highlight diagonal */}
                  <div style={{
                    position: 'absolute',
                    top: 0, left: 0,
                    width: '100%', height: '100%',
                    clipPath: 'polygon(0 0, 100% 0, 86% 100%, 14% 100%)',
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 60%)',
                  }} />
                  {/* Line art tangan */}
                  <svg
                    viewBox="0 0 200 70"
                    style={{
                      position: 'absolute',
                      bottom: '18%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '55%',
                      opacity: 0.55,
                    }}
                  >
                    <path d="M10,55 Q20,35 35,30 Q40,28 42,32 L44,36 Q38,33 36,36 Q50,20 55,22 Q58,23 56,28 Q62,15 67,17 Q71,19 68,25 Q74,14 79,16 Q83,19 79,26 L75,40 Q80,28 85,30 Q90,33 82,50 Q76,62 60,65" fill="none" stroke="rgba(200,215,255,0.9)" strokeWidth="1.2" strokeLinecap="round"/>
                    <path d="M79,26 Q95,10 110,18 Q118,22 112,30" fill="none" stroke="rgba(200,215,255,0.9)" strokeWidth="1.2" strokeLinecap="round"/>
                    <path d="M190,55 Q180,35 165,30 Q160,28 158,32 L156,36 Q162,33 164,36 Q150,20 145,22 Q142,23 144,28 Q138,15 133,17 Q129,19 132,25 Q126,14 121,16 Q117,19 121,26 L125,40 Q120,28 115,30 Q110,33 118,50 Q124,62 140,65" fill="none" stroke="rgba(200,215,255,0.9)" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </motion.div>

                {/* STAMP */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: stampSize,
                  height: stampSize * 0.6,
                  overflow: 'hidden',
                  borderRadius: '4px',
                  zIndex: 30,
                  filter: 'drop-shadow(0 6px 20px rgba(0,0,0,0.4))',
                }}>
                  <motion.div
                    animate={!isOpened ? {
                      scale: [1, 1.03, 1],
                      transition: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
                    } : {}}
                    style={{ width: '100%', height: '100%' }}
                  >
                    <motion.div
                      animate={{
                        opacity: isOpened ? 0 : 1,
                        scale: isOpened ? 0.6 : 1,
                      }}
                      transition={{ duration: 0.35 }}
                      style={{ width: '100%', height: '100%' }}
                    >
                      <img src="/stamp.png" alt="DA" style={{
                        width: '100%', height: '100%',
                        display: 'block', objectFit: 'cover',
                      }} />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Ornamen bunga amplop */}
                <img src="/bunga-1.png" alt="" style={{
                  position: 'absolute', top: '-14%', right: '-14%',
                  width: '48%', zIndex: 25, pointerEvents: 'none',
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
                }} />
                <img src="/bunga-2.png" alt="" style={{
                  position: 'absolute', bottom: '-14%', left: '-14%',
                  width: '48%', zIndex: 25, pointerEvents: 'none',
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
                }} />
              </div>
            </motion.div>

            <motion.p
              key="hint"
              animate={isOpened ? { opacity: 0 } : {
                opacity: [0.45, 0.75, 0.45],
                transition: { duration: 2.2, repeat: Infinity, ease: 'easeInOut' },
              }}
              style={{
                position: 'fixed',
                bottom: '7%',
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: 11,
                letterSpacing: '4px',
                color: '#1b2b4a',
                fontWeight: 700,
                pointerEvents: 'none',
              }}
            >
              TAP TO OPEN
            </motion.p>
          </>
        )}
      </AnimatePresence>

      {/* ===== SCENE 2: KARTU ===== */}
      <AnimatePresence>
        {showCard && (
          <motion.div
            key="card"
            initial={{ y: size.h * 0.7, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              inset: 0,
              background: '#fdfdfc',
              overflowY: 'auto',
              overflowX: 'hidden',
              scrollbarWidth: 'none',
            }}
          >
            <img src="/bunga-1.png" alt="" style={{
              position: 'absolute',
              top: -30,
              right: -30,
              width: 'clamp(160px, 58vw, 350px)',
              opacity: 0.9,
              zIndex: 1,
              pointerEvents: 'none',
            }} />
            <img src="/bunga-2.png" alt="" style={{
              position: 'absolute',
              bottom: -30,
              left: -30,
              width: 'clamp(100px, 45vw, 240px)',
              opacity: 0.9,
              zIndex: 1,
              pointerEvents: 'none',
            }} />

            <div style={{
              position: 'relative',
              zIndex: 10,
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              width: '100%',
              maxWidth: 'min(420px, 90vw)',
              margin: '0 auto',
              padding: '15vh 25px 15vh 25px',
              boxSizing: 'border-box',
            }}>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                style={{ color: '#888', fontSize: 15.5, marginBottom: 10 }}
              >
                The Wedding of
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                style={{
                  fontFamily: "'Mea Culpa', cursive",
                  fontSize: 'clamp(3.2rem, 12vw, 5.5rem)',
                  lineHeight: 0.95,
                  color: '#1b2b4a',
                  margin: '10px 0 6px',
                }}
              >Dhani</motion.h1>

              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                style={{
                  fontFamily: "'Mea Culpa', cursive",
                  fontSize: 'clamp(2rem, 8vw, 3.8rem)',
                  color: '#1b2b4a',
                  margin: '0 0 10px',
                }}
              >&amp;</motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.6 }}
                style={{
                  fontFamily: "'Mea Culpa', cursive",
                  fontSize: 'clamp(3.2rem, 12vw, 5.5rem)',
                  lineHeight: 0.95,
                  color: '#1b2b4a',
                  margin: '6px 0 32px',
                }}
              >Amanda</motion.h1>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.85, duration: 0.5 }}
                style={{ width: 70, height: 2.5, background: '#d4af37', marginBottom: 32, transformOrigin: 'center' }}
              />

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                style={{
                  color: '#555',
                  fontSize: 15,
                  lineHeight: 1.85,
                  maxWidth: 290,
                }}
              >
                By the grace of Allah SWT, we invite you<br/>
                to celebrate our wedding ceremony.
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}