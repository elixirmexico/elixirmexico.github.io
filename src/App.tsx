import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Community from './components/Community'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
      <Header />
      <main>
        <Hero />
        <Features />
        <Community />
      </main>
      <Footer />
    </div>
  )
}

export default App
