import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetter'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import Resume from '../../assets/docs/resume.pdf';
const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [
    ' ',
    'M',
    'e',
    'h',
    'm',
    'e',
    't',
    'c',
    'a',
    'n',
    ' ',
    'D',
    'e',
    'm',
    'i',
    'r',
  ]
  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'p',
    'o',
    'l',
    'e',
    'r',
    '.',
  ]
  useEffect(() => {
    const idTimeOut = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    
    return () => clearTimeout(idTimeOut)
  }, [])


  return (
  <>
  
  <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`{$letterClass} _12`}>i,</span>
          <br />
          <span className={`{$letterClass} _12`}>I'</span>
          <span className={`{$letterClass} _12`}>m</span>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2>
          Full-stack Web Developer | Front-end Developer | React Developer
        </h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
        <a href={Resume} className="btnResume" download>For Resume</a>
      </div>
    </div>
    <Loader type='pacman'/>
    </>
  )
}

export default Home
