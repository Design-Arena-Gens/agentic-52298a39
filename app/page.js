'use client';

import { useState } from 'react';

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  const lyrics = [
    { time: "Intro", text: "Yeah, yeah, Dirty Dom in the building\nVenganza, baby\nLet's go" },
    { time: "Strofa 1", text: "Ero il figlio del leggendario, shadow in the ring (uh)\nMi hanno chiamato traditore quando ho fatto il mio thing (facts)\nVoltato le spalle al legacy, fuck what they think (what?)\nOra sono Dirty Dom, catene d'oro che bling (ice)\n\nPapà mi ha detto \"be a hero\", ma io sono un villain (nah)\nJudgment Day è la mia famiglia, we ready to kill 'em (let's go)\nRhea al mio fianco, queen of the darkness (queen)\nVendetta sul ring, lasciamo solo carcass (boom)" },
    { time: "Ritornello", text: "Vendetta, vendetta, Mysterio style (style)\nTradimento nel sangue, sono hostile (hostile)\nVendetta, vendetta, non mi fermi mai (mai)\nDirty Dom in the trap, WWE all day (all day)\n\nVendetta, vendetta, purple and black (black)\nJudgment Day ruling, no turning back (nah)\nVendetta, vendetta, il ring è mio (mio)\nDominik Mysterio, sono il cattivo, addio (bye)" },
    { time: "Strofa 2", text: "Mi volevano eroe come Rey, ma ho scelto la strada dark (dark)\nChairs, tables, ladder match, lascio il mio mark (boom)\nEdge mi ha insegnato tutto, how to break the rules (rules)\nOra sono il principe oscuro, fooling all you fools (haha)\n\nLos Angeles raised me, ma il ring è casa mia (casa)\nOgni move che faccio è pura poesia (facts)\nLa vendetta è servita fredda come il mio chain (ice)\nMessicano e cattivo, remember the name (Dominik!)" },
    { time: "Ritornello", text: "Vendetta, vendetta, Mysterio style (style)\nTradimento nel sangue, sono hostile (hostile)\nVendetta, vendetta, non mi fermi mai (mai)\nDirty Dom in the trap, WWE all day (all day)\n\nVendetta, vendetta, purple and black (black)\nJudgment Day ruling, no turning back (nah)\nVendetta, vendetta, il ring è mio (mio)\nDominik Mysterio, sono il cattivo, addio (bye)" },
    { time: "Bridge", text: "6-1-9 nel DNA ma io faccio diverse (different)\nDamian, Finn, Rhea - squad universale (squad)\nChampionship attorno alla vita, gold plate (gold)\nVendetta completata, I decide my fate (yeah)" },
    { time: "Strofa 3", text: "WrestleMania moments, ho scritto storia (storia)\nBooed da tutti i fan, quella è la mia gloria (glory)\nNon mi pento di niente, ogni scelta è stata vera (vera)\nDa babyface a heel, questa è la mia era (my era)\n\nFamily business nel sangue, ma ho fatto rebellion (facts)\nOgni promo che sputo è pura aggression (bars)\nLa vendetta di Dominik non è mai finita (never)\nFinché respiro, questa è la mia vita (let's go!)" },
    { time: "Ritornello Finale", text: "Vendetta, vendetta, Mysterio style (style)\nTradimento nel sangue, sono hostile (hostile)\nVendetta, vendetta, non mi fermi mai (mai)\nDirty Dom in the trap, WWE all day (all day)\n\nVendetta, vendetta, purple and black (black)\nJudgment Day ruling, no turning back (nah)\nVendetta, vendetta, il ring è mio (mio)\nDominik Mysterio, sono il cattivo, addio (bye)" },
    { time: "Outro", text: "Dirty Dom...\nJudgment Day forever\nVendetta is complete\nYeah... bow down" }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a0033 0%, #330066 50%, #4d0099 100%)',
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        paddingTop: '40px'
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '50px',
          animation: 'fadeIn 1s ease-in'
        }}>
          <h1 style={{
            fontSize: '4rem',
            fontWeight: '900',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            textShadow: '0 0 20px rgba(255,215,0,0.5), 0 0 40px rgba(255,215,0,0.3)',
            margin: '0',
            background: 'linear-gradient(45deg, #FFD700, #FFA500)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            VENDETTA
          </h1>
          <p style={{
            fontSize: '1.8rem',
            margin: '10px 0',
            color: '#FFD700',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}>
            Dominik Mysterio Style
          </p>
          <p style={{
            fontSize: '1rem',
            color: '#ddd',
            fontStyle: 'italic'
          }}>
            Trap Song - Dirty Dom × Judgment Day
          </p>
        </div>

        {/* Play Button */}
        <div style={{
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            style={{
              padding: '15px 40px',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              background: isPlaying ? 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)' : 'linear-gradient(135deg, #8B00FF 0%, #4B0082 100%)',
              color: isPlaying ? '#000' : '#fff',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
              transition: 'all 0.3s ease',
              transform: isPlaying ? 'scale(1.05)' : 'scale(1)'
            }}
          >
            {isPlaying ? '⏸ Pause' : '▶ Play Lyrics'}
          </button>
        </div>

        {/* Lyrics */}
        <div style={{
          background: 'rgba(0,0,0,0.4)',
          borderRadius: '20px',
          padding: '30px',
          backdropFilter: 'blur(10px)',
          border: '2px solid rgba(255,215,0,0.3)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
        }}>
          {lyrics.map((section, index) => (
            <div
              key={index}
              style={{
                marginBottom: '35px',
                opacity: isPlaying ? 1 : 0.7,
                transform: isPlaying ? 'translateX(0)' : 'translateX(-10px)',
                transition: `all 0.5s ease ${index * 0.1}s`
              }}
            >
              <h3 style={{
                color: '#FFD700',
                fontSize: '1.3rem',
                marginBottom: '15px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontWeight: 'bold',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
              }}>
                [{section.time}]
              </h3>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                whiteSpace: 'pre-line',
                color: '#f0f0f0',
                paddingLeft: '20px',
                borderLeft: '3px solid #FFD700'
              }}>
                {section.text}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          textAlign: 'center',
          marginTop: '50px',
          padding: '30px',
          borderTop: '2px solid rgba(255,215,0,0.3)'
        }}>
          <p style={{
            color: '#FFD700',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            marginBottom: '10px'
          }}>
            🔥 JUDGMENT DAY 🔥
          </p>
          <p style={{
            color: '#ddd',
            fontSize: '0.9rem'
          }}>
            Dirty Dom | Purple & Black | No Turning Back
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        body {
          margin: 0;
          padding: 0;
        }

        button:hover {
          transform: scale(1.1) !important;
          box-shadow: 0 6px 20px rgba(255,215,0,0.4) !important;
        }
      `}</style>
    </div>
  );
}
