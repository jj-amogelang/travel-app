import React, { useRef } from 'react';
import './InfoDoc.css'; // Import the CSS file for styling

const images = [
    '/public/images/mbongeni1.jpg',
    '/public/images/mbongeni.jpeg',
    '/public/images/sarafina.jpg',
    // Add more image paths as needed
];


const InfoDoc = () => {
    const imageContainerRef = useRef(null);

    const scrollLeft = () => {
        if (imageContainerRef.current) {
            imageContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (imageContainerRef.current) {
            imageContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <div className="election-article">
            <header className="header">
                <a href="/travel"><button className="back-button">←</button></a>
                <h1>Mbongeni Ngema </h1>
            </header>
            <div className="image-container" ref={imageContainerRef}>
                {images.map((src, index) => (
                    <img key={index} src={src} alt={`Kamala Harris ${index + 1}`} className="article-image" />
                ))}
            </div>
            <div className="scroll-buttons">
                <button onClick={scrollLeft} className="scroll-button">←</button>
                <button onClick={scrollRight} className="scroll-button">→</button>
            </div>
            <p>
            Mbongeni Ngema (born 1955, Verulam, South Africa—died December 27, 2023) was a South African playwright, composer, choreographer, and theatrical director known largely for plays that reflected the spirit of black South Africans under apartheid. Ngema, an ethnic Zulu, worked as a manual labourer and guitarist before he began acting in local theatre groups in the late 1970s. With actor Percy Mtwa he wrote the satirical play Woza Albert! (1981), which imagines that the second coming of Jesus Christ takes place in South Africa. The government first tries to exploit him and then banishes him to a notorious prison for blacks. Ngema’s next show, the musical Asinamali! (1983), deals with police violence, forced separations from families, and constricting racist laws as experienced by five prisoners. Soon after the play opened, police raided a performance and arrested Ngema’s actors. Despite its serious theme, Asinamali! is filled with music and comedy.
            </p>
        </div>
    );
};

export default InfoDoc;