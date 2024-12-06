'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Github, ExternalLink, User, Users } from 'lucide-react'
import styles from './Proyectos.module.css'

interface Proyecto {
  id: number
  titulo: string
  descripcion: string
  imagen: string[]
  equipo: 'Solo' | 'Equipo'
  estado: 'En desarrollo' | 'Por corregir' | 'Finalizado'
  repoUrl: string
  siteUrl: string
}

const proyectos: Proyecto[] = [
  {
    id: 1,
    titulo: 'Proyecto 1',
    descripcion: 'Descripción detallada del Proyecto 1',
    imagen: ['/placeholder.svg?height=300&width=300', '/placeholder.svg?height=300&width=300'],
    equipo: 'Solo',
    estado: 'Finalizado',
    repoUrl: 'https://github.com/usuario/proyecto1',
    siteUrl: 'https://proyecto1.com'
  },
  {
    id: 2,
    titulo: 'Proyecto 2',
    descripcion: 'Descripción detallada del Proyecto 2',
    imagen: ['/placeholder.svg?height=300&width=300', '/placeholder.svg?height=300&width=300'],
    equipo: 'Equipo',
    estado: 'En desarrollo',
    repoUrl: 'https://github.com/usuario/proyecto2',
    siteUrl: 'https://proyecto2.com'
  },
  {
    id: 3,
    titulo: 'Proyecto 3',
    descripcion: 'Descripción detallada del Proyecto 3',
    imagen: ['/placeholder.svg?height=300&width=300', '/placeholder.svg?height=300&width=300'],
    equipo: 'Solo',
    estado: 'Por corregir',
    repoUrl: 'https://github.com/usuario/proyecto3',
    siteUrl: 'https://proyecto3.com'
  }
]

export default function Proyectos() {
  const [selectedProject, setSelectedProject] = useState<Proyecto | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openProject = (proyecto: Proyecto) => {
    setSelectedProject(proyecto)
    setCurrentImageIndex(0)
  }

  const closeProject = () => {
    setSelectedProject(null)
  }

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedProject.imagen.length)
    }
  }

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + selectedProject.imagen.length) % selectedProject.imagen.length)
    }
  }

  const getStatusColor = (estado: Proyecto['estado']) => {
    switch (estado) {
      case 'En desarrollo':
        return 'bg-red-500'
      case 'Por corregir':
        return 'bg-yellow-500'
      case 'Finalizado':
        return 'bg-green-500'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <section id="proyectos" className={styles.proyectos}>
      <h2 className={styles.title}>Proyectos Destacados</h2>
      <div className={styles.grid}>
        {proyectos.map((proyecto) => (
          <motion.div
            key={proyecto.id}
            className={styles.proyecto}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            onClick={() => openProject(proyecto)}
          >
            <img src={proyecto.imagen[0]} alt={proyecto.titulo} className={styles.imagen} />
            <div className={styles.overlay}>
              <h3>{proyecto.titulo}</h3>
              <p>{proyecto.descripcion}</p>
              <div className={styles.projectInfo}>
                <span className={`${styles.status} ${getStatusColor(proyecto.estado)}`}>
                  {proyecto.estado}
                </span>
                {proyecto.equipo === 'Solo' ? <User size={18} /> : <Users size={18} />}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProject}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ scale: 0.8, y: -50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: -50 }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <h3 className={styles.modalTitle}>{selectedProject.titulo}</h3>
              <div className={styles.projectInfo}>
                <span className={`${styles.status} ${getStatusColor(selectedProject.estado)}`}>
                  {selectedProject.estado}
                </span>
                {selectedProject.equipo === 'Solo' ? <User size={18} /> : <Users size={18} />}
              </div>
              <p>{selectedProject.descripcion}</p>
              <div className={styles.carousel}>
                <button onClick={prevImage} className={styles.carouselButton}><ChevronLeft /></button>
                <img src={selectedProject.imagen[currentImageIndex]} alt={`${selectedProject.titulo} - Imagen ${currentImageIndex + 1}`} />
                <button onClick={nextImage} className={styles.carouselButton}><ChevronRight /></button>
              </div>
              <div className={styles.buttonContainer}>
                <a href={selectedProject.repoUrl} target="_blank" rel="noopener noreferrer" className={styles.button}>
                  <Github size={18} /> Ver Repositorio
                </a>
                <a href={selectedProject.siteUrl} target="_blank" rel="noopener noreferrer" className={styles.button}>
                  <ExternalLink size={18} /> Ver Sitio
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

