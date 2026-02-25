'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ChevronDown, ChevronRight, LayoutDashboard, BicepsFlexed, Dumbbell } from 'lucide-react';

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
            <div className="sidenav-header">
                <div className="logo-small">
                    <img src="/v3.png" alt="Logo" className="icon-small" />
                </div>
                <h2 className="sidenav-title">Navigation</h2>
            </div>

            {/* Section 1 */}
            <div className="nav-section">
                <button className="section-heading" onClick={() => toggleSection('main')}>
                    <LayoutDashboard className="section-icon" />
                    {/*<span>Grundbewegung an Geräten</span>*/}
                    {openSections.main ? <ChevronDown /> : <ChevronRight />}
                </button>

                {openSections.main && (
                    <ul className="nav-list">
                        <li>
                            <a href="/Home" className={`nav-link ${isActive('/Home') ? 'active' : ''}`}>
                                <img src="/icons/beam.svg" alt="Schwebebalken Icon" className='nav-icon' />
                                <span>Balancieren</span>
                            </a>
                        </li>
                        <li>
                            <a href="/Home" className={`nav-link ${isActive('/Home') ? 'active' : ''}`}>
                                <img src="/icons/bars.svg" alt="Paralell-Barren Icon" className='nav-icon' />
                                <span>Rollen & Drehen</span>
                            </a>
                        </li>
                        <li>
                            <a href="/Home" className={`nav-link ${isActive('/Home') ? 'active' : ''}`}>
                                <img src="/icons/rings.svg" alt="Gymnastikringe Icon" className='nav-icon' />
                                <span>Schaukeln & Schwingen</span>
                            </a>
                        </li>
                    </ul>
                )}
            </div>

            {/* Section 2 */}
            <div className="nav-section">
                <button className="section-heading" onClick={() => toggleSection('personal')}>
                    <LayoutDashboard className="section-icon" />
                    {/*<span>Beweglichkeit, Kraft, Körperspannung</span>*/}
                    {openSections.personal ? <ChevronDown /> : <ChevronRight />}
                </button>

                {openSections.personal && (
                    <ul className="nav-list">
                        <li>
                            <a href="/Home" className={`nav-link ${isActive('/Home') ? 'active' : ''}`}>
                                <Dumbbell className="nav-icon" />
                                <span>Beweglichkeit & Kraft</span>
                            </a>
                        </li>
                        <li>
                            <a href="/Home" className={`nav-link ${isActive('/Home') ? 'active' : ''}`}>
                                <BicepsFlexed className="nav-icon" />
                                <span>Körperspannung</span>
                            </a>
                        </li>
                    </ul>
                )}

            </div>

            <div className="sidenav-footer">
                <small>© {new Date().getFullYear()} </small>
                <div style={{ display: "flex", flexDirection: "column", fontSize: "Medium"}}>
                    <a href="https://be.lehrplan.ch/index.php?code=b%7C9%7C0%7C2" target="_blank" rel="noopener noreferrer">Zum Lehrplan 21</a>
                    <a href="/CV" target="_blank">Über die Arbeit </a>
                </div>
            </div>
        </aside>
    );
}