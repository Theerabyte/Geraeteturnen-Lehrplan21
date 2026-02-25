'use client'

import { useRef, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Earth, FileUser, FolderGit2, Menu, Lock, Phone } from 'lucide-react';

function Nav() {

  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const menuRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1064);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMenuToggle = () => {
    if (isMobile) {
      setOpen(prev => !prev);
    }
  };

  const handleNavigation = (path) => {
    setOpen(false);
    router.push(path);
  };

  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <nav >
      <div className='logo'>
        <img className='icon' src='/v3.png' />
      </div>
      <button id="menuButton" className="menu-button" onClick={handleMenuToggle} style={{ marginLeft: "2%" }}><Menu className='icon' /></button>
      <div className={`${open ? "show" : "menu"}`} ref={menuRef}>
        <a onClick={() => handleNavigation('/Home')} className={isActive('/Home') ? 'active-link' : 'nava'}><Earth className='ico'/>{!isMobile}</a>
        <a onClick={() => handleNavigation('/CV')} className={isActive('/CV') ? 'active-link' : 'nava'}><FileUser className='ico' />{!isMobile}</a>
        <a onClick={() => handleNavigation('/Projects')} className={isActive('/Projects') ? 'active-link' : 'nava'}><FolderGit2 className='ico' />{!isMobile}</a>
        <a onClick={() => handleNavigation('/Vault')} className={isActive('/Vault') ? 'active-link' : 'nava'}><Lock className='ico' />{!isMobile}</a>
        
      </div>
    </nav>
  );
}

export default Nav;