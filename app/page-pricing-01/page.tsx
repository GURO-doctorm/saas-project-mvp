"use client"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
import Marquee from "react-fast-marquee"
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function PagePricing01() {

	// Accordion
	const [activeItem, setActiveItem] = useState(1)

	const handleActiveItem = (index: any) => {
		setActiveItem(index)
	}

	const swiperOptions = {
		slidesPerView: 3,
		spaceBetween: 20,
		slidesPerGroup: 1,
		centeredSlides: false,
		loop: true,
		autoplay: {
			delay: 4000,
		},
		breakpoints: {
			1200: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 2,
			},
			576: {
				slidesPerView: 1,
			},
			0: {
				slidesPerView: 1,
			},
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
		},
	}

	// Price Plan
	const [activePlan, setActivePlan] = useState('monthly')

	const handlePlanChange = (planType: any) => {
		setActivePlan(planType)
	}

	const getPrices = () => {
		if (activePlan === 'monthly') {
			return {
				standardPrice: '19',
				standardType: '/ month',
				businessPrice: '9',
				businessType: '/ month',
				enterprisePrice: '39',
				enterpriseType: '/ month',
			}
		} else {
			return {
				standardPrice: '171',
				standardType: '/ year',
				businessPrice: '81',
				businessType: '/ year',
				enterprisePrice: '351',
				enterpriseType: '/ year',
			}
		}
	}

	const prices = getPrices()

	return (
		<>

			<Layout >

				{/*Pricing 3*/}
				{/*Pricing 2*/}
								<section className="section-pricing-2 position-relative section-padding">
									<div className="container">
										<div className="row">
											<div className="col-lg-6 position-relative pe-8">
												<div className="text-start mb-lg-0 mb-5">
													<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
														<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
														<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">our plans</span>
													</div>
													<h3 className="ds-3 my-3" data-aos="fade-zoom-in" data-aos-delay={0}>Invest in Results</h3>
													<p className="fs-6 mb-0" data-aos="fade-zoom-in" data-aos-delay={200}>Start building high-converting pages that pay for themselves, Invest once Earn again and again.</p>
													<div className="d-md-flex align-items-center mt-4">
														<ul className="list-unstyled phase-items mb-0">
															<li className="d-flex align-items-center mt-2">
																<img src="/assets/imgs/hero-2/check.png" alt="infinia" />
																<span className="ms-2">Get 3 day free trial</span>
															</li>
															<li className="d-flex align-items-center mt-2">
																<img src="/assets/imgs/hero-2/check.png" alt="infinia" />
																<span className="ms-2">You can cancel anytime</span>
															</li>
														</ul>
														<ul className="list-unstyled phase-items ms-md-5 mb-0">
															<li className="d-flex align-items-center mt-2">
																<img src="/assets/imgs/hero-2/check.png" alt="infinia" />
																<span className="ms-2">No any hidden fees pay</span>
															</li>
															<li className="d-flex align-items-center mt-2">
																<img src="/assets/imgs/hero-2/check.png" alt="infinia" />
																<span className="ms-2">Monthly management</span>
															</li>
														</ul>
													</div>
													<div className="mt-lg-10 pt-5 pe-lg-10 me-lg-10">
														<p className="pt-lg-10">Trusted by secure payment service</p>
														<div className="carouselTicker carouselTicker-left position-relative z-1">
															<ul className="carouselTicker__list">
																<Marquee>
																	<li className="carouselTicker__item m-0">
																		<img className="rounded-4" src="/assets/imgs/pricing-2/logo-1.png" alt="inexa" />
																	</li>
																	<li className="carouselTicker__item m-0">
																		<img className="rounded-4" src="/assets/imgs/pricing-2/logo-2.png" alt="inexa" />
																	</li>
																	<li className="carouselTicker__item m-0">
																		<img className="rounded-4" src="/assets/imgs/pricing-2/logo-3.png" alt="inexa" />
																	</li>
																	<li className="carouselTicker__item m-0">
																		<img className="rounded-4" src="/assets/imgs/pricing-2/logo-4.png" alt="inexa" />
																	</li>
																</Marquee>
															</ul>
														</div>
													</div>
												</div>
												<div className="position-absolute top-0 end-0 translate-middle-y mt-3 me-8">
													<img className="flickering" src="/assets/imgs/pricing-2/star.png" alt="infinia" />
												</div>
											</div>
											<div className="col-lg-6">
												<div className="row mt-lg-0 mt-5">
													<div className="col-lg-6 col-sm-6 mb-lg-0 mb-4">
														<div className="p-6 bg-white position-relative border rounded-4 z-1">
															<h6>Beginner</h6>
															<p className="fs-7">Begin the journey</p>
															<h3 className="text-primary mt-3 mb-0">$9 
															<span className="fs-5 text-600 ms-1 fw-bold align-self-end">/mon</span>
															</h3>
															<p className="fs-8">3-Day Free Trial</p>
															<button className="btn btn-outline-secondary hover-up w-100 d-flex justify-content-between my-5">
																Try Now
																<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
																	<path className="fill-dark" d="M17.4177 5.41797L16.3487 6.48705L21.1059 11.2443H0V12.7562H21.1059L16.3487 17.5134L17.4177 18.5825L24 12.0002L17.4177 5.41797Z" fill="#111827" />
																</svg>
															</button>
															<ul className="list-unstyled mb-0">
																<li className="d-flex align-items-center mb-4">
																	<img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
																	<h6 className="fs-6 mb-0 ms-2">25 AI-Generated Pages</h6>
																</li>
																<li className="d-flex align-items-center mb-4">
																	<img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
																	<h6 className="fs-6 mb-0 ms-2">Export to 1 platform</h6>
																</li>
																<li className="d-flex align-items-center mb-4">
																	<img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
																	<h6 className="fs-6 mb-0 ms-2">Basic Support</h6>
																</li>
																<li className="d-flex align-items-center mb-4">
																	<img src="/assets/imgs/pricing-1/check-secondary.svg" alt="infinia" />
																	<h6 className="fs-6 mb-0 ms-2 text-400">Access to All Templates</h6>
																</li>
															</ul>
														</div>
													</div>
													<div className="col-lg-6 col-sm-6 mb-lg-0 mb-4">
														<div className="p-6 bg-primary-soft position-relative border rounded-4 z-1">
															<h6>Elite</h6>
															<p className="fs-7">Scale your brand</p>
															<div className="d-flex">
																<span className="fs-5 text-600 me-1">$</span>
																<h3 className="text-primary mb-0">21</h3>
																<span className="fs-5 text-600 ms-1 fw-bold align-self-end">/mon</span>
															</div>
															<p className="fs-8">3-Day Free Trial </p>
															<button className="btn btn-gradient w-100 d-flex justify-content-between my-5">
																Try Now
																<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
																	<path className="fill-white" d="M17.4177 5.41797L16.3487 6.48705L21.1059 11.2443H0V12.7562H21.1059L16.3487 17.5134L17.4177 18.5825L24 12.0002L17.4177 5.41797Z" fill="white" />
																</svg>
															</button>
															<ul className="list-unstyled mb-0">
																<li className="d-flex align-items-center mb-4">
																	<img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
																	<h6 className="fs-6 mb-0 ms-2">Unlimited AI-Generated Pages</h6>
																</li>
																<li className="d-flex align-items-center mb-4">
																	<img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
																	<h6 className="fs-6 mb-0 ms-2">Export to multiple platforms</h6>
																</li>
																<li className="d-flex align-items-center mb-4">
																	<img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
																	<h6 className="fs-6 mb-0 ms-2">Access to All Templates</h6>
																</li>
																<li className="d-flex align-items-center mb-4">
																	<img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
																	<h6 className="fs-6 mb-0 ms-2">Multiple Languages Supported</h6>
																</li>
																<li className="d-flex align-items-center">
																	<img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
																	<h6 className="fs-6 mb-0 ms-2">Premium Support</h6>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</section>
				{/* Compare */}
				<section className="section-compare position-relative section-padding ">
					<div className="container position-relative z-1">
						<div className="text-center mb-10">
							<div className="d-flex align-items-center position-relative z-2 justify-content-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-3 py-1">
								<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
								<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Compare Plans</span>
							</div>
							<h3 className="ds-3 my-3 fw-black">Compare Features</h3>
							<p className="fs-5 mb-0">A management platform to help you succeed</p>
						</div>
						<div className="row">
							<div className="table-responsive wow img-custom-anim-top">
								<table className="table table-borderless align-middle table-white">
									<thead>
										<tr>
											<th scope="col">
											</th>
											<th scope="col">
												<span className="h4">Beginner</span>
												<p className="text-500 text-nowrap">from $9/month</p>
											</th>
											<th scope="col">
												<span className="h4">Elite</span>
												<p className="text-500">from $21/month</p>
											</th>
										</tr>
									</thead>
									<tbody className="table-group-divider mt-5">
										<tr className="border-bottom">
											<th scope="row">
												<span className="h6 mt-2">Landing Pages</span>
												<p className="mb-2 text-500 text-nowrap">AI-Generated Pages</p>
											</th>
											<td className="text-start">
												<p className="text-500 fw-bold">25 / month</p>
											</td>
											<td className="text-start">
												<p className="text-900 fw-bold">Unlimited</p>
											</td>
										</tr>
										<tr className="border-bottom">
											<th scope="row">
												<span className="h6 mt-2">Export Options</span>
												<p className="mb-2 text-500 text-nowrap">Ecommerce Platform Integrations</p>
											</th>
											<td className="text-start">
												<p className="text-500 fw-bold"> 1 Platform</p>
											</td>
											<td className="text-start">
												<p className="text-900 fw-bold">Shopify, YouCan</p>
											</td>
										</tr>
										<tr className="border-bottom">
											<th scope="row">
												<span className="h6 mt-2">Template Access</span>
												<p className="mb-2 text-500 text-nowrap">Access to All Templates</p>
											</th>
											<td className="text-start">
												<p className="text-500 fw-bold">Basic Templates</p>
											</td>
											<td className="text-start">
												<p className="text-900 fw-bold">All Templates</p>
											</td>
										</tr>
										<tr className="border-bottom">
											<th scope="row">
												<span className="h6 mt-2">Multiple Languages</span>
												<p className="mb-2 text-500 text-nowrap">Auto-Translation with AI</p>
											</th>
											<td>
												<svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
													<g clipPath="url(#clip0_592_34276)">
														<path fillRule="evenodd" clipRule="evenodd" d="M0 10.9999C0 4.92484 4.92484 0 10.9999 0C17.0751 0 21.9999 4.92484 21.9999 10.9999C21.9999 17.0751 17.0751 21.9999 10.9999 21.9999C4.92484 21.9999 0 17.0751 0 10.9999Z" fill="#E5E7EB" />
														<path fillRule="evenodd" clipRule="evenodd" d="M7.16487 14.0646C6.95068 14.2789 6.95071 14.6261 7.16493 14.8403C7.37916 15.0545 7.72645 15.0545 7.94064 14.8403L11.0042 11.7762L14.0679 14.84C14.2821 15.0542 14.6295 15.0542 14.8436 14.84C15.0578 14.6258 15.0578 14.2785 14.8436 14.0643L11.7798 11.0005L14.8434 7.93632C15.0576 7.7221 15.0576 7.37481 14.8433 7.16062C14.6291 6.94643 14.2818 6.94646 14.0676 7.16069L11.0041 10.2248L7.94026 7.16095C7.72606 6.94675 7.37876 6.94675 7.16456 7.16095C6.95035 7.37516 6.95035 7.72245 7.16456 7.93666L10.2285 11.0005L7.16487 14.0646Z" fill="#111827" />
													</g>
													<defs>
														<clipPath>
															<rect width={22} height={22} fill="white" />
														</clipPath>
													</defs>
												</svg>
											</td>
											<td>
												<svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
													<path fillRule="evenodd" clipRule="evenodd" d="M11.004 1.38049C16.3188 1.38049 20.629 5.69071 20.629 11.0056C20.629 16.3204 16.3188 20.6306 11.004 20.6306C5.68913 20.6306 1.37891 16.3204 1.37891 11.0056C1.37891 5.69071 5.68913 1.38049 11.004 1.38049ZM9.0052 14.1318L6.64875 11.7734C6.24729 11.3717 6.24721 10.7167 6.64875 10.3151C7.05037 9.91354 7.70834 9.91605 8.10704 10.3151L9.76833 11.9777L13.901 7.84495C14.3027 7.44333 14.9578 7.44333 15.3593 7.84495C15.761 8.24649 15.7604 8.90218 15.3593 9.30324L10.4963 14.1663C10.0952 14.5673 9.43954 14.5679 9.038 14.1663C9.02672 14.155 9.01584 14.1435 9.0052 14.1318Z" fill="#6D4DF2" />
												</svg>
											</td>
										</tr>
										<tr className="border-bottom">
											<th scope="row">
												<span className="h6 mt-2">Customer Support</span>
												<p className="mb-2 text-500 text-nowrap">Live Chat Support</p>
											</th>
											<td>
												<svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
													<path fillRule="evenodd" clipRule="evenodd" d="M11.004 1.38049C16.3188 1.38049 20.629 5.69071 20.629 11.0056C20.629 16.3204 16.3188 20.6306 11.004 20.6306C5.68913 20.6306 1.37891 16.3204 1.37891 11.0056C1.37891 5.69071 5.68913 1.38049 11.004 1.38049ZM9.0052 14.1318L6.64875 11.7734C6.24729 11.3717 6.24721 10.7167 6.64875 10.3151C7.05037 9.91354 7.70834 9.91605 8.10704 10.3151L9.76833 11.9777L13.901 7.84495C14.3027 7.44333 14.9578 7.44333 15.3593 7.84495C15.761 8.24649 15.7604 8.90218 15.3593 9.30324L10.4963 14.1663C10.0952 14.5673 9.43954 14.5679 9.038 14.1663C9.02672 14.155 9.01584 14.1435 9.0052 14.1318Z" fill="#6D4DF2" />
												</svg>
											</td>
											<td>
												<svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
													<path fillRule="evenodd" clipRule="evenodd" d="M11.004 1.38049C16.3188 1.38049 20.629 5.69071 20.629 11.0056C20.629 16.3204 16.3188 20.6306 11.004 20.6306C5.68913 20.6306 1.37891 16.3204 1.37891 11.0056C1.37891 5.69071 5.68913 1.38049 11.004 1.38049ZM9.0052 14.1318L6.64875 11.7734C6.24729 11.3717 6.24721 10.7167 6.64875 10.3151C7.05037 9.91354 7.70834 9.91605 8.10704 10.3151L9.76833 11.9777L13.901 7.84495C14.3027 7.44333 14.9578 7.44333 15.3593 7.84495C15.761 8.24649 15.7604 8.90218 15.3593 9.30324L10.4963 14.1663C10.0952 14.5673 9.43954 14.5679 9.038 14.1663C9.02672 14.155 9.01584 14.1435 9.0052 14.1318Z" fill="#6D4DF2" />
												</svg>
											</td>
										</tr>
										<tr className="border-bottom">
											<th scope="row">
												<span className="h6 mt-2">Free Trial</span>
												<p className="mb-2 text-500 text-nowrap">Free for 3 Days</p>
											</th>
											<td className="text-start">
												<svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
													<path fillRule="evenodd" clipRule="evenodd" d="M11.004 1.38049C16.3188 1.38049 20.629 5.69071 20.629 11.0056C20.629 16.3204 16.3188 20.6306 11.004 20.6306C5.68913 20.6306 1.37891 16.3204 1.37891 11.0056C1.37891 5.69071 5.68913 1.38049 11.004 1.38049ZM9.0052 14.1318L6.64875 11.7734C6.24729 11.3717 6.24721 10.7167 6.64875 10.3151C7.05037 9.91354 7.70834 9.91605 8.10704 10.3151L9.76833 11.9777L13.901 7.84495C14.3027 7.44333 14.9578 7.44333 15.3593 7.84495C15.761 8.24649 15.7604 8.90218 15.3593 9.30324L10.4963 14.1663C10.0952 14.5673 9.43954 14.5679 9.038 14.1663C9.02672 14.155 9.01584 14.1435 9.0052 14.1318Z" fill="#6D4DF2" />
												</svg>
											</td>
											<td>
												<svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
													<path fillRule="evenodd" clipRule="evenodd" d="M11.004 1.38049C16.3188 1.38049 20.629 5.69071 20.629 11.0056C20.629 16.3204 16.3188 20.6306 11.004 20.6306C5.68913 20.6306 1.37891 16.3204 1.37891 11.0056C1.37891 5.69071 5.68913 1.38049 11.004 1.38049ZM9.0052 14.1318L6.64875 11.7734C6.24729 11.3717 6.24721 10.7167 6.64875 10.3151C7.05037 9.91354 7.70834 9.91605 8.10704 10.3151L9.76833 11.9777L13.901 7.84495C14.3027 7.44333 14.9578 7.44333 15.3593 7.84495C15.761 8.24649 15.7604 8.90218 15.3593 9.30324L10.4963 14.1663C10.0952 14.5673 9.43954 14.5679 9.038 14.1663C9.02672 14.155 9.01584 14.1435 9.0052 14.1318Z" fill="#6D4DF2" />
												</svg>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div className="text-center mt-5">
							<p className="fs-5 text-900 mb-5">We also offer other customized services to fit your business.</p>
							<Link href="#" className="btn btn-gradient">
								Get a Free Quote
								<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
									<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									<path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</Link>
							<Link href="#" className="ms-md-3 mt-md-0 mt-3 btn btn-outline-secondary hover-up">
								<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
									<path className="stroke-dark" d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								Our Help Center
							</Link>
						</div>
					</div>
				</section>
				{/*How It Work 2*/}
				{/* FAQs 1 */}
				<section className="section-faqs-1 section-padding position-relative">
					<div className="container position-relative z-2">
						<div className="row align-items-center">
							<div className="col-lg-6">
								<div className="text-start position-relative d-inline-block mb-lg-0 mb-5">
									<img className="rounded-4" src=" assets/imgs/faqs-1/img-1.png" alt="infinia" />
									<div className="px-0 card-team rounded-4 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto px-5 py-8 m-5">
										<div className="d-flex flex-column flex-md-row align-items-start gap-3 mb-4" data-aos="fade-zoom-in" data-aos-delay={0}>
											<img src="/assets/imgs/faqs-1/icon-1.png" alt="infinia" />
											<div>
												<h6 className="m-0">Live chat support 24/7</h6>
												<p className="m-0">More than 300 employees are ready to help you</p>
											</div>
										</div>
										<div className="d-flex flex-column flex-md-row align-items-start gap-3 mb-4" data-aos="fade-zoom-in" data-aos-delay={100}>
											<img src="/assets/imgs/faqs-1/icon-2.png" alt="infinia" />
											<div>
												<h6 className="m-0">Built for E‑commerce</h6>
												<p className="m-0">Optimized for Shopify and YouCan sellers</p>
											</div>
										</div>
										<div className="d-flex flex-column flex-md-row align-items-start gap-3" data-aos="fade-zoom-in" data-aos-delay={200}>
											<img src="/assets/imgs/faqs-1/icon-3.png" alt="infinia" />
											<div>
												<h6 className="m-0">Full control</h6>
												<p className="m-0">Customize every detail</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6 mt-lg-0 mt-5">
								<h3 className="ds-3" data-aos="fade-up" data-aos-delay={0}>Everything You’re Wondering</h3>
								<p className="fs-5 my-4" data-aos="fade-up" data-aos-delay={0}>What new users always want to know — answered simply.</p>
								<div className="accordion">
									<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0" data-aos="fade-up" data-aos-delay={0}>
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={`${activeItem} == 1 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(1)} data-bs-toggle="collapse">
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">1</span>
												<h6 className="m-0">What happens after the free trial ?</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapseOne" className={activeItem == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600">Once the trial ends, you’ll be asked to upgrade to a paid plan to continue using the tool. You won’t be charged automatically.</p>
										</div>
									</div>
									<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0" data-aos="fade-up" data-aos-delay={0}>
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={`${activeItem} == 2 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(2)} data-bs-toggle="collapse">
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">2</span>
												<h6 className="m-0">Can I cancel my subscription anytime ?</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapseTwo" className={activeItem == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600">Yes. You’re free to cancel, upgrade, or downgrade your plan at any time directly from your dashboard.</p>
										</div>
									</div>
									<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0" data-aos="fade-up" data-aos-delay={0}>
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={`${activeItem} == 3 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(3)} data-bs-toggle="collapse">
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">3</span>
												<h6 className="m-0">Can I export my landing pages ?</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapseThree" className={activeItem == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600">Yes, you can export your pages to Shopify and YouCan directly with a few clicks.</p>
										</div>
									</div>
									<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0" data-aos="fade-up" data-aos-delay={0}>
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={`${activeItem} == 4 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(4)} data-bs-toggle="collapse">
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">4</span>
												<h6 className="m-0">Is this better than using my store's product page ?</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapsefour" className={activeItem == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600">Yes — our landing pages are designed to convert. They're focused, fast-loading, and optimized for one goal: turning visitors into buyers.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<img className="position-absolute top-0 end-0 z-0" src="/assets/imgs/faqs-1/img-bg-line.png" alt="infinia" />
				</section>
				{/*Testimonial 3*/}
				{/* Newsletter 1 */}
				<section className="section-newsletter-1 pb-120 pt-120 fix position-relative">
					<div className="container position-relative fix">
						<div className="row align-items-center fix text-center border rounded-4 position-relative z-1">
							<div className="col-lg-6 my-4">
								<div className="row">
									<div className="ms-lg-4">
										<img className="rounded-4 border border-3 border-white me-3 mb-3" src="/assets/imgs/newsletter-1/img-1.png" alt="infinia" />
										<img className="rounded-4 border border-3 border-white me-3 mb-3" src="/assets/imgs/newsletter-1/img-2.png" alt="infinia" data-aos="fade-zoom-in" data-aos-delay={50} />
										<img className="rounded-4 border border-3 border-white me-3 mb-3 d-none d-md-inline" src="/assets/imgs/newsletter-1/img-3.png" alt="infinia" />
									</div>
								</div>
								<div className="row">
									<div>
										<img className="rounded-4 border border-3 border-white me-3 mb-3" src="/assets/imgs/newsletter-1/img-4.png" alt="infinia" />
										<img className="rounded-4 border border-3 border-white me-3 mb-3" src="/assets/imgs/newsletter-1/img-5.png" alt="infinia" data-aos="fade-zoom-in" data-aos-delay={100} />
										<img className="rounded-4 border border-3 border-white me-3 mb-3" src="/assets/imgs/newsletter-1/img-6.png" alt="infinia" />
										<img className="rounded-4 border border-3 border-white me-3 mb-3" src="/assets/imgs/newsletter-1/img-7.png" alt="infinia" data-aos="fade-zoom-in" data-aos-delay={100} />
									</div>
								</div>
								<div className="row d-none d-lg-flex">
									<div className="me-lg-0">
										<img className="rounded-4 border border-3 border-white me-3 mb-3" src="/assets/imgs/newsletter-1/img-8.png" alt="infinia" data-aos="fade-zoom-in" data-aos-delay={50} />
										<img className="rounded-4 border border-3 border-white me-3 mb-3" src="/assets/imgs/newsletter-1/img-9.png" alt="infinia" data-aos="fade-zoom-in" data-aos-delay={100} />
										<img className="rounded-4 border border-3 border-white me-3 mb-3 d-none d-md-inline" src="/assets/imgs/newsletter-1/img-10.png" alt="infinia" />
									</div>
								</div>
							</div>
							<div className="col-lg-6 mt-lg-0 mt-5">
								<div className="px-lg-5 text-lg-start text-center">
									<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
										<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
										<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Stay Updated</span>
									</div>
									<h4 className="mt-3 mb-3" data-aos="fade-zoom-in" data-aos-delay={100}>Subscribe to our Newsletter!</h4>
									<span className="fs-6 fw-medium" data-aos="fade-zoom-in" data-aos-delay={200}>Join 52,000+ people on our newsletter</span>
									<div className="input-group mb-3 mt-4 position-relative">
										<input type="text" className="ps-5 py-3 form-control bg-neutral-100 rounded-start-pill border-2 border-end-0 border-white" name="name" placeholder="Enter your mail .." />
										<div className="bg-neutral-100 border-2 border border-start-0 border-white rounded-end-pill">
											<button className="btn btn-gradient px-3 py-3 m-3 fs-7 fw-bold border-0 rounded-pill" type="button" data-aos="fade-zoom-in" data-aos-delay={100}>Join Now</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="position-absolute top-50 start-50 translate-middle z-0">
							<img src="/assets/imgs/newsletter-1/bg-line.png" alt="infinia" />
						</div>
						<div className="bouncing-blobs-container rounded-4 fix">
							<div className="bouncing-blobs-glass rounded-4" />
							<div className="bouncing-blobs">
								<div className="bouncing-blob bouncing-blob--green" />
								<div className="bouncing-blob bouncing-blob--primary" />
							</div>
						</div>
					</div>
				</section>

			</Layout>
		</>
	)
}