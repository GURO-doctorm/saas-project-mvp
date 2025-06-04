'use client'
import Link from "next/link"
import { useState } from 'react'

export default function Cta4() {

	const [, setOpen] = useState(false)

	return (
		<>
			<section className="section-cta-4 pb-110 @@classList section-padding">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 text-center">
							<div className="text-center rounded-4 position-relative d-inline-flex">
								<div className="zoom-img rounded-4 position-relative z-1">
									<img className="rounded-4" src="/assets/imgs/cta-4/green2.png" alt="infinia" />
									<div className="position-absolute top-50 start-50 translate-middle z-2">
										<Link href="#" onClick={() => setOpen(true)} scroll={false} className="d-inline-flex align-items-center rounded-4 text-nowrap backdrop-filter px-3 py-2 popup-video hover-up me-3 shadow-1">
											<span className="backdrop-filter me-2 icon-shape icon-md rounded-circle">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                                                  <path d="M12 0C11.4 3.2 8.8 5.8 5.6 6.4 8.8 7 11.4 9.6 12 12c0.6-2.4 3.2-5 6.4-5.6C15.2 5.8 12.6 3.2 12 0zm-7 9c-.4 2.4-2.6 4.6-5 5 2.4.4 4.6 2.6 5 5 .4-2.4 2.6-4.6 5-5-2.4-.4-4.6-2.6-5-5zm16 6c-.3 1.2-1.3 2.2-2.5 2.5 1.2.3 2.2 1.3 2.5 2.5.3-1.2 1.3-2.2 2.5-2.5-1.2-.3-2.2-1.3-2.5-2.5z" />
                                                </svg>
											</span>
											<span className="fw-bold fs-7 text-900">
												Try Template
											</span>
										</Link>
									</div>
								</div>
								<div className="position-absolute top-100 start-0 translate-middle z-0 pt-5">
									<img className="alltuchtopdown" src="/assets/imgs/cta-4/vector.svg" alt="infinia" />
								</div>
							</div>
						</div>
						<div className="col-lg-6 mt-lg-0 mt-8">
							<h6 className="text-primary">Save Your Time</h6>
							<h5 className="ds-5 my-3">Speed Up Your Testing <br />and
                               Start  <span className="text-primary">Selling Faster</span></h5> 
							<p className="fs-5 text-500">Accelerate the sales process by creating landing pages instantly. Make the creation process fast and efficient.</p>
							<div className="d-md-flex align-items-center mt-4 mb-5">
								<ul className="list-unstyled phase-items mb-0">
									<li className="d-flex align-items-center mt-3">
										<img src="/assets/imgs/cta-2/check.svg" alt="infinia" />
										<span className="ms-2 text-900">Save Time, Maximize ROI</span>
									</li>
									<li className="d-flex align-items-center mt-3">
										<img src="/assets/imgs/cta-2/check.svg" alt="infinia" />
										<span className="ms-2 text-900">Maximum Conversions</span>
									</li>
								</ul>
								<ul className="list-unstyled phase-items ms-md-5 mb-0">
									<li className="d-flex align-items-center mt-3">
										<img src="/assets/imgs/cta-2/check.svg" alt="infinia" />
										<span className="ms-2 text-900">High-Impact Pages</span>
									</li>
									<li className="d-flex align-items-center mt-3">
										<img src="/assets/imgs/cta-2/check.svg" alt="infinia" />
										<span className="ms-2 text-900">Design without limits</span>
									</li>
								</ul>
							</div>
							<div className="row mt-8">
								<div className="d-flex align-items-center">
									<Link href="#" className="btn btn-gradient">
										Sign Up Free
										<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
											<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											<path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</Link>
									<Link href="#xmore" className="ms-5 text-decoration-underline fw-bold">Discover more</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			
		</>
	)
}
