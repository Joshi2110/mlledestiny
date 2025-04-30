import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-100 to-white p-6 text-gray-800">
      <section className="text-center py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Les Formations de Mlle Destiny
        </motion.h1>
        <p className="text-lg max-w-xl mx-auto">
          Développe ton plein potentiel avec des formations pensées pour les femmes ambitieuses et alignées.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        {[
          {
            title: "S’aimer d’abord",
            desc: "Une formation pour apprendre à se connaître et à poser ses limites avec douceur.",
          },
          {
            title: "Magnétiser l’amour sain",
            desc: "Découvre comment attirer une relation équilibrée sans perdre ton authenticité.",
          },
          {
            title: "Alignement & Abondance",
            desc: "Libère tes blocages et manifeste une vie en cohérence avec tes désirs.",
          },
        ].map((formation, index) => (
          <div key={index} className="rounded-2xl shadow-xl p-6 bg-white">
            <h2 className="text-2xl font-semibold mb-2">{formation.title}</h2>
            <p className="mb-4">{formation.desc}</p>
            <button className="bg-pink-500 text-white px-4 py-2 rounded-xl w-full">
              Je découvre
            </button>
          </div>
        ))}
      </section>

      <section className="mt-20 max-w-xl mx-auto">
        <h3 className="text-2xl font-bold mb-4 text-center">Contact</h3>
        <form className="space-y-4">
          <input placeholder="Ton prénom" className="w-full border rounded p-2" />
          <input type="email" placeholder="Ton email" className="w-full border rounded p-2" />
          <textarea placeholder="Ton message" className="w-full border rounded p-2" />
          <button className="bg-pink-600 text-white px-4 py-2 rounded-xl w-full">
            Envoyer
          </button>
        </form>
      </section>
    </main>
  );
}