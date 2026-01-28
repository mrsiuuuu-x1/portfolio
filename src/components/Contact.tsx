'use client';
import { useState } from 'react';
import FadeIn from './FadeIn';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "abdulrafay88243@gmail.com"; 

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); 
  };

  return (
    <section id="contact" className="relative min-h-[50vh] flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      
      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />

      <FadeIn>
        <div className="relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">
            Ready to <span className="font-serif italic text-blue-400">Collaborate?</span>
          </h2>

          {/* Holographic Glass Card */}
          <div className="rounded-2xl bg-linear-to-r from-white/10 to-white/5 p-[1px]">
            <div className="bg-[#0a0a0a]/90 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/10 flex flex-col items-center gap-6">

              <p className="text-gray-400 max-w-md">
                I&apos;m currently available for freelance projects and open source collaborations.
              </p>

              {/* Copy Email Button */}
              <button
                onClick={handleCopy}
                className="group relative px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex items-center gap-3 cursor-pointer"
              >
                <span className={`w-2 h-2 rounded-full ${copied ? 'bg-green-500' : 'bg-red-500'} transition-colors`} />
                <span className="font-mono text-sm text-gray-200">
                  {copied ? "Copied to Clipboard!" : email}
                </span>
                {!copied && (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 opacity-50 group-hover:opacity-100">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5" />
                  </svg>
                )}
              </button>

              {/* Social Links */}
              <div className="flex gap-6 mt-4">
                <a 
                  href="https://github.com/mrsiuuuu-x1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
                >
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/abdul-rafay-104084352/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
                >
                  LinkedIn
                </a>
              </div>

            </div>
          </div>
        </div>
      </FadeIn>

      <div className="absolute bottom-6 text-xs text-gray-600">
        © 2026 Abdul Rafay. Built with Next.js & Soul.
      </div>
    </section>
  );
}