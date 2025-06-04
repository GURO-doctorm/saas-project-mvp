'use client'
import Link from "next/link";
import CountUp from 'react-countup'

export default function PageIntegration() {
  return (
    <div className="container">
      <div className="text-center mb-8">
        <div className="d-flex align-items-center position-relative z-2 justify-content-center bg-linear-1 d-inline-flex rounded-pill border border-2 border-white px-3 py-1">
          <img src="/assets/imgs/features-1/dotx.png" alt="infinia" />
          <span className="tag-spacing fs-7 fw-bold text-white ms-2 text-uppercase">
            One-Click Integrations
          </span>
        </div>
        <h5 className="ds-5 my-5">Break Shopify and YouCan limits — export unique designs to your store.</h5>
      </div>

      <div className="row">
        {/* Shopify */}
        <div className="col-lg-4 col-md-6">
          <div className="border rounded-4 p-2 mb-4">
            <div className="p-6 rounded-3 border">
              <img className="filter-invert" src="/assets/imgs/other/shopify1.svg" alt="infinia" />
              <p className="pt-4 mt-4 mb-4 border-top">
                Push past Shopify’s limits and boost your store’s performance with custom, high-converting landing pages that load fast, sell better, and elevate your brand effortlessly.
              </p>
              <Link href="#">
                <span className="fw-bold text-primary">Try now</span>
                <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
                  <path className="fill-dark" d="M13.0633 4.06329L12.2615 4.86511L15.8294 8.43303H0V9.56698H15.8294L12.2615 13.1349L13.0633 13.9367L18 8.99997L13.0633 4.06329Z" fill="#111827" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* YouCan */}
							<div className="col-lg-4">
								<div className="h-100 bg-primary-soft rounded-4 d-flex align-items-center justify-content-center border position-relative border-5 fix border-white py-5">
									<div className="position-relative z-1 fix">
										<div className="d-flex justify-content-center">
											<img src="/assets/imgs/hero-1/avatar-1.png" alt="infinia" />
											<img className="avt-hero" src="/assets/imgs/hero-1/avatar-2.png" alt="infinia" />
											<img className="avt-hero" src=" assets/imgs/hero-1/avatar-3.png" alt="infinia" />
										</div>
										<h1 className="count fw-black text-black my-0">+<span className="odometer" /><CountUp end={50} enableScrollSpy={true} />k</h1>
										<p className="fs-5 text-black-keep mb-0">Users Active / Month</p>
									</div>
									<img className="position-absolute top-50 start-50 translate-middle z-0" src="/assets/imgs/contact-4/grid-3.png" alt="infinia" />
								</div>
							</div>
        

        {/* WooCommerce */}
        <div className="col-lg-4 col-md-6">
          <div className="border rounded-4 p-2 mb-4">
            <div className="p-6 rounded-3 border">
              <img className="filter-invert" src="/assets/imgs/other/youcanx.svg" alt="infinia" />
              <p className="pt-4 mt-4 mb-4 border-top">
                Go beyond YouCan’s basics—unlock advanced design freedom and drive more sales with unique landing pages tailored for conversion.
              </p>
              <Link href="#">
                <span className="fw-bold text-primary">Try now</span>
                <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
                  <path className="fill-dark" d="M13.0633 4.06329L12.2615 4.86511L15.8294 8.43303H0V9.56698H15.8294L12.2615 13.1349L13.0633 13.9367L18 8.99997L13.0633 4.06329Z" fill="#111827" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}