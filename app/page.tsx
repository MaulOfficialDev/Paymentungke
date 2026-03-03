'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Copy, QrCode, AlertTriangle, CheckCircle2, Wallet, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function PaymentPage() {
  const [copied, setCopied] = useState(false);
  const [showQris, setShowQris] = useState(false);
  
  const accounts = {
    dana: "081119238598",
    gopay: "087860332755",
    seabank: "901266702506"
  };

  const qrisImageUrl = "https://files.catbox.moe/vzbtbg.jpg";

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadQris = async () => {
    try {
      const response = await fetch(qrisImageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'QRIS_Payment_Raja.jpg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      
      window.open(qrisImageUrl, '_blank');
    }
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden font-sans">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-10 brightness-[0.8] scale-105"
      >
        <source src="https://files.catbox.moe/y66wy1.mp4" type="video/mp4" />
      </video>

      {/* Atmospheric Overlay */}
      <div className="fixed inset-0 bg-black/10 -z-5" />

      {/* Card Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-[380px] w-full bg-white/5 backdrop-blur-md rounded-[32px] border border-white/10 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] p-6 md:p-7 text-zinc-100 relative z-10 overflow-hidden"
      >
        {/* Decorative */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-amber-500/10 blur-[80px] rounded-full pointer-events-none" />
        
        {/*  Section */}
        <div className="text-center mb-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-4 flex justify-center"
          >
            <div className="relative w-20 h-20 rounded-full p-1 border-2 border-amber-500/30 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
              <Image
                src="https://files.catbox.moe/grc6kh.jpg"
                alt="Profile Logo"
                width={80}
                height={80}
                className="rounded-full object-cover w-full h-full"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
          <motion.h1 
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-black tracking-tighter uppercase italic bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent"
          >
            ALL PAYMENT
          </motion.h1>
          <div className="h-px w-12 bg-amber-500/30 mx-auto mt-2 rounded-full" />
        </div>

        {/* Payment List */}
        <div className="mb-6">
          <div className="max-h-[280px] overflow-y-auto pr-2 space-y-2 scrollbar-thin scrollbar-thumb-amber-500/20 scrollbar-track-transparent">
            {/* Dana */}
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-black/40 hover:bg-black/60 transition-colors rounded-xl p-3 border-[0.5px] border-white/30 backdrop-blur-md"
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <Wallet className="text-amber-500" size={12} />
                  </div>
                  <span className="font-bold text-[11px] tracking-wide text-amber-400 uppercase">Dana</span>
                </div>
                <span className="text-[9px] font-bold text-zinc-200 uppercase tracking-widest">E-Wallet</span>
              </div>

              <div className="flex items-center justify-between gap-2">
                <span className="text-base font-mono font-bold tracking-wider text-white drop-shadow-sm">
                  {accounts.dana}
                </span>
                <button 
                  onClick={() => handleCopy(accounts.dana)}
                  className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-3 py-1.5 rounded-lg text-[10px] flex items-center gap-1 transition-all active:scale-95 shadow-lg shadow-amber-500/20"
                >
                  <Copy size={11} />
                  Salin
                </button>
              </div>
            </motion.div>

            {/* Gopay */}
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="bg-black/40 hover:bg-black/60 transition-colors rounded-xl p-3 border-[0.5px] border-white/30 backdrop-blur-md"
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <Wallet className="text-amber-500" size={12} />
                  </div>
                  <span className="font-bold text-[11px] tracking-wide text-amber-400 uppercase">Gopay</span>
                </div>
                <span className="text-[9px] font-bold text-zinc-200 uppercase tracking-widest">E-Wallet</span>
              </div>

              <div className="flex items-center justify-between gap-2">
                <span className="text-base font-mono font-bold tracking-wider text-white drop-shadow-sm">
                  {accounts.gopay}
                </span>
                <button 
                  onClick={() => handleCopy(accounts.gopay)}
                  className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-3 py-1.5 rounded-xl text-[10px] flex items-center gap-1 transition-all active:scale-95 shadow-lg shadow-amber-500/20"
                >
                  <Copy size={11} />
                  Salin
                </button>
              </div>
            </motion.div>

            {/* Seabank */}
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-black/40 hover:bg-black/60 transition-colors rounded-xl p-3 border-[0.5px] border-white/30 backdrop-blur-md"
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <Wallet className="text-amber-500" size={12} />
                  </div>
                  <span className="font-bold text-[11px] tracking-wide text-amber-400 uppercase">Seabank</span>
                </div>
                <span className="text-[9px] font-bold text-zinc-200 uppercase tracking-widest">Bank</span>
              </div>

              <div className="flex items-center justify-between gap-2">
                <span className="text-base font-mono font-bold tracking-wider text-white drop-shadow-sm">
                  {accounts.seabank}
                </span>
                <button 
                  onClick={() => handleCopy(accounts.seabank)}
                  className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-3 py-1.5 rounded-lg text-[10px] flex items-center gap-1 transition-all active:scale-95 shadow-lg shadow-amber-500/20"
                >
                  <Copy size={11} />
                  Salin
                </button>
              </div>
            </motion.div>
          </div>

          {/* Button */}
          <motion.button 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.45 }}
            onClick={() => setShowQris(true)}
            className="w-full mt-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl py-3 text-sm font-bold text-amber-400 flex items-center justify-center gap-2.5 transition-all active:scale-[0.98] group"
          >
            <QrCode size={18} className="text-white/80 group-hover:scale-110 transition-transform" />
            Tampilkan QRIS
          </motion.button>
        </div>

        {/* Block Ungke */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-black/40 border-l-4 border-amber-500 rounded-xl p-4 mb-6 backdrop-blur-sm"
        >
          <div className="flex items-center gap-2 text-amber-300 font-black text-[13px] uppercase tracking-wider drop-shadow-md">
            <AlertTriangle className="text-amber-500" size={18} />
            WAJIB KIRIM BUKTI TRANSAKSI
          </div>
          <div className="mt-2 text-[11px] text-white font-black flex items-center gap-1.5 drop-shadow-sm">
            <CheckCircle2 size={13} className="text-amber-500" />
            ALL TRANSAKSI NO REFFULY
          </div>
        </motion.div>

        {/* Footer */}
        <div className="text-center text-[11px] text-white/90 uppercase tracking-[0.25em] font-black drop-shadow-md">
          WEBSITE ALL PAYMENT UNGKE 
        </div>
      </motion.div>

      {/* Border */}
      <AnimatePresence>
        {showQris && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-zinc-900 rounded-[32px] border border-white/10 p-6 max-w-sm w-full relative"
            >
              <button 
                onClick={() => setShowQris(false)}
                className="absolute top-4 right-4 p-2 bg-white/5 hover:bg-white/10 rounded-full text-zinc-400 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="text-center mb-6">
                <h2 className="text-xl font-bold text-white mb-1">SCAN QRIS</h2>
                <p className="text-xs text-zinc-500">Scan Using Any Payment Apps</p>
              </div>

              <div className="relative bg-white p-4 rounded-2xl mb-6 shadow-2xl shadow-amber-500/10 overflow-hidden">
                <Image 
                  src={qrisImageUrl} 
                  alt="QRIS Payment Raja" 
                  width={400}
                  height={400}
                  className="w-full aspect-square object-contain rounded-lg"
                  referrerPolicy="no-referrer"
                />
              </div>

              <button 
                onClick={handleDownloadQris}
                className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-amber-500/20"
              >
                <Download size={20} />
                Download QRIS
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Notif */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            className="fixed bottom-10 left-1/2 bg-zinc-900/90 text-amber-500 px-6 py-3 rounded-full font-bold shadow-2xl border border-amber-500/50 z-[60] flex items-center gap-2 backdrop-blur-md text-sm"
          >
            <Copy size={16} />
            Nomor tersalin!
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
