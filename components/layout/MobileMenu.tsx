'use client'
import Link from 'next/link'
import { useState } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

export default function MobileMenu({ isMobileMenu, handleMobileMenu }: any) {
	const [isAccordion, setIsAccordion] = useState(0)

	const handleAccordion = (key: any) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}
	return (
		<>
			{/* Offcanvas search */}
			<div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar button-bg-2 ${isMobileMenu ? 'sidebar-visible' : ''}`}>
				<div className="mobile-header-wrapper-inner">
					<div className="mobile-header-logo">
						<Link className="navbar-brand d-flex main-logo align-items-center" href="/">
							<img src="/assets/imgs/template/xvilo.svg" alt="infinia" />
							<span>Plando</span>
						</Link>
						<div className={`burger-icon burger-icon-white border rounded-3 ${isMobileMenu ? 'burger-close' : ''}`} onClick={handleMobileMenu}>
							<span className="burger-icon-top" />
							<span className="burger-icon-mid" />
							<span className="burger-icon-bottom" />
						</div>
					</div>
					<div className="mobile-header-content-area">
						<div className="perfect-scroll">
							<div className="mobile-menu-wrap mobile-header-border">
								<nav>
									<ul className="mobile-menu font-heading ps-0">
										<li className={`has-children ${isAccordion === 5 ? "active" : ""}`}>
											<li className="nav-item">
						                     <Link className="nav-link fw-bold d-flex align-items-center" href="/#">Sign Up</Link>
					                        </li>
										</li>
										<li className={`has-children ${isAccordion === 1 ? "active" : ""}`}>
											<li className="nav-item">
						                      <Link className="nav-link fw-bold d-flex align-items-center" href="/page-pricing-01">Pricing</Link>
					                        </li>
										</li>
										<li className={`has-children ${isAccordion === 2 ? "active" : ""}`}>
											<li className="nav-item">
						                     <Link className="nav-link fw-bold d-flex align-items-center" href="/page-integration">Integrations</Link>
					                        </li>
										</li>
										<li className={`has-children ${isAccordion === 3 ? "active" : ""}`}>
											<li className="nav-item">
						                     <Link className="nav-link fw-bold d-flex align-items-center" href="/page-team-4">Our Team</Link>
					                        </li>
										</li>
										<li className={`has-children ${isAccordion === 4 ? "active" : ""}`}>
											<li className="nav-item">
						                     <Link className="nav-link fw-bold d-flex align-items-center" href="/page-contact-3">Contact</Link>
					                        </li>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
