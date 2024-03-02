import './NotFound.css'

import { Link } from 'react-router-dom'

export default function NotFound(){
    return (
        <section className='Not-Found'>
            <div className='container not-found-container'>
                <h1>404</h1>
                <h3>Oops,This page Cannot Be Found</h3>
                <Link to={'/'} className='btn btn-border'>Go to Home</Link>
            </div>
        </section>
    )
}