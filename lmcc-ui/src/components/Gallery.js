import Image from 'next/image';

export default function Gallery() {
    return (
        <div>
            <h1>Artwork Gallery</h1>
            <Image
                src="https://path/to/your/image.jpg" // Replace with the actual image URL
                alt="Artwork Image"
                width={500}  // Desired width
                height={300} // Desired height
            />
        </div>
    );
}
