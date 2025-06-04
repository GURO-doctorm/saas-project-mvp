
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function PageIntegration() {

	return (
		<>

			<Layout >

				{/* Intergrate */}
				<section className="section-integrate section-padding">
					<div className="container">
						<div className="text-center mb-8">
							<div className="d-flex align-items-center position-relative z-2 justify-content-center bg-linear-2 d-inline-flex rounded-pill border border-2 border-white px-3 py-1">
								<img src="/assets/imgs/features-1/dotx.png" alt="infinia" />
								<span className="tag-spacing fs-7 fw-bold text-white ms-2 text-uppercase">working process</span>
							</div>
							<h3 className="ds-3 my-3">Access and integrate with your preferred tools</h3>
						</div>
						<div className="row">
							{/* prettier-ignore */}
							<div className="col-lg-4 col-md-6">
								<div className="border rounded-4 p-2 mb-4">
									<div className="p-6 rounded-3 border">
										<img className="filter-invert" src="/assets/imgs/other/shopify1.svg" alt="infinia" />
										<p className="pt-4 mt-4 mb-4 border-top">Boost your Shopify store’s performance by exporting fast-loading, high-converting landing pages.</p>
										<Link href="#">
											<span className="fw-bold text-primary">Connect now</span>
											<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
												<path className="fill-dark" d="M13.0633 4.06329L12.2615 4.86511L15.8294 8.43303H0V9.56698H15.8294L12.2615 13.1349L13.0633 13.9367L18 8.99997L13.0633 4.06329Z" fill="#111827" />
											</svg>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="border rounded-4 p-2 mb-4">
									<div className="p-6 rounded-3 border">
										<img className="@@filter" src="/assets/imgs/other/youcanx.svg" alt="infinia" />
										<p className="pt-4 mt-4 mb-4 border-top">Power up your YouCan store with stunning, conversion-optimized landing pages—effortless export in a few clicks</p>
										<Link href="#">
											<span className="fw-bold text-primary">Connect now</span>
											<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
												<path className="fill-dark" d="M13.0633 4.06329L12.2615 4.86511L15.8294 8.43303H0V9.56698H15.8294L12.2615 13.1349L13.0633 13.9367L18 8.99997L13.0633 4.06329Z" fill="#111827" />
											</svg>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="border rounded-4 p-2 mb-4">
									<div className="p-6 rounded-3 border">
										<img className="@@filter" src="/assets/imgs/other/woow1.svg" alt="infinia" />
										<p className="pt-4 mt-4 mb-4 border-top">WooCommerce integration is in progress and will be available soon, making it easier to publish directly to your store.</p>
										<Link href="#">
											<span className="fw-bold text-primary">Comming soon</span>
											<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
												<path className="fill-dark" d="M13.0633 4.06329L12.2615 4.86511L15.8294 8.43303H0V9.56698H15.8294L12.2615 13.1349L13.0633 13.9367L18 8.99997L13.0633 4.06329Z" fill="#111827" />
											</svg>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*How It Work 2*/}
				{/*Testimonial 2*/}
				<section className="section-newsletter-3 position-relative pb-120">
				<div className="container">
					<div className="pt-120 pb-120 bg-primary-soft rounded-5 position-relative">
						<div className="row align-items-center text-center position-relative z-1">
							<div className="col-lg-6 mx-auto">
								<div className="px-lg-3 text-center">
									<div className="d-flex align-items-center justify-content-center bg-linear-2 border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
										<img src="/assets/imgs/features-1/dotx.png" alt="infinia" />
										<span className="tag-spacing fs-7 fw-bold text-white ms-2 text-uppercase">Let’s work together</span>
									</div>
									<h4 className="my-5">Join us now and grow your business.</h4>
									<p className="fs-6 fw-medium text-900">By clicking the button, you are agreeing with our <Link href="/page-terms-conditions" className="text-decoration-underline link-hover-primary-light">Term  Conditions</Link></p>
									<form className="input-group mt-5 position-relative px-2">
										<input type="text" className="ps-5 py-3 form-control bg-white rounded-start-pill border-2 border-end-0 border-white" name="name" placeholder="Enter your mail .." />
										<div className="bg-white border-2 border border-start-0 border-white rounded-end-pill">
											<button type="submit" className="bg-linear-2 px-3 py-3 m-3 fs-7 fw-bold border-0 text-white rounded-pill">Join Now</button>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div className="position-absolute bottom-0 start-0 m-10 pb-5 ps-4">
							<img className=" " src="/assets/imgs/newsletter-3/icon-1.png" alt="infinia" />
						</div>
						<div className="position-absolute top-0 end-0 m-10 pb-5 ps-4">
							<img className=" " src="/assets/imgs/newsletter-3/icon-2.png" alt="infinia" />
						</div>
					</div>
				</div>
			</section>

			</Layout>
		</>
	)
}