import React from 'react'

export default function Footer() {
  return (
        <>
            <section id='contact' className="container mx-auto py-20 px-4 text-center">
                <div className="bg-amber-100/70 rounded-3xl p-10 md:p-16 shadow-lg">
                    <h2 className="text-2xl md:text-3xl font-bold text-amber-800 mb-4">
                    Taze Fırsatları Kaçırmayın!
                    </h2>
                    <p className="mb-6 max-w-xl mx-auto">
                    Yeni hasat duyuruları ve indirim kuponları için e‑posta listemize katılın.
                    </p>
                    <form className="flex flex-col md:flex-row gap-4 md:justify-center max-w-xl mx-auto">
                    <input type="email" placeholder="E‑posta adresiniz" className="flex-1 rounded-xl p-3 border" />
                    <button type="submit" className="bg-amber-700 hover:bg-amber-800 text-white font-semibold py-3 px-8 rounded-xl shadow">
                        Abone Ol
                    </button>
                    </form>
                </div>
            </section>

                <footer className="bg-amber-800 text-amber-50 py-12">
                <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 text-sm">
                    <div>
                    <h3 className="font-semibold mb-2">Demircan Fındık</h3>
                    <p>© 2025 Demircan Fındık Tüm hakları saklıdır.</p>
                    </div>
                    <div>
                    <h3 className="font-semibold mb-2">Menü</h3>
                    <ul className="space-y-1">
                        <li><a href="#urun" className="hover:underline">Ürünlerimiz</a></li>
                        <li><a href="#hikaye" className="hover:underline">Hikayemiz</a></li>
                        <li><a href="#sorular" className="hover:underline">SSS</a></li>
                        <li><a href="#" className="hover:underline">Gizlilik Politikası</a></li>
                    </ul>
                    </div>
                    <div>
                    <h3 className="font-semibold mb-2">İletişim</h3>
                    <p>Zonguldak / Türkiye</p>
                    <p>Telefon: +90 000 000 00 00</p>
                    <p>E‑posta: hello@demircanfındık.com</p>
                    </div>
                </div>
                </footer>
        </>
    )
}
