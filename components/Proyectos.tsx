'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {  Github, ExternalLink, User, Users } from 'lucide-react'
//import { FaJava, FaJsSquare, FaReact, FaHtml5, FaCss3Alt, FaPython } from 'react-icons/fa';
//import { SiSpringboot, SiTypescript, SiVite, SiNextdotjs } from 'react-icons/si';
import styles from './Proyectos.module.css'

interface Proyecto {
  id: number
  titulo: string
  descripcion: string
  imagen: string[]
  equipo: 'Solo' | 'Equipo'
  estado: 'Por corregir' | 'En desarrollo' | 'Finalizado'
  repoUrl: string
  siteUrl: string
  tecnologias: string[]
}

const proyectos: Proyecto[] = [
  {
    id: 1,
    titulo: 'MindHub HomeBanking App',
    descripcion: 'Web App con funcionalidades Bancarias. Cuenta con un sistema de autenticación y base de datos en tiempo real.',
    imagen: ['https://st4.depositphotos.com/20523700/25947/i/450/depositphotos_259477098-stock-photo-illustration-bank-icon.jpg', '/placeholder.svg?height=300&width=300'],
    equipo: 'Solo',
    estado: 'Por corregir',
    repoUrl: 'https://github.com/russokun/homeBanking',
    siteUrl: 'https://homebankingg.onrender.com/',
    tecnologias: ['React', 'Java', 'PostgreSQL', 'Spring Boot']
  },
  {
    id: 2,
    titulo: 'SST Games',
    descripcion: 'Landing Web de Creadores de juegos de alto impacto para minimizar riesgos psico-sociales para aplicar en cortos espacios de tiempo.',
    imagen: ['/img/14.png', '/img/18.png'],
    equipo: 'Solo',
    estado: 'En desarrollo',
    repoUrl: 'https://github.com/russokun/SSTGamesMVP',
    siteUrl: 'https://russokun.github.io/SSTGamesMVP/',
    tecnologias: ['React', 'TailwindCSS', 'JavaScript']
  },
  {
    id: 3,
    titulo: 'BattleShip Game',
    descripcion: 'Juego Web 1vs1, basado en el clasico juego de mesa "Batalla Naval". Cuenta con un sistema de autenticación y base de datos en tiempo real.',
    imagen: ['https://media.istockphoto.com/id/1411179874/vector/battleship-mascot-logo-design.jpg?s=612x612&w=0&k=20&c=S2_PDRJBN6cSSASnuLHRpN5444iQyF2XuYbYPf_YUyQ=', '/placeholder.svg?height=300&width=300'],
    equipo: 'Equipo',
    estado: 'Finalizado',
    repoUrl: 'https://github.com/usuario/proyecto3',
    siteUrl: 'https://battleshipgameproyectfront-nzpp.onrender.com/',
    tecnologias: ['React', 'Java', 'PostgreSQL', 'Spring Boot']
  },
  {
    id: 4,
    titulo: 'Stride Gear',
    descripcion: 'Web para E-commerce de zapatillas y ropa deportiva de alta calidad, con un diseño minimalista y moderno. Cuenta con un carrito de compras y un panel de administración para gestionar productos y pedidos.',
    imagen: ['/img/logoconfondo.png', '/placeholder.svg?height=300&width=300'],
    equipo: 'Equipo',
    estado: 'Finalizado',
    repoUrl: 'https://github.com/russokun/Stride-Gear',
    siteUrl: 'https://russokun.github.io/Stride-Gear/',
    tecnologias: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: 5,
    titulo: 'Farmacias Chile',
    descripcion: 'Web para Analisis y Demostracion de Ciencia de Datos a modo de Solemne, enfocado a la existencia demografica, segun API publica/goburnamental sobre; Farmacias en Chile.',
    imagen: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxFdjBjHjzg1j-MW3aiWqAW2sg7s2A7DJB7Q&s', '/placeholder.svg?height=300&width=300'],
    equipo: 'Solo',
    estado: 'Finalizado',
    repoUrl: 'https://github.com/russokun/solemne3',
    siteUrl: 'https://solemne3-bros.streamlit.app/',
    tecnologias: ['Python', 'Pandas', 'Streamlit']
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
                <div className={styles.tecnologias}>
                  {proyecto.tecnologias.map((tecnologia, index) => (
                    <span key={index} className={styles.tecnologia}>{tecnologia}</span>
                  ))}
                </div>
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
                <div className={styles.divardo}>
                  <span className={`${styles.status} ${getStatusColor(selectedProject.estado)}`}>
                    {selectedProject.estado}
                  </span>
                  {selectedProject.equipo === 'Solo' ? <User size={20} /> : <Users size={20} />}
                </div>
                <div className={styles.tecnologias}>
                  {selectedProject.tecnologias.map((tecnologia, index) => (
                    <span key={index} className={styles.tecnologia}>{tecnologia}</span>
                  ))}
                </div>
              </div>
              <p>{selectedProject.descripcion}</p>
              
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
