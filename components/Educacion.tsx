'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Code, School } from 'lucide-react'
import styles from './Educacion.module.css'

const educacion = [
  {
    titulo: 'Ingeniería Civil Electrónica',
    institucion: 'Universidad Técnica Federico Santa María',
    periodo: '2023 - Presente',
    descripcion: 'Estudiante de Segundo Año, con intereses en automatización, programación y Computadores.',
    icon: GraduationCap
  },
  {
    titulo: 'Bootcamp Desarrollo Web Full-Stack Java',
    institucion: 'Desafío Latam',
    periodo: '2024',
    descripcion: 'Formación intensiva de 5 meses en tecnologías web modernas, incluyendo JavaScript, React, Java, SpringBoot y bases de datos.',
    icon: Code
  },
  {
    titulo: 'Educación Media',
    institucion: 'Liceo Bicentenario Amanda Labarca',
    periodo: '2015 - 2022',
    descripcion: 'Graduado con honores, especialización en matemáticas y ciencias.',
    icon: School
  }
]

export default function Educacion() {
  return (
    <section id="educacion" className={styles.educacion}>
      <h2 className={styles.title}>Educación</h2>
      <div className={styles.timeline}>
        {educacion.map((item, index) => (
          <motion.div
            key={index}
            className={`${styles.item} ${styles[`item${index + 1}`]}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className={styles.icon}>
              <item.icon size={24} />
            </div>
            <div className={styles.content}>
              <h3>{item.titulo}</h3>
              <h4>{item.institucion}</h4>
              <p className={styles.periodo}>{item.periodo}</p>
              <p>{item.descripcion}</p>
            </div>
            {index < educacion.length - 1 && <div className={styles.line} />}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

