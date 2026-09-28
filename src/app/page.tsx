"use client";

import { useState, type FormEvent } from "react";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-10 text-gray-800 sm:py-16">
      <div className="mx-auto max-w-xl">
        <div className="mb-6">
          <p className="mb-2 text-sm font-medium text-blue-700">
            Tugas Front End
          </p>
          <h1 className="text-3xl font-bold">Form Pengajuan Proyek</h1>
          <p className="mt-2 text-sm text-gray-600">
            Isi formulir berikut untuk menjelaskan proyek yang ingin dibuat.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          {submitted ? (
            <div role="status" className="py-8 text-center">
              <h2 className="text-xl font-semibold text-green-700">
                Form selesai diisi
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Terima kasih. Ini hanya demo frontend, jadi data tidak dikirim
                ke server.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 rounded-md bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
              >
                Isi lagi
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Nama lengkap <span className="text-red-600">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  minLength={2}
                  placeholder="Masukkan nama lengkap"
                  className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="nama@email.com"
                  className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="projectType"
                  className="mb-2 block text-sm font-medium"
                >
                  Jenis proyek <span className="text-red-600">*</span>
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  defaultValue=""
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="" disabled>
                    Pilih jenis proyek
                  </option>
                  <option value="website">Website</option>
                  <option value="application">Aplikasi</option>
                  <option value="design">Desain UI/UX</option>
                  <option value="other">Lainnya</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="mb-2 block text-sm font-medium"
                >
                  Deskripsi proyek <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  minLength={10}
                  rows={5}
                  placeholder="Jelaskan singkat kebutuhan proyek Anda"
                  className="w-full resize-y rounded-md border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <p className="text-xs text-gray-500">* Wajib diisi</p>
              <button
                type="submit"
                className="w-full rounded-md bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
              >
                Kirim
              </button>
              <p className="text-center text-xs text-gray-500">
                Demo frontend: data tidak dikirim ke server.
              </p>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
