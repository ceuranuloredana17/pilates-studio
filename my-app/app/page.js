import Link from 'next/link'
import { getPosts } from './_lib/posts'

export default function HomePage() {
  const latestPosts = getPosts().slice(0, 3)

  return (
    <>
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-cream via-stone-50 to-beige min-h-[90vh] flex items-center">
        <div className="max-w-6xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-12 items-center w-full">
          <div>
            <p className="text-caramel text-sm font-medium tracking-widest uppercase mb-4">Studio de Pilates · Cluj-Napoca</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight mb-6">
              Descoperă Echilibrul<br />
              <span className="text-bark">Prin Pilates</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              Clase personalizate de Mat Pilates și Reformer Pilates pentru toate nivelurile.
              Redescoperă conexiunea dintre corp și minte, pas cu pas.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/clase"
                className="bg-bark text-white px-8 py-3 rounded-full font-medium hover:bg-espresso transition-colors"
              >
                Clasele Noastre
              </Link>
              <Link
                href="/contact"
                className="border-2 border-bark text-bark px-8 py-3 rounded-full font-medium hover:bg-cream transition-colors"
              >
                Rezervă Gratuit
              </Link>
            </div>
            <div className="flex gap-8 mt-12">
              <div>
                <p className="text-3xl font-serif font-bold text-bark">500+</p>
                <p className="text-sm text-gray-500">Clienți satisfăcuți</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-bark">8+</p>
                <p className="text-sm text-gray-500">Ani de experiență</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-bark">4</p>
                <p className="text-sm text-gray-500">Tipuri de clase</p>
              </div>
            </div>
          </div>

          {/* Placeholder imagine hero */}
          <div className="hidden md:flex items-center justify-center">
            <div className="w-full aspect-square max-w-md rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/images/hero.jpg"
                alt="Body Studio Pilates – Recepție"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Wave decorator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* DESPRE NOI PREVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl aspect-video overflow-hidden">
            <img
              src="/images/studio1.jpg"
              alt="Sala de Pilates – Body Studio"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-caramel text-sm font-medium tracking-widest uppercase mb-3">Povestea noastră</p>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">De ce Body Studio Pilates?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Body Studio Pilates s-a născut din pasiunea pentru mișcare conștientă și dorința de a aduce în Cluj-Napoca o experiență Pilates autentică. Cu instructori certificați internațional și echipamente de ultimă generație, creăm un spațiu sigur și inspirant pentru toți.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Filosofia noastră se bazează pe trei piloni: <strong>precizie</strong> în executarea mișcărilor, <strong>respirație</strong> controlată și <strong>conștientizare</strong> a propriului corp.
            </p>
            <Link href="/despre-noi" className="text-bark font-medium hover:text-espresso inline-flex items-center gap-2">
              Află mai multe despre noi
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CLASE */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-caramel text-sm font-medium tracking-widest uppercase mb-3">Oferta noastră</p>
            <h2 className="text-3xl font-serif font-bold text-gray-900">Tipuri de Clase</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🧘',
                title: 'Mat Pilates',
                desc: 'Exerciții pe saltea cu greutatea corpului. Ideal pentru începători și pentru consolidarea bazei.',
                level: 'Toate nivelurile',
              },
              {
                icon: '⚙️',
                title: 'Reformer Pilates',
                desc: 'Aparatul cu arcuri pentru antrenament precis și eficient. Rezultate vizibile rapid.',
                level: 'Începători – Avansat',
              },
              {
                icon: '🌿',
                title: 'Clase în Aer Liber',
                desc: 'Pilates și fitness în natură. Sesiuni în aer liber pentru energie și stare de bine.',
                level: 'Toate nivelurile',
              },
              {
                icon: '🔥',
                title: 'Saună',
                desc: 'Relaxare și recuperare musculară în sauna noastră finlandeză, disponibilă după antrenament.',
                level: 'Toți clienții',
              },
            ].map((cls) => (
              <div key={cls.title} className="bg-white rounded-2xl p-6 shadow-sm border border-beige hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{cls.icon}</div>
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">{cls.title}</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{cls.desc}</p>
                <span className="inline-block text-xs bg-cream text-bark px-3 py-1 rounded-full">
                  {cls.level}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/clase" className="bg-bark text-white px-8 py-3 rounded-full font-medium hover:bg-espresso transition-colors inline-block">
              Vezi toate clasele și prețurile
            </Link>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-caramel text-sm font-medium tracking-widest uppercase mb-3">Vezi cum lucrăm</p>
            <h2 className="text-3xl font-serif font-bold text-gray-900">Pilates în Acțiune</h2>
          </div>
          <div className="aspect-video w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.youtube.com/embed/v7AYKMP6rOE"
              title="Pilates Demo – Body Studio"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <p className="text-center text-sm text-gray-400 mt-3">
            Vizionați o demonstrație a exercițiilor de Pilates pentru începători
          </p>
        </div>
      </section>

      {/* AUDIO */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-caramel text-sm font-medium tracking-widest uppercase mb-3">Atmosfera studioului</p>
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Muzica Ambientală</h2>
          <p className="text-gray-600 mb-8">
            La Body Studio Pilates, creăm un mediu relaxant cu muzică special selectată pentru practica Pilates.
            Ascultați o mostră din playlist-ul nostru:
          </p>
          <div className="bg-white rounded-2xl p-6 shadow-sm inline-block w-full max-w-md">
            <p className="text-sm text-gray-500 mb-3">🎵 Playlist Pilates – Body Studio</p>
            <audio controls className="w-full">
              <source src="/audio/pilates-ambient.mp3" type="audio/mpeg" />
              Browserul dumneavoastră nu suportă elementul audio.
            </audio>
            <p className="text-xs text-gray-400 mt-3">
              * Adăugați fișierul audio în <code>/public/audio/pilates-ambient.mp3</code>
            </p>
          </div>
        </div>
      </section>

      {/* SOCIAL LINKS */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-serif font-bold mb-4">Urmărește-ne pe Rețele Sociale</h2>
          <p className="text-gray-400 mb-10">
            Fii la curent cu noutățile, exercițiile și promoțiile Body Studio Pilates.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Facebook', href: 'https://facebook.com/bodystudiopilates', color: 'bg-blue-600 hover:bg-blue-700', icon: 'f' },
              { name: 'Instagram', href: 'https://instagram.com/bodystudiopilates', color: 'bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600', icon: '📷' },
              { name: 'YouTube', href: 'https://youtube.com/@bodystudiopilates', color: 'bg-red-600 hover:bg-red-700', icon: '▶' },
              { name: 'TikTok', href: 'https://tiktok.com/@bodystudiopilates', color: 'bg-gray-800 hover:bg-black', icon: '♪' },
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} text-white rounded-xl py-4 px-6 flex flex-col items-center gap-2 transition-all transform hover:scale-105`}
              >
                <span className="text-2xl">{social.icon}</span>
                <span className="font-medium text-sm">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-caramel text-sm font-medium tracking-widest uppercase mb-2">Sfaturi și noutăți</p>
              <h2 className="text-3xl font-serif font-bold text-gray-900">Ultimele Articole</h2>
            </div>
            <Link href="/blog" className="text-bark font-medium hover:text-espresso text-sm hidden md:block">
              Vezi toate →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <div className="rounded-xl aspect-video mb-4 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <span className="text-xs text-caramel font-medium">{post.category}</span>
                <h3 className="font-serif font-bold text-gray-900 mt-1 mb-2 group-hover:text-bark transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2">{post.excerpt}</p>
                <p className="text-xs text-gray-400 mt-3">{post.date} · {post.author}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8 md:hidden">
            <Link href="/blog" className="text-bark font-medium">
              Vezi toate articolele →
            </Link>
          </div>
        </div>
      </section>

      {/* QUESTIONNAIRE CTA */}
      <section className="py-16 bg-bark text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-serif font-bold mb-4">Cum ne evaluezi?</h2>
          <p className="text-beige mb-8">
            Părerile tale contează. Acordă-ne 2 minute pentru a completa chestionarul de satisfacție
            și ajută-ne să îmbunătățim serviciile noastre.
          </p>
          <Link
            href="/satisfactie"
            className="bg-white text-bark px-8 py-3 rounded-full font-bold hover:bg-cream transition-colors inline-block"
          >
            Completează chestionarul ★★★★★
          </Link>
        </div>
      </section>
    </>
  )
}
