import { useState, useEffect } from "react";

function MouseTracker() {
    
    const [mousePosition, setMousePosition] = useState("0,0");
    
    useEffect(() => {
        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;
            setMousePosition(`${clientX},${clientY}`)
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [])

    return (
        <output>{mousePosition}</output>
    )
}


export default MouseTracker