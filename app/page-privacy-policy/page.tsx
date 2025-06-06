"use client"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
export default function PagePrivacyPolicy() {

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

	return (
		<>

			<Layout >

				{/* Section Privacy Policy */}
				<section className="section-privacy-policy section-padding">
					<div className="container">
						<div className="text-center">
							<div className="d-flex align-items-center justify-content-center bg-linear-2 border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
								<img src="/assets/imgs/features-1/dotx.png" alt="infinia" />
								<span className="tag-spacing fs-7 fw-bold text-white ms-2 text-uppercase">Privacy Policy</span>
							</div>
							<h3 className="ds-3 my-3">Our Policy</h3>
							<p className="fs-5">
								At Infinia System, we value your privacy and are committed to protecting your personal information. This <br className="d-none d-lg-block" />
								Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you use our services.
							</p>
						</div>
						<div className="row pt-110">
							<div className="col-lg-8 col-md-10 mx-md-auto">
								<p>Infinia System ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, platform, and services (collectively, "Services"). Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the Services.</p>
								<h5 className="mb-3 mt-4">Information We Collect</h5>
								<p>We may collect personal information that you provide directly to us, including but not limited to:</p>
								<ul>
									<li>Contact Information: Name, email address, phone number, and postal address.</li>
									<li>Account Information: Username, password, and other login details.</li>
									<li>Payment Information: Credit card details, billing address, and transaction history.</li>
									<li>Communication Information: Feedback, messages, and other communications with us.</li>
								</ul>
								<h5 className="mb-3 mt-4">Non-Personal Information</h5>
								<p>We may also collect non-personal information about your interactions with our Services, including but not limited to:</p>
								<ul>
									<li>Usage Data: IP address, browser type, operating system, access times, and pages viewed.</li>
									<li>Device Information: Device type, unique device identifiers, and mobile network information.</li>
									<li>Location Data: General location information based on IP address or GPS data (with your consent).</li>
								</ul>
								<h5 className="mb-3 mt-4">How We Use Your Information</h5>
								<p>We may use the information we collect for various purposes, including but not limited to:</p>
								<ul>
									<li>Providing, maintaining, and improving our Services.</li>
									<li>Processing transactions and managing billing.</li>
									<li>Communicating with you about your account and our Services.</li>
									<li>Responding to your inquiries and providing customer support.</li>
									<li>Analyzing usage patterns to enhance user experience.</li>
									<li>Sending marketing and promotional communications (with your consent).</li>
									<li>Complying with legal obligations and protecting our legal rights.</li>
								</ul>
								<p>Overall, Infinia System's commitment to enhancing user engagement through personalized experiences, optimized design, and proactive support transformed their user base and positioned them for continued growth and success.</p>
								<h5 className="mb-3 mt-4">How We Share Your Information</h5>
								<p>We may share your information in the following circumstances:</p>
								<ul>
									<li>Service Providers: With third-party vendors, consultants, and service providers who perform services on our behalf.</li>
									<li>Business Transfers: In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business.</li>
									<li>Legal Requirements: To comply with legal obligations, enforce our terms of service, or protect our rights, privacy, safety, or property.</li>
									<li>Consent: With your consent or at your direction.</li>
								</ul>
								<h5 className="mb-3 mt-4">Data Security</h5>
								<p>We implement reasonable administrative, technical, and physical security measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or method of electronic storage is 100% secure, and we cannot guarantee its absolute security.</p>
								<h5 className="mb-3 mt-4">Your Rights and Choices</h5>
								<p>You have the following rights regarding your personal information:</p>
								<ul>
									<li>Access and Update: You can access and update your personal information through your account settings.</li>
									<li>Opt-Out: You can opt out of receiving marketing communications by following the unsubscribe instructions in those communications.</li>
									<li>Data Portability: You can request a copy of your personal information in a structured, machine-readable format.</li>
									<li>Deletion: You can request the deletion of your personal information, subject to certain exceptions prescribed by law.</li>
								</ul>
								<h5 className="mb-3 mt-4">Children's Privacy</h5>
								<p>Our Services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have inadvertently received personal information from a child under 13, we will delete such information from our records.</p>
								<h5 className="mb-3 mt-4">Changes to This Privacy Policy</h5>
								<p>We may update this Privacy Policy from time to time. If we make material changes, we will notify you by email (sent to the email address specified in your account) or by means of a notice on our Services prior to the change becoming effective. We encourage you to review this Privacy Policy periodically to stay informed about our information practices.</p>
								<h4 className="text-primary">Contact Us</h4>
								<p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
								<div className="row">
									<div className="col">
										<h6>Chat with us</h6>
										<p className="text-500">The support team is always available 24/7</p>
										<div className="d-flex mb-2">
											<img src="/assets/imgs/contact-2/icon-1.svg" alt="infinia" />
											<Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">Chat via Whatsapp</Link>
										</div>
										<div className="d-flex mb-2">
											<img src="/assets/imgs/contact-2/icon-2.svg" alt="infinia" />
											<Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">Chat via Viber</Link>
										</div>
										<div className="d-flex mb-2 mb-5">
											<img src="/assets/imgs/contact-2/icon-3.svg" alt="infinia" />
											<Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">Chat via Messager</Link>
										</div>
									</div>
									<div className="col">
										<h6>Send us an email</h6>
										<p className="text-500">Our team will respond promptly to your inquiries</p>
										<div className="d-flex mb-2">
											<img src="/assets/imgs/contact-2/icon-4.svg" alt="infinia" />
											<Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">support@infinia.com</Link>
										</div>
										<div className="d-flex mb-2 mb-5">
											<img src="/assets/imgs/contact-2/icon-4.svg" alt="infinia" />
											<Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">sale@infinia.com</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* prettier-ignore */}
				{/*Testimonial 3*/}

			</Layout>
		</>
	)
}