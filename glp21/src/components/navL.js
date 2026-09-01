'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ChevronDown, ChevronRight, BicepsFlexed, Dumbbell, BriefcaseMedical } from 'lucide-react';
import Bav from './Bav';
import Mat from './Mat';

export default function SideNav() {
    const pathname = usePathname();

    const [openSections, setOpenSections] = useState({
        main: true,
        personal: false
    });

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 1064);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const toggleSection = (section) => {
        setOpenSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const isActive = (path) => pathname === path;

    return (
        <aside className="sidenav">
            <div className='scril'>

                <div className="sidenav-header">
                    <a className="logo-small" href='/'>
                        <img src="../LogoEcke.png" alt="Logo" className="icon-small" />
                    </a>
                    <h2 className="sidenav-title">Navigation</h2>
                </div>

                {/* Grundbewegung */}
                <div className="nav-section">
                    <button className="section-heading" onClick={() => toggleSection('main')} aria-expanded={openSections.main}>
                        {openSections.main ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                        <span className="font-medium flex-1">Grundbewegung an Geräten</span>
                    </button>

                    {openSections.main && (
                        <ul className="nav-list">
                            <li>
                                <a href="/Balancieren" className={`nav-link ${isActive('/Balancieren') ? 'active' : ''}`}>
                                    <img src="/icons/beam.svg" alt="Schwebebalken" className="nav-icon" />
                                    <span>Balancieren</span>
                                </a>
                            </li>
                            <li>
                                <a href="/Rollen-und-Drehen" className={`nav-link ${isActive('/Rollen-und-Drehen') ? 'active' : ''}`}>
                                    <img src="/icons/bars.svg" alt="Parallelbarren" className="nav-icon" />
                                    <span>Rollen & Drehen</span>
                                </a>
                            </li>
                            <li>
                                <a href="/Schaukeln-und-Schwingen" className={`nav-link ${isActive('/Schaukeln-und-Schwingen') ? 'active' : ''}`}>
                                    <img src="/icons/rings.svg" alt="Gymnastikringe" className="nav-icon" />
                                    <span>Schaukeln & Schwingen</span>
                                </a>
                            </li>
                            <li>
                                <a href="/Springen-Stuetzen-Klettern" className={`nav-link ${isActive('/Springen-Stuetzen-Klettern') ? 'active' : ''}`}>
                                    <img src="/icons/ladder.svg" alt="Leiter" className="nav-icon" />
                                    <span>Springen, Stützen & Klettern</span>
                                </a>
                            </li>
                            <li>
                                <a href="/Wagnis-und-Verantwortung" className={`nav-link ${isActive('/Wagnis-und-Verantwortung') ? 'active' : ''}`}>
                                    <img src="/icons/love.svg" alt="Handherz" className="nav-icon" />
                                    <span>Wagnis & Verantwortung</span>
                                </a>
                            </li>
                            <li>
                                <a href="/Helfen-Sichern-Kooperieren" className={`nav-link ${isActive('/Helfen-Sichern-Kooperieren') ? 'active' : ''}`}>
                                    <BriefcaseMedical className="nav-icon" />
                                    <span>Helfen, Sichern & Kooperieren</span>
                                </a>
                            </li>
                        </ul>
                    )}
                </div>

                {/* B, K, K */}
                <div className="nav-section">
                    <button className="section-heading" onClick={() => toggleSection('personal')} aria-expanded={openSections.personal}>
                        {openSections.personal ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                        <p>Beweglichkeit, Kraft, Körperspannung</p>
                    </button>

                    {openSections.personal && (
                        <ul className="nav-list">
                            <li>
                                <a href="/Beweglichkeit-und-Kraft" className={`nav-link ${isActive('/Beweglichkeit-und-Kraft') ? 'active' : ''}`}>
                                    <Dumbbell className="nav-icon" />
                                    <span>Beweglichkeit & Kraft</span>
                                </a>
                            </li>
                            <li>
                                <a href="/Koerperspannung" className={`nav-link ${isActive('/Koerperspannung') ? 'active' : ''}`}>
                                    <BicepsFlexed className="nav-icon" />
                                    <span>Körperspannung</span>
                                </a>
                            </li>
                        </ul>
                    )}
                </div>

                {/* Footer */}
                <div className="sidenav-footer">
                    <small>© {new Date().getFullYear()} </small>
                    <br /> <Bav /> <Mat /> <button onClick={() => window.open('https://be.lehrplan.ch/index.php?code=b%7C9%7C0%7C2', '_blank', 'noopener noreferrer')}>Lehrplan 21</button>
                </div>
            </div>
        </aside>
    );
}