import Link from 'next/link'

export const metadata = {
  title: 'Clase & Servicii – Body Studio Pilates',
  description: 'Mat Pilates, Reformer Pilates, clase în aer liber și saună la Body Studio Cluj-Napoca.',
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
    image: '/images/studio1.jpg',
    description:
      'Mat Pilates este forma originală a metodei, practicată pe saltea cu greutatea propriului corp. Clasele noastre acoperă toate nivelurile, de la exerciții fundamentale pentru începători până la secvențe avansate care necesită forță, flexibilitate și echilibru.',
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
    image: '/images/studio2.jpg',
    description:
      'Reformer Pilates folosește aparatul iconic cu platformă mobilă și arcuri de rezistență reglabile. Versatilitatea reformer-ului permite sute de exerciții adaptate atât pentru recuperare, cât și pentru antrenament intensiv. Clasele au maximum 6 participanți pentru atenție individualizată.',
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
]

export default function ClasePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-cream py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-caramel text-sm font-medium tracking-widest uppercase mb-3">Ce oferim</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Clase & Servicii</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pilates în studio, activități în aer liber și saună — tot ce ai nevoie pentru corp și minte, într-un singur loc.
          </p>
        </div>
      </section>

      {/* CLASE PILATES */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-12 pb-3 border-b border-beige">
            🧘 Clase de Pilates
          </h2>
          <div className="space-y-16">
            {classes.map((cls, idx) => (
              <div
                key={cls.id}
                id={cls.id}
                className="grid md:grid-cols-2 gap-10 items-start"
              >
                <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{cls.icon}</span>
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-gray-900">{cls.title}</h3>
                      <span className="text-sm text-caramel font-medium">{cls.level}</span>
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
                    <div className="bg-cream rounded-xl px-4 py-2 text-center">
                      <p className="text-xs text-caramel">Preț per ședință</p>
                      <p className="font-bold text-bark">{cls.price}</p>
                    </div>
                    <div className="bg-cream rounded-xl px-4 py-2 text-center">
                      <p className="text-xs text-caramel">Abonament</p>
                      <p className="font-bold text-bark">{cls.abonament}</p>
                    </div>
                  </div>

                  <h4 className="font-semibold text-gray-800 mb-3">Beneficii:</h4>
                  <ul className="space-y-2">
                    {cls.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-caramel mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="mt-6 inline-block bg-bark text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-espresso transition-colors"
                  >
                    Rezervă o ședință
                  </Link>
                </div>

                <div className={idx % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="bg-stone-50 rounded-2xl p-6 mb-4">
                    <h4 className="font-serif font-bold text-gray-900 mb-4">📅 Orar Săptămânal</h4>
                    <div className="space-y-2">
                      {cls.schedule.map((s, i) => (
                        <div key={i} className="flex justify-between items-center py-2 border-b border-stone-200 last:border-0">
                          <span className="font-medium text-gray-700 text-sm">{s.day}</span>
                          <span className="text-bark font-semibold text-sm">{s.time}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-gray-400 mt-4">* Orarul poate varia. Verificați disponibilitatea la contact.</p>
                  </div>

                  <div className="rounded-2xl overflow-hidden aspect-video">
                    {cls.image ? (
                      <img src={cls.image} alt={cls.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-cream flex items-center justify-center">
                        <span className="text-mink text-sm">Fotografie {cls.title}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLASE ÎN AER LIBER */}
      <section className="py-20 bg-stone-50" id="aer-liber">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <p className="text-caramel text-sm font-medium tracking-widest uppercase mb-3">Outside Activity</p>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Clase în Aer Liber</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Când vremea o permite, ieșim din studio și ducem practica Pilates în natură. Clasele noastre în aer
                liber combină exercițiile clasice de Mat Pilates cu aerul curat și energia naturii, pentru o
                experiență completă de mișcare și relaxare.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Sesiunile au loc în parcurile din Cluj-Napoca și în locații speciale în împrejurimi, în funcție
                de sezon. Grupele sunt mici (max. 8 persoane) pentru o atmosferă intimă și personalizată.
              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-white rounded-xl px-4 py-2 text-center shadow-sm">
                  <p className="text-xs text-gray-500">Durată</p>
                  <p className="font-semibold text-gray-800">75 min</p>
                </div>
                <div className="bg-white rounded-xl px-4 py-2 text-center shadow-sm">
                  <p className="text-xs text-gray-500">Grup</p>
                  <p className="font-semibold text-gray-800">max. 8</p>
                </div>
                <div className="bg-cream rounded-xl px-4 py-2 text-center">
                  <p className="text-xs text-caramel">Preț</p>
                  <p className="font-bold text-bark">60 RON / ședință</p>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {[
                  'Pilates mat în parc sau în natură',
                  'Exerciții de mobilitate și stretching',
                  'Respirație și mindfulness în aer liber',
                  'Disponibil primăvară – toamnă',
                  'Saltele și accesorii puse la dispoziție',
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-caramel mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="inline-block bg-bark text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-espresso transition-colors"
              >
                Rezervă o ședință în aer liber
              </Link>
            </div>

            {/* Grid 4 poze outdoor */}
            <div className="grid grid-cols-2 gap-3">
              {['outsideactivity1.jpg', 'outsideactivity2.jpg', 'outsideactivity3.jpg', 'outsideactivity4.jpg'].map((img, i) => (
                <div key={i} className="rounded-2xl overflow-hidden aspect-square">
                  <img
                    src={`/images/${img}`}
                    alt={`Clasă în aer liber ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SAUNĂ */}
      <section className="py-20 bg-white" id="sauna">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Grid 2 poze saună */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl overflow-hidden aspect-square col-span-2">
                <img
                  src="/images/sauna.jpg"
                  alt="Sauna Body Studio Pilates"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-video col-span-2">
                <img
                  src="/images/sauna2.jpg"
                  alt="Sauna Body Studio Pilates interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <p className="text-caramel text-sm font-medium tracking-widest uppercase mb-3">Relaxare & Recuperare</p>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Saună</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                La Body Studio Pilates, experiența nu se oprește la finalul clasei. Studioul nostru dispune de
                o saună finlandeză modernă, disponibilă clienților noștri pentru relaxare și recuperare musculară
                după antrenament.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Căldura sauni accelerează eliminarea toxinelor, relaxează mușchii tensionați și îmbunătățește
                circulația sanguină — beneficii ideale după o ședință intensă de Pilates sau Reformer.
              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-stone-50 rounded-xl px-4 py-2 text-center">
                  <p className="text-xs text-gray-500">Capacitate</p>
                  <p className="font-semibold text-gray-800">4 persoane</p>
                </div>
                <div className="bg-stone-50 rounded-xl px-4 py-2 text-center">
                  <p className="text-xs text-gray-500">Temperatură</p>
                  <p className="font-semibold text-gray-800">80–90°C</p>
                </div>
                <div className="bg-cream rounded-xl px-4 py-2 text-center">
                  <p className="text-xs text-caramel">Preț</p>
                  <p className="font-bold text-bark">30 RON / 30 min</p>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {[
                  'Saună finlandeză cu lemn de pin',
                  'Relaxare musculară profundă post-antrenament',
                  'Detoxifiere și îmbunătățirea circulației',
                  'Rezervare inclusă cu abonamentul premium',
                  'Prosop și papuci de unică folosință incluse',
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-caramel mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="inline-block bg-bark text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-espresso transition-colors"
              >
                Rezervă sauna
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-bark text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-serif font-bold mb-4">Prima ședință gratuită!</h2>
          <p className="text-beige mb-8">
            Vino la o ședință de probă gratuită și descoperă care clasă ți se potrivește cel mai bine.
            Fără angajamente, fără presiuni.
          </p>
          <Link
            href="/contact"
            className="bg-white text-bark px-8 py-3 rounded-full font-bold hover:bg-cream transition-colors inline-block"
          >
            Rezervă acum gratuit
          </Link>
        </div>
      </section>
    </>
  )
}
