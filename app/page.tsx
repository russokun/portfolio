'use client'
import React from "react";
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Introduccion from '../components/Introduccion'
import Proyectos from '../components/Proyectos'
import Habilidades from '../components/Habilidades'
import Educacion from '../components/Educacion'
import Testimonios from '../components/Testimonios'
import Contacto from '../components/Contacto'
import '../app/globals.css'

export default function Home() {
  return (
    <main>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <section id="inicio">
          <Introduccion />
        </section>
        <section id="proyectos">
          <Proyectos />
        </section>
        <section id="habilidades">
          <Habilidades />
        </section>
        <section id="educacion">
          <Educacion />
        </section>
        <section id="testimonios y contacto">
          <Testimonios />
        </section>
        <section id="contacto">
          <Contacto />
        </section>
      </motion.div>
    </main>
  )
}