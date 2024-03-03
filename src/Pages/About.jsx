import './About.css'
import Aboutimg from '../assets/about.jpg';

export default function About(){
    return (
        <>
        

        <p><br /><h3>
        
                    <img src={Aboutimg} alt="about" className='aboutimg' />
                Welcome to The Bookshelf, your online destination for all things literary! <br /></h3><br />
                At The Bookshelf, we believe in the transformative power of books. Whether you're a seasoned reader or new to literature, our curated collection has something for everyone. From classic to contemporary, fiction to non-fiction, and children's books to thought-provoking reads, we offer a diverse selection reflecting human experiences. More than a bookstore, we're a community of book lovers celebrating the written word through author interviews, book clubs, and literary events. Join us to connect with fellow readers, share favorites, and discover new treasures. Our user-friendly website ensures a seamless shopping experience with fast, reliable shipping. 
                <br />Thank you for choosing The Bookshelf as your literary companion; we're excited to help you find your next great read!</p>
        </>
    )
}

