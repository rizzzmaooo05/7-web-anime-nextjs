"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [keyword, setKeyword] = useState()
  const router = useRouter()

  return (
    <header className="bg-gray-800 p-3 flex flex-col sm:flex-row gap-1 justify-center sm:justify-between sm:items-center font-mono">
      <h1 className="text-4xl self-center text-white">
        <a href="/">Rizzz Anime</a>
      </h1>
      <input
        className="h-7 p-2 rounded-md border-slate-800 sm:w-[250px]"
        placeholder="Cari Anime ..."
        type="text"
        onChange={(event) => setKeyword(event.target.value)}
        onKeyDown={(event) => {
          event.key === 'Enter' ? router.push(`/search/${keyword}`) : null
        }}
      />
    </header>
  );
}
