'use client'

import { motion } from 'framer-motion'
// import { Zap } from 'lucide-react'; // Elimina esta línea si no se usa en el archivo
import { Code, Server, Database, Cpu, BookOpen, PuzzleIcon as PuzzlePiece, Users, MessageSquare, Lightbulb } from 'lucide-react'
import styles from './Habilidades.module.css'

const habilidades = [
  { nombre: 'Desarrollo Frontend', icono: Code },
  { nombre: 'Desarrollo Backend', icono: Server },
  { nombre: 'Bases de Datos', icono: Database },
  { nombre: 'Hardware', icono: Cpu },
  { nombre: 'Solución de Problemas', icono: PuzzlePiece },
  { nombre: 'Trabajo en Equipo', icono: Users },
  { nombre: 'Comunicación', icono: MessageSquare },
  { nombre: 'Aprendizaje Continuo', icono: BookOpen },
  { nombre: 'Pensamiento Crítico', icono: Lightbulb },
]

export default function Habilidades() {
  return (
    <section id="habilidades" className={styles.habilidades}>
      <h2 className={styles.title}>Mis Habilidades</h2>
      <div className={styles.grid}>
        {habilidades.map((habilidad, index) => (
          <motion.div
            key={habilidad.nombre}
            className={styles.habilidad}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <habilidad.icono className={styles.icon} />
            <h3>{habilidad.nombre}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

