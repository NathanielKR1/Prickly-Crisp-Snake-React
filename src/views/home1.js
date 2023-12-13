import React from 'react'

import { Helmet } from 'react-helmet'

import FeatureCard from '../components/feature-card'
import Question1 from '../components/question1'
import './home1.css'

const Home1 = (props) => {
  return (
    <div className="home1-container">
      <Helmet>
        <title>Spotless Hungry Crocodile</title>
      </Helmet>
      <div className="home1-header">
        <header
          data-thq="thq-navbar"
          className="navbarContainer home1-navbar-interactive"
        >
          <span className="logo">SNZZY</span>
          <div data-thq="thq-navbar-nav" className="home1-desktop-menu">
            <nav className="home1-links">
              <span className="home1-nav12 bodySmall">Home</span>
              <span className="home1-nav2 bodySmall">Suits</span>
              <span className="home1-nav3 bodySmall">Customization</span>
              <span className="home1-nav4 bodySmall">Collections</span>
              <span className="home1-nav5 bodySmall">Contact</span>
            </nav>
            <div className="home1-buttons">
              <button className="home1-login buttonFlat">Login</button>
              <button className="buttonFilled">Register</button>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="home1-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home1-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home1-mobile-menu">
            <div className="home1-nav">
              <div className="home1-top">
                <span className="logo">SNZZY</span>
                <div data-thq="thq-close-menu" className="home1-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home1-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="home1-links1">
                <span>Home</span>
                <span className="home1-nav21 bodySmall">Suits</span>
                <span className="home1-nav31 bodySmall">Customization</span>
                <span className="home1-nav41 bodySmall">Collections</span>
                <span className="home1-nav51 bodySmall">Contact</span>
              </nav>
              <div className="home1-buttons1">
                <button className="buttonFlat">Login</button>
                <button className="buttonFilled">Register</button>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="home1-icon04"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="home1-icon06"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="home1-icon08"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="home1-hero">
        <div className="heroContainer home1-hero1">
          <div className="home1-container01">
            <h1 className="home1-hero-heading heading1">Snazzy Suit Brokers</h1>
            <span className="home1-hero-sub-heading bodyLarge">
              <span>
                <span>
                  <span>Elevate Your Style with High End Suits</span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
              <span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
            </span>
            <div className="home1-btn-group">
              <button className="buttonFilled">Shop Now</button>
              <button className="buttonFlat">Learn More →</button>
            </div>
          </div>
        </div>
      </div>
      <div className="home1-features">
        <div className="featuresContainer">
          <div className="home1-features1">
            <div className="home1-container02">
              <span className="overline">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="home1-features-heading heading2">
                Experience the Best in Luxury Suits
              </h2>
              <span className="home1-features-sub-heading bodyLarge">
                <span>
                  <span>
                    <span>
                      Discover the exceptional features that set Snazzy Suit
                      Brokers apart
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="home1-container03">
              <FeatureCard
                Heading="Custom Tailoring"
                SubHeading="Get a suit tailored to your exact measurements and preferences"
              ></FeatureCard>
              <FeatureCard
                Heading="Premium Fabrics"
                SubHeading="Choose from a wide range of high-quality fabrics for your suit"
              ></FeatureCard>
              <FeatureCard
                Heading="Expert Styling Advice"
                SubHeading="Receive personalized styling advice from our experienced fashion consultants"
              ></FeatureCard>
              <FeatureCard
                Heading="Fast and Reliable Delivery"
                SubHeading="Enjoy quick and reliable delivery of your custom-made suit"
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div className="home1-pricing">
        <div className="pricingContainer">
          <div className="home1-container04">
            <span className="overline">
              <span>Pricing</span>
              <br></br>
            </span>
            <h2 className="heading2">Choose Your Perfect Plan</h2>
            <span className="home1-pricing-sub-heading bodyLarge">
              <span>
                <span>Discover the best plan that suits your needs</span>
              </span>
            </span>
          </div>
          <div className="home1-container05">
            <div className="freePricingCard home1-pricing-card">
              <div className="home1-container06">
                <span className="home1-text36 heading3">Free</span>
                <span className="bodySmall">
                  Access to a limited selection of high-end suits
                </span>
              </div>
              <div className="home1-container07">
                <span className="home1-text37">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home1-free-plan-price">0</span>
              </div>
              <div className="home1-container08">
                <div className="home1-container09">
                  <span className="home1-text40">✔</span>
                  <span className="bodySmall">Free shipping on all orders</span>
                </div>
              </div>
              <button className="home1-button buttonOutline">
                Continue with Free
              </button>
            </div>
            <div className="basicPricingCard home1-pricing-card1">
              <div className="home1-container10">
                <span className="home1-text41 heading3">BASIC</span>
                <span className="bodySmall">
                  Access to a wider range of high-end suits
                </span>
              </div>
              <div className="home1-container11">
                <span className="home1-text42">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home1-basic-plan-pricing">99</span>
                <span className="home1-text45">/ month</span>
              </div>
              <div className="home1-container12">
                <div className="home1-container13">
                  <span className="home1-text46">✔</span>
                  <span className="bodySmall">All features of FREE plan</span>
                </div>
                <div className="home1-container14">
                  <span className="home1-text48">✔</span>
                  <span className="bodySmall">Free shipping on all orders</span>
                </div>
                <div className="home1-container15">
                  <span className="home1-text49">✔</span>
                  <span className="bodySmall">Priority customer support</span>
                </div>
              </div>
              <button className="home1-button1 buttonFilled">
                Try the Basic plan
              </button>
            </div>
            <div className="proPricingCard home1-pricing-card2">
              <div className="home1-container16">
                <span className="home1-text50 heading3">
                  <span>PRO</span>
                  <br></br>
                </span>
                <span className="bodySmall">
                  Access to the full collection of high-end suits
                </span>
              </div>
              <div className="home1-container17">
                <span className="home1-text53">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home1-pro-plan-pricing">199</span>
                <span className="home1-text56">/ month</span>
              </div>
              <div className="home1-container18">
                <div className="home1-container19">
                  <span className="home1-text57">✔</span>
                  <span className="bodySmall"> All features of BASIC plan</span>
                </div>
                <div className="home1-container20">
                  <span className="home1-text59">✔</span>
                  <span className="bodySmall">Free shipping on all orders</span>
                </div>
                <div className="home1-container21">
                  <span className="home1-text60">✔</span>
                  <span className="bodySmall">Priority customer support</span>
                </div>
                <div className="home1-container22">
                  <span className="home1-text61">✔</span>
                  <span className="bodySmall">
                    Personal stylist consultation
                  </span>
                </div>
              </div>
              <button className="home1-button2 buttonFilled">
                Try the PRO plan
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="home1-banner">
        <div className="bannerContainer home1-banner1">
          <h1 className="home1-banner-heading heading2">
            Discover the Finest Collection of Suits
          </h1>
          <span className="home1-banner-sub-heading bodySmall">
            <span>
              <span>
                <span>
                  At Snazzy Suit Brokers, we offer a curated selection of high
                  end suits that are designed to make you look and feel your
                  best. Our suits are crafted with precision and attention to
                  detail, using only the finest materials and fabrics. Whether
                  you have a special occasion or simply want to upgrade your
                  wardrobe, our collection has something for everyone.
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
            <span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
          </span>
          <button className="buttonFilled">Explore Our Collection</button>
        </div>
      </div>
      <div className="home1-faq">
        <div className="faqContainer">
          <div className="home1-faq1">
            <div className="home1-container23">
              <span className="overline">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="home1-text79 heading2">Common questions</h2>
              <span className="home1-text80 bodyLarge">
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
              </span>
            </div>
            <div className="home1-container24">
              <Question1
                Answer="Our return policy allows customers to return suits within 30 days of purchase, as long as they are in their original condition and have not been altered."
                Question="What is the return policy for Snazzy Suit Brokers?"
              ></Question1>
              <Question1
                Answer="Yes, we provide complimentary alterations for all suits purchased from Snazzy Suit Brokers. Our expert tailors will ensure the perfect fit for our customers."
                Question="Do you offer alterations for purchased suits?"
              ></Question1>
              <Question1
                Answer="Absolutely! We highly recommend scheduling a fitting appointment to ensure personalized attention and assistance from our knowledgeable staff. Please contact our customer service to book an appointment."
                Question="Can I schedule a fitting appointment?"
              ></Question1>
              <Question1
                Answer="We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also offer the option to pay with PayPal."
                Question="What payment methods do you accept?"
              ></Question1>
              <Question1
                Answer="Yes, we offer international shipping to select countries. Shipping fees and delivery times may vary depending on the destination. Please contact our customer service for more information."
                Question="Do you offer international shipping?"
              ></Question1>
            </div>
          </div>
        </div>
      </div>
      <div className="home1-footer">
        <footer className="footerContainer home1-footer1">
          <div className="home1-container25">
            <span className="logo">SNZZY</span>
            <nav className="home1-nav1 bodySmall home1-nav1">
              <span className="home1-nav11 bodySmall">Home</span>
              <span className="home1-nav22 bodySmall">Suits</span>
              <span className="home1-nav32 bodySmall">Customization</span>
              <span className="home1-nav42 bodySmall">Collections</span>
              <span className="home1-nav52 bodySmall">Contact</span>
            </nav>
          </div>
          <div className="home1-separator"></div>
          <div className="home1-container26">
            <span className="bodySmall home1-text83">
              © 2023 myCompany, All Rights Reserved.
            </span>
            <div className="home1-icon-group1">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="home1-icon10"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="home1-icon12"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="home1-icon14"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home1
