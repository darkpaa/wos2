import React from 'react';

function App() {
  const handleContactClick = () => {
    alert("Sizlere harika bir deneyim sunmak için arka planda çalışmalarımız devam ediyor. İletişim formu yakında eklenecektir!");
  };

  return (
    // Arka plan: Lacivertten (slate-900) mürdüm/mor (purple-900) ve turuncu/sarı (orange-400) tonlarına zengin gün doğumu gradient'i
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-orange-400 p-4 font-sans relative overflow-hidden">
      
      {/* Gün doğumu hissiyatını güçlendiren arka plan "parlama" efektleri */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] bg-yellow-400 rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute top-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-500 rounded-full blur-[120px] opacity-20"></div>
      </div>

      {/* Merkezdeki Glassmorphism (Buzlu Cam) Kart */}
      <div className="relative z-10 w-full max-w-2xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-center transition-all duration-500 hover:bg-white/15">
        
        {/* Güneş İkonu / Konsept Logo Alanı */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-tr from-yellow-300 to-orange-500 rounded-full shadow-[0_0_40px_rgba(251,146,60,0.6)] animate-pulse flex items-center justify-center">
            {/* Güneşin içine zarif bir ışıltı */}
            <div className="w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm"></div>
          </div>
        </div>

        {/* Başlık */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-100 to-yellow-100 mb-6 tracking-tight leading-tight">
          World of Sunrise <br className="hidden md:block" /> Çok Yakında
        </h1>

        {/* Alt Metin */}
        <p className="text-lg md:text-xl text-slate-200 font-light mb-10 max-w-lg mx-auto leading-relaxed">
          Sizlere harika bir deneyim sunmak için arka planda çalışmalarımız devam ediyor. Yeni başlangıcımıza tanık olmak için hazır olun.
        </p>

        {/* Aksiyon (Call to Action) Butonu */}
        <button 
          onClick={handleContactClick}
          className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-white/10 border border-white/30 rounded-full shadow-lg overflow-hidden transition-all duration-300 hover:bg-white/25 hover:scale-105 hover:shadow-[0_0_40px_rgba(251,146,60,0.4)] focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          {/* Buton içi metin ve ikon */}
          <span className="relative z-10 flex items-center gap-3">
            Bana Ulaşın
            {/* Sağ Ok İkonu - Hover durumunda hafifçe sağa kayar */}
            <svg 
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </button>

      </div>
    </div>
  );
}

export default App;
