import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { CheckCircle, Download, Users, Shield, TrendingUp, Heart } from 'lucide-react'
import './App.css'
import logoSvg from './assets/Logotype.svg'

function App() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle email submission
    console.log('Email submitted:', email)
    // You can integrate with your email service here
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src={logoSvg} alt="Bitcoin Reserve" className="h-8 w-auto" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="https://bitcoinreserve.bio" className="text-slate-300 hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Home
                </a>
                <a href="#story" className="text-slate-300 hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Our Story
                </a>
                <a href="#community" className="text-slate-300 hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Community
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              The <span className="text-orange-400">Bitcoin Wife Script</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              The conversation that changes everything. Help your wife understand Bitcoin with this proven script from a dad who learned the hard way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold"
                onClick={() => document.getElementById('download').scrollIntoView({ behavior: 'smooth' })}
              >
                <Download className="mr-2 h-5 w-5" />
                Get the Script Free
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg"
                onClick={() => document.getElementById('story').scrollIntoView({ behavior: 'smooth' })}
              >
                Read Our Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The Missed Mint That Built Bitcoin Reserve
            </h2>
            <p className="text-xl text-slate-300">
              How a $33,000 mistake became the foundation for helping Bitcoin dads everywhere
            </p>
          </div>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="bg-slate-900/50 rounded-lg p-8 mb-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-orange-400 mb-4">I had the whitelist. I had the BTC. I waited two years.</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                And I still missed it. But that moment didn't end the mission—it cemented it.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-slate-900/50 border-slate-700">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-white mb-3">The Setup</h4>
                  <p className="text-slate-300">
                    I held one of only 100 golden tickets for the Taproot Wizards mint. Normal price: 0.2 BTC. My price: 0.1 BTC. I'd earned it two years earlier.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-700">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-white mb-3">The Miss</h4>
                  <p className="text-slate-300">
                    The mint opened at 3:00am AEST. I thought it was 7:00pm. I went to bed early to be "fresh" and slept through the entire 8-hour window.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-700">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-white mb-3">The Cost</h4>
                  <p className="text-slate-300">
                    Floor shot to 0.3 BTC. My boys missed out on $10K-$33K in potential value. All because I got the time wrong.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-lg p-8 border border-orange-500/20">
              <h4 className="text-2xl font-bold text-white mb-4">The Cementing Moment</h4>
              <p className="text-slate-300 text-lg leading-relaxed mb-4">
                That night didn't kill Bitcoin Reserve—it forged it. Because when I saw what I'd lost, I realised something deeper:
              </p>
              <p className="text-orange-400 text-xl font-semibold mb-4">
                No one's coming to do this for me. No one else is stacking for my sons.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                Since that day, I've minted something every single day—not ordinals. Proof. Proof of intent, proof of presence, proof that I won't let one miss become my story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Script Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why This Script Works
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Born from real experience, tested by real Bitcoin dads, refined through real conversations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-900/50 border-slate-700 hover:border-orange-500/50 transition-colors">
              <CardContent className="p-6">
                <Heart className="h-12 w-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Family-First Approach</h3>
                <p className="text-slate-300">
                  Focuses on protecting and providing for your family, not getting rich quick. Speaks to her values.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-700 hover:border-orange-500/50 transition-colors">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Addresses Real Concerns</h3>
                <p className="text-slate-300">
                  Tackles the legitimate worries about volatility, security, and complexity with honest answers.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-700 hover:border-orange-500/50 transition-colors">
              <CardContent className="p-6">
                <TrendingUp className="h-12 w-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Proven Results</h3>
                <p className="text-slate-300">
                  Used by hundreds of Bitcoin dads to have "the conversation" successfully. Real stories, real outcomes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What You Get
            </h2>
            <p className="text-xl text-slate-300">
              Everything you need for the most important financial conversation of your marriage
            </p>
          </div>

          <div className="space-y-6">
            {[
              "The complete conversation script with natural talking points",
              "How to address her top 5 concerns about Bitcoin",
              "Real examples from other Bitcoin dad families",
              "Follow-up strategies for ongoing conversations",
              "Access to our private Bitcoin Dad Vault community",
              "Bonus: The Bitcoin Dad Handbook (valued at $97)"
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4 bg-slate-900/50 rounded-lg p-6 border border-slate-700">
                <CheckCircle className="h-6 w-6 text-orange-400 mt-1 flex-shrink-0" />
                <p className="text-slate-300 text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-2xl p-8 md:p-12 border border-orange-500/30">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Get the Bitcoin Wife Script
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Join thousands of Bitcoin dads who've had "the conversation" successfully
              </p>
              
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-lg bg-slate-900 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                  <Button 
                    type="submit"
                    size="lg" 
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 font-semibold"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Get Script
                  </Button>
                </div>
              </form>
              
              <p className="text-sm text-slate-400 mt-4">
                Free download. No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join the Bitcoin Dad Vault
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A private community of fathers building generational wealth through Bitcoin. Share experiences, get support, and learn together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-900/50 border-slate-700">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">2,500+ Members</h3>
                <p className="text-slate-300">
                  Bitcoin dads from Australia and around the world sharing their journey
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-700">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Private & Secure</h3>
                <p className="text-slate-300">
                  Invitation-only community focused on education and family financial security
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-700">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Real Results</h3>
                <p className="text-slate-300">
                  Members report increased confidence and family buy-in for their Bitcoin strategy
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img src={logoSvg} alt="Bitcoin Reserve" className="h-8 w-auto mr-4" />
              <p className="text-slate-400">Building generational wealth, one block at a time.</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://bitcoinreserve.bio" className="text-slate-400 hover:text-orange-400 transition-colors">
                Home
              </a>
              <a href="https://x.com/bitcoinreserve_" className="text-slate-400 hover:text-orange-400 transition-colors">
                Twitter
              </a>
              <a href="https://www.instagram.com/bitcoinreserve_/" className="text-slate-400 hover:text-orange-400 transition-colors">
                Instagram
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-700 text-center">
            <p className="text-slate-400">
              © 2025 Bitcoin Reserve. All rights reserved. Building proof-of-work for the people you love.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

