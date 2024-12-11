'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from './Header.module.css'

export default function Header() {
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'proyectos', 'habilidades', 'educacion', 'testimonios y contacto']
      const scrollPosition = window.scrollY

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && scrollPosition >= element.offsetTop - 100) {
          setActiveSection(section)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          {['Inicio', 'Proyectos', 'Habilidades', 'Educacion', 'Testimonios y Contacto'].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`${styles.navItem} ${activeSection === item.toLowerCase() ? styles.active : ''}`}
              >
                {item}
                {activeSection === item.toLowerCase() && (
                  <motion.div
                    className={styles.underline}
                    layoutId="underline"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
