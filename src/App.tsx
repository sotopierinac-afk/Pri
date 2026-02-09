function App() {
  return (
    <div style={{ margin: 0, fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", color: '#0C0C0C' }}>
      {/* HERO */}
      <section style={{
        minHeight: '100vh',
        background: '#0C2D48',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url(https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1920) center/cover',
          opacity: 0.15
        }} />
        <div style={{
          textAlign: 'center',
          maxWidth: '900px',
          color: '#fff',
          position: 'relative',
          zIndex: 1
        }}>
          <h1 style={{
            fontSize: '72px',
            fontWeight: '900',
            lineHeight: '1.1',
            marginBottom: '30px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            RISING WAVES<br />SWIMMING ACADEMY
          </h1>
          <p style={{
            fontSize: '24px',
            marginBottom: '20px',
            lineHeight: '1.7',
            fontWeight: '400'
          }}>
            Welcome to Rising Waves Swimming Academy!
          </p>
          <p style={{
            fontSize: '18px',
            marginBottom: '40px',
            lineHeight: '1.8',
            maxWidth: '700px',
            margin: '0 auto 40px',
            opacity: 0.95
          }}>
            We teach swimmers of all levels, starting from little ones as young as 6 months. Whether your child is just getting used to the water or working on perfecting their strokes, we're here to guide them every step of the way.
          </p>
          <a href="#pricing" style={{
            display: 'inline-block',
            padding: '18px 48px',
            background: '#F6A53E',
            color: '#fff',
            textDecoration: 'none',
            fontWeight: '700',
            fontSize: '18px',
            borderRadius: '50px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
            transition: 'transform 0.3s ease'
          }}>
            Dive In With Us!
          </a>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section style={{
        padding: '80px 40px',
        background: '#FAF9F6',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
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

      {/* PRICING */}
      <section id="pricing" style={{
        padding: '100px 40px',
        textAlign: 'center',
        background: '#0C2D48'
      }}>
        <h2 style={{
          fontSize: '48px',
          marginBottom: '60px',
          fontWeight: '900',
          color: '#fff'
        }}>
          Our Classes
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            background: '#ffffff',
            padding: '40px 30px',
            borderRadius: '25px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
            color: '#0C0C0C',
            transform: 'translateY(0)',
            transition: 'transform 0.3s ease',
            border: '1px solid rgba(12, 45, 72, 0.08)'
          }}>
            <h3 style={{ fontSize: '26px', fontWeight: '700', marginBottom: '20px', color: '#0C2D48' }}>
              Group Classes
            </h3>
            <p style={{ fontSize: '48px', fontWeight: '900', marginBottom: '10px', color: '#E35438' }}>
              $200
            </p>
            <p style={{ fontSize: '16px', marginBottom: '20px', opacity: 0.8 }}>
              Monthly rate, classes of 25 minutes each
            </p>
            <p style={{ fontSize: '14px', marginBottom: '25px', opacity: 0.7 }}>
              Applicable for kids and adult swimming lessons
            </p>
            <a
              href="https://buy.stripe.com/9B6eVe0o70TW0Ni1GhaMU06"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '14px 36px',
                background: '#F6A53E',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '50px',
                fontWeight: '700',
                fontSize: '16px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
              }}
            >
              Enroll Now
            </a>
          </div>

          <div style={{
            background: '#ffffff',
            padding: '40px 30px',
            borderRadius: '25px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
            color: '#0C0C0C',
            transform: 'translateY(0)',
            transition: 'transform 0.3s ease',
            border: '1px solid rgba(12, 45, 72, 0.08)'
          }}>
            <h3 style={{ fontSize: '26px', fontWeight: '700', marginBottom: '20px', color: '#0C2D48' }}>
              Individual Classes
            </h3>
            <p style={{ fontSize: '48px', fontWeight: '900', marginBottom: '10px', color: '#E35438' }}>
              $250
            </p>
            <p style={{ fontSize: '16px', marginBottom: '20px', opacity: 0.8 }}>
              Individual private class
            </p>
            <p style={{ fontSize: '14px', marginBottom: '25px', opacity: 0.7 }}>
              Monthly rate, each class of 25 minutes
            </p>
            <a
              href="https://buy.stripe.com/5kQaEYgn5cCE53y1GhaMU07"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '14px 36px',
                background: '#F6A53E',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '50px',
                fontWeight: '700',
                fontSize: '16px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
              }}
            >
              Enroll Now
            </a>
          </div>

          <div style={{
            background: '#ffffff',
            padding: '40px 30px',
            borderRadius: '25px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
            color: '#0C0C0C',
            transform: 'translateY(0)',
            transition: 'transform 0.3s ease',
            border: '1px solid rgba(12, 45, 72, 0.08)'
          }}>
            <h3 style={{ fontSize: '26px', fontWeight: '700', marginBottom: '20px', color: '#0C2D48' }}>
              Mommy & Me
            </h3>
            <p style={{ fontSize: '48px', fontWeight: '900', marginBottom: '10px', color: '#E35438' }}>
              $200
            </p>
            <p style={{ fontSize: '16px', marginBottom: '20px', opacity: 0.8 }}>
              Monthly rate, classes of 25 minutes each
            </p>
            <p style={{ fontSize: '14px', marginBottom: '25px', opacity: 0.7 }}>
              Ages 6 months to 2 years
            </p>
            <a
              href="https://buy.stripe.com/9B6eVe0o70TW0Ni1GhaMU06"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '14px 36px',
                background: '#F6A53E',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '50px',
                fontWeight: '700',
                fontSize: '16px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
              }}
            >
              Enroll Now
            </a>
          </div>

          <div style={{
            background: '#ffffff',
            padding: '40px 30px',
            borderRadius: '25px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
            color: '#0C0C0C',
            transform: 'translateY(0)',
            transition: 'transform 0.3s ease',
            border: '1px solid rgba(12, 45, 72, 0.08)'
          }}>
            <h3 style={{ fontSize: '26px', fontWeight: '700', marginBottom: '20px', color: '#0C2D48' }}>
              Toddler Classes
            </h3>
            <p style={{ fontSize: '48px', fontWeight: '900', marginBottom: '10px', color: '#E35438' }}>
              $250
            </p>
            <p style={{ fontSize: '16px', marginBottom: '20px', opacity: 0.8 }}>
              Monthly rate, classes of 25 minutes each
            </p>
            <p style={{ fontSize: '14px', marginBottom: '25px', opacity: 0.7 }}>
              Ages 6 months to 2 years
            </p>
            <a
              href="https://buy.stripe.com/9B69AUdaT7ik2Vq1GhaMU03"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '14px 36px',
                background: '#F6A53E',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '50px',
                fontWeight: '700',
                fontSize: '16px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
              }}
            >
              Enroll Now
            </a>
          </div>
        </div>
      </section>

      {/* CLASS DETAILS */}
      <section style={{
        padding: '100px 40px',
        background: '#FAF9F6'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '60px'
          }}>
            <div style={{
              background: '#ffffff',
              padding: '40px',
              borderRadius: '20px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
              border: '1px solid rgba(12, 45, 72, 0.08)'
            }}>
              <img
                src="https://images.pexels.com/photos/618612/pexels-photo-618612.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Kids Individual Classes"
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '15px',
                  marginBottom: '25px'
                }}
              />
              <h3 style={{
                fontSize: '28px',
                fontWeight: '700',
                marginBottom: '20px',
                color: '#0C2D48'
              }}>
                KIDS INDIVIDUAL CLASSES
              </h3>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#555',
                marginBottom: '15px'
              }}>
                Perfect for kids who need extra attention or prefer one-on-one support. Our individual classes are tailored to your child's unique needs, pace, and personality.
              </p>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                fontSize: '15px',
                lineHeight: '2',
                color: '#666'
              }}>
                <li>→ Ages 2 to 11 years</li>
                <li>→ Flexible scheduling</li>
                <li>→ Great for beginners or shy swimmers</li>
                <li>→ Personalized attention</li>
              </ul>
            </div>

            <div style={{
              background: '#ffffff',
              padding: '40px',
              borderRadius: '20px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
              border: '1px solid rgba(12, 45, 72, 0.08)'
            }}>
              <img
                src="https://images.pexels.com/photos/1449667/pexels-photo-1449667.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Kids Group Classes"
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '15px',
                  marginBottom: '25px'
                }}
              />
              <h3 style={{
                fontSize: '28px',
                fontWeight: '700',
                marginBottom: '20px',
                color: '#96D3CC'
              }}>
                KIDS GROUP CLASSES
              </h3>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#555',
                marginBottom: '15px'
              }}>
                Our small group classes are full of energy, learning, and lots of fun! Children are grouped by age and skill level, making it easy to learn and grow together.
              </p>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                fontSize: '15px',
                lineHeight: '2',
                color: '#666'
              }}>
                <li>→ Ages 2 to 11 years</li>
                <li>→ Small group sizes for better focus</li>
                <li>→ Encouraging peer support</li>
                <li>→ Structured levels for steady progress</li>
              </ul>
            </div>

            <div style={{
              background: '#ffffff',
              padding: '40px',
              borderRadius: '20px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
              border: '1px solid rgba(12, 45, 72, 0.08)'
            }}>
              <img
                src="https://images.pexels.com/photos/1679315/pexels-photo-1679315.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Toddler Classes"
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '15px',
                  marginBottom: '25px'
                }}
              />
              <h3 style={{
                fontSize: '28px',
                fontWeight: '700',
                marginBottom: '20px',
                color: '#F57F3B'
              }}>
                TODDLERS SWIMMING CLASSES
              </h3>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#555',
                marginBottom: '15px'
              }}>
                Our toddler classes are a sweet introduction to the water for little ones! Through gentle movement, songs, and playful activities, babies begin to explore the water.
              </p>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                fontSize: '15px',
                lineHeight: '2',
                color: '#666'
              }}>
                <li>→ Ages 6 months to 2 years</li>
                <li>→ Parent or caregiver joins in the water</li>
                <li>→ Focus on comfort and floating</li>
                <li>→ Fun and encouraging atmosphere</li>
              </ul>
            </div>

            <div style={{
              background: '#ffffff',
              padding: '40px',
              borderRadius: '20px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
              border: '1px solid rgba(12, 45, 72, 0.08)'
            }}>
              <img
                src="https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Adult Swimming"
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '15px',
                  marginBottom: '25px'
                }}
              />
              <h3 style={{
                fontSize: '28px',
                fontWeight: '700',
                marginBottom: '20px',
                color: '#0C2D48'
              }}>
                ADULT SWIMMING CLASSES
              </h3>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#555',
                marginBottom: '15px'
              }}>
                It's never too late to learn! Whether you're starting fresh, working through water fears, or looking to refine your technique, we're here to help.
              </p>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                fontSize: '15px',
                lineHeight: '2',
                color: '#666'
              }}>
                <li>→ Ages 12 years and up</li>
                <li>→ Custom lesson plans</li>
                <li>→ Supportive, judgment-free atmosphere</li>
                <li>→ Confidence-building approach</li>
              </ul>
            </div>

            <div style={{
              background: '#ffffff',
              padding: '40px',
              borderRadius: '20px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
              border: '1px solid rgba(12, 45, 72, 0.08)'
            }}>
              <img
                src="https://images.pexels.com/photos/2803158/pexels-photo-2803158.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Mommy and Me"
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '15px',
                  marginBottom: '25px'
                }}
              />
              <h3 style={{
                fontSize: '28px',
                fontWeight: '700',
                marginBottom: '20px',
                color: '#F6A53E'
              }}>
                MOMMY & ME CLASSES
              </h3>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#555',
                marginBottom: '15px'
              }}>
                A beautiful way to introduce your little one to the water — together. These parent-child sessions are filled with songs, gentle movements, and playful bonding.
              </p>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                fontSize: '15px',
                lineHeight: '2',
                color: '#666'
              }}>
                <li>→ Ages 6 months to 2 years</li>
                <li>→ Parent participates in every class</li>
                <li>→ Focus on bonding and water safety</li>
                <li>→ Create sweet memories together</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="schedule" style={{
        background: '#0C2D48',
        padding: '100px 40px',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '48px',
          marginBottom: '40px',
          fontWeight: '900',
          color: '#fff'
        }}>
          Class Schedule
        </h2>
        <div style={{
          background: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(10px)',
          padding: '50px 40px',
          borderRadius: '25px',
          maxWidth: '800px',
          margin: '0 auto',
          border: '2px solid rgba(255,255,255,0.2)'
        }}>
          <p style={{
            fontSize: '28px',
            fontWeight: '700',
            marginBottom: '30px',
            color: '#fff'
          }}>
            Saturdays Only
          </p>
          <div style={{
            background: 'rgba(255,255,255,0.95)',
            padding: '30px',
            borderRadius: '20px',
            marginBottom: '30px'
          }}>
            <p style={{
              fontSize: '20px',
              fontWeight: '600',
              marginBottom: '15px',
              color: '#2c3e50'
            }}>
              Group Class Times
            </p>
            <p style={{
              fontSize: '18px',
              lineHeight: '2',
              color: '#555'
            }}>
              8:30 AM · 9:00 AM · 9:30 AM · 10:00 AM · 10:30 AM
            </p>
          </div>
          <div style={{
            background: 'rgba(255,255,255,0.95)',
            padding: '30px',
            borderRadius: '20px'
          }}>
            <p style={{
              fontSize: '20px',
              fontWeight: '600',
              marginBottom: '15px',
              color: '#2c3e50'
            }}>
              Private Class Times
            </p>
            <p style={{
              fontSize: '18px',
              lineHeight: '2',
              color: '#555'
            }}>
              11:30 AM · 12:15 PM
            </p>
          </div>
        </div>
      </section>

      {/* CALENDAR */}
      <section style={{
        padding: '100px 40px',
        textAlign: 'center',
        background: '#FAF9F6'
      }}>
        <h2 style={{
          fontSize: '42px',
          marginBottom: '40px',
          fontWeight: '800',
          color: '#0C2D48'
        }}>
          Check Our Calendar
        </h2>
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
            frameBorder="0"
            scrolling="no"
            title="Class Availability Calendar"
          />
        </div>
      </section>

      {/* CLOSING MESSAGE */}
      <section style={{
        padding: '100px 40px',
        textAlign: 'center',
        background: '#96D3CC'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '900',
            marginBottom: '30px',
            color: '#0C2D48'
          }}>
            Thank You!
          </h2>
          <p style={{
            fontSize: '20px',
            lineHeight: '1.8',
            color: '#0C0C0C',
            marginBottom: '20px'
          }}>
            At Rising Waves Swimming Academy, we believe swimming is a lifelong gift — one that builds strength, joy, and confidence.
          </p>
          <p style={{
            fontSize: '24px',
            fontWeight: '700',
            color: '#0C2D48',
            marginTop: '30px'
          }}>
            Dive in with us!
          </p>
        </div>
      </section>

      {/* TRUST / CERTIFICATIONS */}
      <section style={{
        padding: '80px 40px',
        textAlign: 'center',
        background: '#ffffff'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <p style={{
            fontSize: '18px',
            lineHeight: '2',
            marginBottom: '30px',
            color: '#555'
          }}>
            Red Cross Certified Water Safety Instructor · CPR Certified
          </p>
          <h3 style={{
            fontSize: '24px',
            fontWeight: '800',
            color: '#0C2D48'
          }}>
            Rising Waves Swimming Academy is a Step Up for Students official provider
          </h3>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: '#0C2D48',
        color: 'white',
        textAlign: 'center',
        padding: '60px 40px'
      }}>
        <h3 style={{
          fontSize: '32px',
          fontWeight: '900',
          marginBottom: '20px'
        }}>
          RISING WAVES SWIMMING ACADEMY
        </h3>
        <p style={{ fontSize: '16px', marginBottom: '30px', opacity: 0.9 }}>
          Building confidence, one splash at a time
        </p>
        <div style={{ marginBottom: '30px' }}>
          <a href="https://www.instagram.com/risingwavesswimming?igsh=cW1na2dvemU1ZGc=" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-block',
            padding: '12px 30px',
            background: 'rgba(255,255,255,0.2)',
            color: 'white',
            margin: '0 10px',
            textDecoration: 'none',
            borderRadius: '50px',
            fontWeight: '600',
            border: '2px solid rgba(255,255,255,0.3)',
            transition: 'all 0.3s ease'
          }}>
            Instagram
          </a>
          <a href="https://wa.me/13214323418" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-block',
            padding: '12px 30px',
            background: 'rgba(255,255,255,0.2)',
            color: 'white',
            margin: '0 10px',
            textDecoration: 'none',
            borderRadius: '50px',
            fontWeight: '600',
            border: '2px solid rgba(255,255,255,0.3)',
            transition: 'all 0.3s ease'
          }}>
            WhatsApp
          </a>
        </div>
        <p style={{ fontSize: '14px', opacity: 0.7, marginTop: '20px' }}>
          © 2026 Rising Waves Swimming Academy. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;