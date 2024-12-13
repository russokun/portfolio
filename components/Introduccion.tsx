'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Introduccion.module.css'

const roles = ['Desarrollador', 'Estudiante', 'Emprendedor']

export default function Introduccion() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    let timer: NodeJS.Timeout

    const handleTyping = () => {
      const fullText = roles[roleIndex]
      const shouldBeDeleting = isDeleting && displayedText.length > 0
      const shouldStartDeleting = !isDeleting && displayedText === fullText

      if (shouldBeDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length - 1))
        setTypingSpeed(30)
      } else if (shouldStartDeleting) {
        setIsDeleting(true)
        setTypingSpeed(100)
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false)
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length)
        setTypingSpeed(150)
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length + 1))
      }
    }

    timer = setTimeout(handleTyping, typingSpeed)

    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, roleIndex, typingSpeed])

  return (
    <section id="inicio" className={styles.introduccion}>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.title}
      >
        HolaMundo, soy{' '}
        <span className={styles.dynamicText}>
          Agustín!
          <span className={styles.cursor}>|</span>
        </span>
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={styles.roleContainer}
      >
        <span className={styles.role}>
          {displayedText}
          <span className={styles.cursor}>|</span>
        </span>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className={styles.description}
      >
        Apasionado por la Tecnologia, el desarrollo De Software y la Ingeniería.
      </motion.p>
    </section>
  )
}
