import React from 'react';

const About = () => (
    <div id="colorlib-about">
		<div class="container">
			<div class="row text-center">
				<h2 class="bold">About</h2>
			</div>
			<div class="row">
				<div class="col-md-5 animate-box">
					<div class="owl-carousel3">
						<div class="item">
							<img class="img-responsive about-img" src="images/about.jpg" alt="html5 bootstrap template by colorlib.com" />							
                        </div>
						<div class="item">
							<img class="img-responsive about-img" src="images/about-2.jpg" alt="html5 bootstrap template by colorlib.com" />
						</div>
					</div>
				</div>
				<div class="col-md-6 col-md-push-1 animate-box">
					<div class="about-desc">
						<div class="owl-carousel3">
							<div class="item">
								<h2><span>Noah</span><span>Henderson</span></h2>
							</div>
							<div class="item">
								<h2><span>I'm</span><span>A Designer</span></h2>
							</div>
						</div>
						<div class="desc">
							<div class="rotate">
								<h2 class="heading">About</h2>
							</div>
							<p>A small river named Duden <a href="#">flows by their place</a> and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p>
							<p class="colorlib-social-icons">
								<a href="#"><i class="icon-facebook4"></i></a>
								<a href="#"><i class="icon-twitter3"></i></a>
								<a href="#"><i class="icon-googleplus"></i></a>
								<a href="#"><i class="icon-dribbble2"></i></a>
							</p>
							<p><a href="#" class="btn btn-primary btn-outline">Contact Me!</a></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default About;