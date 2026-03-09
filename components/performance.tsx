'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import ShopifyLogo from "@/public/logos/shopify.png"
import WPLogo from "@/public/logos/WordPress.png"
import MyLogo from "@/public/BrandTag.png"

export default function PerformanceRace() {
  return (
    <div className="relative w-full bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden p-6 flex flex-col justify-between">
      
      {/* Competitors Track */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "85%" }} // Moves to the right side
        transition={{ duration: 6, ease: "linear" }}
        className="flex items-center gap-4"
      >
        <Image src={ShopifyLogo} alt="Shopify" width={40} height={40} className="opacity-50" />
        <Image src={WPLogo} alt="WordPress" width={40} height={40} className="opacity-50" />
        <span className="text-[10px] text-slate-400 font-bold">Standard Loading...</span>
      </motion.div>

      {/* Your Brand Track */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "85%" }} // Moves to the right side
        transition={{ duration: 2, ease: "easeOut" }} // Much faster, punchier arrival
        className="relative"
      >
        <Image src={MyLogo} alt="My Brand" width={50} height={50} className="rounded-full border-2 border-green-500 shadow-xl" />
        <span className="absolute left-16 top-3 text-[10px] text-green-600 font-black">INSTANT</span>
      </motion.div>

      <div className="mt-5 grow h-fit text-lg border-t-4 border-gray-300">
        <h3 className="mb-5 text-center font-bold">Performance Comparison: Web Architectures</h3>
        
        {/* DESKTOP VIEW: Standard Table */}
        <table className="hidden md:table w-full border-collapse text-left">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="p-2.5">Metric</th>
              <th className="p-2.5">WordPress</th>
              <th className="p-2.5">Shopify</th>
              <th className="p-2.5">Next.js</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-2.5 font-bold">Typical Load Time</td>
              <td className="p-2.5">3–6s</td>
              <td className="p-2.5">2–5s</td>
              <td className="p-2.5">&lt; 1s</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-2.5 font-bold">Architecture</td>
              <td className="p-2.5">PHP/MySQL</td>
              <td className="p-2.5">SaaS</td>
              <td className="p-2.5">React</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-2.5 font-bold">Performance Driver</td>
              <td className="p-2.5">Plugin Bloat</td>
              <td className="p-2.5">Platform Defaults</td>
              <td className="p-2.5">Custom Logic</td>
            </tr>
          </tbody>
        </table>

        {/* MOBILE VIEW: Card-based layout */}
        <div className="md:hidden space-y-4">
          <div className="border p-4 rounded-lg">
            <p className="font-bold">Typical Load Time</p>
            <p className="text-sm text-gray-600">WP: 3–6s | Shopify: 2–5s | Next.js: &lt; 1s</p>
          </div>
          <div className="border p-4 rounded-lg">
            <p className="font-bold">Architecture</p>
            <p className="text-sm text-gray-600">WP: PHP | Shopify: SaaS | Next.js: React</p>
          </div>
          <div className="border p-4 rounded-lg">
            <p className="font-bold">Performance Driver</p>
            <p className="text-sm text-gray-600">WP: Plugin Bloat | Shopify: Platform | Next.js: Custom</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}