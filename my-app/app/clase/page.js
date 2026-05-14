import Link from 'next/link'

export const metadata = {
  title: 'Clase – Body Studio Pilates',
  description: 'Descoperă toate tipurile de clase de Pilates oferite la Body Studio: Mat, Reformer, Prenatal și Seniori.',
}

const classes = [
  {
    id: 'mat',
    title: 'Mat Pilates',
    icon: '🧘',
    level: 'Toate nivelurile',
    duration: '60 min',
    participants: 'max. 10',
    price: '50 RON / ședință',
    abonament: '180 RON / 4 ședințe',
    description:
      'Mat Pilates este forma originală a metodei, practicată pe saltea cu greutatea propriului corp. Clasele noastre de Mat Pilates acoperă toate nivelurile, de la exerciții fundamentale pentru începători până la secvențe avansate care necesită forță, flexibilitate și echilibru.',
    benefits: [
      'Tonifiere abdomen și zona centrală (core)',
      'Îmbunătățirea posturii și aliniamentului',
      'Creșterea flexibilității',
      'Reducerea stresului și anxietății',
      'Poate fi practicat ulterior și acasă',
    ],
    schedule: [
      { day: 'Luni', time: '09:00 – 10:00' },
      { day: 'Luni', time: '18:00 – 19:00' },
      { day: 'Miercuri', time: '10:00 – 11:00' },
      { day: 'Miercuri', time: '19:00 – 20:00' },
      { day: 'Vineri', time: '09:00 – 10:00' },
      { day: 'Sâmbătă', time: '10:00 – 11:00' },
    ],
  },
  {
    id: 'reformer',
    title: 'Reformer Pilates',
    icon: '⚙️',
    level: 'Începători – Avansat',
    duration: '55 min',
    participants: 'max. 6',
    price: '90 RON / ședință',
    abonament: '320 RON / 4 ședințe',
    description:
      'Reformer Pilates folosește aparatul iconic cu platformă mobilă și arcuri de rezistență reglabile. Versatilitatea reformer-ului permite sute de exerciții care pot fi adaptate atât pentru recuperare, cât și pentru antrenament intensiv. Clasele au maximum 6 participanți pentru atenție individualizată.',
    benefits: [
      'Întărire musculară completă, fără impact articular',
      'Ideal pentru recuperare post-accidentare',
      'Îmbunătățește dramatic aliniamentul corporal',
      'Rezultate vizibile mai rapide față de Mat',
      'Adaptat perfect pentru orice nivel de fitness',
    ],
    schedule: [
      { day: 'Marți', time: '09:00 – 10:00' },
      { day: 'Marți', time: '17:00 – 18:00' },
      { day: 'Joi', time: '10:00 – 11:00' },
      { day: 'Joi', time: '18:00 – 19:00' },
      { day: 'Sâmbătă', time: '11:30 – 12:30' },
    ],
  },
  {
    id: 'prenatal',
    title: 'Pilates Prenatal',
    icon: '🤰',
    level: 'Gravide (trimestrul I–III)',
    duration: '50 min',
    participants: 'max. 6',
    price: '70 RON / ședință',
    abonament: '240 RON / 4 ședințe',
    description:
      'Programul nostru de Pilates Prenatal este conceput special pentru femeile gravide și susținut de o instructoare cu specializare în kinetoterapie. Exercițiile sunt adaptate siguranței mamei și bebelușului, cu focus pe pregătirea corpului pentru naștere și recuperarea postnatală.',
    benefits: [
      'Ameliorarea durerilor de spate specifice sarcinii',
      'Întărirea planșeului pelvin',
      'Reducerea edemelor la picioare',
      'Pregătire pentru naștere (tehnici de respirație)',
      'Conexiune conștientă cu bebelușul',
    ],
    schedule: [
      { day: 'Luni', time: '11:00 – 12:00' },
      { day: 'Joi', time: '11:00 – 12:00' },
      { day: 'Sâmbătă', time: '09:00 – 10:00' },
    ],
  },
  {
    id: 'seniori',
    title: 'Pilates pentru Seniori',
    icon: '🌿',
    level: '60+ ani',
    duration: '50 min',
    participants: 'max. 8',
    price: '45 RON / ședință',
    abonament: '160 RON / 4 ședințe',
    description:
      'Clasele noastre pentru seniori sunt concepute pentru persoanele de 60+ ani care doresc să rămână active, să-și mențină mobilitatea și să prevină căderile. Exercițiile sunt blânde, executate în ritm lent, cu accent pe echilibru, coordonare și flexibilitate.',
    benefits: [
      'Îmbunătățirea echilibrului și prevenirea căderilor',
      'Menținerea mobilității articulațiilor',
      'Creșterea densității osoase',
      'Stimularea circulației sanguine',
      'Socializare și stare de bine generală',
    ],
    schedule: [
      { day: 'Marți', time: '10:30 – 11:20' },
      { day: 'Joi', time: '10:30 – 11:20' },
      { day: 'Sâmbătă', time: '09:00 – 09:50' },
    ],
  },
]

export default function ClasePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-rose-50 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-rose-600 text-sm font-medium tracking-widest uppercase mb-3">Ce oferim</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Clasele Noastre</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            4 tipuri de clase adaptate pentru fiecare nevoie și nivel. Alege programul potrivit pentru tine
            și fă primul pas spre o viață mai echilibrată.
          </p>
        </div>
      </section>

      {/* CLASE */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 space-y-16">
          {classes.map((cls, idx) => (
            <div
              key={cls.id}
              id={cls.id}
              className={`grid md:grid-cols-2 gap-10 items-start ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{cls.icon}</span>
                  <div>
                    <h2 className="text-2xl font-serif font-bold text-gray-900">{cls.title}</h2>
                    <span className="text-sm text-rose-600 font-medium">{cls.level}</span>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">{cls.description}</p>

                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="bg-stone-50 rounded-xl px-4 py-2 text-center">
                    <p className="text-xs text-gray-500">Durată</p>
                    <p className="font-semibold text-gray-800">{cls.duration}</p>
                  </div>
                  <div className="bg-stone-50 rounded-xl px-4 py-2 text-center">
                    <p className="text-xs text-gray-500">Grup</p>
                    <p className="font-semibold text-gray-800">{cls.participants}</p>
                  </div>
                  <div className="bg-rose-50 rounded-xl px-4 py-2 text-center">
                    <p className="text-xs text-rose-600">Preț per ședință</p>
                    <p className="font-bold text-rose-700">{cls.price}</p>
                  </div>
                  <div className="bg-rose-50 rounded-xl px-4 py-2 text-center">
                    <p className="text-xs text-rose-600">Abonament</p>
                    <p className="font-bold text-rose-700">{cls.abonament}</p>
                  </div>
                </div>

                <h4 className="font-semibold text-gray-800 mb-3">Beneficii:</h4>
                <ul className="space-y-2">
                  {cls.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="mt-6 inline-block bg-rose-700 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-rose-800 transition-colors"
                >
                  Rezervă o ședință
                </Link>
              </div>

              <div className={idx % 2 === 1 ? 'md:order-1' : ''}>
                {/* Orar */}
                <div className="bg-stone-50 rounded-2xl p-6">
                  <h4 className="font-serif font-bold text-gray-900 mb-4">📅 Orar Săptămânal</h4>
                  <div className="space-y-2">
                    {cls.schedule.map((s, i) => (
                      <div key={i} className="flex justify-between items-center py-2 border-b border-stone-200 last:border-0">
                        <span className="font-medium text-gray-700 text-sm">{s.day}</span>
                        <span className="text-rose-700 font-semibold text-sm">{s.time}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 mt-4">
                    * Orarul poate varia. Verificați disponibilitatea la contact.
                  </p>
                </div>

                {/* Placeholder imagine */}
                <div className="mt-4 rounded-2xl bg-rose-100 aspect-video flex items-center justify-center">
                  <div className="text-center text-rose-300 p-4">
                    <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-xs">Fotografie clasă {cls.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-rose-700 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-serif font-bold mb-4">Prima ședință gratuită!</h2>
          <p className="text-rose-100 mb-8">
            Vino la o ședință de probă gratuită și descoperă care clasă ți se potrivește cel mai bine.
            Fără angajamente, fără presiuni.
          </p>
          <Link
            href="/contact"
            className="bg-white text-rose-700 px-8 py-3 rounded-full font-bold hover:bg-rose-50 transition-colors inline-block"
          >
            Rezervă acum gratuit
          </Link>
        </div>
      </section>
    </>
  )
}
