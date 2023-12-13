import React from 'react'
import { FaFileDownload } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"




const Card = ({ result, referemce }) => {
    return (
        <motion.div whileHover={{
            scale: 1,
            transition: { duration: 1 },

        }} whileTap={{ scale: 0.9 }} drag dragConstraints={referemce} className='relative m-5 w-60 h-72 rounded-[20px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden'>
            <FaFileDownload />
            <p className='text-sm mt-5 font-semibold leading-tight'>{result?.desc}</p>
            <div className='footer absolute bottom-0 w-full h-20 py-3 left-0'>
                <div className=' flex justify-between items-center px-8'>
                    <h4>{result?.fileSize}</h4>
                    <span className='w-8 h-5 bg-zinc-600 rounded-full flex justify-center items-center'>
                        {
                            result?.close ? <IoClose size=".8em" color='#fff' /> : <FaDownload size=".8em" color='#fff' />
                        }

                    </span>
                </div>
                {
                    result?.tag.isOpen && (
                        <div className={`tag w-full mt-2 py-2  ${result?.tag.tagColor === 'green' ? "bg-green-400" : null} flex items-center justify-center`}>
                            <h3 className='text-md'>Download Now....</h3>
                        </div>
                    )
                }

            </div>
        </motion.div>
    )
}

export default Card
