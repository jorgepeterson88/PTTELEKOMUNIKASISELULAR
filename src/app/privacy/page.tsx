'use client'

import { useState } from 'react'
import { Menu, X, ArrowLeft, Shield, Eye, Lock, Database, UserCheck, Globe, FileText } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <img src="/logo.png" alt="PT TELEKOMUNIKASI SELULAR" className="h-10 w-auto mr-3" />
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    PT TELEKOMUNIKASI SELULAR
                  </h1>
                  <p className="text-xs text-gray-500">Connecting Indonesia</p>
                </div>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Beranda</Link>
              <Link href="/privacy" className="text-blue-600 font-semibold">Privacy</Link>
              <Link href="/terms" className="text-gray-700 hover:text-blue-600 transition-colors">Terms</Link>
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
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Beranda</Link>
              <Link href="/privacy" className="block px-3 py-2 text-blue-600 font-semibold">Privacy</Link>
              <Link href="/terms" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Terms</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-white mb-6 hover:text-blue-100 transition-colors">
            <ArrowLeft className="mr-2" size={20} />
            Kembali ke Beranda
          </Link>
          <div className="flex items-center mb-6">
            <Shield className="text-white mr-4" size={48} />
            <div>
              <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
              <p className="text-blue-100 mt-2">Kebijakan Privasi PT TELEKOMUNIKASI SELULAR</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <p className="text-gray-700">
                <strong>PT TELEKOMUNIKASI SELULAR</strong> ("kami", "perusahaan") sangat memegang teguh privasi dan keamanan data pribadi Anda. 
                Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi Anda.
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Eye className="text-blue-600 mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-800">Informasi yang Kami Kumpulkan</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Informasi Pribadi</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Nama lengkap dan identitas diri</li>
                    <li>Alamat email dan nomor telepon</li>
                    <li>Alamat tempat tinggal dan korespondensi</li>
                    <li>Informasi pembayaran dan tagihan</li>
                    <li>Data identifikasi seperti KTP/SIM/Paspor</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Informasi Teknis</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Alamat IP dan lokasi geografis</li>
                    <li>Informasi perangkat dan browser</li>
                    <li>Data penggunaan jaringan dan layanan</li>
                    <li>Log aktivitas dan transaksi</li>
                    <li>Cookie dan data tracking</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Database className="text-blue-600 mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-800">Bagaimana Kami Menggunakan Informasi Anda</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Tujuan Utama</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Menyediakan dan mengelola layanan telekomunikasi</li>
                    <li>Memproses pembayaran dan penagihan</li>
                    <li>Memberikan dukungan pelanggan</li>
                    <li>Mengirim informasi penting tentang layanan</li>
                    <li>Meningkatkan kualitas layanan kami</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Tujuan Sekunder</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Analisis dan pengembangan produk</li>
                    <li>Personalisasi pengalaman pengguna</li>
                    <li>Marketing dan promosi (dengan persetujuan)</li>
                    <li>Penelitian pasar dan kepuasan pelanggan</li>
                    <li>Kepatuhan hukum dan regulasi</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Lock className="text-blue-600 mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-800">Keamanan Data</h2>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  PT TELEKOMUNIKASI SELULAR berkomitmen untuk melindungi data pribadi Anda dengan teknologi dan prosedur keamanan terkini:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li><strong>Enkripsi:</strong> Data sensitif dienkripsi saat transit dan penyimpanan</li>
                  <li><strong>Access Control:</strong> Akses data dibatasi untuk personel yang berwenang</li>
                  <li><strong>Regular Audits:</strong> Audit keamanan rutin untuk identifikasi vulnerabilitas</li>
                  <li><strong>Compliance:</strong> Kepatuhan terhadap standar keamanan internasional</li>
                  <li><strong>Monitoring:</strong> Pemantauan 24/7 terhadap ancaman keamanan</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <UserCheck className="text-blue-600 mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-800">Hak Anda Sebagai Pengguna</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Hak Privasi Anda</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li><strong>Akses:</strong> Hak untuk mengetahui data yang kami simpan tentang Anda</li>
                    <li><strong>Koreksi:</strong> Hak untuk memperbaiki data yang tidak akurat</li>
                    <li><strong>Penghapusan:</strong> Hak untuk meminta penghapusan data pribadi</li>
                    <li><strong>Pembatasan:</strong> Hak untuk membatasi pemrosesan data Anda</li>
                    <li><strong>Portabilitas:</strong> Hak untuk mentransfer data Anda ke penyedia lain</li>
                    <li><strong>Penolakan:</strong> Hak untuk menolak pemrosesan data tertentu</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Globe className="text-blue-600 mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-800">Pembagian Data dengan Pihak Ketiga</h2>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Kami hanya akan membagikan data Anda dalam situasi berikut:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Dengan persetujuan eksplisit dari Anda</li>
                  <li>Kepada mitra bisnis yang membantu menyediakan layanan</li>
                  <li>Untuk kepatuhan hukum atau permintaan resmi dari pihak berwenang</li>
                  <li>Dalam kasus merger, akuisisi, atau penjualan aset perusahaan</li>
                  <li>Untuk melindungi hak, properti, atau keselamatan PT TELEKOMUNIKASI SELULAR atau pelanggan</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <FileText className="text-blue-600 mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-800">Kebijakan Cookie</h2>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Kami menggunakan cookie dan teknologi serupa untuk meningkatkan pengalaman Anda:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li><strong>Cookie Esensial:</strong> Diperlukan untuk fungsi dasar website</li>
                  <li><strong>Cookie Performa:</strong> Membantu kami memahami cara penggunaan website</li>
                  <li><strong>Cookie Fungsional:</strong> Mengingat preferensi dan pilihan Anda</li>
                  <li><strong>Cookie Marketing:</strong> Digunakan untuk iklan yang relevan (dengan persetujuan)</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Perubahan Kebijakan Privasi</h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  PT TELEKOMUNIKASI SELULAR dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. 
                  Perubahan signifikan akan diinformasikan melalui:
                </p>
                <ul className="list-disc list-inside text-gray-600 mt-3 space-y-1">
                  <li>Email ke alamat yang terdaftar</li>
                  <li>Pemberitahuan di website kami</li>
                  <li>SMS atau notifikasi aplikasi</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Hubungi Kami</h2>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau ingin menggunakan hak privasi Anda, 
                  silakan hubungi kami:
                </p>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Email:</strong> privacy@telkomselular.co.id</p>
                  <p><strong>Telepon:</strong> 082233059433</p>
                  <p><strong>Alamat:</strong> Gedung Telkom Landmark Tower, Menara 1 Lantai 1-23, 
                  Jl. Jend. Gatot Subroto Kav. 52, Jakarta Selatan 12710</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

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
                <li><a href="/" className="hover:text-white transition-colors">Tentang Kami</a></li>
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