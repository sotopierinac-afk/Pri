function App() {
  return (
    <>
      <section className="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url(https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1920) center/cover',
          opacity: 0.15
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', color: 'white' }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>Rising Waves Swimming Academy</h1>
          <p style={{ fontSize: '1.3rem', maxWidth: '700px', margin: '0 auto 40px', color: 'rgba(255,255,255,0.95)' }}>
            Building confidence, safety, and skills in the water — for swimmers from 6 months and up.
          </p>
          <a href="#pricing" className="btn">View Programs</a>
        </div>
      </section>

      <section style={{ background: 'var(--light)', textAlign: 'center' }}>
        <div className="container">
          <video
            src="/freepik_kid-on-a-pool-swimming_minimax_768p_16-9_24fps_72945.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              maxWidth: '800px',
              borderRadius: '20px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.15)'
            }}
          />
        </div>
      </section>

      <section id="pricing" style={{ background: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Our Classes</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Group Classes</h3>
              <div className="price">$200</div>
              <p className="description">Monthly rate, classes of 25 minutes each</p>
              <p style={{ fontSize: '0.9rem', marginBottom: '25px', color: 'var(--gray)' }}>
                Applicable for kids and adult swimming lessons
              </p>
              <a
                href="https://buy.stripe.com/9B6eVe0o70TW0Ni1GhaMU06"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Enroll Now
              </a>
            </div>

            <div className="pricing-card">
              <h3>Individual Classes</h3>
              <div className="price">$250</div>
              <p className="description">Individual private class</p>
              <p style={{ fontSize: '0.9rem', marginBottom: '25px', color: 'var(--gray)' }}>
                Monthly rate, each class of 25 minutes
              </p>
              <a
                href="https://buy.stripe.com/5kQaEYgn5cCE53y1GhaMU07"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Enroll Now
              </a>
            </div>

            <div className="pricing-card">
              <h3>Mommy & Me</h3>
              <div className="price">$200</div>
              <p className="description">Monthly rate, classes of 25 minutes each</p>
              <p style={{ fontSize: '0.9rem', marginBottom: '25px', color: 'var(--gray)' }}>
                Ages 6 months to 2 years
              </p>
              <a
                href="https://buy.stripe.com/9B6eVe0o70TW0Ni1GhaMU06"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Enroll Now
              </a>
            </div>

            <div className="pricing-card">
              <h3>Toddler Classes</h3>
              <div className="price">$250</div>
              <p className="description">Monthly rate, classes of 25 minutes each</p>
              <p style={{ fontSize: '0.9rem', marginBottom: '25px', color: 'var(--gray)' }}>
                Ages 6 months to 2 years
              </p>
              <a
                href="https://buy.stripe.com/9B69AUdaT7ik2Vq1GhaMU03"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--light)' }}>
        <div className="container">
          <div className="cards">
            <div className="card">
              <img
                src="https://images.pexels.com/photos/618612/pexels-photo-618612.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Kids Individual Classes"
              />
              <h3>Kids Individual Classes</h3>
              <p>
                Perfect for kids who need extra attention or prefer one-on-one support. Our individual classes are tailored to your child's unique needs, pace, and personality.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.95rem', lineHeight: '1.8' }}>
                <li>→ Ages 2 to 11 years</li>
                <li>→ Flexible scheduling</li>
                <li>→ Great for beginners or shy swimmers</li>
                <li>→ Personalized attention</li>
              </ul>
            </div>

            <div className="card">
              <img
                src="https://images.pexels.com/photos/1449667/pexels-photo-1449667.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Kids Group Classes"
              />
              <h3>Kids Group Classes</h3>
              <p>
                Our small group classes are full of energy, learning, and lots of fun! Children are grouped by age and skill level, making it easy to learn and grow together.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.95rem', lineHeight: '1.8' }}>
                <li>→ Ages 2 to 11 years</li>
                <li>→ Small group sizes for better focus</li>
                <li>→ Encouraging peer support</li>
                <li>→ Structured levels for steady progress</li>
              </ul>
            </div>

            <div className="card">
              <img
                src="https://images.pexels.com/photos/1679315/pexels-photo-1679315.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Toddler Classes"
              />
              <h3>Toddlers Swimming Classes</h3>
              <p>
                Our toddler classes are a sweet introduction to the water for little ones! Through gentle movement, songs, and playful activities, babies begin to explore the water.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.95rem', lineHeight: '1.8' }}>
                <li>→ Ages 6 months to 2 years</li>
                <li>→ Parent or caregiver joins in the water</li>
                <li>→ Focus on comfort and floating</li>
                <li>→ Fun and encouraging atmosphere</li>
              </ul>
            </div>

            <div className="card">
              <img
                src="https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Adult Swimming"
              />
              <h3>Adult Swimming Classes</h3>
              <p>
                It's never too late to learn! Whether you're starting fresh, working through water fears, or looking to refine your technique, we're here to help.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.95rem', lineHeight: '1.8' }}>
                <li>→ Ages 12 years and up</li>
                <li>→ Custom lesson plans</li>
                <li>→ Supportive, judgment-free atmosphere</li>
                <li>→ Confidence-building approach</li>
              </ul>
            </div>

            <div className="card">
              <img
                src="https://images.pexels.com/photos/2803158/pexels-photo-2803158.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Mommy and Me"
              />
              <h3>Mommy & Me Classes</h3>
              <p>
                A beautiful way to introduce your little one to the water — together. These parent-child sessions are filled with songs, gentle movements, and playful bonding.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.95rem', lineHeight: '1.8' }}>
                <li>→ Ages 6 months to 2 years</li>
                <li>→ Parent participates in every class</li>
                <li>→ Focus on bonding and water safety</li>
                <li>→ Create sweet memories together</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="schedule" style={{ background: 'var(--primary)', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'white' }}>Class Schedule</h2>
          <div style={{
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(10px)',
            padding: '50px 40px',
            borderRadius: '25px',
            maxWidth: '800px',
            margin: '0 auto',
            border: '2px solid rgba(255,255,255,0.2)'
          }}>
            <p style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '30px', color: 'white' }}>
              Saturdays Only
            </p>
            <div className="schedule-box">
              <h4>Group Class Times</h4>
              <p>8:30 AM · 9:00 AM · 9:30 AM · 10:00 AM · 10:30 AM</p>
            </div>
            <div className="schedule-box" style={{ marginBottom: 0 }}>
              <h4>Private Class Times</h4>
              <p>11:30 AM · 12:15 PM</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Check Our Calendar</h2>
          <div style={{
            width: '100%',
            maxWidth: '900px',
            margin: '0 auto',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
          }}>
            <iframe
              src="https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&ctz=America/New_York"
              style={{ border: 0 }}
              width="100%"
              height="600"
              title="Class Availability Calendar"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Why Parents Choose Us</h2>
          <ul className="trust">
            <li>Red Cross Certified Water Safety Instructor</li>
            <li>CPR Certified</li>
            <li>Small group and private lessons available</li>
            <li>Safe, clean, and welcoming environment</li>
            <li>Personalized learning for every swimmer</li>
            <li>Step Up for Students official provider</li>
          </ul>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>At Rising Waves Swimming Academy, we believe swimming is a lifelong gift — one that builds strength, joy, and confidence.</p>
          <a href="https://wa.me/13214323418" target="_blank" rel="noopener noreferrer" className="btn">Contact Us</a>
        </div>
      </section>

      <footer style={{
        background: 'var(--dark)',
        color: 'white',
        textAlign: 'center',
        padding: '60px 40px'
      }}>
        <div className="container">
          <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>
            Rising Waves Swimming Academy
          </h3>
          <p style={{ marginBottom: '30px', color: 'rgba(255,255,255,0.8)' }}>
            Building confidence, one splash at a time
          </p>
          <div style={{ marginBottom: '30px' }}>
            <a href="https://www.instagram.com/risingwavesswimming?igsh=cW1na2dvemU1ZGc=" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-block',
              padding: '12px 30px',
              background: 'rgba(255,255,255,0.1)',
              color: 'white',
              margin: '0 10px',
              textDecoration: 'none',
              borderRadius: '30px',
              border: '1px solid rgba(255,255,255,0.2)',
              transition: 'all 0.3s ease'
            }}>
              Instagram
            </a>
            <a href="https://wa.me/13214323418" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-block',
              padding: '12px 30px',
              background: 'rgba(255,255,255,0.1)',
              color: 'white',
              margin: '0 10px',
              textDecoration: 'none',
              borderRadius: '30px',
              border: '1px solid rgba(255,255,255,0.2)',
              transition: 'all 0.3s ease'
            }}>
              WhatsApp
            </a>
          </div>
          <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>
            © 2026 Rising Waves Swimming Academy. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
