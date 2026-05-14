import Link from 'next/link'
import { getPosts } from '../_lib/posts'

export const metadata = {
  title: 'Blog – Body Studio Pilates',
  description: 'Articole despre Pilates, sănătate și mișcare de la instructorii Body Studio Pilates.',
}

const categoryColors = {
  Sănătate: 'bg-green-100 text-green-700',
  Ghiduri: 'bg-blue-100 text-blue-700',
  Informații: 'bg-purple-100 text-purple-700',
  Exerciții: 'bg-orange-100 text-orange-700',
}

export default function BlogPage() {
  const posts = getPosts()

  return (
    <>
      {/* HERO */}
      <section className="bg-cream py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-caramel text-sm font-medium tracking-widest uppercase mb-3">Cunoaștere & inspirație</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Blogul Nostru</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Articole scrise de instructorii noștri despre beneficiile Pilates, sfaturi practice și ghiduri pentru o viață mai sănătoasă.
          </p>
        </div>
      </section>

      {/* ARTICOLE */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <article className="h-full bg-white border border-stone-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryColors[post.category] || 'bg-gray-100 text-gray-600'}`}>
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400">{post.date}</span>
                    </div>

                    <h2 className="text-xl font-serif font-bold text-gray-900 mb-3 group-hover:text-bark transition-colors leading-snug">
                      {post.title}
                    </h2>

                    <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-beige flex items-center justify-center">
                          <svg className="w-4 h-4 text-mink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                          </svg>
                        </div>
                        <span className="text-xs text-gray-500">{post.author}</span>
                      </div>
                      <span className="text-caramel text-sm font-medium group-hover:text-espresso">
                        Citește →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-16 bg-cream">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Nu rata niciun articol</h2>
          <p className="text-gray-600 mb-8">
            Abonează-te la newsletter-ul Body Studio și primești lunar articole despre Pilates, sănătate și promoții exclusive.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="adresa.ta@email.ro"
              className="flex-1 border border-sand rounded-full px-5 py-3 text-sm outline-none focus:border-caramel bg-white"
            />
            <button
              type="submit"
              className="bg-bark text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-espresso transition-colors whitespace-nowrap"
            >
              Abonează-te
            </button>
          </form>
          <p className="text-xs text-gray-400 mt-3">Nu trimitem spam. Te poți dezabona oricând.</p>
        </div>
      </section>
    </>
  )
}
