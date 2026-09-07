import React, { useState } from 'react';
import {
  LayoutDashboard,
  Wallet,
  Package,
  FileText,
  User,
  Plus,
  Calendar,
  Clock,
  TrendingUp,
  PieChart as PieChartIcon,
  ChevronRight,
  X,
  Check,
  DollarSign,
  AlertCircle
} from 'lucide-react';

export default function Dashboard() {
  // Modal state for "Tambah Card"
  const [isAddCardOpen, setIsAddCardOpen] = useState(false);

  // Widget visibility states
  const [activeWidgets, setActiveWidgets] = useState({
    tagihanTerdekat: true,
    trenSaldo: true,
    strukturPengeluaran: true,
    aktivitasTerbaru: true,
    inventarisTerbaru: true,
    pengeluaranBulanIni: true,
  });

  const toggleWidget = (key) => {
    setActiveWidgets((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* 1. SIDEBAR NAVIGATION */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between p-5">
        <div>
          {/* Logo */}
          <div className="flex items-center gap-3 px-2 mb-8">
            <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white font-bold text-xl shadow-md">
              T
            </div>
            <div>
              <h1 className="font-bold text-xl text-slate-800 tracking-tight">Track IN</h1>
              <p className="text-xs text-slate-400">Kost Management System</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5">
            <a
              href="#dashboard"
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-50 text-emerald-600 font-semibold text-sm transition-all shadow-sm"
            >
              <LayoutDashboard className="w-5 h-5" />
              Dasbor
            </a>
            <a
              href="#keuangan"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-100 font-medium text-sm transition-all"
            >
              <Wallet className="w-5 h-5" />
              Keuangan
            </a>
            <a
              href="#inventaris"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-100 font-medium text-sm transition-all"
            >
              <Package className="w-5 h-5" />
              Inventaris
            </a>
            <a
              href="#catatan"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-100 font-medium text-sm transition-all"
            >
              <FileText className="w-5 h-5" />
              Catatan
            </a>
            <a
              href="#akun"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-100 font-medium text-sm transition-all"
            >
              <User className="w-5 h-5" />
              Akun
            </a>
          </nav>
        </div>

        {/* User Footer Profile */}
        <div className="pt-4 border-t border-slate-100 flex items-center gap-3 px-2">
          <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center border border-emerald-200">
            Y
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="text-sm font-semibold text-slate-800 truncate">Yusuf</p>
            <p className="text-xs text-slate-400 truncate">yusuf@trackin.id</p>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* TOP NAVBAR / HEADER */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Dasbor Utama</h2>
            <p className="text-sm text-slate-500">Ringkasan aktivitas keuangan, inventaris, dan tagihan kost.</p>
          </div>

          <div className="flex items-center gap-3">
            {/* Tunai Status */}
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm">
              <span className="text-xs font-semibold text-slate-400 uppercase">Tunai</span>
              <span className="text-sm font-bold text-emerald-600">Rp 1.000.000</span>
            </div>

            {/* Action Buttons */}
            <button className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-sm px-4 py-2 rounded-xl transition-all">
              <Plus className="w-4 h-4" />
              Catatan
            </button>

            <button
              onClick={() => setIsAddCardOpen(true)}
              className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium text-sm px-4 py-2 rounded-xl transition-all shadow-md shadow-emerald-500/20"
            >
              <Plus className="w-4 h-4" />
              Tambah Card
            </button>
          </div>
        </header>

        {/* STATUS RINGKASAN SALDO (SUMMARY BANNER) */}
        <section className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-2xl p-6 mb-8 shadow-lg shadow-emerald-600/10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-emerald-500/50">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-200">Status Ringkasan Saldo</p>
              <h3 className="text-3xl font-extrabold mt-1">Rp 1.000.000</h3>
            </div>
            <div className="flex gap-6">
              <div>
                <p className="text-xs text-emerald-200 font-medium">ARUS KAS</p>
                <p className="text-lg font-bold">Rp 850.000</p>
              </div>
              <div>
                <p className="text-xs text-emerald-200 font-medium">PENGELUARAN</p>
                <p className="text-lg font-bold">Rp 850.000</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-6 pt-4 text-xs font-medium text-emerald-100">
            <span>Saldo: <strong className="text-white">Rp 1.000.000</strong></span>
            <span>Anggaran Kos: <strong className="text-white">Rp 500.000</strong></span>
            <span>Proyek Lainnya: <strong className="text-white">Rp 0</strong></span>
          </div>
        </section>

        {/* DASHBOARD GRID SYSTEM */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* LEFT COLUMN (2 Cols wide on large screens) */}
          <div className="lg:col-span-2 space-y-6">

            {/* WIDGET 1: TREN SALDO & KEBUTUHAN */}
            {activeWidgets.trenSaldo && (
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="font-bold text-slate-800 text-base flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-emerald-500" />
                      Tren Saldo & Kebutuhan
                    </h3>
                    <p className="text-xs text-slate-400">Grafik pergerakan saldo harian</p>
                  </div>
                  <select className="bg-slate-50 border border-slate-200 text-slate-600 text-xs rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                    <option>17 Agustus 2026</option>
                    <option>1 - 31 Mei 2025</option>
                  </select>
                </div>

                {/* Simulated Visual Chart Canvas */}
                <div className="h-48 w-full bg-slate-50 rounded-xl border border-slate-100 flex flex-col justify-between p-4 relative overflow-hidden">
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>Rp 100rb</span>
                    <span>Rp 50rb</span>
                    <span>Rp 0</span>
                  </div>
                  {/* SVG Line Graph */}
                  <svg className="absolute inset-0 w-full h-full p-6 text-emerald-500" viewBox="0 0 500 100" preserveAspectRatio="none">
                    <path
                      d="M 0 50 Q 125 40 250 50 T 500 50"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                    <circle cx="0" cy="50" r="4" className="fill-white stroke-emerald-600 stroke-2" />
                    <circle cx="125" cy="45" r="4" className="fill-white stroke-emerald-600 stroke-2" />
                    <circle cx="250" cy="50" r="4" className="fill-white stroke-emerald-600 stroke-2" />
                    <circle cx="375" cy="50" r="4" className="fill-white stroke-emerald-600 stroke-2" />
                    <circle cx="500" cy="50" r="4" className="fill-white stroke-emerald-600 stroke-2" />
                  </svg>
                  <div className="flex justify-between text-[10px] text-slate-400 mt-auto pt-4">
                    <span>1 Mei</span>
                    <span>8 Mei</span>
                    <span>15 Mei</span>
                    <span>22 Mei</span>
                    <span>31 Mei</span>
                  </div>
                </div>
              </div>
            )}

            {/* WIDGET 2: STRUKTUR PENGELUARAN */}
            {activeWidgets.strukturPengeluaran && (
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-slate-800 text-base flex items-center gap-2">
                    <PieChartIcon className="w-5 h-5 text-indigo-500" />
                    Struktur Pengeluaran
                  </h3>
                </div>
                <div className="bg-slate-50 border border-dashed border-slate-200 rounded-xl p-8 text-center flex flex-col items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-3">
                    <FileText className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-medium text-slate-600 mb-1">
                    Tidak ada data pada rentang waktu yang dipilih.
                  </p>
                  <button className="mt-2 text-xs bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-4 py-2 rounded-lg transition-all">
                    + Tambah Data Pertama Anda
                  </button>
                </div>
              </div>
            )}

            {/* WIDGET 3: INVENTARIS TERBARU */}
            {activeWidgets.inventarisTerbaru && (
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="font-bold text-slate-800 text-base flex items-center gap-2">
                      <Package className="w-5 h-5 text-teal-500" />
                      Inventaris Terbaru
                    </h3>
                    <p className="text-xs text-slate-400">Barang kost yang baru ditambahkan</p>
                  </div>
                  <a href="#inventaris" className="text-xs font-semibold text-emerald-600 hover:underline flex items-center gap-1">
                    Lihat Inventaris <ChevronRight className="w-3 h-3" />
                  </a>
                </div>

                <div className="divide-y divide-slate-100">
                  <div className="py-3 flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-slate-800 text-sm">Rice Cooker</h4>
                      <p className="text-xs text-slate-400">Dibeli oleh Yusuf • 12 Agst</p>
                    </div>
                    <span className="font-bold text-sm text-slate-800">Rp 450.000</span>
                  </div>
                  <div className="py-3 flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-slate-800 text-sm">Kipas Angin</h4>
                      <p className="text-xs text-slate-400">Dibeli oleh Bagus • 15 Agst</p>
                    </div>
                    <span className="font-bold text-sm text-slate-800">Rp 300.000</span>
                  </div>
                  <div className="py-3 flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-slate-800 text-sm">Galon</h4>
                      <p className="text-xs text-slate-400">Dibeli oleh Andi • 18 Agst</p>
                    </div>
                    <span className="font-bold text-sm text-slate-800">Rp 20.000</span>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* RIGHT COLUMN (1 Col wide) */}
          <div className="space-y-6">

            {/* WIDGET 4: TAGIHAN TERDEKAT */}
            {activeWidgets.tagihanTerdekat && (
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold tracking-wider uppercase bg-amber-50 text-amber-600 px-2.5 py-1 rounded-md border border-amber-200">
                    Tagihan Terdekat
                  </span>
                  <span className="text-xs font-semibold text-rose-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> 2 hari lagi
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-800">Kost September</h3>
                <p className="text-2xl font-extrabold text-emerald-600 my-2">Rp 500.000</p>
                <p className="text-xs text-slate-400 mb-4">Jatuh tempo: 5 September 2026</p>

                <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs py-2.5 rounded-xl transition-all flex items-center justify-center gap-1">
                  Lihat Detail <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* WIDGET 5: PENGELUARAN BULAN INI */}
            {activeWidgets.pengeluaranBulanIni && (
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xs font-semibold text-slate-400 uppercase">Pengeluaran Bulan Ini</h3>
                    <p className="text-2xl font-extrabold text-slate-800 mt-1">Rp 850.000</p>
                  </div>
                  <span className="text-xs font-medium bg-emerald-50 text-emerald-600 px-2 py-1 rounded-md">
                    Sesuai Rencana
                  </span>
                </div>
                <p className="text-xs text-slate-400 mb-4">Periode: Agustus 2026</p>

                {/* Category Breakdown */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <p className="text-xs font-semibold text-slate-500 mb-2">Per Kategori</p>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-600">Kost</span>
                    <span className="font-semibold text-slate-800">Rp 500.000</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-600">WiFi</span>
                    <span className="font-semibold text-slate-800">Rp 150.000</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-600">Listrik</span>
                    <span className="font-semibold text-slate-800">Rp 100.000</span>
                  </div>
                </div>
              </div>
            )}

            {/* WIDGET 6: AKTIVITAS TERBARU */}
            {activeWidgets.aktivitasTerbaru && (
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-slate-800 text-base">Aktivitas Terbaru</h3>
                  <a href="#aktivitas" className="text-xs text-emerald-600 hover:underline">Lihat Semua →</a>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold text-xs flex items-center justify-center shrink-0">
                      Y
                    </div>
                    <div>
                      <p className="text-xs text-slate-800 font-medium">
                        <strong>Yusuf</strong> menambahkan 'Galon' <strong>Rp20.000</strong>
                      </p>
                      <span className="text-[10px] text-slate-400">Hari ini</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 font-bold text-xs flex items-center justify-center shrink-0">
                      B
                    </div>
                    <div>
                      <p className="text-xs text-slate-800 font-medium">
                        <strong>Bagus</strong> menambahkan 'Kipas Angin' <strong>Rp300.000</strong>
                      </p>
                      <span className="text-[10px] text-slate-400">Kemarin</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 font-bold text-xs flex items-center justify-center shrink-0">
                      A
                    </div>
                    <div>
                      <p className="text-xs text-slate-800 font-medium">
                        <strong>Andi</strong> membayar 'WiFi' <strong>Rp100.000</strong>
                      </p>
                      <span className="text-[10px] text-slate-400">2 hari lalu</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>
      </main>

      {/* MODAL: TAMBAH CARD / CUSTOMIZE DASHBOARD (DESAIN PAGE 3) */}
      {isAddCardOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg p-6 shadow-2xl relative animate-in fade-in zoom-in duration-150">
            {/* Modal Header */}
            <div className="flex justify-between items-center pb-4 border-b border-slate-100">
              <h3 className="text-lg font-bold text-slate-800">Tambah Card / Atur Widget</h3>
              <button
                onClick={() => setIsAddCardOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* List of Customizable Widgets */}
            <div className="mt-4 space-y-3 max-h-96 overflow-y-auto pr-1">
              
              {/* Card 1 */}
              <label className="flex items-start justify-between p-3.5 rounded-xl border border-slate-200 hover:border-emerald-300 bg-slate-50/50 cursor-pointer transition-all">
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Tagihan Terdekat</h4>
                  <p className="text-xs text-slate-500">Pantau pembayaran kost dan iuran sebelum jatuh tempo</p>
                </div>
                <input
                  type="checkbox"
                  checked={activeWidgets.tagihanTerdekat}
                  onChange={() => toggleWidget('tagihanTerdekat')}
                  className="w-5 h-5 rounded border-slate-300 text-emerald-500 focus:ring-emerald-500 mt-0.5"
                />
              </label>

              {/* Card 2 */}
              <label className="flex items-start justify-between p-3.5 rounded-xl border border-slate-200 hover:border-emerald-300 bg-slate-50/50 cursor-pointer transition-all">
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Tren Saldo & Kebutuhan</h4>
                  <p className="text-xs text-slate-500">Visualisasi tren pengeluaran dan riwayat saldo</p>
                </div>
                <input
                  type="checkbox"
                  checked={activeWidgets.trenSaldo}
                  onChange={() => toggleWidget('trenSaldo')}
                  className="w-5 h-5 rounded border-slate-300 text-emerald-500 focus:ring-emerald-500 mt-0.5"
                />
              </label>

              {/* Card 3 */}
              <label className="flex items-start justify-between p-3.5 rounded-xl border border-slate-200 hover:border-emerald-300 bg-slate-50/50 cursor-pointer transition-all">
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Inventaris Terbaru</h4>
                  <p className="text-xs text-slate-500">Daftar item bersama atau pribadi yang baru ditambahkan</p>
                </div>
                <input
                  type="checkbox"
                  checked={activeWidgets.inventarisTerbaru}
                  onChange={() => toggleWidget('inventarisTerbaru')}
                  className="w-5 h-5 rounded border-slate-300 text-emerald-500 focus:ring-emerald-500 mt-0.5"
                />
              </label>

              {/* Card 4 */}
              <label className="flex items-start justify-between p-3.5 rounded-xl border border-slate-200 hover:border-emerald-300 bg-slate-50/50 cursor-pointer transition-all">
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Aktivitas Terbaru</h4>
                  <p className="text-xs text-slate-500">Riwayat log perubahan dan kontribusi para penghuni kost</p>
                </div>
                <input
                  type="checkbox"
                  checked={activeWidgets.aktivitasTerbaru}
                  onChange={() => toggleWidget('aktivitasTerbaru')}
                  className="w-5 h-5 rounded border-slate-300 text-emerald-500 focus:ring-emerald-500 mt-0.5"
                />
              </label>

              {/* Card 5 */}
              <label className="flex items-start justify-between p-3.5 rounded-xl border border-slate-200 hover:border-emerald-300 bg-slate-50/50 cursor-pointer transition-all">
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Pengeluaran Bulan Ini</h4>
                  <p className="text-xs text-slate-500">Total akumulasi anggaran belanja bulan berjalan</p>
                </div>
                <input
                  type="checkbox"
                  checked={activeWidgets.pengeluaranBulanIni}
                  onChange={() => toggleWidget('pengeluaranBulanIni')}
                  className="w-5 h-5 rounded border-slate-300 text-emerald-500 focus:ring-emerald-500 mt-0.5"
                />
              </label>

              {/* Card 6 */}
              <label className="flex items-start justify-between p-3.5 rounded-xl border border-slate-200 hover:border-emerald-300 bg-slate-50/50 cursor-pointer transition-all">
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Struktur Pengeluaran</h4>
                  <p className="text-xs text-slate-500">Visualisasi diagram pembagian kategori pembiayaan kost</p>
                </div>
                <input
                  type="checkbox"
                  checked={activeWidgets.strukturPengeluaran}
                  onChange={() => toggleWidget('strukturPengeluaran')}
                  className="w-5 h-5 rounded border-slate-300 text-emerald-500 focus:ring-emerald-500 mt-0.5"
                />
              </label>

            </div>

            {/* Modal Actions */}
            <div className="flex justify-end gap-3 pt-4 border-t border-slate-100 mt-4">
              <button
                onClick={() => setIsAddCardOpen(false)}
                className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-medium text-sm transition-all"
              >
                Batal
              </button>
              <button
                onClick={() => setIsAddCardOpen(false)}
                className="px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-medium text-sm transition-all shadow-md shadow-emerald-500/20"
              >
                Simpan Card
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
