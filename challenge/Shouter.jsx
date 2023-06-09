import { useState } from "react";

function Shouter() {
    const [inputtedText, setCapitalisedText] = useState("");

    const handleInputChange = (event) => {
        setCapitalisedText(event.target.value.toUpperCase());
    };

    return (
        <div>
            <input type="text" onChange={handleInputChange} />
            <output>{inputtedText}</output>
        </div>
    )
}

export default Shouter