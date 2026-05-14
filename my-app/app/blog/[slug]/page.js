import Link from 'next/link'
import { getPosts, getPostBySlug } from '../../_lib/posts'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} – Body Studio Pilates`,
    description: post.excerpt,
  }
}

const categoryColors = {
  Sănătate: 'bg-green-100 text-green-700',
  Ghiduri: 'bg-blue-100 text-blue-700',
  Informații: 'bg-purple-100 text-purple-700',
  Exerciții: 'bg-orange-100 text-orange-700',
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  const otherPosts = getPosts().filter((p) => p.slug !== slug).slice(0, 3)

  const contentLines = post.content.trim().split('\n')

  return (
    <>
      {/* HERO */}
      <section className="bg-cream py-16">
        <div className="max-w-3xl mx-auto px-4">
          <Link href="/blog" className="text-caramel text-sm hover:text-espresso inline-flex items-center gap-1 mb-6">
            ← Înapoi la Blog
          </Link>
          <span className={`text-xs font-medium px-3 py-1 rounded-full ${categoryColors[post.category] || 'bg-gray-100 text-gray-600'}`}>
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-4 mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>✍️ {post.author}</span>
            <span>📅 {post.date}</span>
          </div>
        </div>
      </section>

      {/* IMAGINE ARTICOL */}
      <div className="max-w-3xl mx-auto px-4 -mt-4 mb-12">
        <div className="rounded-2xl aspect-video overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* CONTENT */}
      <article className="max-w-3xl mx-auto px-4 pb-20">
        <div className="prose prose-lg max-w-none">
          {contentLines.map((line, idx) => {
            const trimmed = line.trim()
            if (!trimmed) return <br key={idx} />

            if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
              return (
                <h3 key={idx} className="text-xl font-serif font-bold text-gray-900 mt-8 mb-3">
                  {trimmed.slice(2, -2)}
                </h3>
              )
            }

            if (trimmed.startsWith('- ')) {
              return (
                <li key={idx} className="flex items-start gap-2 text-gray-700 mb-2">
                  <svg className="w-4 h-4 text-caramel mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>{trimmed.slice(2)}</span>
                </li>
              )
            }

            if (/^\d+\./.test(trimmed)) {
              return (
                <p key={idx} className="text-gray-700 mb-2 pl-2 border-l-2 border-sand">
                  {trimmed}
                </p>
              )
            }

            if (trimmed.startsWith('---')) {
              return <hr key={idx} className="border-beige my-6" />
            }

            if (trimmed.startsWith('*') && trimmed.endsWith('*')) {
              return (
                <p key={idx} className="italic text-gray-500 text-center my-4">
                  {trimmed.slice(1, -1)}
                </p>
              )
            }

            return (
              <p key={idx} className="text-gray-700 leading-relaxed mb-4">
                {trimmed}
              </p>
            )
          })}
        </div>

        {/* SHARE */}
        <div className="mt-12 pt-6 border-t border-stone-200">
          <p className="text-sm text-gray-500 mb-3">Distribuie articolul:</p>
          <div className="flex gap-3">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=https://bodystudiopilates.ro/blog/${post.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white text-sm px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              Facebook
            </a>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(post.title + ' – Body Studio Pilates')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white text-sm px-4 py-2 rounded-full hover:bg-green-700 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 bg-cream rounded-2xl p-6 text-center">
          <h3 className="font-serif font-bold text-gray-900 text-xl mb-2">Vrei să practici Pilates?</h3>
          <p className="text-gray-600 text-sm mb-4">
            Vino la Body Studio Pilates și descoperă beneficiile Pilates-ului alături de instructori certificați.
          </p>
          <Link
            href="/contact"
            className="bg-bark text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-espresso transition-colors inline-block"
          >
            Rezervă o ședință gratuită
          </Link>
        </div>
      </article>

      {/* ALTE ARTICOLE */}
      {otherPosts.length > 0 && (
        <section className="bg-stone-50 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">Mai multe articole</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {otherPosts.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group">
                  <div className="bg-cream rounded-xl aspect-video mb-3 flex items-center justify-center">
                    <span className="text-mink text-xs">{p.category}</span>
                  </div>
                  <span className="text-xs text-caramel">{p.category}</span>
                  <h3 className="font-serif font-bold text-gray-900 mt-1 group-hover:text-bark transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">{p.date}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
