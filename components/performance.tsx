'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import ShopifyLogo from "@/public/logos/shopify.png"
import WPLogo from "@/public/logos/WordPress.png"
import MyLogo from "@/public/BrandTag.png"

export default function PerformanceRace() {
  return (
    <div className="relative w-full h-40 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden p-6 flex flex-col justify-between">
      
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
      
    </div>
  )
}