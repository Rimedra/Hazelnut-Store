import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function ProductSection() {
  
  const navigate = useNavigate();
  const [weight, setWeight] = useState('500');
  const [quantity, setQuantity] = useState(1);

  const prices = {
    '250': 149,
    '500': 279,
    '1000': 529
  };  

  function handleSubmit(e) {
    e.preventDefault();

    navigate('/', {
      state: {
        item: {
          name: 'Doğal Fındık',
          weight: weight,
          quantity: quantity,
          unitPrice: prices[weight],
          total: prices[weight] * quantity,
        }
      }
  }
    )}
  
  return (
    
     <section id="products" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <img src="https://placehold.co/500x500?text=Ürün+Foto" alt="" className="rounded-3xl shadow-md" />

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">Doğal Fındık</h2>
          <p className="mb-6 max-w-prose">
            Tek ürün. Tek içerik. Karadeniz’in altın değerindeki yüksek proteinli, sağlıklı yağlı ve eşsiz lezzetli
            fındıklarımız paketlere girdi.
          </p>

          <form onSubmit={handleSubmit} className="mb-8">
            <label className="block font-medium mb-2">Gramaj Seçimi</label>
            <select
              value={weight}
              onChange={e => setWeight(+e.target.value)}
              className="w-full border rounded-lg p-3 mb-4"
            >
              <option value={250}>250 g – 149 ₺</option>
              <option value={500}>500 g – 279 ₺</option>
              <option value={1000}>1000 g – 529 ₺</option>
            </select>

            <label className="block font-medium mb-2">Adet</label>
            <input
              type="number"
              min={1}
              max={10}
              value={quantity}
              onChange={e => setQuantity(+e.target.value)}
              className="w-full border rounded-lg p-3 mb-4"
            />

            <button
              type="submit"
              className="w-full bg-amber-700 hover:bg-amber-800 text-white font-semibold py-3 px-6 rounded-xl shadow-lg"
            >
              Satın Al
            </button>
          </form>

          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">• Tek kaynaklı, tek hasat</li>
            <li className="flex items-start gap-2">• Katkısız, koruyucusuz</li>
            <li className="flex items-start gap-2">• Vegan &amp; Glutensiz</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
