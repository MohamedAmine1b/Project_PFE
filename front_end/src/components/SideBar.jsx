import { Menu } from 'lucide-react';
import '../styles/sideBarStyle.css';
import { useState } from 'react';
export default function SideBar({ items }) {
    const [isOpen, setIsOpen] = useState(false);
    function toggleMenu() {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <Menu onClick={toggleMenu} className='menuIcon' />
            <div className={`pt-3 side-container ${isOpen ? 'show' : 'hide'}`}>
                <h5 className='panneau ps-3'>Panneau</h5>
                <ul className='sideBarMenu'>
                    {
                        items.map((item, i) => <li className={(item.active ? 'activePage' : '') + ' d-flex align-items-center pt-2 pe-2 pb-2 ps-3 '} key={i}>
                            <i>{item.icon}</i>
                            <span className='ms-2 m-0'>{item.title}</span>
                        </li>)
                    }
                </ul>
            </div>
        </>
    )
}
