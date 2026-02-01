function App() {
  return (
    <div style={{ margin: 0, fontFamily: 'Arial, sans-serif', color: '#002D3C' }}>
      {/* HERO */}
      <section style={{
        height: '100vh',
        background: 'linear-gradient(to right, rgba(0,45,60,0.85), rgba(0,45,60,0.2)), url(https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1920) center/cover no-repeat',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{
          padding: '80px',
          maxWidth: '600px',
          color: '#fff'
        }}>
          <h1 style={{
            fontSize: '64px',
            fontWeight: '800',
            lineHeight: '1.05',
            marginBottom: '20px'
          }}>
            BE A CONFIDENT<br />SWIMMER
          </h1>
          <p style={{
            fontSize: '20px',
            marginBottom: '30px',
            lineHeight: '1.5'
          }}>
            Professional swimming lessons for all ages<br />Starting from 6 months old
          </p>
          <a href="#schedule" style={{
            display: 'inline-block',
            marginTop: '30px',
            padding: '14px 36px',
            border: '2px solid #fff',
            color: '#fff',
            textDecoration: 'none',
            fontWeight: '700',
            fontSize: '16px'
          }}>
            BOOK NOW
          </a>
        </div>
      </section>

      {/* STATS */}
      <section style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '30px',
        marginTop: '-90px',
        zIndex: 5,
        position: 'relative',
        flexWrap: 'wrap',
        padding: '0 20px'
      }}>
        <div style={{
          width: '150px',
          height: '150px',
          background: '#e63946',
          borderRadius: '50%',
          color: '#fff',
          fontWeight: '700',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          fontSize: '18px'
        }}>
          Certified<br /><small style={{ fontSize: '14px', fontWeight: '400' }}>Instructor</small>
        </div>
        <div style={{
          width: '150px',
          height: '150px',
          background: '#e63946',
          borderRadius: '50%',
          color: '#fff',
          fontWeight: '700',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          fontSize: '18px'
        }}>
          Water<br /><small style={{ fontSize: '14px', fontWeight: '400' }}>Safety</small>
        </div>
        <div style={{
          width: '150px',
          height: '150px',
          background: '#e63946',
          borderRadius: '50%',
          color: '#fff',
          fontWeight: '700',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          fontSize: '18px'
        }}>
          All<br /><small style={{ fontSize: '14px', fontWeight: '400' }}>Ages</small>
        </div>
      </section>

      {/* PROGRAMS */}
      <section style={{
        padding: '120px 60px',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '42px',
          marginBottom: '50px',
          fontWeight: '800'
        }}>
          IMPROVE YOUR SWIM TECHNIQUE
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '20px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            height: '220px',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7)), url(https://images.pexels.com/photos/618612/pexels-photo-618612.jpeg?auto=compress&cs=tinysrgb&w=800) center/cover no-repeat',
            color: '#fff',
            fontSize: '22px',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'flex-end',
            padding: '20px',
            lineHeight: '1.2'
          }}>
            PARENT & CHILD<br /><small style={{ fontSize: '16px', fontWeight: '400' }}>6 months – 2 yrs</small>
          </div>
          <div style={{
            height: '220px',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7)), url(https://images.pexels.com/photos/1449667/pexels-photo-1449667.jpeg?auto=compress&cs=tinysrgb&w=800) center/cover no-repeat',
            color: '#fff',
            fontSize: '22px',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'flex-end',
            padding: '20px'
          }}>
            PRE-SCHOOL
          </div>
          <div style={{
            height: '220px',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7)), url(https://images.pexels.com/photos/1679315/pexels-photo-1679315.jpeg?auto=compress&cs=tinysrgb&w=800) center/cover no-repeat',
            color: '#fff',
            fontSize: '22px',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'flex-end',
            padding: '20px'
          }}>
            LEARN TO SWIM
          </div>
          <div style={{
            height: '220px',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7)), url(https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=800) center/cover no-repeat',
            color: '#fff',
            fontSize: '22px',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'flex-end',
            padding: '20px'
          }}>
            ADULT SWIMMING
          </div>
          <div style={{
            height: '220px',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7)), url(https://images.pexels.com/photos/2803158/pexels-photo-2803158.jpeg?auto=compress&cs=tinysrgb&w=800) center/cover no-repeat',
            color: '#fff',
            fontSize: '22px',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'flex-end',
            padding: '20px'
          }}>
            WATER SAFETY
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section style={{
        height: '80vh',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7)), url(https://images.pexels.com/photos/1432675/pexels-photo-1432675.jpeg?auto=compress&cs=tinysrgb&w=1920) center/cover no-repeat',
        display: 'flex',
        alignItems: 'flex-end',
        padding: '60px',
        color: '#fff'
      }}>
        <h2 style={{
          fontSize: '52px',
          fontWeight: '800'
        }}>
          HOME IS WHERE<br />THE POOL IS
        </h2>
      </section>

      {/* PRICING */}
      <section style={{
        padding: '100px 40px',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '42px',
          marginBottom: '50px',
          fontWeight: '800'
        }}>
          MONTHLY PRICING
        </h2>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '30px',
          flexWrap: 'wrap'
        }}>
          <div style={{
            background: '#f2f9fb',
            padding: '40px',
            fontSize: '32px',
            fontWeight: '800',
            borderRadius: '16px'
          }}>
            $250<br /><small style={{ fontSize: '16px', fontWeight: '400' }}>Private · 2+ yrs</small>
          </div>
          <div style={{
            background: '#f2f9fb',
            padding: '40px',
            fontSize: '32px',
            fontWeight: '800',
            borderRadius: '16px'
          }}>
            $200<br /><small style={{ fontSize: '16px', fontWeight: '400' }}>Group · 2+ yrs</small>
          </div>
          <div style={{
            background: '#f2f9fb',
            padding: '40px',
            fontSize: '32px',
            fontWeight: '800',
            borderRadius: '16px'
          }}>
            $250<br /><small style={{ fontSize: '16px', fontWeight: '400' }}>Survival · 6m–2 yrs</small>
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="schedule" style={{
        padding: '80px 40px',
        textAlign: 'center',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '32px',
          marginBottom: '30px',
          fontWeight: '800'
        }}>
          AVAILABLE TIMES · SATURDAYS ONLY
        </h2>
        <p style={{
          fontSize: '20px',
          lineHeight: '2',
          marginBottom: '20px'
        }}>
          8:30 · 9:00 · 9:30 · 10:00 · 10:30<br />
          <strong>Private:</strong> 11:30 · 12:15
        </p>
        <p style={{
          fontSize: '16px',
          color: '#666',
          marginTop: '30px'
        }}>
          Only these times are available for booking.
        </p>
      </section>

      {/* TRUST / CERTIFICATIONS */}
      <section style={{
        padding: '80px 40px',
        textAlign: 'center',
        maxWidth: '900px',
        margin: '0 auto',
        background: '#f9f9f9'
      }}>
        <p style={{
          fontSize: '18px',
          lineHeight: '2',
          marginBottom: '30px'
        }}>
          Red Cross Certified Water Safety Instructor · CPR Certified<br />
          Approved by PIERI & GAD
        </p>
        <h3 style={{
          fontSize: '24px',
          fontWeight: '800',
          marginTop: '40px'
        }}>
          Rising Waves Swimming Academy is a Step Up for Students official provider
        </h3>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: '#002D3C',
        color: 'white',
        textAlign: 'center',
        padding: '60px 40px'
      }}>
        <p style={{ fontSize: '16px', marginBottom: '20px' }}>
          © 2026 Rising Waves Swimming Academy
        </p>
        <div style={{ marginTop: '20px' }}>
          <a href="https://www.instagram.com/risingwavesswimmingacademy/" style={{
            color: 'white',
            margin: '0 15px',
            textDecoration: 'none'
          }}>
            Instagram
          </a>
          <a href="https://wa.me/1XXXXXXXXXX" style={{
            color: 'white',
            margin: '0 15px',
            textDecoration: 'none'
          }}>
            WhatsApp
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;