'use client'

import { useState } from 'react'
import { Menu, X, ArrowLeft, FileText, Shield, AlertTriangle, Users, Gavel, Award, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function TermsAndConditions() {
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
              <Link href="/privacy" className="text-gray-700 hover:text-blue-600 transition-colors">Privacy</Link>
              <Link href="/terms" className="text-blue-600 font-semibold">Terms</Link>
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
              <Link href="/privacy" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Privacy</Link>
              <Link href="/terms" className="block px-3 py-2 text-blue-600 font-semibold">Terms</Link>
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
            <FileText className="text-white mr-4" size={48} />
            <div>
              <h1 className="text-4xl font-bold text-white">Terms & Conditions</h1>
              <p className="text-blue-100 mt-2">Syarat dan Ketentuan PT TELEKOMUNIKASI SELULAR</p>
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
                Selamat datang di <strong>PT TELEKOMUNIKASI SELULAR</strong>. Dengan menggunakan layanan kami, 
                Anda setuju untuk mematuhi Syarat dan Ketentuan ini. Harap baca dengan seksama sebelum menggunakan layanan kami.
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Shield className="text-blue-600 mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-800">Penerimaan Syarat dan Ketentuan</h2>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Dengan mengakses atau menggunakan layanan PT TELEKOMUNIKASI SELULAR, Anda:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Menyatakan bahwa Anda telah membaca, memahami, dan menyetujui Syarat dan Ketentuan ini</li>
                  <li>Menyetujui untuk terikat oleh ketentuan yang berlaku</li>
                  <li>Mengakui bahwa Syarat dan Ketentuan ini merupakan perjanjian yang sah antara Anda dan PT TELEKOMUNIKASI SELULAR</li>
                  <li>Menyatakan bahwa Anda cukup umur dan memiliki kapasitas hukum untuk membuat perjanjian</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Users className="text-blue-600 mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-800">Layanan Kami</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Layanan Telekomunikasi</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Layanan seluler prabayar dan pascabayar</li>
                    <li>Layanan data internet (4G/5G)</li>
                    <li>Layanan SMS dan telepon</li>
                    <li>Layanan value-added services</li>
                    <li>Layanan enterprise dan bisnis</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Ketersediaan Layanan</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Layanan tersedia di area cakupan jaringan kami</li>
                    <li>Kualitas layanan dapat bervariasi tergantung lokasi dan kondisi</li>
                    <li>Kami berhak melakukan pemeliharaan jaringan berkala</li>
                    <li>Layanan dapat terganggu karena faktor di luar kendali kami</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <AlertTriangle className="text-blue-600 mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-800">Kewajiban Pengguna</h2>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Sebagai pengguna layanan PT TELEKOMUNIKASI SELULAR, Anda wajib:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li><strong>Informasi Akurat:</strong> Memberikan informasi yang benar dan lengkap saat pendaftaran</li>
                  <li><strong>Keamanan Akun:</strong> Menjaga kerahasiaan kata sandi dan data akses</li>
                  <li><strong>Penggunaan Legal:</strong> Menggunakan layanan untuk tujuan yang sah dan legal</li>
                  <li><strong>Tidak Melanggar Hukum:</strong> Tidak menggunakan layanan untuk aktivitas ilegal</li>
                  <li><strong>Respect Others:</strong> Tidak mengganggu atau merugikan pengguna lain</li>
                  <li><strong>Kepatuhan:</strong> Mematuhi semua peraturan dan hukum yang berlaku</li>
                  <li><strong>Pembayaran:</strong> Membayar tagihan tepat waktu untuk layanan pascabayar</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Gavel className="text-blue-600 mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-800"> Larangan Penggunaan</h2>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Anda dilarang keras untuk:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Mengirim spam, pesan tidak diinginkan, atau konten berbahaya</li>
                  <li>Menggunakan layanan untuk penipuan, phishing, atau aktivitas kriminal</li>
                  <li>Mengakses atau merusak sistem jaringan kami secara tidak sah</li>
                  <li>Menyebarluaskan konten yang melanggar hak cipta atau kekayaan intelektual</li>
                  <li>Menggunakan layanan untuk mengancam, melecehkan, atau mengintimidasi orang lain</li>
                  <li>Membuat akun palsu atau menyamar sebagai orang lain</li>
                  <li>Memfasilitasi atau mendukung terorisme atau kejahatan terorganisir</li>
                  <li>Melanggar privasi atau hak pribadi orang lain</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Award className="text-blue-600 mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-800">Hak Kekayaan Intelektual</h2>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Semua hak kekayaan intelektual terkait layanan kami dilindungi:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li><strong>Merek Dagang:</strong> PT TELEKOMUNIKASI SELULAR dan logo terdaftar adalah milik kami</li>
                  <li><strong>Konten:</strong> Semua konten, desain, dan materi di platform kami dilindungi hak cipta</li>
                  <li><strong>Software:</strong> Aplikasi dan perangkat lunak kami adalah properti intelektual kami</li>
                  <li><strong>Lisensi Terbatas:</strong> Anda diberikan lisensi terbatas untuk menggunakan layanan kami</li>
                  <li><strong>Larangan Reproduksi:</strong> Dilarang menyalin, mendistribusikan, atau memodifikasi tanpa izin</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Pembayaran dan Tagihan</h2>
              
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Layanan Prabayar</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Pembayaran dilakukan di muka sebelum penggunaan layanan</li>
                    <li>Pulsa memiliki masa berlaku sesuai ketentuan yang berlaku</li>
                    <li>Tidak ada pengembalian dana untuk pulsa yang sudah dibeli</li>
                    <li>Tarif dapat berubah sesuai kebijakan perusahaan</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Layanan Pascabayar</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Tagihan diterbitkan setiap bulan sesuai periode penagihan</li>
                    <li>Pembayaran harus dilakukan sebelum tanggal jatuh tempo</li>
                    <li>Keterlambatan pembayaran dapat dikenakan denda</li>
                    <li>Layanan dapat ditangguhkan jika pembayaran terlambat</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Privasi dan Data Pribadi</h2>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Perlindungan data pribadi Anda adalah prioritas kami:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Penggunaan data pribadi mengikuti Kebijakan Privasi kami</li>
                  <li>Kami mengumpulkan data yang diperlukan untuk penyediaan layanan</li>
                  <li>Data Anda dilindungi dengan teknologi keamanan terkini</li>
                  <li>Kami tidak akan menjual atau membagikan data Anda tanpa persetujuan</li>
                  <li>Anda memiliki hak untuk mengakses dan mengelola data pribadi Anda</li>
                </ul>
                <p className="text-sm text-gray-600 mt-4">
                  Baca Kebijakan Privasi lengkap kami untuk informasi lebih rinci.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Penangguhan dan Pengakhiran</h2>
              <div className="bg-orange-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  PT TELEKOMUNIKASI SELULAR berhak untuk:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li><strong>Menangguhkan Layanan:</strong> Jika Anda melanggar Syarat dan Ketentuan</li>
                  <li><strong>Mengakhiri Akun:</strong> Jika terjadi pelanggaran berat atau penggunaan ilegal</li>
                  <li><strong>Memperbarui Syarat:</strong> Mengubah Syarat dan Ketentuan dari waktu ke waktu</li>
                  <li><strong>Memberhentikan Layanan:</strong> Jika tidak memungkinkan lagi untuk menyediakan layanan</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Kami akan memberitahukan Anda sebelum penangguhan atau pengakhiran, kecuali dalam keadaan darurat.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-blue-600 mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-800">Jaminan dan Penafian</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Jaminan Kami</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Kami berusaha menyediakan layanan dengan kualitas terbaik</li>
                    <li>Layanan kami sesuai dengan standar industri telekomunikasi</li>
                    <li>Kami akan memperbaiki gangguan layanan dengan segera</li>
                    <li>Dukungan pelanggan tersedia sesuai jam operasional</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Penafian</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Layanan tersedia "sebagaimana adanya" tanpa jaminan tersirat</li>
                    <li>Kami tidak menjamin layanan akan bebas dari gangguan</li>
                    <li>Kami tidak bertanggung jawab atas kerugian akibat gangguan layanan</li>
                    <li>Kami tidak menjamin ketersediaan layanan 100% setiap saat</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Batasan Tanggung Jawab</h2>
              <div className="bg-red-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Tanggung jawab PT TELEKOMUNIKASI SELULAR dibatasi sebagai berikut:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Tanggung jawab maksimum sebesar biaya layanan yang telah Anda bayarkan</li>
                  <li>Kami tidak bertanggung jawab atas kerugian tidak langsung atau konsekuensial</li>
                  <li>Kami tidak bertanggung jawab atas kehilangan data atau keuntungan bisnis</li>
                  <li>Kami tidak bertanggung jawab atas kerusakan perangkat atau software</li>
                  <li>Anda setuju untuk melepaskan kami dari klaim yang melebihi batas ini</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Penyelesaian Sengketa</h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Jika terjadi sengketa antara Anda dan PT TELEKOMUNIKASI SELULAR:
                </p>
                <ol className="list-decimal list-inside text-gray-600 space-y-2">
                  <li><strong>Negosiasi:</strong> Kami akan berusaha menyelesaikan sengketa secara musyawarah</li>
                  <li><strong>Mediasi:</strong> Jika diperlukan, kami dapat menggunakan jasa mediator netral</li>
                  <li><strong>Yurisdiksi:</strong> Sengketa akan diselesaikan di pengadilan Republik Indonesia</li>
                  <li><strong>Hukum yang Berlaku:</strong> Hukum Republik Indonesia mengatur Syarat dan Ketentuan ini</li>
                </ol>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Perubahan Syarat dan Ketentuan</h2>
              <div className="bg-purple-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  PT TELEKOMUNIKASI SELULAR berhak mengubah Syarat dan Ketentuan ini:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Perubahan akan diinformasikan melalui website, email, atau SMS</li>
                  <li>Perubahan signifikan akan diberitahukan minimal 30 hari sebelum berlaku</li>
                  <li>Penggunaan layanan setelah perubahan berarti Anda menyetujui perubahan tersebut</li>
                  <li>Anda dapat menolak perubahan dengan menghentikan penggunaan layanan</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Kontak dan Bantuan</h2>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini:
                </p>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Email:</strong> legal@telkomselular.co.id</p>
                  <p><strong>Telepon:</strong> 082233059433</p>
                  <p><strong>Alamat:</strong> Gedung Telkom Landmark Tower, Menara 1 Lantai 1-23, 
                  Jl. Jend. Gatot Subroto Kav. 52, Jakarta Selatan 12710</p>
                </div>
                <p className="text-gray-700 mt-4">
                  Tim layanan pelanggan kami siap membantu Anda Senin - Jumat, pukul 08:00 - 20:00 WIB.
                </p>
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