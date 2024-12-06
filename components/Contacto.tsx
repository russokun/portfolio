'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react'
import styles from './Contacto.module.css'

export default function Contacto() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  const toggleForm = () => setIsFormOpen(!isFormOpen)

  return (
    <section id="contacto" className={styles.contacto}>
      <h2 className={styles.title}>Contacto</h2>
      <motion.button
        className={styles.contactButton}
        onClick={toggleForm}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isFormOpen ? 'Cerrar formulario' : 'Abrir formulario de contacto'}
      </motion.button>
      <motion.div
        initial={false}
        animate={{ height: isFormOpen ? 'auto' : 0, opacity: isFormOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={styles.formContainer}
      >
        <form className={styles.form}>
          <input type="text" placeholder="Nombre" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Mensaje" required></textarea>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enviar <Send size={18} />
          </motion.button>
        </form>
      </motion.div>
      <div className={styles.socialLinks}>
        <motion.a href="#" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <Github size={24} />
        </motion.a>
        <motion.a href="#" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <Linkedin size={24} />
        </motion.a>
        <motion.a href="#" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <Twitter size={24} />
        </motion.a>
        <motion.a href="#" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <Instagram size={24} />
        </motion.a>
      </div>
      <footer className={styles.footer}>
        <p>
          Hecho con <span className={styles.heart}>❤️</span> por Agustin Russo
        </p>
        <p>Sitio Hecho con Next.js + React</p>
      </footer>
    </section>
  )
}

