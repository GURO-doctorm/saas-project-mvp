import Link from 'next/link'

export default function Footer1() {
	return (
		<>
			<footer>
				<div className="section-footer position-relative">
					<div className="container-fluid bgft-1">
						<div className="container position-relative z-2">
							<div className="row py-90">
								<div className="col-lg-4 pe-10" data-aos="fade-zoom-in" data-aos-delay={100}>
									<Link href="/"><img src="/assets/imgs/logo/logo-white.svg" alt="infinia" /></Link>
									<p className="text-white fw-medium mt-3 mb-6 opacity-50">By automating your landing pages, you may cut costs and simplify your workflow, giving you more time to focus on sales.</p>
								</div>
								<div className="col-lg-8">
									<div className="row">
										<div className="col-lg-3 col-md-4 col-6" data-aos="fade-zoom-in" data-aos-delay={200}>
											<h3 className="text-white opacity-50 fs-6 fw-black text-uppercase pb-3 pt-5">Company</h3>
											<div className="d-flex flex-column align-items-start">
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="/page-about-2">About Us</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="/page-team-4">Our Team</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="/page-contact-3">Contact Us</Link>
											</div>
										</div>
										<div className="col-lg-3 col-md-4 col-6" data-aos="fade-zoom-in" data-aos-delay={300}>
											<h3 className="text-white opacity-50 fs-6 fw-black text-uppercase pb-3 pt-5">Explore</h3>
											<div className="d-flex flex-column align-items-start">
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="/page-pricing-01">Pricing</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="/page-integration">Integrations</Link>
											</div>
										</div>
										<div className="col-lg-3 col-md-4 col-6" data-aos="fade-zoom-in" data-aos-delay={400}>
											<h3 className="text-white opacity-50 fs-6 fw-black text-uppercase pb-3 pt-5">Legal Info</h3>
											<div className="d-flex flex-column align-items-start">
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="/page-privacy-policy">Privacy Policy</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="/page-terms-conditions">Terms & Conditions</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row text-center py-4 border-top border-white border-opacity-10">
								<span className="text-white opacity-50" data-aos="fade-zoom-in" data-aos-delay={200}>Copyright © 2025. All Rights Reserved</span>
							</div>
						</div>
					</div>
					<div className="position-absolute top-0 start-50 translate-middle-x z-0">
						<img src="/assets/imgs/footer-1/line-bg.png" alt="infinia" />
					</div>
					<div className="position-absolute top-0 start-0 z-0">
						<img src="/assets/imgs/footer-1/ellipse-left.png" alt="infinia" />
					</div>
					<div className="position-absolute top-0 end-0 z-0">
						<img src="/assets/imgs/footer-1/ellipse-right.png" alt="infinia" />
					</div>
				</div>
			</footer>

		</>
	)
}
