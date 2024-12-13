'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Testimonios.module.css'

const testimonios = [
  {
    id: 1,
    nombre: 'Joaquin Neulist',
    rol: 'Desarrollador .NET en QServices',
    texto: '"Buen compañero de equipo, dedicado a sus tareas, buen manejo de herramientas y tecnologías."',
  },
  {
    id: 2,
    nombre: 'Edmundo Ruveda',
    rol: 'Desarrollador de Software en Fundasoft',
    texto: '"Persona proactiva, con una gran personalidad y capaz de transmitir su pasión y su alta moral a sus compañeros, siempre dispuesto a dar ayuda a quien la necesite."',
  },{
    id: 3,
    nombre: 'Mayco Dominguez',
    rol: 'Desarrollador Full Stack Java',
    texto: '"Agustin es un gran colaborador, compañero y muy apasionado por el desarrollo. Muy simpático y siempre dispuesto a mejorar en lo que es el ámbito IT."',
  },
  {
    id: 4,
    nombre: 'Flor Ayala',
    rol: 'CEO en Stride Gear',
    texto: '"El Desarrollo de la Web de Stride Gear elevó nuestra experiencia: calidad, tiempo y atención impecables."',
  },
  {
    id: 5,
    nombre: 'Ana Maria Campbell', 
    rol: 'Co-fundadora de SSTGames',
    texto: '"A pesar de estar en fase de Desarrollo, La interfaz interactiva tiene potencial para transformar nuestra marca lúdica por completo."',
  }
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
      <h2 className={styles.title}>Testimonios de Clientes/Colegas</h2>
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
            <p className={styles.rol}><em>{testimonios[activeTestimonio].rol}</em></p>
            
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
