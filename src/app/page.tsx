'use client'

import { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, Wifi, Users, Shield, Zap, ChevronRight, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <img src="/logo.png" alt="PT TELEKOMUNIKASI SELULAR" className="h-10 w-auto mr-3" />
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    PT TELEKOMUNIKASI SELULAR
                  </h1>
                  <p className="text-xs text-gray-500">Connecting Indonesia</p>
                </div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Beranda</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Layanan</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">Tentang</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Kontak</a>
              <a href="/privacy" className="text-gray-700 hover:text-blue-600 transition-colors">Privacy</a>
              <a href="/terms" className="text-gray-700 hover:text-blue-600 transition-colors">Terms</a>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Beranda</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Layanan</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Tentang</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Kontak</a>
              <a href="/privacy" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Privacy</a>
              <a href="/terms" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Terms</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 bg-clip-text text-transparent">
                PT TELEKOMUNIKASI SELULAR
              </span>
            </h1>
            <p className="text-2xl text-gray-600 mb-8">Menghubungkan Indonesia dengan Teknologi Terdepan</p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-12">
              Kami adalah perusahaan telekomunikasi terkemuka yang menyediakan solusi komunikasi 
              yang inovatif dan andal untuk seluruh masyarakat Indonesia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                Mulai Sekarang
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200">
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Layanan Kami</h2>
            <p className="text-xl text-gray-600">Solusi telekomunikasi komprehensif untuk kebutuhan Anda</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Wifi className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Jaringan Seluler</h3>
              <p className="text-gray-600 mb-6">
                Jaringan 4G/5G tercepat dan tersebar luas di seluruh Indonesia dengan kualitas sinyal yang stabil.
              </p>
              <button className="text-blue-600 font-semibold flex items-center hover:text-blue-700">
                Selengkapnya <ChevronRight className="ml-2" size={20} />
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Solusi Bisnis</h3>
              <p className="text-gray-600 mb-6">
                Paket enterprise yang disesuaikan untuk kebutuhan komunikasi bisnis modern Anda.
              </p>
              <button className="text-purple-600 font-semibold flex items-center hover:text-purple-700">
                Selengkapnya <ChevronRight className="ml-2" size={20} />
              </button>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Keamanan Digital</h3>
              <p className="text-gray-600 mb-6">
                Perlindungan data dan privasi Anda dengan teknologi enkripsi terkini.
              </p>
              <button className="text-green-600 font-semibold flex items-center hover:text-green-700">
                Selengkapnya <ChevronRight className="ml-2" size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Mengapa Memilih <span className="text-blue-600">PT TELEKOMUNIKASI SELULAR</span>?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Zap className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Kecepatan Tinggi</h3>
                    <p className="text-gray-600">Teknologi terkini untuk kecepatan internet yang luar biasa</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <Shield className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Terpercaya</h3>
                    <p className="text-gray-600">Dipercaya oleh jutaan pelanggan di seluruh Indonesia</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <Users className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Layanan 24/7</h3>
                    <p className="text-gray-600">Dukungan pelanggan yang siap membantu kapan saja</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Statistik Kami</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Cakupan Nasional</span>
                    <span className="font-semibold text-blue-600">98%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 h-3 rounded-full" style={{width: '98%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Kepuasan Pelanggan</span>
                    <span className="font-semibold text-green-600">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-600 to-emerald-600 h-3 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Uptime Jaringan</span>
                    <span className="font-semibold text-purple-600">99.9%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full" style={{width: '99.9%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Hubungi Kami</h2>
            <p className="text-xl text-gray-600">Siap membantu kebutuhan telekomunikasi Anda</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Informasi Kontak</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="text-blue-600 mr-4" size={24} />
                    <div>
                      <p className="font-semibold text-gray-800">Alamat</p>
                      <p className="text-gray-600">
                        Gedung Telkom Landmark Tower, Menara 1 Lantai 1-23<br />
                        Jl. Jend. Gatot Subroto Kav. 52, Kel. Kuningan Barat<br />
                        Kec. Mampang Prapatan, Kota Adm. Jakarta Selatan<br />
                        Prop. DKI Jakarta, Kode Pos 12710
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="text-blue-600 mr-4" size={24} />
                    <div>
                      <p className="font-semibold text-gray-800">Telepon</p>
                      <p className="text-gray-600">082233059433</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="text-blue-600 mr-4" size={24} />
                    <div>
                      <p className="font-semibold text-gray-800">Email</p>
                      <p className="text-gray-600">info@telkomselular.co.id</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <p className="font-semibold text-gray-800 mb-4">Ikuti Kami</p>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-blue-600 p-3 rounded-full text-white hover:bg-blue-700 transition-colors">
                      <Facebook size={20} />
                    </a>
                    <a href="#" className="bg-blue-400 p-3 rounded-full text-white hover:bg-blue-500 transition-colors">
                      <Twitter size={20} />
                    </a>
                    <a href="#" className="bg-blue-700 p-3 rounded-full text-white hover:bg-blue-800 transition-colors">
                      <Linkedin size={20} />
                    </a>
                    <a href="#" className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-full text-white hover:from-purple-700 hover:to-pink-700 transition-all">
                      <Instagram size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Kirim Pesan</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Nama Lengkap</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Masukkan nama Anda" />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="email@example.com" />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Pesan</label>
                    <textarea className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 h-32" placeholder="Tulis pesan Anda di sini..."></textarea>
                  </div>
                  
                  <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/logo.png" alt="PT TELEKOMUNIKASI SELULAR" className="h-8 w-auto mr-2" />
                <h3 className="text-xl font-bold">PT TELEKOMUNIKASI SELULAR</h3>
              </div>
              <p className="text-gray-300">Menghubungkan Indonesia dengan teknologi terdepan.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Jaringan Seluler</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Solusi Bisnis</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Keamanan Digital</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Layanan Pelanggan</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Karir</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-300 mb-4">Dapatkan informasi terbaru dari kami</p>
              <div className="flex">
                <input type="email" placeholder="Email Anda" className="px-4 py-2 rounded-l-lg text-gray-900 flex-1" />
                <button className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 PT TELEKOMUNIKASI SELULAR. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}