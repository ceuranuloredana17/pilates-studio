'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({
    nume: '',
    email: '',
    telefon: '',
    subiect: '',
    mesaj: '',
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* HERO */}
      <section className="bg-cream py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-caramel text-sm font-medium tracking-widest uppercase mb-3">Suntem aici pentru tine</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Contact & Feedback</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ai o întrebare, dorești să rezervi o ședință sau vrei să ne transmiți un feedback?
            Suntem bucuroși să te auzim.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          {/* INFO */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">Informații de Contact</h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-beige rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-caramel" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Adresa</p>
                  <p className="text-gray-600 text-sm">Str. Eroilor, Nr. 25</p>
                  <p className="text-gray-600 text-sm">Cluj-Napoca, România</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-beige rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-caramel" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Telefon</p>
                  <a href="tel:+40712345678" className="text-bark hover:text-espresso text-sm">+40 712 345 678</a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-beige rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-caramel" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Email</p>
                  <a href="mailto:contact@bodystudiopilates.ro" className="text-bark hover:text-espresso text-sm">
                    contact@bodystudiopilates.ro
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-beige rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-caramel" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Program</p>
                  <p className="text-gray-600 text-sm">Luni – Vineri: 08:00 – 21:00</p>
                  <p className="text-gray-600 text-sm">Sâmbătă – Duminică: 09:00 – 17:00</p>
                </div>
              </div>
            </div>

            {/* HARTA placeholder */}
            <div className="mt-8 rounded-2xl bg-stone-100 aspect-video flex items-center justify-center">
              <div className="text-center text-stone-400">
                <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                </svg>
                <p className="text-sm font-medium">Hartă – Google Maps</p>
                <p className="text-xs mt-1">Str. Eroilor, Nr. 25, Cluj-Napoca</p>
              </div>
            </div>

            {/* RETELE SOCIALE */}
            <div className="mt-8">
              <p className="font-semibold text-gray-800 mb-4">Urmărește-ne</p>
              <div className="flex gap-3 flex-wrap">
                {[
                  { name: 'Facebook', href: 'https://facebook.com/bodystudiopilates', color: 'bg-blue-600' },
                  { name: 'Instagram', href: 'https://instagram.com/bodystudiopilates', color: 'bg-pink-600' },
                  { name: 'YouTube', href: 'https://youtube.com/@bodystudiopilates', color: 'bg-red-600' },
                  { name: 'TikTok', href: 'https://tiktok.com/@bodystudiopilates', color: 'bg-gray-800' },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${s.color} text-white text-sm px-4 py-2 rounded-full hover:opacity-90 transition-opacity`}
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* FORMULAR */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">Trimite un Mesaj</h2>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-serif font-bold text-gray-900 text-2xl mb-3">Mulțumim!</h3>
                <p className="text-gray-600 leading-relaxed">
                  Mesajul tău a fost primit. Te vom contacta în cel mai scurt timp posibil,
                  de obicei în 24 de ore.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ nume: '', email: '', telefon: '', subiect: '', mesaj: '' }) }}
                  className="mt-6 text-bark text-sm font-medium hover:text-espresso"
                >
                  Trimite alt mesaj
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nume complet <span className="text-caramel">*</span>
                    </label>
                    <input
                      type="text"
                      name="nume"
                      value={form.nume}
                      onChange={handleChange}
                      required
                      placeholder="Popescu Maria"
                      className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-mink focus:ring-1 focus:ring-mink transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-caramel">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="maria@email.ro"
                      className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-mink focus:ring-1 focus:ring-mink transition"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                    <input
                      type="tel"
                      name="telefon"
                      value={form.telefon}
                      onChange={handleChange}
                      placeholder="+40 7xx xxx xxx"
                      className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-mink focus:ring-1 focus:ring-mink transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subiect</label>
                    <select
                      name="subiect"
                      value={form.subiect}
                      onChange={handleChange}
                      className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-mink focus:ring-1 focus:ring-mink transition bg-white"
                    >
                      <option value="">Selectează...</option>
                      <option value="rezervare">Rezervare ședință</option>
                      <option value="informatii">Informații clase</option>
                      <option value="abonament">Abonamente & prețuri</option>
                      <option value="feedback">Feedback</option>
                      <option value="altele">Altele</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mesaj <span className="text-caramel">*</span>
                  </label>
                  <textarea
                    name="mesaj"
                    value={form.mesaj}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Scrie mesajul tău aici..."
                    className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-mink focus:ring-1 focus:ring-mink transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-bark text-white py-3 rounded-xl font-medium hover:bg-espresso transition-colors"
                >
                  Trimite Mesajul
                </button>

                <p className="text-xs text-gray-400 text-center">
                  Datele tale sunt protejate conform GDPR și nu vor fi transmise terților.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
