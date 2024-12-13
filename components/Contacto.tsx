'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Github, Linkedin, Facebook, Instagram } from 'lucide-react'
import emailjs from 'emailjs-com'
import styles from './Contacto.module.css'

export default function Contacto() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const toggleForm = () => setIsFormOpen(!isFormOpen)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    emailjs.send(
      'service_secpyzb', // Reemplaza con tu Service ID
      'template_h0pfpsi', // Reemplaza con tu Template ID
      formData,
      'Rjjra0Yxp6lFOdV7D' // Reemplaza con tu User ID
    ).then((result) => {
      console.log(result.text)
      alert('Correo enviado exitosamente')
    }, (error) => {
      console.log(error.text)
      alert('Error al enviar el correo')
    })
  }

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
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Mensaje"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
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
          <Facebook size={24} />
        </motion.a>
        <motion.a href="#" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <Instagram size={24} />
        </motion.a>
      </div>
      <footer className={styles.footer}>
        <p>
          Hecho con <span className={styles.heart}>❤️</span> por Agustin Russo
        </p>
        <p>Sitio Hecho con Next.js + React + TypeScript</p>
      </footer>
    </section>
  )
}