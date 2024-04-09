'use client'
import styles from "@/app/styles/common.module.css"
import Image from 'next/image';

const page = ({ params }) => {
    const titles = [
        {
            "id": 1,
            "type": "Movie",
            "title": "The Shawshank Redemption",
            "synopsis": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            "image": "/redemption.jpg"
        },
        {
            "id": 2,
            "type": "Movie",
            "title": "The Godfather",
            "synopsis": "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
            "image": "/godfather.jpg"
        },
        {
            "id": 3,
            "type": "TV Show",
            "title": "Breaking Bad",
            "synopsis": "A high school chemistry teacher turned methamphetamine manufacturer partners with a former student to create and sell the drug.",
            "image": "/breaking.jpg"
        },
        {
            "id": 4,
            "type": "Movie",
            "title": "The Dark Knight",
            "synopsis": "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
            "image": "/knight.jpg"
        },
        {
            "id": 5,
            "type": "TV Show",
            "title": "Stranger Things",
            "synopsis": "When a young boy disappears, his mother, a police chief, and his friends must confront terrifying supernatural forces to get him back.",
            "image": "/stranger.jpg"
        }];
    const id = params[0]
    console.log(id)
    console.log(params);
    const main_data = titles.filter(item => (item.id) === Number(id));
    console.log(main_data)
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(console.log);

    return (
        <div className={styles.container}>
            <h2 className={styles.movie_title} >
                NextFlix \ <span>{main_data[0].type}</span>
            </h2>
            <div className={styles.card_section}>
                <div>
                    <Image src={main_data[0].image} alt={main_data[0].title} width={600} height={300} />
                </div>
                <div>
                    <h1>{main_data[0].title}</h1>
                    <p>{main_data[0].synopsis}</p>
                </div>
            </div>
        </div>
 
    );
}

export default page;
