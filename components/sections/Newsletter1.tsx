
import Link from "next/link"
export default function Newsletter1() {
	return (
		<>


			<section className="section-cta-4 pb-110 @@classList">
				<div className="container pt-0 @@classList">
					<div className="row">
						<div className="col-10 mx-auto">
							<div className="banner bg-primary-soft rounded-3 position-relative px-8 py-lg-0 py-8">
								<div className="d-flex flex-column flex-lg-row align-items-center justify-content-between position-relative z-1">
									<h6 className="fw-regular ds-6 text-black">
										We are<span className="fw-bold"> Looking to <br />Expand </span> Our Team
									</h6>
									<img src="/assets/imgs/banner-2/img-1.png" alt="infinia" />
									<Link href="#" className="btn btn-primary d-block mt-3 mt-lg-0">
										Explore Now
										<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
											<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											<path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</Link>
								</div>
								<img className="position-absolute top-0 end-0 z-0" src="/assets/imgs/services-details/bg-som2.png" alt="infinia" />
								<img className="position-absolute bottom-0 start-0 z-0" src="/assets/imgs/services-details/bg-som1.png" alt="infinia" />
								<img className="flickering position-absolute top-0 end-50 me-5 mt-3 z-0" src="/assets/imgs/banner-2/star-1.png" alt="infinia" />
								<img className="flickering position-absolute bottom-0 start-50 ms-md-10 mb-3 ps-10 z-0" src="/assets/imgs/banner-2/star-2.png" alt="infinia" />
							</div>
						</div>
					</div>
				</div>
			</section>


		</>
	)
}
