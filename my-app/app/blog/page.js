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
      <section className="bg-rose-50 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-rose-600 text-sm font-medium tracking-widest uppercase mb-3">Cunoaștere & inspirație</p>
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
            {posts.map((post, idx) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <article className="h-full bg-white border border-stone-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                  {/* Thumbnail placeholder */}
                  <div className={`aspect-video flex items-center justify-center ${idx % 2 === 0 ? 'bg-rose-50' : 'bg-stone-50'}`}>
                    {/* Înlocuiți cu <img src={post.image} alt={post.title} className="w-full h-full object-cover" /> */}
                    <div className="text-center">
                      <svg className="w-12 h-12 mx-auto text-rose-200 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-xs text-rose-300">Imagine articol</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryColors[post.category] || 'bg-gray-100 text-gray-600'}`}>
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400">{post.date}</span>
                    </div>

                    <h2 className="text-xl font-serif font-bold text-gray-900 mb-3 group-hover:text-rose-700 transition-colors leading-snug">
                      {post.title}
                    </h2>

                    <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-rose-100 flex items-center justify-center">
                          <svg className="w-4 h-4 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                          </svg>
                        </div>
                        <span className="text-xs text-gray-500">{post.author}</span>
                      </div>
                      <span className="text-rose-600 text-sm font-medium group-hover:text-rose-800">
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
      <section className="py-16 bg-rose-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Nu rata niciun articol</h2>
          <p className="text-gray-600 mb-8">
            Abonează-te la newsletter-ul Body Studio și primești lunar articole despre Pilates, sănătate și promoții exclusive.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="adresa.ta@email.ro"
              className="flex-1 border border-rose-200 rounded-full px-5 py-3 text-sm outline-none focus:border-rose-500 bg-white"
            />
            <button
              type="submit"
              className="bg-rose-700 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-rose-800 transition-colors whitespace-nowrap"
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
