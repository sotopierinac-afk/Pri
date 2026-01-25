function App() {
  return (
    <div style={{ margin: 0, fontFamily: '"Trebuchet MS", "Comic Sans MS", Arial, sans-serif', background: '#f9fdff', color: '#1d3557' }}>
      {/* NAV */}
      <header style={{
        background: '#ffffff',
        padding: '16px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '3px solid #e3f2fd'
      }}>
        <img
          src="/chatgpt_image_jan_24,_2026_at_11_53_48_pm.png"
          alt="Rising Waves Swimming Academy"
          style={{ height: '60px', width: 'auto' }}
        />
        <nav>
          <a href="#home" style={{ marginLeft: '24px', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold', color: '#1d3557' }}>Home</a>
          <a href="#programs" style={{ marginLeft: '24px', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold', color: '#1d3557' }}>Programs</a>
          <a href="#pricing" style={{ marginLeft: '24px', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold', color: '#1d3557' }}>Pricing</a>
          <a href="#about" style={{ marginLeft: '24px', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold', color: '#1d3557' }}>About</a>
          <a href="#contact" style={{ marginLeft: '24px', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold', color: '#1d3557' }}>Contact</a>
        </nav>
      </header>

      {/* HOME / HERO VIDEO */}
      <section id="home" style={{
        position: 'relative',
        height: '80vh',
        overflow: 'hidden'
      }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        >
          <source
            src="/freepik_kid-on-a-pool-swimming_minimax_768p_16-9_24fps_72945.mp4"
            type="video/mp4"
          />
        </video>

        <div style={{
          position: 'absolute',
          inset: '0',
          background: 'rgba(0,0,0,0.35)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: 'white',
          padding: '20px'
        }}>
          <h1 style={{
            fontSize: '48px',
            marginBottom: '20px',
            maxWidth: '900px',
            textShadow: '2px 2px 8px rgba(0,0,0,0.5)'
          }}>
            Where Kids Learn to Swim with Confidence & Joy 💦
          </h1>
          <p style={{
            fontSize: '20px',
            marginBottom: '30px',
            maxWidth: '700px',
            textShadow: '1px 1px 4px rgba(0,0,0,0.5)'
          }}>
            Fun, safe, and faith-filled swimming lessons for babies, kids, and families.
          </p>
          <div>
            <a href="#pricing" style={{
              display: 'inline-block',
              background: '#ffb703',
              color: '#1d3557',
              padding: '16px 40px',
              borderRadius: '40px',
              fontWeight: 'bold',
              textDecoration: 'none',
              margin: '10px',
              fontSize: '18px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
            }}>
              See Our Classes
            </a>
            <a href="https://wa.me/1XXXXXXXXXX" style={{
              display: 'inline-block',
              background: '#25d366',
              color: 'white',
              padding: '16px 40px',
              borderRadius: '40px',
              fontWeight: 'bold',
              textDecoration: 'none',
              margin: '10px',
              fontSize: '18px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
            }}>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" style={{ padding: '80px 30px', maxWidth: '1200px', margin: 'auto' }}>
        <h3 style={{ textAlign: 'center', fontSize: '34px', marginBottom: '50px' }}>Our Swim Programs 🏊‍♀️</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '30px'
        }}>
          <div style={{
            background: '#ffffff',
            padding: '30px',
            borderRadius: '25px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.06)',
            textAlign: 'center'
          }}>
            <h4 style={{ color: '#219ebc', fontSize: '22px' }}>Mommy & Me</h4>
            <p>Bonding, songs, and gentle water play.</p>
            <strong>Ages 6 months – 2 years</strong>
          </div>
          <div style={{
            background: '#ffffff',
            padding: '30px',
            borderRadius: '25px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.06)',
            textAlign: 'center'
          }}>
            <h4 style={{ color: '#219ebc', fontSize: '22px' }}>Toddler Swim</h4>
            <p>Play-based lessons to build comfort and confidence.</p>
            <strong>Ages 2 – 4 years</strong>
          </div>
          <div style={{
            background: '#ffffff',
            padding: '30px',
            borderRadius: '25px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.06)',
            textAlign: 'center'
          }}>
            <h4 style={{ color: '#219ebc', fontSize: '22px' }}>Kids Swim Lessons</h4>
            <p>Structured lessons that help kids grow and succeed.</p>
            <strong>Ages 4 – 11 years</strong>
          </div>
          <div style={{
            background: '#ffffff',
            padding: '30px',
            borderRadius: '25px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.06)',
            textAlign: 'center'
          }}>
            <h4 style={{ color: '#219ebc', fontSize: '22px' }}>Adult Swim</h4>
            <p>Supportive lessons for beginners and beyond.</p>
            <strong>Ages 12+</strong>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ padding: '80px 30px', maxWidth: '1200px', margin: 'auto' }}>
        <h3 style={{ textAlign: 'center', fontSize: '34px', marginBottom: '50px' }}>Simple Monthly Pricing 💙</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '30px'
        }}>
          <div style={{
            background: '#ffffff',
            padding: '30px',
            borderRadius: '25px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.06)',
            textAlign: 'center'
          }}>
            <h4 style={{ color: '#219ebc', fontSize: '22px' }}>Group Classes</h4>
            <div style={{ fontSize: '26px', fontWeight: 'bold', color: '#fb8500', margin: '15px 0' }}>$150</div>
            <p>4 classes • 25 minutes</p>
          </div>
          <div style={{
            background: '#ffffff',
            padding: '30px',
            borderRadius: '25px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.06)',
            textAlign: 'center'
          }}>
            <h4 style={{ color: '#219ebc', fontSize: '22px' }}>Private Lessons</h4>
            <div style={{ fontSize: '26px', fontWeight: 'bold', color: '#fb8500', margin: '15px 0' }}>$200</div>
            <p>4 classes • 25 minutes</p>
          </div>
          <div style={{
            background: '#ffffff',
            padding: '30px',
            borderRadius: '25px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.06)',
            textAlign: 'center'
          }}>
            <h4 style={{ color: '#219ebc', fontSize: '22px' }}>Mommy & Me</h4>
            <div style={{ fontSize: '26px', fontWeight: 'bold', color: '#fb8500', margin: '15px 0' }}>$200</div>
            <p>4 classes • 25 minutes</p>
          </div>
          <div style={{
            background: '#ffffff',
            padding: '30px',
            borderRadius: '25px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.06)',
            textAlign: 'center'
          }}>
            <h4 style={{ color: '#219ebc', fontSize: '22px' }}>Toddler Classes</h4>
            <div style={{ fontSize: '26px', fontWeight: 'bold', color: '#fb8500', margin: '15px 0' }}>$250</div>
            <p>4 classes • 25 minutes</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: '80px 30px', maxWidth: '1200px', margin: 'auto' }}>
        <div style={{
          background: '#fff6e5',
          borderRadius: '30px',
          padding: '50px',
          textAlign: 'center'
        }}>
          <h3 style={{ fontSize: '34px', marginBottom: '20px' }}>About Rising Waves 🤍</h3>
          <p>
            Rising Waves Swimming Academy is a joyful place where children learn to swim,
            build confidence, and feel safe in the water.
            We teach with patience, kindness, and Christian values — helping every child
            grow one splash at a time.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: '80px 30px', maxWidth: '1200px', margin: 'auto', textAlign: 'center' }}>
        <h3 style={{ fontSize: '34px', marginBottom: '30px' }}>Let's Talk 💬</h3>
        <a href="https://www.instagram.com/risingwavesswimmingacademy/" style={{
          display: 'inline-block',
          margin: '10px',
          fontWeight: 'bold',
          textDecoration: 'none',
          color: '#219ebc'
        }}>
          📸 Instagram
        </a>
        <a href="https://wa.me/1XXXXXXXXXX" style={{
          display: 'inline-block',
          margin: '10px',
          fontWeight: 'bold',
          textDecoration: 'none',
          color: '#219ebc'
        }}>
          💚 WhatsApp
        </a>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: '#219ebc',
        color: 'white',
        textAlign: 'center',
        padding: '40px 20px',
        borderTopLeftRadius: '40px',
        borderTopRightRadius: '40px'
      }}>
        <p>© 2026 Rising Waves Swimming Academy</p>
        <br />
        <a href="#home" style={{ color: 'white', margin: '0 10px', textDecoration: 'underline' }}>Home</a> |
        <a href="#programs" style={{ color: 'white', margin: '0 10px', textDecoration: 'underline' }}>Programs</a> |
        <a href="#pricing" style={{ color: 'white', margin: '0 10px', textDecoration: 'underline' }}>Pricing</a> |
        <a href="#about" style={{ color: 'white', margin: '0 10px', textDecoration: 'underline' }}>About</a> |
        <a href="#contact" style={{ color: 'white', margin: '0 10px', textDecoration: 'underline' }}>Contact</a>
      </footer>
    </div>
  );
}

export default App;