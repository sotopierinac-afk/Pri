function App() {
  return (
    <div style={{ margin: 0, fontFamily: '"Trebuchet MS", "Comic Sans MS", Arial, sans-serif', background: '#f9fdff', color: '#1d3557' }}>
      {/* NAV */}
      <header style={{
        background: '#ffffff',
        padding: '30px 40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderBottom: '3px solid #e3f2fd',
        textAlign: 'center'
      }}>
        <img
          src="/chatgpt_image_jan_24,_2026_at_11_53_48_pm.png"
          alt="Rising Waves Swimming Academy"
          style={{ height: '120px', width: 'auto', marginBottom: '20px' }}
        />
        <nav style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="#home" style={{ textDecoration: 'none', fontSize: '16px', fontWeight: 'bold', color: '#1d3557' }}>Home</a>
          <a href="#programs" style={{ textDecoration: 'none', fontSize: '16px', fontWeight: 'bold', color: '#1d3557' }}>Programs</a>
          <a href="#pricing" style={{ textDecoration: 'none', fontSize: '16px', fontWeight: 'bold', color: '#1d3557' }}>Pricing</a>
          <a href="#booking" style={{ textDecoration: 'none', fontSize: '16px', fontWeight: 'bold', color: '#1d3557' }}>Booking</a>
          <a href="#about" style={{ textDecoration: 'none', fontSize: '16px', fontWeight: 'bold', color: '#1d3557' }}>About</a>
          <a href="#contact" style={{ textDecoration: 'none', fontSize: '16px', fontWeight: 'bold', color: '#1d3557' }}>Contact</a>
        </nav>
      </header>

      {/* HOME / HERO VIDEO */}
      <section id="home" style={{
        position: 'relative',
        height: '85vh',
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
          background: 'rgba(0, 90, 110, 0.6)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '60px',
          color: 'white'
        }}>
          <div style={{ maxWidth: '600px' }}>
            <h1 style={{
              fontSize: '48px',
              marginBottom: '20px',
              lineHeight: '1.2'
            }}>
              Professional Swimming Lessons<br />For All Ages
            </h1>
            <p style={{
              fontSize: '20px',
              marginBottom: '30px'
            }}>
              Starting from 6 months old · Safe · Certified · Trusted
            </p>
            <a href="#booking" style={{
              display: 'inline-block',
              background: '#00b4d8',
              color: 'white',
              padding: '16px 40px',
              borderRadius: '8px',
              fontWeight: 'bold',
              textDecoration: 'none',
              fontSize: '18px'
            }}>
              Book a Class
            </a>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" style={{ padding: '80px 30px', maxWidth: '1200px', margin: 'auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '34px', marginBottom: '50px' }}>Our Swimming Programs</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '20px'
        }}>
          <div style={{
            background: '#f2f9fb',
            padding: '30px',
            borderRadius: '18px',
            fontWeight: '600'
          }}>
            Parent & Child Aquatics<br />
            <small style={{ fontWeight: 'normal' }}>6 months – 2 years</small>
          </div>
          <div style={{
            background: '#f2f9fb',
            padding: '30px',
            borderRadius: '18px',
            fontWeight: '600'
          }}>
            Pre-School Aquatics
          </div>
          <div style={{
            background: '#f2f9fb',
            padding: '30px',
            borderRadius: '18px',
            fontWeight: '600'
          }}>
            Learn to Swim
          </div>
          <div style={{
            background: '#f2f9fb',
            padding: '30px',
            borderRadius: '18px',
            fontWeight: '600'
          }}>
            Adult Swimming
          </div>
          <div style={{
            background: '#f2f9fb',
            padding: '30px',
            borderRadius: '18px',
            fontWeight: '600'
          }}>
            Water Safety
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ padding: '80px 30px', maxWidth: '1200px', margin: 'auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '34px', marginBottom: '50px' }}>Monthly Pricing</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '20px'
        }}>
          <div style={{
            background: '#f2f9fb',
            padding: '30px',
            borderRadius: '18px',
            fontWeight: '600'
          }}>
            <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>Private Classes</h3>
            <strong style={{ fontSize: '24px' }}>$250 / month</strong>
            <p style={{ marginTop: '10px', fontWeight: 'normal' }}>2 years and up</p>
          </div>
          <div style={{
            background: '#f2f9fb',
            padding: '30px',
            borderRadius: '18px',
            fontWeight: '600'
          }}>
            <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>Regular Classes</h3>
            <strong style={{ fontSize: '24px' }}>$200 / month</strong>
            <p style={{ marginTop: '10px', fontWeight: 'normal' }}>2 years and up</p>
          </div>
          <div style={{
            background: '#f2f9fb',
            padding: '30px',
            borderRadius: '18px',
            fontWeight: '600'
          }}>
            <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>Survival Skills</h3>
            <strong style={{ fontSize: '24px' }}>$250 / month</strong>
            <p style={{ marginTop: '10px', fontWeight: 'normal' }}>6 months – 2 years</p>
          </div>
        </div>
      </section>

      {/* BOOKING / SCHEDULE */}
      <section id="booking" style={{ padding: '80px 30px', maxWidth: '900px', margin: 'auto', textAlign: 'center' }}>
        <h3 style={{ fontSize: '34px', marginBottom: '10px' }}>Available Class Times</h3>

        <p style={{ fontSize: '16px', marginBottom: '30px', color: '#555' }}>
          Classes are held once per week · 25-minute sessions<br />
          <strong>Saturdays only</strong>
        </p>

        <div style={{
          background: '#f2f9fb',
          borderRadius: '16px',
          padding: '25px',
          marginBottom: '20px'
        }}>
          <h4 style={{ marginBottom: '10px', color: '#0077b6', fontSize: '22px' }}>Group & Survival Classes</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ fontSize: '17px', padding: '6px 0' }}>8:30 AM</li>
            <li style={{ fontSize: '17px', padding: '6px 0' }}>9:00 AM</li>
            <li style={{ fontSize: '17px', padding: '6px 0' }}>9:30 AM</li>
            <li style={{ fontSize: '17px', padding: '6px 0' }}>10:00 AM</li>
            <li style={{ fontSize: '17px', padding: '6px 0' }}>10:30 AM</li>
          </ul>
        </div>

        <div style={{
          background: '#f2f9fb',
          borderRadius: '16px',
          padding: '25px',
          marginBottom: '20px'
        }}>
          <h4 style={{ marginBottom: '10px', color: '#0077b6', fontSize: '22px' }}>Private Classes</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ fontSize: '17px', padding: '6px 0' }}>11:30 AM</li>
            <li style={{ fontSize: '17px', padding: '6px 0' }}>12:15 PM</li>
          </ul>
        </div>

        <p style={{ marginTop: '20px', fontSize: '15px', color: '#444' }}>
          Only the times listed above are available for booking.
          No additional time slots are offered.
        </p>

        <div style={{
          marginTop: '30px',
          display: 'flex',
          justifyContent: 'center',
          gap: '15px',
          flexWrap: 'wrap'
        }}>
          <a href="https://wa.me/1XXXXXXXXXX" style={{
            padding: '14px 26px',
            borderRadius: '30px',
            textDecoration: 'none',
            fontWeight: '600',
            background: '#00b4d8',
            color: '#fff'
          }}>
            Reserve Your Spot
          </a>
          <a href="#contact" style={{
            padding: '14px 26px',
            borderRadius: '30px',
            textDecoration: 'none',
            fontWeight: '600',
            background: '#e0f4f8',
            color: '#0077b6'
          }}>
            Contact Us
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: '80px 30px', maxWidth: '1200px', margin: 'auto' }}>
        <h3 style={{ fontSize: '34px', marginBottom: '20px', textAlign: 'center' }}>About Rising Waves Swimming Academy</h3>
        <p style={{
          textAlign: 'center',
          fontSize: '18px',
          maxWidth: '900px',
          margin: '0 auto 50px',
          lineHeight: '1.6'
        }}>
          Rising Waves Swimming Academy teaches swimmers of all levels, starting from
          little ones as young as <strong>6 months old</strong>. Our programs focus on
          water safety, confidence, and proper swimming technique in a safe and
          supportive environment.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '25px'
        }}>
          <div style={{
            background: '#ffffff',
            padding: '30px',
            borderRadius: '20px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.06)'
          }}>
            <h4 style={{ color: '#219ebc', fontSize: '22px', marginBottom: '12px' }}>Parent & Child Aquatics</h4>
            <p style={{ lineHeight: '1.6', color: '#555' }}>
              For children 6 months to 2 years. Focuses on bonding, comfort in water, and early survival skills.
            </p>
          </div>

          <div style={{
            background: '#ffffff',
            padding: '30px',
            borderRadius: '20px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.06)'
          }}>
            <h4 style={{ color: '#219ebc', fontSize: '22px', marginBottom: '12px' }}>Pre-School Aquatics</h4>
            <p style={{ lineHeight: '1.6', color: '#555' }}>
              Introduces young swimmers to independence, confidence, and basic swimming skills.
            </p>
          </div>

          <div style={{
            background: '#ffffff',
            padding: '30px',
            borderRadius: '20px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.06)'
          }}>
            <h4 style={{ color: '#219ebc', fontSize: '22px', marginBottom: '12px' }}>Learn to Swim</h4>
            <p style={{ lineHeight: '1.6', color: '#555' }}>
              Stroke development, breathing techniques, and water safety fundamentals.
            </p>
          </div>

          <div style={{
            background: '#ffffff',
            padding: '30px',
            borderRadius: '20px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.06)'
          }}>
            <h4 style={{ color: '#219ebc', fontSize: '22px', marginBottom: '12px' }}>Adult Swimming</h4>
            <p style={{ lineHeight: '1.6', color: '#555' }}>
              Beginner to intermediate lessons focused on confidence and technique.
            </p>
          </div>

          <div style={{
            background: '#ffffff',
            padding: '30px',
            borderRadius: '20px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.06)'
          }}>
            <h4 style={{ color: '#219ebc', fontSize: '22px', marginBottom: '12px' }}>Water Safety</h4>
            <p style={{ lineHeight: '1.6', color: '#555' }}>
              Essential water safety and survival skills for all ages.
            </p>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section style={{ padding: '80px 30px', maxWidth: '900px', margin: 'auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '34px', marginBottom: '30px' }}>Certified & Approved</h2>
        <p style={{ fontSize: '18px', lineHeight: '1.8' }}>
          Red Cross Certified Water Safety Instructor · CPR Certified<br />
          Approved by PIERI & GAD
        </p>
      </section>

      {/* STEP UP FOR STUDENTS */}
      <section style={{ maxWidth: '1000px', margin: '80px auto', padding: '0 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '34px', marginBottom: '20px' }}>Step Up for Students</h2>
        <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
          <strong>Rising Waves Swimming Academy is a Step Up for Students official provider.</strong>
        </p>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: '1000px', margin: '80px auto', padding: '0 20px', textAlign: 'center' }}>
        <h3 style={{ fontSize: '34px', marginBottom: '20px' }}>Ready to Get Started?</h3>
        <p style={{ fontSize: '18px', color: '#555', marginBottom: '30px' }}>
          Spots are limited. Advance reservation is required.
        </p>
        <a
          href="#contact"
          style={{
            display: 'inline-block',
            marginTop: '25px',
            padding: '14px 28px',
            borderRadius: '30px',
            textDecoration: 'none',
            fontWeight: '600',
            background: '#00b4d8',
            color: '#fff',
            fontSize: '18px',
            transition: 'transform 0.2s, background 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.background = '#0096c7';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.background = '#00b4d8';
          }}
        >
          Book a Class
        </a>
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
        <a href="#booking" style={{ color: 'white', margin: '0 10px', textDecoration: 'underline' }}>Booking</a> |
        <a href="#about" style={{ color: 'white', margin: '0 10px', textDecoration: 'underline' }}>About</a> |
        <a href="#contact" style={{ color: 'white', margin: '0 10px', textDecoration: 'underline' }}>Contact</a>
      </footer>
    </div>
  );
}

export default App;