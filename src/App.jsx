import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import bunga1 from './assets/bunga-1.png';
import bunga2 from './assets/bunga-2.png';
import coupleImg from './assets/couple.png';
import stampImg from './assets/stamp.png';
import ayatImg from './assets/ayat.png';
import bungaBorder from './assets/bunga-border.png';
import bunga5 from './assets/bunga-5.png';
import bunga6 from './assets/bunga-6.png';
import couple1Img from './assets/couple-1.png';
import awanImg from './assets/awan.png';
import bunga7 from './assets/bunga-7.png';
import bunga8 from './assets/bunga-8.png';
import bg2 from './assets/bg-2.png';
import bg3 from './assets/bg-3.png';
import cincin from './assets/cincin.png';
import bunga9 from './assets/bunga-9.png';
import bunga10 from './assets/bunga-10.png';
import bunga11 from './assets/bunga-11.png';
import dhaniTrans from './assets/Dhani-trans.png';
import amandaTrans from './assets/amanda-trans.png';
import bunga12 from './assets/bunga-12.png';
import bunga13 from './assets/bunga-13.png';
import castleImg from './assets/castle.png';
import bg4 from './assets/bg-4.png';
import bg5 from './assets/bg-5.png';
import garisEmas from './assets/garis-emas.png';
import jam from './assets/jam.png';
import couple3Img from './assets/couple-3.png';
import bunga16 from './assets/bunga-16.png';
import bunga17 from './assets/bunga-17.png';
import bunga15 from './assets/bunga-15.png';
import bunga14 from './assets/bunga-14.png';
import blueLine from './assets/blue-line.png';
import bunga3 from './assets/bunga-3.png';
import butterflyImg from './assets/butterfly.png';
import bg6 from './assets/bg-6.png';

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [size, setSize] = useState({ w: window.innerWidth, h: window.innerHeight });
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const targetDate = new Date('2026-12-07T18:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 6, hours: 6, minutes: 6, seconds: 6 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const update = () => setSize({ w: window.innerWidth, h: window.innerHeight });
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    // Membaca audio dari public/backsong.mp3 agar aman jika file belum ada
    audioRef.current = new Audio('/backsong.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.2; // Atur volume di sini (rentang 0.0 s/d 1.0)

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const handleOpen = () => {
    if (isOpened) return;
    setIsOpened(true);
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.log("Autoplay blocked or audio load failed:", err));
    }
    setTimeout(() => setShowCard(true), 900);
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.log("Audio play failed:", err));
    }
  };

  const envW = Math.min(size.w * 0.88, 380);
  const envH = envW * 0.68;
  const stampSize = envW * 0.48;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      fontFamily: "'Playfair Display', serif",
      backgroundColor: '#1b2b4a',
    }}>
      {/* BACKGROUND BLUR (Visible on Desktop / Tablet) */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(${bg4})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(20px) brightness(0.6)',
        transform: 'scale(1.1)',
        zIndex: 1,
      }} />

      {/* MAIN MOBILE CONTAINER */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '600px',
        height: '100%',
        backgroundColor: '#fdfdfc',
        boxShadow: '0 0 50px rgba(0, 0, 0, 0.4)',
        zIndex: 10,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
                    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 4 }} viewBox={`0 0 ${envW} ${envH}`} preserveAspectRatio="none">
                      <line x1="0" y1={envH} x2={envW / 2} y2={envH * 0.55} stroke="rgba(255,255,255,0.10)" strokeWidth="1" />
                      <line x1={envW} y1={envH} x2={envW / 2} y2={envH * 0.55} stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
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
                      <path d="M10,55 Q20,35 35,30 Q40,28 42,32 L44,36 Q38,33 36,36 Q50,20 55,22 Q58,23 56,28 Q62,15 67,17 Q71,19 68,25 Q74,14 79,16 Q83,19 79,26 L75,40 Q80,28 85,30 Q90,33 82,50 Q76,62 60,65" fill="none" stroke="rgba(200,215,255,0.9)" strokeWidth="1.2" strokeLinecap="round" />
                      <path d="M79,26 Q95,10 110,18 Q118,22 112,30" fill="none" stroke="rgba(200,215,255,0.9)" strokeWidth="1.2" strokeLinecap="round" />
                      <path d="M190,55 Q180,35 165,30 Q160,28 158,32 L156,36 Q162,33 164,36 Q150,20 145,22 Q142,23 144,28 Q138,15 133,17 Q129,19 132,25 Q126,14 121,16 Q117,19 121,26 L125,40 Q120,28 115,30 Q110,33 118,50 Q124,62 140,65" fill="none" stroke="rgba(200,215,255,0.9)" strokeWidth="1.2" strokeLinecap="round" />
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
                        <img src={stampImg} alt="DA" style={{
                          width: '100%', height: '100%',
                          display: 'block', objectFit: 'cover',
                        }} />
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Ornamen bunga amplop */}
                  <img src={bunga1} alt="" style={{
                    position: 'absolute', top: '-20%', right: '-10%',
                    width: '48%', zIndex: 25, pointerEvents: 'none',
                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
                  }} />
                  <img src={bunga2} alt="" style={{
                    position: 'absolute', bottom: '-14%', left: '-10%',
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
                  position: 'absolute',
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
                scrollSnapType: 'y mandatory',
                WebkitOverflowScrolling: 'touch',
              }}
            >

              {/* ===== SECTION 1: NAMES ===== */}
              <div style={{
                position: 'relative',
                width: '100%',
                height: '100vh',
                overflow: 'hidden',
                scrollSnapAlign: 'start',
                scrollSnapStop: 'always',
              }}>
                {/* TOP BORDER */}
                <img src={bungaBorder} alt="" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '50vh',
                  objectFit: 'fill',
                  opacity: 0.35,
                  zIndex: 1,
                  pointerEvents: 'none',
                }} />
                {/* BOTTOM BORDER (Flipped) */}
                <img src={bungaBorder} alt="" style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '50vh',
                  objectFit: 'fill',
                  opacity: 0.35,
                  zIndex: 1,
                  pointerEvents: 'none',
                  transform: 'scaleY(-1)',
                }} />

                {/* CORNERS */}
                {/* Top Left: bunga-5 */}
                <motion.img
                  src={bunga5}
                  alt=""
                  style={{
                    position: 'absolute',
                    top: -10,
                    left: -10,
                    width: 'clamp(140px, 40vw, 240px)',
                    opacity: 0.9,
                    zIndex: 2,
                    pointerEvents: 'none',
                  }}
                  animate={{
                    rotate: [0, 2.5, -2.5, 0],
                    y: [0, 4, -4, 0],
                    x: [0, 3, -3, 0]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 8,
                    ease: "easeInOut"
                  }}
                />
                {/* Top Right: bunga-1 */}
                <motion.img
                  src={bunga1}
                  alt=""
                  style={{
                    position: 'absolute',
                    top: -8,
                    right: -8,
                    width: 'clamp(180px, 55vw, 380px)',
                    opacity: 0.9,
                    zIndex: 2,
                    pointerEvents: 'none',
                  }}
                  animate={{
                    rotate: [0, -3, 3, 0],
                    y: [0, -4, 4, 0],
                    x: [0, -3, 3, 0]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 9,
                    ease: "easeInOut"
                  }}
                />
                {/* Bottom Left: bunga-2 */}
                <motion.img
                  src={bunga2}
                  alt=""
                  style={{
                    position: 'absolute',
                    bottom: -8,
                    left: -8,
                    width: 'clamp(130px, 45vw, 260px)',
                    opacity: 0.9,
                    zIndex: 2,
                    pointerEvents: 'none',
                  }}
                  animate={{
                    rotate: [0, 2, -2, 0],
                    y: [0, 3, -3, 0],
                    x: [0, 2, -2, 0]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 7,
                    ease: "easeInOut"
                  }}
                />
                {/* Bottom Right: bunga-6 */}
                <motion.img
                  src={bunga6}
                  alt=""
                  style={{
                    position: 'absolute',
                    bottom: -10,
                    right: -10,
                    width: 'clamp(140px, 40vw, 240px)',
                    opacity: 0.9,
                    zIndex: 2,
                    pointerEvents: 'none',
                  }}
                  animate={{
                    rotate: [0, -2, 2, 0],
                    y: [0, -3, 3, 0],
                    x: [0, -2, 2, 0]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 8.5,
                    ease: "easeInOut"
                  }}
                />

                <div style={{
                  position: 'relative',
                  zIndex: 10,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  textAlign: 'center',
                  width: '100%',
                  maxWidth: 'min(420px, 90vw)',
                  margin: '0 auto',
                  padding: '20vh 0px 0 0px', // Geser ke atas agar tidak tertutup arch
                  boxSizing: 'border-box',
                }}>
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontStyle: 'italic',
                      color: '#888',
                      fontSize: 16,
                      marginBottom: 5
                    }}
                  >
                    The Wedding of
                  </motion.p>

                  <motion.h1
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.6 }}
                    style={{
                      fontFamily: "'Rouge Script', cursive",
                      fontSize: 'clamp(4rem, 15vw, 6.5rem)',
                      lineHeight: 0.95,
                      color: '#1b2b4a',
                      margin: '5px 0 6px',
                    }}
                  >Dhani</motion.h1>

                  <motion.span
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    style={{
                      fontFamily: "'Rouge Script', cursive",
                      fontSize: 'clamp(2.5rem, 10vw, 4.5rem)',
                      color: '#1b2b4a',
                      margin: '0 0 2px',
                    }}
                  >&amp;</motion.span>

                  <motion.h1
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.65, duration: 0.6 }}
                    style={{
                      fontFamily: "'Rouge Script', cursive",
                      fontSize: 'clamp(4rem, 15vw, 6.5rem)',
                      lineHeight: 0.95,
                      color: '#1b2b4a',
                      margin: '2px 0 16px',
                    }}
                  >Amanda</motion.h1>

                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.85, duration: 0.5 }}
                    style={{ width: 70, height: 2.5, background: '#d4af37', marginBottom: 16, transformOrigin: 'center' }}
                  />

                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontStyle: 'italic',
                      color: '#555',
                      fontSize: 14,
                      lineHeight: 1.5,
                      maxWidth: 290,
                    }}
                  >
                    Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami.
                  </motion.p>
                </div>

                {/* BOTTOM ARCH & COUPLE */}
                <div style={{
                  position: 'absolute',
                  bottom: -5,
                  left: 0,
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  zIndex: 5,
                  pointerEvents: 'none',
                }}>
                  <img src={couple1Img} alt="" style={{
                    width: 'clamp(250px, 85vw, 460px)',
                    maxHeight: '36vh',
                    height: 'auto',
                    objectFit: 'contain',
                    objectPosition: 'bottom',
                    display: 'block',
                  }} />
                </div>
              </div>

              {/* ===== SECTION 2: QURAN VERSE ===== */}
              <div style={{
                position: 'relative',
                width: '100%',
                height: '100vh',
                overflow: 'hidden',
                scrollSnapAlign: 'center',
                scrollSnapStop: 'always',
                backgroundImage: `url(${bg2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
                {/* CLOUDS (Awan) */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '35vh',
                  pointerEvents: 'none',
                  zIndex: 1,
                }}>
                  <motion.img
                    src={awanImg}
                    alt=""
                    style={{ position: 'absolute', top: '10%', left: '-25%', width: '80%', opacity: 0.9 }}
                    animate={{ x: [0, 15, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
                  />
                  <motion.img
                    src={awanImg}
                    alt=""
                    style={{ position: 'absolute', top: '-5%', left: '15%', width: '70%', opacity: 0.5 }}
                    animate={{ x: [0, -10, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 22, ease: "easeInOut" }}
                  />
                  <motion.img
                    src={awanImg}
                    alt=""
                    style={{ position: 'absolute', top: '10%', right: '-25%', width: '80%', opacity: 0.8 }}
                    animate={{ x: [0, -18, 12, 0] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  style={{
                    position: 'relative',
                    zIndex: 10,
                    width: '100%',
                    maxWidth: 'min(420px, 90vw)',
                    margin: '0 auto',
                    padding: '28vh 25px 0 25px', // Geser ke bawah agar tidak menabrak awan
                    boxSizing: 'border-box',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    flex: '0 0 auto',
                  }}
                >
                  {/* Surah title */}
                  <p style={{
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: 'italic',
                    fontSize: 'clamp(15px, 4.5vw, 20px)',
                    fontWeight: 700,
                    color: '#0e0e0eff',
                    marginBottom: 16,
                    letterSpacing: '1px',
                    textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                  }}>
                    Q.S Ar-Rum : 21
                  </p>

                  {/* Ayat calligraphy image */}
                  <img src={ayatImg} alt="QS Ar-Rum 21" style={{
                    width: 'clamp(220px, 70vw, 400px)',
                    height: 'auto',
                    marginBottom: 'clamp(18px, 3.5vh, 32px)',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))',
                  }} />

                  {/* English translation */}
                  <p style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(13px, 3.8vw, 17px)',
                    fontWeight: 600,
                    lineHeight: 1.6,
                    color: '#000000ff',
                    maxWidth: 380,
                    marginBottom: 'clamp(10px, 2vh, 16px)',
                    textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                  }}>
                    &quot;And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy. Indeed in that are signs for a people who give thought.&quot;
                  </p>
                </motion.div>

                {/* BOTTOM SCENE */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '60vh',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-end', // Kanan bawah
                  overflow: 'hidden',
                  zIndex: 5,
                  pointerEvents: 'none',
                }}>
                  {/* Couple */}
                  <motion.div
                    initial={{ opacity: 0, y: 50, x: 20 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.95, ease: "easeOut" }}
                    style={{ zIndex: 6, marginRight: '-5vw' }}
                  >
                    <motion.img
                      src={coupleImg}
                      alt="Couple illustration"
                      style={{
                        width: 'clamp(220px, 60vw, 380px)',
                        height: 'auto',
                        objectFit: 'contain',
                        objectPosition: 'bottom',
                        display: 'block',
                        marginBottom: -5,
                      }}
                      animate={{
                        y: [0, -4, 0]
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 8,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>

                  {/* Bunga-8 Left Corner */}
                  <motion.div
                    initial={{ opacity: 0, y: 35, x: -25, rotate: -10 }}
                    whileInView={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    style={{
                      position: 'absolute',
                      bottom: -10,
                      left: -15,
                      zIndex: 8,
                    }}
                  >
                    <motion.img
                      src={bunga8}
                      alt=""
                      style={{
                        width: 'clamp(120px, 35vw, 200px)',
                        objectFit: 'contain',
                      }}
                      animate={{
                        rotate: [0, 2.5, -2.5, 0],
                        y: [0, 3, -3, 0]
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 6,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>

                  {/* Bunga-7 Repeating Bottom Border */}
                  <div style={{
                    position: 'absolute',
                    bottom: -2,
                    left: 30,
                    width: '100%',
                    height: 'clamp(135px, 40vw, 200px)',
                    backgroundImage: `url(${bunga7})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'repeat-x',
                    backgroundPosition: 'bottom right',
                    zIndex: 7,
                  }} />
                </div>
              </div>

              {/* ===== SECTION 3: BRIDE & GROOM ===== */}
              <div style={{
                position: 'relative',
                width: '100%',
                minHeight: '100vh',
                overflow: 'hidden',
                scrollSnapAlign: 'center',
                scrollSnapStop: 'always',
                backgroundImage: `url(${bg3})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                paddingTop: '6vh',
              }}>
                {/* TOP FLOWERS */}
                <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 5, pointerEvents: 'none' }}>
                  <motion.div
                    initial={{ opacity: 0, x: -40, y: -20, rotate: -8 }}
                    whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <motion.img
                      src={bunga10}
                      alt=""
                      style={{ width: 'clamp(150px, 30vw, 160px)', display: 'block' }}
                      animate={{ rotate: [0, 2, -2, 0] }}
                      transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                    />
                  </motion.div>
                </div>
                <div style={{ position: 'absolute', top: -10, right: -15, zIndex: 5, pointerEvents: 'none' }}>
                  <motion.div
                    initial={{ opacity: 0, x: 40, y: -20, rotate: 8 }}
                    whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <motion.img
                      src={bunga9}
                      alt=""
                      style={{ width: 'clamp(150px, 30vw, 160px)', display: 'block' }}
                      animate={{ rotate: [0, -2, 2, 0] }}
                      transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                    />
                  </motion.div>
                </div>

                {/* TITLE */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.7 }}
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 800,
                    fontSize: 'clamp(30px, 8vw, 42px)',
                    color: '#2b3f5c',
                    letterSpacing: '3px',
                    margin: '120px 0 10px 0',
                    zIndex: 10,
                  }}
                >BRIDE &amp; GROOM</motion.h2>

                {/* BRIDE & GROOM CONTAINER */}
                <div style={{
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  width: '100%',
                  maxWidth: '650px',
                  gap: 'clamp(20px, 6vw, 60px)',
                  padding: '0 15px',
                  boxSizing: 'border-box',
                  zIndex: 10,
                  marginTop: '45px',
                }}>

                  {/* RINGS */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6, y: -30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.85, ease: "easeOut", delay: 0.25 }}
                    style={{
                      position: 'absolute',
                      top: '6%',
                      left: '40%',
                      transform: 'translate(-50%, -50%)',
                      zIndex: 15,
                    }}
                  >
                    <motion.img
                      src={cincin}
                      alt="Wedding Rings"
                      style={{
                        width: 'clamp(70px, 18vw, 110px)',
                        display: 'block',
                      }}
                      animate={{
                        rotate: [0, 3, -3, 0],
                        scale: [1, 1.04, 0.96, 1],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 6,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>

                  {/* GROOM COLUMN */}
                  <motion.div
                    initial={{ opacity: 0, x: -35 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{ duration: 0.85, ease: "easeOut" }}
                    style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
                  >
                    {/* Photo container for pop-out effect */}
                    <div style={{
                      position: 'relative',
                      width: '100%',
                      maxWidth: '240px',
                      aspectRatio: '1 / 1.45',
                      marginBottom: 15,
                    }}>
                      {/* Shadow box decoration behind the photo */}
                      <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '88%',
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                        zIndex: 0,
                      }} />

                      {/* Background image container (Cropped Box) */}
                      <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '88%',
                        overflow: 'hidden',
                        borderRadius: '8px',
                        backgroundColor: '#e8ebed',
                        zIndex: 1,
                      }}>
                        <img src={dhaniTrans} alt="Groom Background" style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'top',
                          transform: 'scale(1.21) translateY(-5%)',
                        }} />
                      </div>

                      {/* Transparent Popout container (Uncropped) */}
                      <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '88%',
                        overflow: 'visible',
                        zIndex: 2,
                        pointerEvents: 'none',
                      }}>
                        <img src={dhaniTrans} alt="Groom Popout" style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'top',
                          transform: 'scale(1.21) translateY(-5%)',
                        }} />
                      </div>
                    </div>
                    <h3 style={{ fontFamily: "'Engagement', cursive", fontSize: 'clamp(26px, 7vw, 36px)', color: '#2b3f5c', margin: '0 0 5px 0', lineHeight: 1.1 }}>Iman Hadi<br />Ramadhani, S.T.</h3>
                    <p style={{ fontFamily: 'sans-serif', fontWeight: 700, fontSize: 'clamp(9px, 2.3vw, 11px)', color: '#555', margin: 0, lineHeight: 1.4 }}>
                      Putra Pertama Bapak Eko Hadi Susanto dan Ibu Andriani Kasih. S.Pd.
                    </p>
                  </motion.div>

                  {/* BRIDE COLUMN */}
                  <motion.div
                    initial={{ opacity: 0, x: 35 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{ duration: 0.85, ease: "easeOut" }}
                    style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
                  >
                    {/* Photo container for pop-out effect */}
                    <div style={{
                      position: 'relative',
                      width: '100%',
                      maxWidth: '240px',
                      aspectRatio: '1 / 1.45',
                      marginBottom: 15,
                    }}>
                      {/* Shadow box decoration behind the photo */}
                      <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '88%',
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                        zIndex: 0,
                      }} />

                      {/* Background image container (Cropped Box) */}
                      <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '88%',
                        overflow: 'hidden',
                        borderRadius: '8px',
                        backgroundColor: '#e8ebed',
                        zIndex: 1,
                      }}>
                        <img src={amandaTrans} alt="Bride Background" style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'top',
                          transform: 'scale(1.1) translateY(-2%)',
                        }} />
                      </div>

                      {/* Transparent Popout container (Uncropped) */}
                      <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '88%',
                        overflow: 'visible',
                        zIndex: 2,
                        pointerEvents: 'none',
                      }}>
                        <img src={amandaTrans} alt="Bride Popout" style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'top',
                          transform: 'scale(1.1) translateY(-2%)',
                        }} />
                      </div>
                    </div>
                    <h3 style={{ fontFamily: "'Engagement', cursive", fontSize: 'clamp(26px, 7vw, 36px)', color: '#2b3f5c', margin: '0 0 5px 0', lineHeight: 1.1 }}>Amanda Febiola Danu<br />Garini, S.T.</h3>
                    <p style={{ fontFamily: 'sans-serif', fontWeight: 700, fontSize: 'clamp(9px, 2.3vw, 11px)', color: '#555', margin: 0, lineHeight: 1.4 }}>
                      Putri Pertama Bapak Agus Budiono (alm) dan Ibu Sri Danu
                    </p>
                  </motion.div>

                </div>

                {/* BOTTOM FLOWER REPEATING */}
                <div style={{
                  position: 'absolute',
                  bottom: -15,
                  left: 0,
                  width: '100%',
                  height: 'clamp(100px, 50vw, 180px)',
                  backgroundImage: `url(${bunga11})`,
                  backgroundSize: '400px auto',
                  backgroundRepeat: 'repeat-x',
                  backgroundPosition: 'bottom center',
                  zIndex: 103,
                  pointerEvents: 'none',
                }} />
                <div style={{
                  position: 'absolute',
                  bottom: -15,
                  left: 0,
                  width: '100%',
                  height: 'clamp(100px, 50vw, 180px)',
                  backgroundImage: `url(${bunga11})`,
                  backgroundSize: '400px auto',
                  backgroundRepeat: 'repeat-x',
                  backgroundPosition: 'bottom right',
                  zIndex: 103,
                  pointerEvents: 'none',
                  transform: 'scaleX(-1)',
                }} />
              </div>

              {/* ===== SECTION 4: DATE & TIME & COUNTDOWN ===== */}
              <div style={{
                position: 'relative',
                width: '100%',
                minHeight: '100vh',
                overflow: 'hidden',
                scrollSnapAlign: 'center',
                scrollSnapStop: 'always',
                backgroundImage: `url(${bg5})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                paddingTop: '12vh',
                paddingLeft: '20px',
                paddingRight: '20px',
                boxSizing: 'border-box',
              }}>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.7 }}
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 600,
                    fontSize: 'clamp(36px, 8vw, 46px)',
                    letterSpacing: '4px',
                    color: '#1b2b4a',
                    marginBottom: '15px',
                    textAlign: 'center',
                  }}
                >
                  DATE &amp; TIME
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '15px',
                    marginBottom: '10px',
                    fontFamily: "'Playfair Display', serif"
                  }}
                >
                  <span style={{ fontSize: 'clamp(4rem, 15vw, 6rem)', fontWeight: 800, color: '#1b2b4a', lineHeight: 1 }}>07</span>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
                    <br />
                    <span style={{ fontSize: 'clamp(1rem, 4vw, 1.5rem)', fontWeight: 700, color: '#1b2b4a', lineHeight: 1.2 }}>December</span>
                    <span style={{ fontSize: 'clamp(1rem, 4vw, 1.5rem)', fontWeight: 700, color: '#1b2b4a', lineHeight: 1.2 }}>2026</span>
                  </div>
                </motion.div>

                <motion.img
                  initial={{ opacity: 0, width: 0 }}
                  whileInView={{ opacity: 1, width: 'clamp(150px, 40vw, 250px)' }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  src={garisEmas}
                  alt="Garis Emas"
                  style={{
                    marginBottom: '-10px',
                    height: 'auto',
                    objectFit: 'contain'
                  }}
                />

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(18px, 5vw, 22px)',
                    color: '#1b2b4a',
                    fontWeight: 600,
                    marginBottom: '35px',
                    letterSpacing: '1px'
                  }}
                >
                  06.00 PM - 09.00 PM
                </motion.p>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 600,
                    fontSize: 'clamp(20px, 6vw, 32px)',
                    letterSpacing: '4px',
                    color: '#1b2b4a',
                    marginBottom: '20px',
                    textAlign: 'center'
                  }}
                >
                  COUNTDOWN
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 'clamp(8px, 2vw, 15px)',
                    marginBottom: '40px',
                    width: '100%'
                  }}
                >
                  {[
                    { label: 'Days', value: timeLeft.days },
                    { label: 'Hours', value: timeLeft.hours },
                    { label: 'Minutes', value: timeLeft.minutes },
                    { label: 'Seconds', value: timeLeft.seconds }
                  ].map((item, index, arr) => (
                    <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 'clamp(8px, 2vw, 15px)' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: 'clamp(13px, 3.8vw, 17px)', fontWeight: 700, color: '#000' }}>{item.label}</span>
                        <div style={{
                          backgroundColor: '#2b3f5c',
                          color: '#fff',
                          borderRadius: '12px',
                          padding: '10px 8px',
                          minWidth: 'clamp(45px, 12vw, 55px)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: 'clamp(20px, 6vw, 26px)',
                          fontWeight: 700,
                          boxShadow: '0 4px 10px rgba(0,0,0,0.15)'
                        }}>
                          {String(item.value).padStart(2, '0')}
                        </div>
                      </div>
                      {index < arr.length - 1 && (
                        <span style={{ fontSize: 'clamp(20px, 6vw, 30px)', fontWeight: 700, color: '#000', transform: 'translateY(12px)' }}>:</span>
                      )}
                    </div>
                  ))}
                </motion.div>

                <motion.a
                  href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=The+Wedding+of+Dhani+%26+Amanda&dates=20261207T110000Z/20261207T140000Z&details=Dengan+memohon+rahmat+dan+ridho+Allah+SWT,+kami+mengundang+Bapak/Ibu/Saudara/i+untuk+menghadiri+acara+pernikahan+kami.&location=RM.+Kaliurang+Malang"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    backgroundColor: '#2b3f5c',
                    color: '#fff',
                    padding: '8px 24px',
                    borderRadius: '30px',
                    textDecoration: 'none',
                    boxShadow: '0 6px 15px rgba(43,63,92,0.3)',
                    zIndex: 10
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: 1.2 }}>
                    <span style={{ fontSize: '11px', fontWeight: 500 }}>Save to</span>
                    <span style={{ fontSize: '14px', fontWeight: 700 }}>Calendar</span>
                  </div>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                    <line x1="8" y1="14" x2="8.01" y2="14"></line>
                    <line x1="12" y1="14" x2="12.01" y2="14"></line>
                    <line x1="16" y1="14" x2="16.01" y2="14"></line>
                    <line x1="8" y1="18" x2="8.01" y2="18"></line>
                    <line x1="12" y1="18" x2="12.01" y2="18"></line>
                    <line x1="16" y1="18" x2="16.01" y2="18"></line>
                  </svg>
                </motion.a>

                {/* JAM IMAGE */}
                <motion.div
                  initial={{ opacity: 0, x: -30, y: 30 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                  style={{
                    position: 'absolute',
                    bottom: -20,
                    left: -15,
                    zIndex: 5,
                    pointerEvents: 'none'
                  }}
                >
                  <motion.img
                    src={jam}
                    alt="Jam"
                    style={{
                      width: 'clamp(140px, 45vw, 220px)',
                      display: 'block'
                    }}
                    animate={{
                      rotate: [0, -6, 6, -4, 4, 0]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2.5,
                      ease: "easeInOut",
                      repeatDelay: 1.5
                    }}
                  />
                </motion.div>
              </div>

              {/* ===== SECTION 5: PLACE ===== */}
              <div style={{
                position: 'relative',
                width: '100%',
                height: '100vh',
                overflow: 'hidden',
                scrollSnapAlign: 'center',
                scrollSnapStop: 'always',
                backgroundImage: `url(${bg4})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
                {/* TOP FLOWER */}
                <div style={{
                  position: 'absolute',
                  top: -10,
                  left: -20,
                  zIndex: 5,
                  pointerEvents: 'none',
                }}>
                  <motion.div
                    initial={{ opacity: 0, y: -40, x: -40, rotate: -5 }}
                    whileInView={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                  >
                    <motion.img
                      src={bunga12}
                      alt=""
                      style={{
                        width: 'clamp(280px, 75vw, 450px)',
                        transformOrigin: 'top left',
                        display: 'block',
                      }}
                      animate={{
                        rotate: [0, 1.5, -1.5, 0],
                        y: [0, 2, -2, 0]
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 8,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                </div>

                <div style={{
                  position: 'relative',
                  zIndex: 10,
                  width: '100%',
                  maxWidth: 'min(420px, 90vw)',
                  margin: '0 auto',
                  paddingTop: '25vh',
                  boxSizing: 'border-box',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontStyle: 'italic',
                      fontWeight: 600,
                      fontSize: 'clamp(24px, 7vw, 36px)',
                      color: '#2b3f5c',
                      marginBottom: '20px',
                    }}
                  >
                    Place of Our Wedding
                  </motion.p>

                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    style={{
                      fontFamily: 'sans-serif',
                      fontWeight: 'bold',
                      fontSize: 'clamp(28px, 8vw, 38px)',
                      color: '#1b2b4a',
                      marginBottom: '15px',
                      lineHeight: 1.2,
                    }}
                  >
                    RM. Kaliurang Malang
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    style={{
                      fontFamily: 'sans-serif',
                      fontSize: 'clamp(14px, 3.8vw, 16px)',
                      color: '#4a5568',
                      lineHeight: 1.6,
                      maxWidth: '320px',
                      margin: '0 auto 25px',
                    }}
                  >
                    Jl. Kaliurang No.44, Lowokwaru,<br />
                    Kec. Lowokwaru, Kota Malang,<br />
                    Jawa Timur 65111
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.45 }}
                  >
                    <a
                      href="https://maps.app.goo.gl/JvgeBJkc4XsPmQJj7"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '10px 24px',
                        borderRadius: '30px',
                        backgroundColor: '#243d63',
                        color: '#ffffff',
                        textDecoration: 'none',
                        fontFamily: 'sans-serif',
                        fontWeight: 'bold',
                        fontSize: '15px',
                        boxShadow: '0 4px 15px rgba(36,61,99,0.25)',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#1b2b4a';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#243d63';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <span>Google Maps</span>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '26px',
                        height: '26px',
                        borderRadius: '50%',
                        border: '1.5px solid #ffffff',
                      }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                    </a>
                  </motion.div>
                </div>

                {/* CASTLE */}
                <div style={{
                  position: 'absolute',
                  bottom: -40,
                  right: -50,
                  zIndex: 4,
                  pointerEvents: 'none',
                }}>
                  <motion.div
                    initial={{ opacity: 0, y: 50, x: 30 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 1.1, ease: 'easeOut', delay: 0.1 }}
                  >
                    <motion.img
                      src={castleImg}
                      alt="Castle"
                      style={{
                        height: '50vh',
                        width: 'clamp(300px, 70vw, 420px)',
                        transformOrigin: 'bottom right',
                        display: 'block',
                      }}
                      animate={{
                        y: [0, -2, 0]
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 9,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                </div>

                {/* BOTTOM LEFT FLOWER */}
                <div style={{
                  position: 'absolute',
                  bottom: -10,
                  left: -10,
                  zIndex: 6,
                  pointerEvents: 'none',
                }}>
                  <motion.div
                    initial={{ opacity: 0, y: 40, x: -40, rotate: -5 }}
                    whileInView={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                  >
                    <motion.img
                      src={bunga13}
                      alt=""
                      style={{
                        width: 'clamp(200px, 55vw, 320px)',
                        height: "30vh",
                        transformOrigin: 'bottom left',
                        display: 'block',
                      }}
                      animate={{
                        rotate: [0, 2, -2, 0],
                        y: [0, -3, 3, 0]
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 7,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                </div>
              </div>

              {/* ===== SECTION 6: CLOSING ===== */}
              <div style={{
                position: 'relative',
                width: '100%',
                height: '100vh',
                overflow: 'hidden',
                scrollSnapAlign: 'center',
                scrollSnapStop: 'always',
                backgroundImage: `url(${bg6})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
                {/* TOP FLOWER LEFT (bunga-16) */}
                <motion.img
                  initial={{ opacity: 0, x: -30, y: -30 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8 }}
                  src={bunga16}
                  alt=""
                  style={{
                    position: 'absolute',
                    top: -10,
                    left: -10,
                    width: 'clamp(120px, 35vw, 200px)',
                    zIndex: 5,
                    pointerEvents: 'none',
                  }}
                />

                {/* TOP FLOWER RIGHT (bunga-16 flipped) */}
                <motion.img
                  initial={{ opacity: 0, x: 30, y: -30 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8 }}
                  src={bunga17}
                  alt=""
                  style={{
                    position: 'absolute',
                    top: -10,
                    right: -10,
                    width: 'clamp(120px, 35vw, 200px)',
                    zIndex: 5,
                    pointerEvents: 'none',
                  }}
                />

                {/* TOP CENTER FLOWER (bunga-3) */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  style={{ marginTop: '8vh', zIndex: 10 }}
                >
                  <img
                    src={bunga3}
                    alt=""
                    style={{
                      width: 'clamp(200px, 55vw, 320px)',
                      height: 'auto',
                      objectFit: 'contain'
                    }}
                  />
                </motion.div>

                {/* TEXT CONTENT */}
                <div style={{
                  position: 'relative',
                  zIndex: 10,
                  width: '100%',
                  maxWidth: 'min(420px, 90vw)',
                  margin: '0 auto',
                  paddingTop: '2vh',
                  boxSizing: 'border-box',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    style={{
                      fontFamily: 'sans-serif',
                      fontSize: 'clamp(12px, 3.2vw, 15px)',
                      color: '#2b3f5c',
                      lineHeight: 1.6,
                      marginBottom: '10px',
                      fontWeight: 500,
                    }}
                  >
                    Menjadi sebuah kebahagiaan bagi kami<br />
                    apabila Bapak/Ibu/Saudara/i berkenan hadir<br />
                    dalam hari bahagia ini.
                  </motion.p>

                  <motion.img
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    src={blueLine}
                    alt=""
                    style={{ width: 'clamp(150px, 40vw, 250px)', height: 'auto', marginBottom: '10px' }}
                  />

                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    style={{
                      fontFamily: 'sans-serif',
                      fontSize: 'clamp(12px, 3.2vw, 15px)',
                      color: '#2b3f5c',
                      lineHeight: 1.6,
                      marginBottom: '10px',
                      fontWeight: 500,
                      maxWidth: '300px',
                      margin: '0 auto 10px',
                    }}
                  >
                    Terima kasih atas segala ucapan, doa, dan perhatian yang diberikan.
                  </motion.p>

                  <motion.img
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    src={blueLine}
                    alt=""
                    style={{ width: 'clamp(150px, 40vw, 250px)', height: 'auto', marginBottom: '15px' }}
                  />

                  <motion.h2
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.7 }}
                    style={{
                      fontFamily: "'Shrikhand', serif",
                      fontSize: 'clamp(20px, 5vw, 30px)',
                      color: '#2b3f5c',
                      marginBottom: '5px',
                      letterSpacing: '1px'
                    }}
                  >
                    See U On Our Wedding Day!
                  </motion.h2>

                  <motion.h1
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                    style={{
                      fontFamily: "'Rouge Script', cursive",
                      fontSize: 'clamp(60px, 12vw, 85px)',
                      color: '#2b3f5c',
                      lineHeight: 1.2,
                      marginTop: '10px',
                    }}
                  >
                    Dhani &amp; Amanda
                  </motion.h1>
                </div>

                {/* BOTTOM LEFT FLOWER (bunga-15) */}
                <motion.img
                  initial={{ opacity: 0, x: -40, y: 40 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  src={bunga15}
                  alt=""
                  style={{
                    position: 'absolute',
                    bottom: -10,
                    left: -15,
                    width: 'clamp(130px, 40vw, 220px)',
                    zIndex: 6,
                    pointerEvents: 'none',
                    transform: 'scaleX(-1)',
                  }}
                />

                {/* BOTTOM RIGHT COUPLE (couple-3) with BUTTERFLIES */}
                <div style={{
                  position: 'absolute',
                  bottom: '0vh',
                  right: '2vw',
                  zIndex: 7,
                  pointerEvents: 'none',
                }}>
                  <motion.div
                    initial={{ opacity: 0, y: 50, x: 20 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
                    style={{ position: 'relative' }}
                  >
                    <img
                      src={couple3Img}
                      alt="Couple"
                      style={{
                        width: 'clamp(150px, 42vw, 220px)',
                        display: 'block',
                        right: '30%'
                      }}
                    />
                    {/* BUTTERFLY STANDBY 1 (Left) */}
                    <motion.img
                      src={butterflyImg}
                      alt=""
                      style={{
                        position: 'absolute',
                        top: '10%',
                        left: '25%',
                        width: 'clamp(25px, 6vw, 40px)',
                      }}
                      animate={{
                        y: [0, -10, 0],
                        x: [0, -5, 0],
                        rotate: [0, -10, 10, 0]
                      }}
                      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    />
                    {/* BUTTERFLY STANDBY 2 (Lower Left) */}
                    <motion.img
                      src={butterflyImg}
                      alt=""
                      style={{
                        position: 'absolute',
                        top: '35%',
                        left: '20%',
                        width: 'clamp(20px, 5vw, 30px)',
                        transform: 'scaleX(-1)'
                      }}
                      animate={{
                        y: [0, -8, 0],
                        x: [0, 5, 0],
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                    />
                  </motion.div>
                </div>

                {/* BOTTOM REPEATING FLOWER (bunga-14) */}
                <div style={{
                  position: 'absolute',
                  bottom: -5,
                  left: 0,
                  width: '100%',
                  height: 'clamp(100px, 15vw, 120px)',
                  backgroundImage: `url(${bunga14})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'repeat-x',
                  backgroundPosition: 'bottom center',
                  zIndex: 10,
                  pointerEvents: 'none',
                }} />

              </div>

            </motion.div>
          )}
        </AnimatePresence>

        {/* GLOBAL FLOATING BUTTERFLIES */}
        {showCard && (
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 9000, overflow: 'hidden' }}>
            <motion.img
              src={butterflyImg}
              alt=""
              style={{ position: 'absolute', width: 'clamp(20px, 5vw, 30px)' }}
              initial={{ left: '-10%', top: '110%', opacity: 0 }}
              animate={{ 
                left: ['-10%', '50%', '110%'], 
                top: ['110%', '40%', '-10%'],
                opacity: [0, 1, 1, 0],
                rotate: [15, -15, 15]
              }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            />
            <motion.img
              src={butterflyImg}
              alt=""
              style={{ position: 'absolute', width: 'clamp(15px, 4vw, 25px)', transform: 'scaleX(-1)' }}
              initial={{ left: '110%', top: '60%', opacity: 0 }}
              animate={{ 
                left: ['110%', '30%', '-10%'], 
                top: ['60%', '80%', '20%'],
                opacity: [0, 1, 1, 0],
                rotate: [-10, 20, -10]
              }}
              transition={{ duration: 22, repeat: Infinity, ease: 'linear', delay: 5 }}
            />
            <motion.img
              src={butterflyImg}
              alt=""
              style={{ position: 'absolute', width: 'clamp(25px, 6vw, 35px)' }}
              initial={{ left: '20%', top: '-10%', opacity: 0 }}
              animate={{ 
                left: ['20%', '80%', '40%'], 
                top: ['-10%', '50%', '110%'],
                opacity: [0, 1, 1, 0],
                rotate: [45, 15, 60]
              }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear', delay: 12 }}
            />
            {/* Butterfly 4 */}
            <motion.img
              src={butterflyImg}
              alt=""
              style={{ position: 'absolute', width: 'clamp(18px, 4.5vw, 28px)' }}
              initial={{ left: '-15%', top: '30%', opacity: 0 }}
              animate={{ 
                left: ['-15%', '115%'], 
                top: ['30%', '15%'],
                opacity: [0, 1, 1, 0],
                rotate: [10, -5]
              }}
              transition={{ duration: 14, repeat: Infinity, ease: 'linear', delay: 2 }}
            />
            {/* Butterfly 5 */}
            <motion.img
              src={butterflyImg}
              alt=""
              style={{ position: 'absolute', width: 'clamp(22px, 5.5vw, 32px)', transform: 'scaleX(-1)' }}
              initial={{ left: '115%', top: '90%', opacity: 0 }}
              animate={{ 
                left: ['115%', '40%', '-15%'], 
                top: ['90%', '70%', '110%'],
                opacity: [0, 1, 1, 0],
                rotate: [-20, 10, -20]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear', delay: 8 }}
            />
            {/* Butterfly 6 */}
            <motion.img
              src={butterflyImg}
              alt=""
              style={{ position: 'absolute', width: 'clamp(16px, 4vw, 26px)' }}
              initial={{ left: '40%', top: '115%', opacity: 0 }}
              animate={{ 
                left: ['40%', '60%', '20%', '50%'], 
                top: ['115%', '70%', '30%', '-15%'],
                opacity: [0, 1, 1, 0],
                rotate: [0, 30, -30, 0]
              }}
              transition={{ duration: 24, repeat: Infinity, ease: 'linear', delay: 15 }}
            />
            {/* Butterfly 7 */}
            <motion.img
              src={butterflyImg}
              alt=""
              style={{ position: 'absolute', width: 'clamp(24px, 6vw, 34px)', transform: 'scaleX(-1)' }}
              initial={{ left: '80%', top: '-15%', opacity: 0 }}
              animate={{ 
                left: ['80%', '20%', '-15%'], 
                top: ['-15%', '40%', '115%'],
                opacity: [0, 1, 1, 0],
                rotate: [10, -20, 10]
              }}
              transition={{ duration: 19, repeat: Infinity, ease: 'linear', delay: 4 }}
            />
            {/* Butterfly 8 */}
            <motion.img
              src={butterflyImg}
              alt=""
              style={{ position: 'absolute', width: 'clamp(20px, 5vw, 30px)' }}
              initial={{ left: '-20%', top: '60%', opacity: 0 }}
              animate={{ 
                left: ['-20%', '80%', '120%'], 
                top: ['60%', '90%', '20%'],
                opacity: [0, 1, 1, 0],
                rotate: [20, -10, 30]
              }}
              transition={{ duration: 26, repeat: Infinity, ease: 'linear', delay: 9 }}
            />
          </div>
        )}

        {/* FLOATING MUSIC CONTROLLER */}
        {showCard && (
          <motion.button
            onClick={togglePlay}
            style={{
              position: 'absolute',
              bottom: '24px',
              right: '24px',
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.85)',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 9999,
              outline: 'none',
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isPlaying ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                style={{ fontSize: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                💿
              </motion.div>
            ) : (
              <div style={{ fontSize: '20px', opacity: 0.6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                🔇
              </div>
            )}
          </motion.button>
        )}
      </div> {/* END MAIN MOBILE CONTAINER */}
    </div>
  );
}