'use client'

import { useState } from 'react'
import StarRating from '../_components/StarRating'

const questions = [
  {
    id: 'clase',
    label: 'Calitatea cursurilor noastre',
    description: 'Cum evaluezi conținutul, structura și nivelul de dificultate al claselor?',
  },
  {
    id: 'instructori',
    label: 'Profesionalismul instructorilor',
    description: 'Cum evaluezi competența, amabilitatea și disponibilitatea instructorilor?',
  },
  {
    id: 'facilitati',
    label: 'Facilitățile studioului',
    description: 'Cum evaluezi curățenia, echipamentele și spațiul general al studioului?',
  },
  {
    id: 'pret',
    label: 'Raportul calitate–preț',
    description: 'Consideri că prețurile reflectă calitatea serviciilor oferite?',
  },
]

export default function SatisfactiePage() {
  const [ratings, setRatings] = useState({ clase: 0, instructori: 0, facilitati: 0, pret: 0 })
  const [recomandat, setRecomandat] = useState(null)
  const [comentariu, setComentariu] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleRating(id, value) {
    setRatings({ ...ratings, [id]: value })
  }

  const totalFilled = Object.values(ratings).filter((v) => v > 0).length
  const average = totalFilled > 0
    ? (Object.values(ratings).reduce((a, b) => a + b, 0) / Object.values(ratings).filter((v) => v > 0).length).toFixed(1)
    : 0

  function handleSubmit(e) {
    e.preventDefault()
    if (totalFilled < questions.length) return
    setSubmitted(true)
  }

  return (
    <>
      {/* HERO */}
      <section className="bg-rose-50 py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-rose-600 text-sm font-medium tracking-widest uppercase mb-3">Opinia ta contează</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Chestionar de Satisfacție
          </h1>
          <p className="text-lg text-gray-600">
            Completează chestionarul de mai jos și ajută-ne să îmbunătățim continuu serviciile Body Studio Pilates.
            Durează doar 2 minute.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          {submitted ? (
            <div className="text-center py-16">
              <div className="text-7xl mb-6">🌸</div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Mulțumim!</h2>
              <p className="text-gray-600 text-lg mb-6">
                Feedback-ul tău a fost înregistrat. Îl vom folosi pentru a ne îmbunătăți continuu.
              </p>

              <div className="bg-rose-50 rounded-2xl p-6 mb-8 inline-block">
                <p className="text-sm text-gray-500 mb-1">Scor general</p>
                <p className="text-5xl font-serif font-bold text-rose-700">{average}</p>
                <div className="flex justify-center gap-1 mt-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className={parseFloat(average) >= s ? 'text-amber-400 text-2xl' : 'text-gray-200 text-2xl'}>★</span>
                  ))}
                </div>
                <p className="text-sm text-gray-400 mt-2">din 5 stele</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8 text-left">
                {questions.map((q) => (
                  <div key={q.id} className="bg-stone-50 rounded-xl p-4">
                    <p className="text-xs text-gray-500 mb-1">{q.label}</p>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <span key={s} className={ratings[q.id] >= s ? 'text-amber-400' : 'text-gray-200'}>★</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  setSubmitted(false)
                  setRatings({ clase: 0, instructori: 0, facilitati: 0, pret: 0 })
                  setRecomandat(null)
                  setComentariu('')
                }}
                className="text-rose-700 font-medium hover:text-rose-900 text-sm"
              >
                ← Completează din nou
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* INDICATII */}
              <div className="bg-rose-50 rounded-2xl p-5 mb-8 flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <p className="text-sm text-gray-600">
                  Acordă câte 1–5 stele pentru fiecare criteriu. <strong>1 stea</strong> = nesatisfăcător,{' '}
                  <strong>5 stele</strong> = excelent. Toate câmpurile cu stele sunt obligatorii.
                </p>
              </div>

              {/* INTREBARI */}
              <div className="space-y-8">
                {questions.map((q, idx) => (
                  <div key={q.id} className="border border-stone-200 rounded-2xl p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <span className="bg-rose-100 text-rose-700 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                        {idx + 1}
                      </span>
                      <div>
                        <p className="font-serif font-bold text-gray-900">{q.label}</p>
                        <p className="text-sm text-gray-500 mt-1">{q.description}</p>
                      </div>
                    </div>
                    <StarRating
                      value={ratings[q.id]}
                      onChange={(val) => handleRating(q.id, val)}
                    />
                  </div>
                ))}
              </div>

              {/* NPS */}
              <div className="border border-stone-200 rounded-2xl p-6 mt-8">
                <p className="font-serif font-bold text-gray-900 mb-4">
                  Ai recomanda Body Studio Pilates unui prieten sau coleg?
                </p>
                <div className="flex gap-3 flex-wrap">
                  {['Da, cu siguranță!', 'Probabil da', 'Nu știu', 'Probabil nu'].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setRecomandat(opt)}
                      className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                        recomandat === opt
                          ? 'bg-rose-700 text-white border-rose-700'
                          : 'border-stone-200 text-gray-600 hover:border-rose-300'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* COMENTARIU */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Comentarii sau sugestii (opțional)
                </label>
                <textarea
                  value={comentariu}
                  onChange={(e) => setComentariu(e.target.value)}
                  rows={4}
                  placeholder="Spune-ne ce ai aprecia dacă am îmbunătăți sau ce ți-a plăcut în mod special..."
                  className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400 transition resize-none"
                />
              </div>

              {/* PROGRES */}
              <div className="mt-6 mb-4">
                <div className="flex justify-between text-sm text-gray-500 mb-1">
                  <span>Progres</span>
                  <span>{totalFilled}/{questions.length} completate</span>
                </div>
                <div className="w-full bg-stone-100 rounded-full h-2">
                  <div
                    className="bg-rose-500 h-2 rounded-full transition-all"
                    style={{ width: `${(totalFilled / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={totalFilled < questions.length}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-colors ${
                  totalFilled === questions.length
                    ? 'bg-rose-700 text-white hover:bg-rose-800 cursor-pointer'
                    : 'bg-stone-100 text-stone-400 cursor-not-allowed'
                }`}
              >
                {totalFilled < questions.length
                  ? `Completează toate câmpurile (${questions.length - totalFilled} rămase)`
                  : 'Trimite Feedback-ul ★'}
              </button>

              <p className="text-xs text-gray-400 text-center mt-3">
                Feedback-ul este anonim și nu se salvează date personale.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
