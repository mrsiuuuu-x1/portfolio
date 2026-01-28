import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl z-50">
      <div className="flex items-center justify-between px-6 py-3 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full shadow-2xl">
        
        {/* Logo */}
        <div className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
          <span className="w-3 h-3 bg-orange-500 rounded-full animate-pulse" />
          Abdul Rafay
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <Link href="#" className="hover:text-white transition-colors">Work</Link>
          <Link href="#" className="hover:text-white transition-colors">About</Link>
          <Link href="#" className="hover:text-white transition-colors">Notes</Link>
        </div>
        
        <button className="px-4 py-2 text-xs font-semibold text-black bg-white rounded-full hover:bg-gray-200 transition-colors cursor-pointer">
          Let&apos;s Talk
        </button>
      </div>
    </nav>
  );
}