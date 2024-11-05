import Link from "next/link"
import Navbar from "../components/Navbar"

const Gallery = () => {
    return (
        <div>
            <Navbar />
            <div>
                gallery page down
            </div>
            <Link href="/">go to Home</Link>
        </div>
    )
}

export default Gallery