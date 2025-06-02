'use client'
import Link from "next/link"
import { useState } from "react"
import CountUp from 'react-countup'

export default function Cta7() {

	// Tab
	const [isTab, setIsTab] = useState(1)

	const handleTab = (i: any) => {
		setIsTab(i)
	}

	return (
		<>

			<section>
				<div className="container-fluid position-relative section-padding">
					<div className="container">
					<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
                                    <img src="/assets/imgs/features-1/dots.png" alt="infinia" />
                                    <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">All You Need</span>
                                </div>
						<div className="row">
							<div className="col-lg-6">
								<h5 className="fw-regular ds-5">No <span className="fw-bold">Limits—Create  <br />Pages Your </span>Way.</h5>
							</div>
							<div className="row align-items-center">
								<div className="col-lg-6 text-lg-start text-center">
									<div className="position-relative z-1 d-inline-block mb-lg-0 mb-8">
										<img className="rounded-4 position-relative z-1" src="/assets/imgs/cta-7/img-1.png" alt="infinia" />
										<div className="alltuchtopdown position-absolute top-50 start-50 ms-md-10 mt-md-10 backdrop-filter bg-primary rounded-4 px-6 py-4 text-center z-1">
											<span className="h2 count fw-black mb-0 lh-1 text-white text-nowrap">+<span className="odometer" /><CountUp end={47} enableScrollSpy={true} />%</span>
											<p className="text-white text-nowrap border-bottom border-opacity-50 border-white pb-3 mb-3">Faster Workflow</p>
											<span className="h2 count fw-black my-0 lh-1 text-white text-nowrap">x<span className="odometer" /><CountUp end={16} enableScrollSpy={true} /></span>
											<p className="text-white text-nowrap mb-0"> Test Speed</p>
										</div>
									</div>
								</div>
								<div className="col-lg-6 mt-lg-0 mt-5">
									<nav>
										{/*<div className="nav nav-tabs bg-neutral-100 justify-content-evenly border-bottom-0 mb-5" id="nav-tab" role="tablist">
											<button className={`${isTab == 1 ? "nav-link active" : "nav-link"} position-relative`} data-bs-toggle="tab" type="button" onClick={() => handleTab(1)} role="tab" >Our History
												<span className="underline bg-primary" />
											</button>
											<button className={`${isTab == 2 ? "nav-link active" : "nav-link"} position-relative`} data-bs-toggle="tab" type="button" onClick={() => handleTab(2)} role="tab" >Our Mission
												<span className="underline bg-primary" />
											</button>
											<button className={`${isTab == 3 ? "nav-link active" : "nav-link"} position-relative`} data-bs-toggle="tab" type="button" onClick={() => handleTab(3)} role="tab" >Our Vision
												<span className="underline bg-primary" />
											</button>
										</div> */}
									</nav>
									<div className="tab-content" id="nav-tabContent">
										<div className={`${isTab == 1 ? "tab-pane fade show active" : "tab-pane fade"}`} role="tabpanel" >
											<p className="text-900 mb-3">Testing products, optimizing winners, scaling fast—why do landing pages still take days when <span className="fw-black">speed means profit ?</span></p>
											<div className="row">
												<div className="col-12 col-md-6 mb-3 mb-md-0">
													<p className="text-900"> From initial tests to full-scale launches, your landing pages should accelerate growth—not hold it back. But poor design and platform limitations are slowing you down at every stage. Now, you can instantly deploy test pages, quickly optimize the winners, and effortlessly scale proven performers.</p>
													<ul className="list-unstyled phase-items mb-0">
														<li className="d-flex align-items-center mt-3">
															<img src="/assets/imgs/cta-2/check.svg" alt="infinia" />
															<p className="ms-2 mb-0 text-900 fs-6">One-click generation</p>
														</li>
														<li className="d-flex align-items-center mt-3">
															<img src="/assets/imgs/cta-2/check.svg" alt="infinia" />
															<p className="ms-2 mb-0 text-900 fs-6">A/B Test Easily</p>
														</li>
														<li className="d-flex align-items-center mt-3">
															<img src="/assets/imgs/cta-2/check.svg" alt="infinia" />
															<p className="ms-2 mb-0 text-900 fs-6">Quick Customization</p>
														</li>
														<li className="d-flex align-items-center mt-3">
															<img src="/assets/imgs/cta-2/check.svg" alt="infinia" />
															<p className="ms-2 mb-0 text-900 fs-6">Optimized Forms for COD</p>
														</li>
													</ul>
												</div>
												<div className="col-12 col-md-6 position-relative text-center">
													<img className="rounded-3" src="/assets/imgs/cta-7/img-2.png" alt="" />
													<Link href="#" className="position-md-absolute d-block translate-middle-md  w-50 start-0 ms-md-0 ms-10 mt-3 mt-md-0 p-3 rounded-3 bg-linear-1">
														<span className="rounded-circle">
															<img className="rounded-circle border border-5 border-primary-light" src=" assets/imgs/cta-2/avatar-1.png" alt="infinia" />
														</span>
														<h6 className="mt-1">Kensei <span className="text-500 fs-6">, Marketer</span></h6>
													</Link>
													<div className="position-md-absolute bottom-0 start-50 mt-3 mt-md-0 translate-middle-md-x">
														<img src="/assets/imgs/cta-7/name-admin.svg" alt="" />
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="border-top pt-6 mt-md-8 mt-6">
										<Link href="#" className="fw-bold btn btn-gradient d-inline-flex align-items-center hover-up">
											<span className="me-10">Get 3 Days Free Trial</span>
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="none">
												<path className="fill-white" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="white" />
											</svg>
										</Link>
										<p className="fs-7 text-500 mt-3">No Card Required. Cancel Anytime.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="position-absolute top-0 end-0 z-1 flickering p-10 m-10 d-none d-lg-block">
							<img src="/assets/imgs/cta-7/star-1.svg" alt="infinia" />
						</div>
					</div>
				</div>
			</section>

		</>
	)
}