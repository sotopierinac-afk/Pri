function App() {
  return (
    <div style={{ margin: 0 }}>
      <section style={{
        minHeight: '100vh',
        background: '#0C2D48',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 20px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url(/coach-teaching-kid-indoor-swimming-pool-how-swim-dive-swimming-lesson-kids-development.jpg) center/cover',
          opacity: 0.2
        }} />
        <div style={{
          textAlign: 'center',
          maxWidth: '1100px',
          color: '#FAF9F6',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{
            fontSize: '13px',
            fontWeight: '600',
            letterSpacing: '3px',
            color: '#96D3CC',
            marginBottom: '24px',
            textTransform: 'uppercase'
          }}>
            Premium Swimming Instruction
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '80px',
            fontWeight: '800',
            lineHeight: '1.1',
            marginBottom: '32px',
            letterSpacing: '-2px',
            color: '#FAF9F6'
          }}>
            Rising Waves<br />Swimming Academy
          </h1>
          <p style={{
            fontSize: '20px',
            marginBottom: '48px',
            lineHeight: '1.7',
            fontWeight: '400',
            maxWidth: '720px',
            margin: '0 auto 48px',
            color: '#96D3CC'
          }}>
            Expert instruction for swimmers of all ages and abilities.<br />From 6 months to adults, we build confidence and technique.
          </p>
          <a href="#pricing" className="btn-primary btn" style={{
            fontSize: '13px',
            padding: '16px 48px'
          }}>
            Explore Programs
          </a>
        </div>
      </section>

      <section style={{
        padding: '120px 40px',
        background: '#96D3CC',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            fontSize: '13px',
            fontWeight: '600',
            letterSpacing: '3px',
            color: '#0C2D48',
            marginBottom: '16px',
            textTransform: 'uppercase'
          }}>
            See Our Approach
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '48px',
            fontWeight: '800',
            marginBottom: '64px',
            color: '#0C2D48',
            letterSpacing: '-1px'
          }}>
            Experience the Rising Waves Difference
          </h2>
          <video
            src="/freepik_kid-on-a-pool-swimming_minimax_768p_16-9_24fps_72945.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              maxWidth: '1000px',
              borderRadius: '16px',
              boxShadow: '0 24px 64px rgba(12, 45, 72, 0.25)'
            }}
          />
        </div>
      </section>

      <section id="pricing" style={{
        padding: '120px 40px',
        textAlign: 'center',
        background: '#0C2D48'
      }}>
        <div style={{
          fontSize: '13px',
          fontWeight: '600',
          letterSpacing: '3px',
          color: '#96D3CC',
          marginBottom: '16px',
          textTransform: 'uppercase'
        }}>
          Investment
        </div>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '48px',
          marginBottom: '72px',
          fontWeight: '800',
          color: '#FAF9F6',
          letterSpacing: '-1px'
        }}>
          Program Pricing
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            background: 'rgba(250, 249, 246, 0.05)',
            backdropFilter: 'blur(10px)',
            padding: '48px 32px',
            borderRadius: '16px',
            border: '1px solid rgba(150, 211, 204, 0.2)',
            color: '#FAF9F6',
            transition: 'all 0.3s ease'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '24px', color: '#96D3CC', letterSpacing: '1px', textTransform: 'uppercase' }}>
              Group Classes
            </h3>
            <p style={{ fontSize: '56px', fontWeight: '300', marginBottom: '8px', color: '#FAF9F6', lineHeight: '1' }}>
              $200
            </p>
            <p style={{ fontSize: '14px', marginBottom: '32px', color: '#96D3CC', fontWeight: '400' }}>
              per month
            </p>
            <div style={{ fontSize: '14px', marginBottom: '32px', color: 'rgba(250, 249, 246, 0.8)', lineHeight: '1.8' }}>
              25-minute sessions<br />
              Kids & adult programs
            </div>
            <a
              href="https://buy.stripe.com/9B6eVe0o70TW0Ni1GhaMU06"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{ borderColor: '#96D3CC', color: '#96D3CC' }}
            >
              Enroll Now
            </a>
          </div>

          <div style={{
            background: 'rgba(227, 84, 56, 0.15)',
            backdropFilter: 'blur(10px)',
            padding: '48px 32px',
            borderRadius: '16px',
            border: '2px solid #E35438',
            color: '#FAF9F6',
            transition: 'all 0.3s ease',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              background: '#F6A53E',
              color: '#0C0C0C',
              padding: '6px 12px',
              borderRadius: '6px',
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}>
              Popular
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '24px', color: '#F6A53E', letterSpacing: '1px', textTransform: 'uppercase' }}>
              Private Classes
            </h3>
            <p style={{ fontSize: '56px', fontWeight: '300', marginBottom: '8px', color: '#FAF9F6', lineHeight: '1' }}>
              $250
            </p>
            <p style={{ fontSize: '14px', marginBottom: '32px', color: '#F6A53E', fontWeight: '400' }}>
              per month
            </p>
            <div style={{ fontSize: '14px', marginBottom: '32px', color: 'rgba(250, 249, 246, 0.8)', lineHeight: '1.8' }}>
              Individual instruction<br />
              Personalized attention
            </div>
            <a
              href="https://buy.stripe.com/5kQaEYgn5cCE53y1GhaMU07"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn"
            >
              Enroll Now
            </a>
          </div>

          <div style={{
            background: 'rgba(250, 249, 246, 0.05)',
            backdropFilter: 'blur(10px)',
            padding: '48px 32px',
            borderRadius: '16px',
            border: '1px solid rgba(150, 211, 204, 0.2)',
            color: '#FAF9F6',
            transition: 'all 0.3s ease'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '24px', color: '#96D3CC', letterSpacing: '1px', textTransform: 'uppercase' }}>
              Mommy & Me
            </h3>
            <p style={{ fontSize: '56px', fontWeight: '300', marginBottom: '8px', color: '#FAF9F6', lineHeight: '1' }}>
              $200
            </p>
            <p style={{ fontSize: '14px', marginBottom: '32px', color: '#96D3CC', fontWeight: '400' }}>
              per month
            </p>
            <div style={{ fontSize: '14px', marginBottom: '32px', color: 'rgba(250, 249, 246, 0.8)', lineHeight: '1.8' }}>
              25-minute sessions<br />
              Ages 6 months - 2 years
            </div>
            <a
              href="https://buy.stripe.com/9B6eVe0o70TW0Ni1GhaMU06"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{ borderColor: '#96D3CC', color: '#96D3CC' }}
            >
              Enroll Now
            </a>
          </div>

          <div style={{
            background: 'rgba(250, 249, 246, 0.05)',
            backdropFilter: 'blur(10px)',
            padding: '48px 32px',
            borderRadius: '16px',
            border: '1px solid rgba(150, 211, 204, 0.2)',
            color: '#FAF9F6',
            transition: 'all 0.3s ease'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '24px', color: '#96D3CC', letterSpacing: '1px', textTransform: 'uppercase' }}>
              Toddler Classes
            </h3>
            <p style={{ fontSize: '56px', fontWeight: '300', marginBottom: '8px', color: '#FAF9F6', lineHeight: '1' }}>
              $250
            </p>
            <p style={{ fontSize: '14px', marginBottom: '32px', color: '#96D3CC', fontWeight: '400' }}>
              per month
            </p>
            <div style={{ fontSize: '14px', marginBottom: '32px', color: 'rgba(250, 249, 246, 0.8)', lineHeight: '1.8' }}>
              25-minute sessions<br />
              Ages 6 months - 2 years
            </div>
            <a
              href="https://buy.stripe.com/9B69AUdaT7ik2Vq1GhaMU03"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{ borderColor: '#96D3CC', color: '#96D3CC' }}
            >
              Enroll Now
            </a>
          </div>
        </div>
      </section>

      <section style={{
        padding: '120px 40px',
        background: '#FAF9F6'
      }}>
        <div style={{
          maxWidth: '1300px',
          margin: '0 auto'
        }}>
          <div style={{
            fontSize: '13px',
            fontWeight: '600',
            letterSpacing: '3px',
            color: '#0C2D48',
            marginBottom: '16px',
            textTransform: 'uppercase',
            textAlign: 'center'
          }}>
            Our Programs
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '48px',
            fontWeight: '800',
            marginBottom: '80px',
            color: '#0C2D48',
            letterSpacing: '-1px',
            textAlign: 'center'
          }}>
            Tailored for Every Age & Skill Level
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px'
          }}>
            <div style={{
              background: '#0C2D48',
              borderRadius: '16px',
              overflow: 'hidden',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <img
                src="/freepik__can-you-put-in-with-swimming-clothe-inside-the-poo__85073.png"
                alt="Kids Individual Classes"
                style={{
                  width: '100%',
                  height: '240px',
                  objectFit: 'contain',
                  backgroundColor: '#0C2D48'
                }}
              />
              <div style={{ padding: '32px' }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  marginBottom: '16px',
                  color: '#F6A53E',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase'
                }}>
                  Kids Individual
                </h3>
                <p style={{
                  fontSize: '15px',
                  lineHeight: '1.7',
                  color: '#96D3CC',
                  marginBottom: '20px'
                }}>
                  Personalized one-on-one instruction tailored to your child's unique needs, pace, and personality. Perfect for building confidence.
                </p>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  fontSize: '14px',
                  lineHeight: '2',
                  color: 'rgba(250, 249, 246, 0.8)'
                }}>
                  <li>• Ages 2 to 11 years</li>
                  <li>• Flexible scheduling</li>
                  <li>• Personalized attention</li>
                </ul>
              </div>
            </div>

            <div style={{
              background: '#0C2D48',
              borderRadius: '16px',
              overflow: 'hidden',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <img
                src="/young-teenager-girl-swimsuit-swimming-blue-pool.jpg"
                alt="Kids Group Classes"
                style={{
                  width: '100%',
                  height: '240px',
                  objectFit: 'cover'
                }}
              />
              <div style={{ padding: '32px' }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  marginBottom: '16px',
                  color: '#F6A53E',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase'
                }}>
                  Kids Group
                </h3>
                <p style={{
                  fontSize: '15px',
                  lineHeight: '1.7',
                  color: '#96D3CC',
                  marginBottom: '20px'
                }}>
                  Small group classes full of energy and fun. Children are grouped by age and skill level for optimal learning.
                </p>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  fontSize: '14px',
                  lineHeight: '2',
                  color: 'rgba(250, 249, 246, 0.8)'
                }}>
                  <li>• Ages 2 to 11 years</li>
                  <li>• Small group sizes</li>
                  <li>• Peer support & encouragement</li>
                </ul>
              </div>
            </div>

            <div style={{
              background: '#0C2D48',
              borderRadius: '16px',
              overflow: 'hidden',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <img
                src="/coach-teaching-kid-indoor-swimming-pool-how-swim-dive-swimming-lesson-kids-development.jpg"
                alt="Toddler Classes"
                style={{
                  width: '100%',
                  height: '240px',
                  objectFit: 'cover'
                }}
              />
              <div style={{ padding: '32px' }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  marginBottom: '16px',
                  color: '#F6A53E',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase'
                }}>
                  Toddler Swimming
                </h3>
                <p style={{
                  fontSize: '15px',
                  lineHeight: '1.7',
                  color: '#96D3CC',
                  marginBottom: '20px'
                }}>
                  Gentle introduction to water through playful activities, songs, and movement designed for our youngest swimmers.
                </p>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  fontSize: '14px',
                  lineHeight: '2',
                  color: 'rgba(250, 249, 246, 0.8)'
                }}>
                  <li>• Ages 6 months to 2 years</li>
                  <li>• Parent participation</li>
                  <li>• Focus on comfort & safety</li>
                </ul>
              </div>
            </div>

            <div style={{
              background: '#0C2D48',
              borderRadius: '16px',
              overflow: 'hidden',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <img
                src="https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Adult Swimming"
                style={{
                  width: '100%',
                  height: '240px',
                  objectFit: 'cover'
                }}
              />
              <div style={{ padding: '32px' }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  marginBottom: '16px',
                  color: '#F6A53E',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase'
                }}>
                  Adult Swimming
                </h3>
                <p style={{
                  fontSize: '15px',
                  lineHeight: '1.7',
                  color: '#96D3CC',
                  marginBottom: '20px'
                }}>
                  Never too late to learn. Supportive environment for beginners or those refining technique in a judgment-free space.
                </p>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  fontSize: '14px',
                  lineHeight: '2',
                  color: 'rgba(250, 249, 246, 0.8)'
                }}>
                  <li>• Ages 12 years and up</li>
                  <li>• Custom lesson plans</li>
                  <li>• Confidence-building approach</li>
                </ul>
              </div>
            </div>

            <div style={{
              background: '#0C2D48',
              borderRadius: '16px',
              overflow: 'hidden',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <img
                src="https://images.pexels.com/photos/2803158/pexels-photo-2803158.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Mommy and Me"
                style={{
                  width: '100%',
                  height: '240px',
                  objectFit: 'cover'
                }}
              />
              <div style={{ padding: '32px' }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  marginBottom: '16px',
                  color: '#F6A53E',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase'
                }}>
                  Mommy & Me
                </h3>
                <p style={{
                  fontSize: '15px',
                  lineHeight: '1.7',
                  color: '#96D3CC',
                  marginBottom: '20px'
                }}>
                  Beautiful bonding experience introducing your little one to water through songs, gentle movements, and play.
                </p>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  fontSize: '14px',
                  lineHeight: '2',
                  color: 'rgba(250, 249, 246, 0.8)'
                }}>
                  <li>• Ages 6 months to 2 years</li>
                  <li>• Parent participation required</li>
                  <li>• Bonding & water safety</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="schedule" style={{
        background: '#FAF9F6',
        padding: '120px 40px',
        textAlign: 'center'
      }}>
        <div style={{
          fontSize: '13px',
          fontWeight: '600',
          letterSpacing: '3px',
          color: '#0C2D48',
          marginBottom: '16px',
          textTransform: 'uppercase'
        }}>
          Schedule
        </div>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '48px',
          marginBottom: '72px',
          fontWeight: '800',
          color: '#0C2D48',
          letterSpacing: '-1px'
        }}>
          Class Times
        </h2>
        <div style={{
          background: '#0C2D48',
          padding: '64px 48px',
          borderRadius: '16px',
          maxWidth: '900px',
          margin: '0 auto',
          border: '2px solid #96D3CC'
        }}>
          <p style={{
            fontSize: '24px',
            fontWeight: '700',
            marginBottom: '48px',
            color: '#F6A53E',
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}>
            Saturdays Only
          </p>
          <div style={{
            background: 'rgba(150, 211, 204, 0.1)',
            padding: '40px',
            borderRadius: '12px',
            marginBottom: '24px',
            border: '1px solid rgba(150, 211, 204, 0.2)'
          }}>
            <p style={{
              fontSize: '16px',
              fontWeight: '700',
              marginBottom: '20px',
              color: '#96D3CC',
              letterSpacing: '1.5px',
              textTransform: 'uppercase'
            }}>
              Group Class Times
            </p>
            <p style={{
              fontSize: '18px',
              lineHeight: '1.8',
              color: '#FAF9F6',
              fontWeight: '300'
            }}>
              8:30 AM • 9:00 AM • 9:30 AM • 10:00 AM • 10:30 AM
            </p>
          </div>
          <div style={{
            background: 'rgba(150, 211, 204, 0.1)',
            padding: '40px',
            borderRadius: '12px',
            border: '1px solid rgba(150, 211, 204, 0.2)'
          }}>
            <p style={{
              fontSize: '16px',
              fontWeight: '700',
              marginBottom: '20px',
              color: '#96D3CC',
              letterSpacing: '1.5px',
              textTransform: 'uppercase'
            }}>
              Private Class Times
            </p>
            <p style={{
              fontSize: '18px',
              lineHeight: '1.8',
              color: '#FAF9F6',
              fontWeight: '300'
            }}>
              11:30 AM • 12:15 PM
            </p>
          </div>
        </div>
      </section>

      <section style={{
        padding: '120px 40px',
        textAlign: 'center',
        background: '#96D3CC'
      }}>
        <div style={{
          fontSize: '13px',
          fontWeight: '600',
          letterSpacing: '3px',
          color: '#0C2D48',
          marginBottom: '16px',
          textTransform: 'uppercase'
        }}>
          Availability
        </div>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '48px',
          marginBottom: '64px',
          fontWeight: '800',
          color: '#0C2D48',
          letterSpacing: '-1px'
        }}>
          Check Our Calendar
        </h2>
        <div style={{
          width: '100%',
          maxWidth: '1000px',
          margin: '0 auto',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 24px 64px rgba(12, 45, 72, 0.2)'
        }}>
          <iframe
            src="https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&ctz=America/New_York"
            style={{ border: 0 }}
            width="100%"
            height="600"
            title="Class Availability Calendar"
          />
        </div>
      </section>

      <section style={{
        padding: '120px 40px',
        textAlign: 'center',
        background: '#0C2D48'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '52px',
            fontWeight: '800',
            marginBottom: '32px',
            color: '#F6A53E',
            letterSpacing: '-1px'
          }}>
            A Lifelong Gift
          </h2>
          <p style={{
            fontSize: '20px',
            lineHeight: '1.8',
            color: '#96D3CC',
            marginBottom: '24px',
            fontWeight: '300'
          }}>
            At Rising Waves Swimming Academy, we believe swimming is a lifelong gift — one that builds strength, joy, and confidence.
          </p>
          <p style={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#FAF9F6',
            marginTop: '40px',
            letterSpacing: '0.5px'
          }}>
            Dive in with us.
          </p>
        </div>
      </section>

      <section style={{
        padding: '96px 40px',
        textAlign: 'center',
        background: '#FAF9F6'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'inline-block',
            padding: '16px 32px',
            background: 'rgba(12, 45, 72, 0.05)',
            borderRadius: '12px',
            marginBottom: '32px'
          }}>
            <p style={{
              fontSize: '14px',
              lineHeight: '1.8',
              marginBottom: '0',
              color: '#0C2D48',
              fontWeight: '600',
              letterSpacing: '0.5px'
            }}>
              Red Cross Certified Water Safety Instructor • CPR Certified
            </p>
          </div>
          <h3 style={{
            fontSize: '22px',
            fontWeight: '700',
            color: '#0C2D48',
            lineHeight: '1.6'
          }}>
            Rising Waves Swimming Academy is a<br />Step Up for Students official provider
          </h3>
        </div>
      </section>

      <footer style={{
        background: '#0C0C0C',
        color: '#FAF9F6',
        textAlign: 'center',
        padding: '80px 40px 40px'
      }}>
        <h3 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '36px',
          fontWeight: '800',
          marginBottom: '16px',
          letterSpacing: '-0.5px',
          color: '#F6A53E'
        }}>
          Rising Waves Swimming Academy
        </h3>
        <p style={{
          fontSize: '15px',
          marginBottom: '48px',
          color: '#96D3CC',
          fontWeight: '400',
          letterSpacing: '0.5px'
        }}>
          Building confidence, one splash at a time
        </p>
        <div style={{
          marginBottom: '48px',
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          flexWrap: 'wrap'
        }}>
          <a href="https://www.instagram.com/risingwavesswimming?igsh=cW1na2dvemU1ZGc=" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-block',
            padding: '12px 32px',
            background: 'transparent',
            color: '#96D3CC',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            border: '2px solid #96D3CC',
            transition: 'all 0.3s ease',
            fontSize: '14px',
            letterSpacing: '0.5px',
            textTransform: 'uppercase'
          }}>
            Instagram
          </a>
          <a href="https://wa.me/13214323418" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-block',
            padding: '12px 32px',
            background: 'transparent',
            color: '#96D3CC',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            border: '2px solid #96D3CC',
            transition: 'all 0.3s ease',
            fontSize: '14px',
            letterSpacing: '0.5px',
            textTransform: 'uppercase'
          }}>
            WhatsApp
          </a>
        </div>
        <div style={{
          paddingTop: '32px',
          borderTop: '1px solid rgba(150, 211, 204, 0.2)'
        }}>
          <p style={{
            fontSize: '13px',
            color: 'rgba(250, 249, 246, 0.5)',
            fontWeight: '400',
            letterSpacing: '0.5px'
          }}>
            © 2026 Rising Waves Swimming Academy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
