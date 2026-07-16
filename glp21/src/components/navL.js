'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ChevronDown, ChevronRight, LayoutDashboard, BicepsFlexed, Dumbbell, BriefcaseMedical } from 'lucide-react';

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
        <aside className="sidenav h-screen flex flex-col overflow-hidden mr-20">

            <div className="sidenav-header flex-shrink-0 px-4 py-6">
                <a className="logo-small" href='/'>
                    <img src="../LogoEcke.png" alt="Logo" className="icon-small" />
                </a>
                <h2 className="sidenav-title">Navigation</h2>
            </div>

            {/* Scrollable Content Area */}
            <div className='scril'>

                {/* Grundbewegung */}
                <div className="nav-section mb-8">
                    <button
                        className="section-heading w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-100 rounded-lg transition-colors"
                        onClick={() => toggleSection('main')}
                        aria-expanded={openSections.main}
                    >
                        {openSections.main ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                        <span className="font-medium flex-1">Grundbewegung an Geräten</span>
                    </button>

                    {openSections.main && (
                        <ul className="nav-list mt-2 space-y-1">
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
                                    <span>Springen, Stützen, Klettern</span>
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
                                    <span>Helfen, Sichern, Kooperieren</span>
                                </a>
                            </li>
                        </ul>
                    )}
                </div>

                {/* B, K, K */}
                <div className="nav-section">
                    <button
                        className="section-heading w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-100 rounded-lg transition-colors"
                        onClick={() => toggleSection('personal')}
                        aria-expanded={openSections.personal}
                    >
                        {openSections.personal ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                        <p>Beweglichkeit, Kraft, Körperspannung</p>
                    </button>

                    {openSections.personal && (
                        <ul className="nav-list mt-2 space-y-1">
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
            </div>

            {/* Footer */}
            <div className="sidenav-footer flex-shrink-0 px-4 py-6 border-t border-gray-200 text-xs">
                <small>© {new Date().getFullYear()} </small>
                <div className="flex flex-col gap-1 mt-2 text-sm">
                    <a href="https://be.lehrplan.ch/index.php?code=b%7C9%7C0%7C2" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{color: '#F2E9E9', padding: '4px 4px'}} > Zum Lehrplan 21 </a>
                    <span style={{color: '#A00000'}}>span</span>
                    <a href="/MAT" target="_blank" className="hover:underline" style={{color: '#F2E9E9', padding: '4px 4px'}}> Über die Arbeit </a>
                </div>
            </div>
        </aside>
    );
}