/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

function HomeSection() {
    return (
		<section style={{ backgroundColor: '#000', paddingTop: 30 }}>
			<div className='home-content customContainer'>
                <div className='centerImage'>
                    <div className="scrolldown">
                        <a href=".">
                            <p>SCROLL DOWN</p>
                        </a>
                    </div>
                    <div className="connect">
                        <a href="https://twitter.com/AdewaleOlagunju" target="_blank">
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.facebook.com/adewale.olagunju.5" target="_blank">
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.instagram.com/dewale005/" target="_blank">
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                        <a href="https://github.com/dewale005" target="_blank">
                            <i class="fa fa-github" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/adewale-olagunju-442563104/" target="_blank">
                            <i class="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                    <p>Follow me</p>
                    </div>
					<div className='myPhoto'></div>
					<h1 className='name'>ADEWALE</h1>
				</div>
				<div className='info'>
					<div className='checkCv'>
						<div className='userRole'>Check my CV</div>
						<button type='button' name='' id='' class='btn resume'>
							<span class='material-icons'>arrow_forward</span>
						</button>
					</div>
					<div className='data'>
						<h2 className='userName'>Adewale Olagunju</h2>
						<p className='userRole'>Senior Software Developer</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HomeSection;
