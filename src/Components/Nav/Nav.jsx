//import Nav.css
import './Nav.css';

//inport router link
import { Link,NavLink } from 'react-router-dom';

//import Logo
import Logo from '../../assets/logo.png';

//import nav data
import { navLinks, navRight} from '../../Data/Data'; 

//import menu icons
import { VscMenu } from "react-icons/vsc";
import { GrClose } from "react-icons/gr";

//import use state
import { useState } from 'react';

export default function Nav(){

    //use state for navlins ahow and hide

    const[isNavLinksShowing, setIsNavLinkShowing]=useState(false);
    
    /*window scroll nav links effects*/ 
    if(innerWidth<1024){
        window.addEventListener('scroll',()=>{
            document.querySelector('.nav-links').classList.add('navLinksHide');
            setIsNavLinkShowing(false);

        })
    };
    window.addEventListener('scroll',()=>{
        document.querySelector('nav').classList.toggle('navShadow',window.screenY>0);
    })

    return (
        <nav>
            <div className="container nav-container">
                {/*logo*/}
                <Link to={'/'} className='logo'>
                    <img src={Logo} alt="logo" />
                </Link>
                {/*nav links*/}
                <ul className={`nav-links ${isNavLinksShowing ? 'navLinksShow' : 'navLinksHide'}`
                }>
                {
                    navLinks.map(({name, path}, index)=>{
                        return(
                            <li key={index}>
                                <NavLink to={path} className={({isActive}) =>
                                    (isActive ? 'active' :'')
                                }>{name}</NavLink>
                            </li>
                        );
                    })
                    }

                </ul>
                {/*nav right*/}
                <div className="nav-right">
                    {
                        navRight.managements.map((item,index)=>{
                            return(
                                <Link key={index} target='_blank' className='management-icons' to={item.link}>
                                    <item.icon />
                                </Link>
                            );
                        }
                        )
                    }

                    <button className='menu-button' onClick={()=>
                        setIsNavLinkShowing(!isNavLinksShowing)
                    }>
                        {isNavLinksShowing ? <GrClose /> : <VscMenu />}

                    </button>
                </div>
                
            </div>
            
        </nav>
    )
}