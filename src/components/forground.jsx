import React, { useRef, useState } from 'react'
import Card from './card'

const Forground = () => {

    const ref = useRef(null)
    const demo = [{
        desc: "This is new my read and i am very happy to learn this",
        fileSize: ".12mb",
        close: true,
        tag: { isOpen: false, tagTitle: "Downlaod Now", tagColor: "green" }
    },
    {
        desc: "I am the Studen of this university and i have done my graduation level in this years..",
        fileSize: ".2mb",
        close: false,
        tag: { isOpen: true, tagTitle: "Downlaod Now", tagColor: "green" }
    },
    {
        desc: "ashdjahsjd ajs dhgashj dahj sdaksd kanhsdjah jshd ja",
        fileSize: ".1mb",
        close: true,
        tag: { isOpen: true, tagTitle: "Downlaod Now", tagColor: "green" }
    }
    ]

    const [data, setData] = useState(demo)

    console.log(data)
    return (
        <div >
            <div ref={ref} className='flex fixed top-0 left-0 z-[3] w-full h-screen bg-sky-300/50'>
                {

                    data.map((item, index) => (
                        <Card result={item} key={index} referemce={ref} />
                    ))
                }
            </div>
        </div>
    )
}

export default Forground
