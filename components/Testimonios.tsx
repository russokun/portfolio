'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Testimonios.module.css'

const testimonios = [
  {
    id: 1,
    nombre: 'Cliente 1',
    texto: 'Excelente trabajo, superó mis expectativas.',
  },
  {
    id: 2,
    nombre: 'Cliente 2',
    texto: 'Muy profesional y creativo. Altamente recomendado.',
  },{
    id: 3,
    nombre: 'Cliente 3',
    texto: 'Un placer trabajar juntos. Resultados excepcionales.',
  },
]

export default function Testimonios() {
  const [activeTestimonio, setActiveTestimonio] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonio((prev) => (prev + 1) % testimonios.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonios" className={styles.testimonios}>
      <h2 className={styles.title}>Lo que dicen mis clientes</h2>
      <div className={styles.testimonioContainer}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTestimonio}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={styles.testimonio}
          >
            <p className={styles.texto}>{testimonios[activeTestimonio].texto}</p>
            <p className={styles.nombre}>- {testimonios[activeTestimonio].nombre}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

