export const metadata = {
  title: 'Galerie – Body Studio Pilates',
  description: 'Fotografii și videoclipuri din studioul Body Studio Pilates din Cluj-Napoca.',
}

const photoCategories = [
  {
    category: 'Studioul nostru',
    photos: [
      { label: 'Sala principală', color: 'bg-rose-100' },
      { label: 'Zona Reformer', color: 'bg-rose-200' },
      { label: 'Recepție', color: 'bg-stone-100' },
      { label: 'Vestiare', color: 'bg-stone-200' },
    ],
  },
  {
    category: 'Clase în desfășurare',
    photos: [
      { label: 'Mat Pilates', color: 'bg-rose-100' },
      { label: 'Reformer Pilates', color: 'bg-rose-200' },
      { label: 'Pilates Prenatal', color: 'bg-stone-100' },
      { label: 'Pilates Seniori', color: 'bg-stone-200' },
      { label: 'Clasă de grup', color: 'bg-rose-100' },
      { label: 'Ședință individuală', color: 'bg-rose-200' },
    ],
  },
  {
    category: 'Evenimente și workshop-uri',
    photos: [
      { label: 'Workshop intensiv', color: 'bg-stone-100' },
      { label: 'Open day 2025', color: 'bg-rose-100' },
      { label: 'Retreat Pilates', color: 'bg-rose-200' },
    ],
  },
]

const videos = [
  {
    title: 'Prezentarea studioului Body Studio Pilates',
    embedUrl: 'https://www.youtube.com/embed/v7AYKMP6rOE',
    desc: 'Tur virtual al studioului nostru și prezentarea serviciilor',
  },
  {
    title: 'Exerciții Mat Pilates pentru începători',
    embedUrl: 'https://www.youtube.com/embed/lBSHYbDNdGg',
    desc: 'Tutorial cu cele mai importante exerciții pentru începători',
  },
]

export default function GaleriePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-rose-50 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-rose-600 text-sm font-medium tracking-widest uppercase mb-3">Vizitează-ne</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Galerie</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Aruncă o privire în interiorul studioului nostru și descoperă atmosfera în care ne desfășurăm clasele.
          </p>
        </div>
      </section>

      {/* FOTOGRAFII */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {photoCategories.map((cat) => (
            <div key={cat.category} className="mb-16">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 pb-2 border-b border-rose-100">
                {cat.category}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {cat.photos.map((photo, idx) => (
                  <div
                    key={idx}
                    className={`${photo.color} rounded-xl aspect-square flex flex-col items-center justify-center group cursor-pointer hover:opacity-90 transition-opacity overflow-hidden relative`}
                  >
                    {/* Înlocuiți cu imaginea reală: <img src="/images/..." alt={photo.label} className="w-full h-full object-cover" /> */}
                    <svg className="w-10 h-10 text-rose-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-xs text-rose-400 font-medium px-2 text-center">{photo.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="bg-rose-50 rounded-2xl p-8 text-center">
            <h3 className="font-serif font-bold text-gray-900 text-xl mb-3">📸 Fotografiile dvs. vor apărea aici</h3>
            <p className="text-gray-600 text-sm mb-4">
              Adăugați fotografiile studioului în directorul <code className="bg-white px-2 py-1 rounded">/public/images/</code> și înlocuiți placeholder-ele de mai sus.
            </p>
            <p className="text-xs text-gray-400">
              Format recomandat: JPG sau WebP, minim 800×800px, maxim 2MB per fotografie.
            </p>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-rose-600 text-sm font-medium tracking-widest uppercase mb-3">Video</p>
            <h2 className="text-3xl font-serif font-bold text-gray-900">Videoclipuri</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {videos.map((video) => (
              <div key={video.title} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="aspect-video">
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-serif font-bold text-gray-900 mb-1">{video.title}</h3>
                  <p className="text-sm text-gray-500">{video.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM FEED */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Urmărește-ne pe Instagram</h2>
          <p className="text-gray-600 mb-8">
            Descoperă exerciții, sfaturi și momentele din spatele camerelor pe contul nostru de Instagram.
          </p>
          <a
            href="https://instagram.com/bodystudiopilates"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-br from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            @bodystudiopilates
          </a>
        </div>
      </section>
    </>
  )
}
