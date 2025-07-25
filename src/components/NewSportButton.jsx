"use client"
import { motion } from "framer-motion";



export default function NewSportButton() {
    return (
    
        <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
            className="flex flex-row bg-green-400 justify-center items-center rounded-sm border-solid hover:bg-amber-400 w-24  height={10rem} mr-5 ml-5"
        >
            <p>Click me!</p>
        </motion.div>

    )
}