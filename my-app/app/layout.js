import './globals.css'
import Navbar from './_components/Navbar'
import Footer from './_components/Footer'

export const metadata = {
  title: 'Body Studio Pilates',
  description: 'Studio profesionist de Pilates din Cluj-Napoca. Clase personalizate pentru toate nivelurile.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body className="min-h-screen flex flex-col bg-white text-gray-900 antialiased">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
