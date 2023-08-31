import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetter'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    const idTimeOut = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(idTimeOut)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_bk08pu5',
        'template_bmi2c2a',
        form.current,
        'pFVnWNhbuqsuwOPJ8'
      )
      .then(() => {
        alert('Message successfully sent!')
        window.location.reload(false)
      })
      .catch((error) => {
        console.error('Error sending email:', error)
        alert('Failed to send the message, please try again.')
      })
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                'D',
                'o',
                "n'",
                't',
                ' ',
                'b',
                'e',
                ' ',
                's',
                'h',
                'y',
                '!',
                'H',
                'i',
                't',
                ' ',
                'm',
                'e',
                ' ',
                'u',
                'p',
              ]}
              idx={15}
            />
          </h1>
          <p>
            As a full stack web developer, creating seamless digital experiences
            is my passion. I am committed to bringing cutting-edge ideas to life
            and developing user-centric solutions in the constantly changing
            field of web development. I have a broad skill set and a solid
            understanding of both front-end and back-end technologies.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    placeholder="Name"
                    type="text"
                    name="from_name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="user_email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input
                    type="submit"
                    className="flat-button"
                    value="Send"
                  ></input>
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Mehmetcan DEMIR, <br />
          Turkey,
          <br />
          Irmak Neighborhood, Turgut Ozal Boulevard, Menemen
          <br />
          Izmir
          <span>mehmetcandemir11@outlook.com.tr</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[38.588688, 27.083874]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[38.588688, 27.083874]}>
              <Popup>Mehmetcan lives here, come over and have a cup of tea :)</Popup>
              </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact

