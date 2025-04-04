import '../styles/navBarStyle.css';
export default function NavBar(props){
    return(
        <nav className="navbar  navbar-expand">
                    <div className="container">
                        <div className="collapse navbar-collapse ">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <h5 className='mt-2 nav-title'>{props.title}</h5>
                                </li>
                            </ul>
                            <div className="dropdown">
                                <button className=" btn-profile dropdown-toggle bg-white border-0" type="button" data-bs-toggle="dropdown">
                                    <span className='me-2 user-name'>{props.user}</span>
                                    <div className='d-inline-block' data-svg-wrapper>
                                        <svg width="25" height="25" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="40" height="40" rx="20" fill="#CDF2E1" />
                                            <path d="M20 12C21.0609 12 22.0783 12.4214 22.8284 13.1716C23.5786 13.9217 24 14.9391 24 16C24 17.0609 23.5786 18.0783 22.8284 18.8284C22.0783 19.5786 21.0609 20 20 20C18.9391 20 17.9217 19.5786 17.1716 18.8284C16.4214 18.0783 16 17.0609 16 16C16 14.9391 16.4214 13.9217 17.1716 13.1716C17.9217 12.4214 18.9391 12 20 12ZM20 22C24.42 22 28 23.79 28 26V28H12V26C12 23.79 15.58 22 20 22Z" fill="black" />
                                        </svg>
                                    </div>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href='/'>Profil</a></li>
                                    <li><a className="dropdown-item" href='/'>Déconnexion</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
    )
}