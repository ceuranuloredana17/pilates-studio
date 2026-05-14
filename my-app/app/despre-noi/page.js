export const metadata = {
  title: 'Despre Noi – Body Studio Pilates',
  description: 'Povestea și echipa Body Studio Pilates din Cluj-Napoca.',
}

const team = [
  {
    name: 'Ana Ionescu',
    role: 'Fondatoare & Instructor Principal',
    bio: 'Certificată de Pilates Alliance Australasia (PAA) și STOTT PILATES®, Ana are peste 10 ani de experiență în predarea Pilates. Pasiunea ei pentru mișcare a pornit de la balet și s-a transformat într-o carieră dedicată sănătății și bunăstării.',
    speciality: 'Reformer Pilates, Pilates terapeutic',
  },
  {
    name: 'Maria Popa',
    role: 'Instructor Pilates & Kinetoterapeut',
    bio: 'Licențiată în Kinetoterapie la UMF Cluj, Maria combină cunoștințele medicale cu metoda Pilates pentru a oferi programe de recuperare post-accidentare. Specializată în Pilates prenatal și postnatal.',
    speciality: 'Pilates prenatal, recuperare',
  },
  {
    name: 'Radu Moldovan',
    role: 'Instructor Pilates & Personal Trainer',
    bio: 'Cu background în fitness și sport de performanță, Radu aduce energie și motivație în fiecare clasă. Certificat BASI Pilates, el lucrează îndeosebi cu sportivi care vor să-și îmbunătățească performanța prin Pilates.',
    speciality: 'Pilates pentru sportivi, Mat Pilates',
  },
]

const values = [
  {
    icon: '🎯',
    title: 'Precizie',
    desc: 'Fiecare mișcare este executată conștient și controlat. Calitatea primează întotdeauna în fața cantității.',
  },
  {
    icon: '💨',
    title: 'Respirație',
    desc: 'Respirația corectă este fundamentul metodei Pilates. Ea oxigenează mușchii și coordonează mișcarea.',
  },
  {
    icon: '🧠',
    title: 'Conștientizare',
    desc: 'Pilates cultivă conexiunea profundă minte-corp. Devii conștient de fiecare parte a corpului tău.',
  },
  {
    icon: '🌱',
    title: 'Progres',
    desc: 'Credem în progresul gradual, sustenabil. Fiecare student evoluează în ritmul propriu, fără presiuni.',
  },
]

export default function DesprePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-cream py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-caramel text-sm font-medium tracking-widest uppercase mb-3">Cine suntem</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Despre Body Studio Pilates</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Suntem un studio de Pilates dedicat din Cluj-Napoca, cu misiunea de a face această metodă de mișcare
            accesibilă, plăcută și transformatoare pentru fiecare client.
          </p>
        </div>
      </section>

      {/* POVESTEA */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-caramel text-sm font-medium tracking-widest uppercase mb-3">Povestea noastră</p>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Cum a început totul</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Body Studio Pilates a luat naștere în 2016, când fondatoarea Ana Ionescu s-a întors din Londra cu
                o certificare internațională STOTT PILATES® și un vis: să aducă Pilates-ul autentic acasă, în
                Cluj-Napoca.
              </p>
              <p>
                Primul studio a funcționat într-o sală mică din Mărăști, cu 2 reformere și o grupă de 8 studenți
                entuziaști. Astăzi, Body Studio Pilates este unul dintre cele mai apreciate studiouri de Pilates
                din Transilvania, cu peste 500 de clienți activi și o echipă de 3 instructori certificați.
              </p>
              <p>
                Credem că Pilates nu este doar un antrenament – este o filozofie de viață. O modalitate de a
                asculta corpul, de a-l îngriji și de a construi o relație autentică cu el.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2 rounded-2xl overflow-hidden aspect-video">
              <img src="/images/studio2.jpg" alt="Echipamente Body Studio Pilates" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square">
              <img src="/images/studio3.jpg" alt="Sala Body Studio Pilates" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square">
              <img src="/images/studio1.jpg" alt="Sala principală Body Studio" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* VALORI */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-caramel text-sm font-medium tracking-widest uppercase mb-3">Ce ne ghidează</p>
            <h2 className="text-3xl font-serif font-bold text-gray-900">Valorile Noastre</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-beige">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-serif font-bold text-gray-900 text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIO – Mesaj de bun venit */}
      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-caramel text-sm font-medium tracking-widest uppercase mb-3">Ascultă-ne</p>
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Mesaj de Bun Venit</h2>
          <p className="text-gray-600 mb-8">
            Ana Ionescu vă invită personal să descoperiți lumea Pilates-ului la Body Studio.
          </p>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <p className="text-sm text-gray-700 font-medium mb-4">🎙️ Ana Ionescu – Fondatoare Body Studio Pilates</p>
            <audio controls className="w-full max-w-sm mx-auto">
              <source src="/audio/mesaj-bun-venit.mp3" type="audio/mpeg" />
              Browserul dumneavoastră nu suportă elementul audio.
            </audio>
            <p className="text-xs text-gray-400 mt-4">
              * Adăugați fișierul audio în <code>/public/audio/mesaj-bun-venit.mp3</code>
            </p>
          </div>
        </div>
      </section>

      {/* ECHIPA */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-caramel text-sm font-medium tracking-widest uppercase mb-3">Oamenii din spatele studioului</p>
            <h2 className="text-3xl font-serif font-bold text-gray-900">Echipa Noastră</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-36 h-36 rounded-full mx-auto mb-4 overflow-hidden border-4 border-beige shadow-md">
                  <img
                    src={`/images/${member.name.toLowerCase().replace(' ', '')}.jpg`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif font-bold text-gray-900 text-xl mb-1">{member.name}</h3>
                <p className="text-caramel text-sm font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{member.bio}</p>
                <span className="inline-block text-xs bg-cream text-bark px-3 py-1 rounded-full">
                  {member.speciality}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICARI */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">Certificări & Acreditări</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {['STOTT PILATES®', 'BASI Pilates', 'Pilates Alliance Australasia', 'Balanced Body', 'Polestar Pilates'].map((cert) => (
              <div key={cert} className="bg-white border border-beige rounded-xl px-6 py-3 text-sm font-medium text-gray-700 shadow-sm">
                ✓ {cert}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
