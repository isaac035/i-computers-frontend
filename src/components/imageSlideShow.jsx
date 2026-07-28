import { useState } from "react"

export default function ImageSlideShow(props) {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = props.images;


    return (
        <div className="w-[450px] h-[650px] flex flex-col">

            <img src={images[currentImageIndex]} className="w-full h-[500px] object-contain" />
            <div className="w-full h-[100px] flex justify-center items-center gap-4"> 

                {
                    images.map((image, index) => {
                        return (
                            <img src={image} className={`w-[100px] h-[100px] object-contain cursor-pointer ${index === currentImageIndex ? "border-4 border-accent rounded-b-md overflow-hidden" : ""}`} onClick={() => setCurrentImageIndex(index)} />
                        )
                   })
                }

             </div>
        </div>
    )
}