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
          maxWidth: '700px',
          color: '#fff'
        }}>
          <h1 style={{
            fontSize: '64px',
            fontWeight: '800',
            lineHeight: '1.1',
            marginBottom: '20px'
          }}>
            Rising Waves Swimming Academy
          </h1>
          <p style={{
            fontSize: '20px',
            marginBottom: '30px',
            lineHeight: '1.6'
          }}>
            Swimming lessons for all ages<br />Starting from 6 months old
          </p>
          <a href="#schedule" style={{
            display: 'inline-block',
            marginTop: '30px',
            padding: '14px 36px',
            background: '#0077b6',
            color: '#fff',
            textDecoration: 'none',
            fontWeight: '700',
            fontSize: '16px',
            borderRadius: '30px'
          }}>
            Book a Class
          </a>
        </div>
      </section>

      {/* PROGRAMS */}
      <section style={{
        padding: '100px 40px',
        textAlign: 'center',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '42px',
          marginBottom: '50px',
          fontWeight: '800'
        }}>
          Our Programs
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px'
        }}>
          <div style={{
            background: '#ffffff',
            padding: '30px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            fontSize: '18px',
            fontWeight: '600'
          }}>
            Parent & Child Aquatics<br /><small style={{ fontSize: '14px', fontWeight: '400', color: '#666' }}>6 months – 2 years</small>
          </div>
          <div style={{
            background: '#ffffff',
            padding: '30px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            fontSize: '18px',
            fontWeight: '600'
          }}>
            Pre-School Aquatics
          </div>
          <div style={{
            background: '#ffffff',
            padding: '30px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            fontSize: '18px',
            fontWeight: '600'
          }}>
            Learn to Swim
          </div>
          <div style={{
            background: '#ffffff',
            padding: '30px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            fontSize: '18px',
            fontWeight: '600'
          }}>
            Adult Swimming
          </div>
          <div style={{
            background: '#ffffff',
            padding: '30px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            fontSize: '18px',
            fontWeight: '600'
          }}>
            Water Safety
          </div>
        </div>
      </section>

      {/* CLASS STRUCTURE */}
      <section style={{
        background: '#f4fbfd',
        padding: '80px 40px',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '42px',
          marginBottom: '30px',
          fontWeight: '800'
        }}>
          Class Structure
        </h2>
        <p style={{ fontSize: '18px', marginBottom: '10px' }}>
          Classes are held once per week
        </p>
        <p style={{ fontSize: '24px', fontWeight: '700', marginTop: '20px' }}>
          25-minute sessions
        </p>
      </section>

      {/* PRICING */}
      <section style={{
        padding: '100px 40px',
        textAlign: 'center',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '42px',
          marginBottom: '50px',
          fontWeight: '800'
        }}>
          Monthly Pricing
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '30px'
        }}>
          <div style={{
            background: '#ffffff',
            padding: '40px 30px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
          }}>
            <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '20px' }}>
              Regular Classes
            </h3>
            <p style={{ fontSize: '32px', fontWeight: '700', color: '#0077b6', marginBottom: '10px' }}>
              $200 / month
            </p>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '25px' }}>
              2 years and up
            </p>
            <a
              href="https://buy.stripe.com/9B6eVe0o70TW0Ni1GhaMU06"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '14px 30px',
                background: '#0077b6',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '30px',
                fontWeight: '600',
                fontSize: '16px'
              }}
            >
              Enroll Now
            </a>
          </div>

          <div style={{
            background: '#ffffff',
            padding: '40px 30px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
          }}>
            <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '20px' }}>
              Private Classes
            </h3>
            <p style={{ fontSize: '32px', fontWeight: '700', color: '#0077b6', marginBottom: '10px' }}>
              $250 / month
            </p>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '25px' }}>
              2 years and up
            </p>
            <a
              href="https://buy.stripe.com/5kQaEYgn5cCE53y1GhaMU07"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '14px 30px',
                background: '#0077b6',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '30px',
                fontWeight: '600',
                fontSize: '16px'
              }}
            >
              Enroll Now
            </a>
          </div>

          <div style={{
            background: '#ffffff',
            padding: '40px 30px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
          }}>
            <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '20px' }}>
              Survival Skills
            </h3>
            <p style={{ fontSize: '32px', fontWeight: '700', color: '#0077b6', marginBottom: '10px' }}>
              $250 / month
            </p>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '25px' }}>
              6 months – 2 years
            </p>
            <a
              href="https://buy.stripe.com/9B69AUdaT7ik2Vq1GhaMU03"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '14px 30px',
                background: '#0077b6',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '30px',
                fontWeight: '600',
                fontSize: '16px'
              }}
            >
              Enroll Now
            </a>
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="schedule" style={{
        background: '#f4fbfd',
        padding: '80px 40px',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '42px',
          marginBottom: '40px',
          fontWeight: '800'
        }}>
          Available Class Times
        </h2>
        <p style={{
          fontSize: '22px',
          fontWeight: '700',
          marginBottom: '20px'
        }}>
          Saturdays Only
        </p>
        <p style={{
          fontSize: '20px',
          lineHeight: '1.8',
          marginBottom: '30px'
        }}>
          8:30 AM · 9:00 AM · 9:30 AM · 10:00 AM · 10:30 AM
        </p>
        <p style={{
          fontSize: '18px',
          fontWeight: '700',
          marginBottom: '10px'
        }}>
          Private Classes
        </p>
        <p style={{
          fontSize: '20px',
          lineHeight: '1.8',
          marginBottom: '30px'
        }}>
          11:30 AM · 12:15 PM
        </p>
        <p style={{
          fontSize: '14px',
          color: '#555',
          marginTop: '30px'
        }}>
          Only these times are available.
        </p>
      </section>

      {/* CALENDAR */}
      <section style={{
        padding: '100px 40px',
        textAlign: 'center',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '42px',
          marginBottom: '40px',
          fontWeight: '800'
        }}>
          Class Availability
        </h2>
        <div style={{
          width: '100%',
          maxWidth: '900px',
          margin: '0 auto',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
        }}>
          <iframe
            src="https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&ctz=America/New_York"
            style={{ border: 0 }}
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            title="Class Availability Calendar"
          />
        </div>
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
          Red Cross Certified Water Safety Instructor · CPR Certified
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