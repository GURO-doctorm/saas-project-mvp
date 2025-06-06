'use client'
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'

export default function Features1() {

	const [isOpen, setOpen] = useState(false)

	return (
		<>

			<section className="features-1 section-padding" id="xmore">
				<div className="container">
					<div className="row">
						<div className="col-lg-4">
							<div className="d-flex align-items-center bg-linear-1 border border-2 border-white d-inline-flex rounded-pill px-3 py-1">
								<img src="/assets/imgs/features-1/dotx.png" alt="infinia" />
								<span className="tag-spacing fs-7 fw-bold text-white ms-2 text-uppercase">Our Features</span>
							</div>
							<h2 className="fw-medium mt-4 lh-sm">Speed is a must,
								<span className="fw-black">but perfection is what </span>
								<span className="text-primary fst-italic" data-aos="fade-zoom-in" data-aos-delay={400}>builds trust.</span>
							</h2>
						</div>
						<div className="col-lg-8">
							<div className="d-flex flex-md-row flex-column align-items-center position-relative ps-lg-8 pt-lg-0 pt-10">
								<div className="pe-md-3 pb-3 pb-md-0 position-relative z-1" data-aos="fade-zoom-in" data-aos-delay={100}>
									<img className="rounded-3 border border-3 border-white" src="/assets/imgs/features-1/img-1.png" alt="infinia" />
								</div>
								<div className="pe-md-3 pb-3 pb-md-0 position-relative z-1" data-aos="fade-zoom-in" data-aos-delay={200}>
									<img className="rounded-3 border border-3 border-white" src="/assets/imgs/features-1/img-2.png" alt="infinia" />
								</div>
								<div className="pe-md-3 pb-3 pb-md-0 position-relative z-1" data-aos="fade-zoom-in" data-aos-delay={300}>
									<img className="rounded-3 border border-3 border-white" src="/assets/imgs/features-1/img-3.png" alt="infinia" />
									<Link href="#" onClick={() => setOpen(true)} scroll={false} className="d-inline-flex align-items-center rounded-4 text-nowrap backdrop-filter px-3 py-2 popup-video hover-up position-absolute bottom-0 mb-4 start-50 translate-middle-x">
										<span className="backdrop-filter me-2 icon-shape icon-md rounded-circle">
											<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
												<path d="M5.0978 3.31244L12.0958 6.80342C13.077 7.29449 13.0767 8.69249 12.0954 9.18316L5.09734 12.6927C4.21074 13.136 3.16687 12.4925 3.16687 11.5027L3.16687 4.50219C3.16687 3.51217 4.2112 2.86872 5.0978 3.31244Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</span>
										<span className="fw-bold fs-7 text-900">
											How It Work ?
										</span>
									</Link>
									<ModalVideo channel='youtube' isOpen={isOpen} videoId="gXFATcwrO-U" onClose={() => setOpen(false)} />
								</div>
								<img className="position-absolute top-50 start-0 translate-middle-y z-0" src="/assets/imgs/features-1/bg-ellipse.png" alt="infinia" />
								<img className="position-absolute z-2 star-lg" src="/assets/imgs/features-1/star-lg.png" alt="infinia" />
								<img className="position-absolute z-2 star-md" src="/assets/imgs/features-1/star-md.png" alt="infinia" />
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row mt-10">
						{/* prettier-ignore */}
						<div className="col-lg-3 col-md-6" data-aos="fade-zoom-in" data-aos-delay={50}>
							<div className="feature-item mb-5 mb-lg-0">
								<div className="bg-primary icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
									<div className="icon">
										<img src="/assets/imgs/features-1/wa1.svg" alt="infinia" />
									</div>
								</div>
								<h6> Branding Made Simple</h6>
								<p>Elevate your brand with premium pages designed to build trust and drive sales.</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6" data-aos="fade-zoom-in" data-aos-delay={100}>
							<div className="feature-item mb-5 mb-lg-0">
								<div className="bg-primary icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
									<div className="icon">
										<img src="/assets/imgs/features-1/wa2.svg" alt="infinia" />
									</div>
								</div>
								<h6>Effortless Testing</h6>
								<p>Test products at lightning speed with pre-optimized, ready-to-use landing pages.</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6" data-aos="fade-zoom-in" data-aos-delay={200}>
							<div className="feature-item mb-5 mb-lg-0">
								<div className="bg-primary icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
									<div className="icon">
										<img src="/assets/imgs/features-1/wa3.svg" alt="infinia" />
									</div>
								</div>
								<h6>Premium User Experience</h6>
								<p>Perfect layouts, intuitive design, and seamless navigation—crafted to impress and convert.</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6" data-aos="fade-zoom-in" data-aos-delay={300}>
							<div className="feature-item mb-5 mb-lg-0">
								<div className="bg-primary icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
									<div className="icon">
										<img src="/assets/imgs/features-1/wa4.svg" alt="infinia" />
									</div>
								</div>
								<h6>Multi-Language</h6>
								<p>Effortlessly create landing pages in more than 12 languages, reaching customers wherever they are.</p>
							</div>
						</div> 
					</div>
				</div>
			</section>

		</>
	)
}
