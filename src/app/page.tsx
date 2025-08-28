'use client'; // 👈 make this a Client Component

import Image from 'next/image';

export default function Home() {
  return (
    <div
      className='flex flex-col items-center justify-center min-h-screen text-center 
    bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-800 px-6 relative overflow-hidden'
    >
      {/* Decorative Blobs */}
      <span className='absolute top-[-50px] left-[-50px] w-72 h-72 bg-[#002c4f] rounded-full blur-3xl opacity-25'></span>
      <span className='absolute bottom-[-50px] right-[-50px] w-72 h-72 bg-[#9ac336] rounded-full blur-3xl opacity-25'></span>

      {/* Logo */}
      <div className='mb-6 relative z-10'>
        <Image
          src='/logo.png'
          alt='MM Computers Logo'
          width={350}
          height={350}
          priority
          className='drop-shadow-xl'
        />
      </div>

      {/* Shop Name */}
      <h1 className='text-4xl md:text-6xl font-extrabold mb-4 text-[#002c4f] relative z-10'>
        MM Computers and IT Solutions
      </h1>

      {/* Tagline */}
      <p className='text-lg md:text-xl mb-4 text-gray-600 max-w-2xl relative z-10'>
        Computer Accessories · Hardware · Services
      </p>

      {/* Location */}
      <p className='text-md text-gray-700 mb-10 font-medium relative z-10'>
        📍 Near ICICI Bank, Opp Karnataka Bank, City Centre, Bank Road,
        Kasaragod
      </p>

      {/* Coming Soon Text */}
      <div className='bg-[#9ac336] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md animate-pulse relative z-10'>
        🚀 We’re Launching Soon!
      </div>

      {/* Notify Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          window.location.reload(); // 👈 reload on click
        }}
        className='flex flex-col sm:flex-row justify-center w-full max-w-md mt-10 shadow-lg rounded-lg overflow-hidden relative z-10'
      >
        <input
          type='email'
          placeholder='Enter your email'
          className='px-4 py-3 text-gray-800 focus:outline-none w-full'
        />
        <button
          type='submit'
          className='bg-[#002c4f] hover:bg-[#014172] px-6 py-3 font-semibold text-white'
        >
          Notify Me
        </button>
      </form>

      {/* Footer */}
      <footer className='mt-16 text-sm text-gray-500 relative z-10'>
        © {new Date().getFullYear()} MM Computers and IT Solutions · Kasaragod
      </footer>
    </div>
  );
}
