import React, { Component } from 'react';
import './Home.css';
import './About.css';
import './Careers.css';
import './Contact.css';
import './Logo.css';
// Import the slideshow component
import Monza from './images/iammonza.png';
import LogoIcon from './images/logosnippet.png';

export default class Home extends Component {
    constructor() {
        super();

        this.date = new Date();

        this.abbriv = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        this.url = "http://localhost:3001"

        this.state = { archive: [] };
    }

    makeRequest = async (path, init) => {
        let request = await fetch(this.url.concat(path), init);

        let response = await request.json();

        return response;
    }

    postNote = () => {
        let bubble = {
	        author : this.state.author,
	        emailNote : this.state.emailNote,
	        note : this.state.note,
	        date: this.date.getDate() + "-" + this.abbriv[this.date.getMonth() + 1] + "-" + String(this.date.getYear()).substring(1, this.date.getYear().length)
	    }

	    
        let path = "/messageBoard/postNote";
        let init = { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(bubble) }
        console.log("bubble before post", init)
        this.makeRequest(path, init)
			.then(data => {
			    console.log("bubble after post", data)
            	this.setState({archive: data});
            }, err => {
            	console.error(err);
            })
    }

    captureInputById = e => {
        switch (e.target.id) {
            case 'author':
                {
                    let author = e.target.value;
                    this.setState(() => {
                        return { author };
                    });
                    break;
                }
            case 'emailNote':
                {
                    let emailNote = e.target.value;
                    this.setState(() => {
                        return { emailNote };
                    });
                    break;
                }
            case 'note':
                {
                    let note = e.target.value;
                    this.setState(() => {
                        return { note };
                    });
                    break;
                }
            case '__':
                {
                    break;
                }
            default:
                {
                    break;
                }
        }
    }

    marchIcons = () => {
        alert("Marching icons function");
    }

    render() {
        return (
            <div id="home" className="home">
				<Logo />
				<About />
				<Careers marchIcons={this.marchIcons}/>
				<Contact date={this.date} archive={this.state.archive} postNote={this.postNote} captureInputById={this.captureInputById} />
			</div>
        );
    }
}

const Logo = () => {
    return (
        <div id="logo" className="logo">
			<div id="logoText">
				<svg id="logoName" width="346" height="160" viewBox="0 0 292 65" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M43.728 14.312L30.264 44.624H23.496L9.95998 14.312V56H3.47998V5.6H13.056L27.024 37.496L40.776 5.6H50.568V56H43.728V14.312Z" stroke="#FBF7F7" strokeWidth="6" mask="url(#path-1-outside-1)"/>
					<path d="M90.5989 37.28C90.5989 35.408 90.2868 33.632 89.6628 31.952C89.0868 30.272 88.2469 28.808 87.1429 27.56C86.0869 26.312 84.8149 25.328 83.3269 24.608C81.8869 23.84 80.3029 23.456 78.5749 23.456C74.7829 23.456 71.8309 24.704 69.7189 27.2C67.6069 29.696 66.5509 33.008 66.5509 37.136C66.5509 39.008 66.8389 40.808 67.4149 42.536C68.0389 44.216 68.8789 45.704 69.9349 47C71.0389 48.248 72.3109 49.256 73.7509 50.024C75.2389 50.744 76.8469 51.104 78.5749 51.104C80.4469 51.104 82.1269 50.768 83.6149 50.096C85.1029 49.424 86.3509 48.488 87.3589 47.288C88.4149 46.04 89.2069 44.576 89.7349 42.896C90.3109 41.216 90.5989 39.344 90.5989 37.28ZM59.9269 37.28C59.9269 34.256 60.4069 31.544 61.3669 29.144C62.3269 26.696 63.6229 24.632 65.2549 22.952C66.9349 21.272 68.9029 19.976 71.1589 19.064C73.4629 18.152 75.9349 17.696 78.5749 17.696C81.1669 17.696 83.5909 18.152 85.8469 19.064C88.1509 19.976 90.1429 21.272 91.8229 22.952C93.5029 24.632 94.8229 26.672 95.7829 29.072C96.7429 31.472 97.2229 34.16 97.2229 37.136C97.2229 40.112 96.7429 42.824 95.7829 45.272C94.8709 47.672 93.5749 49.736 91.8949 51.464C90.2149 53.192 88.2229 54.536 85.9189 55.496C83.6629 56.408 81.2149 56.864 78.5749 56.864C75.8869 56.864 73.3909 56.384 71.0869 55.424C68.8309 54.464 66.8629 53.12 65.1829 51.392C63.5509 49.664 62.2549 47.6 61.2949 45.2C60.3829 42.8 59.9269 40.16 59.9269 37.28Z" stroke="#FBF7F7" strokeWidth="6" mask="url(#path-1-outside-1)"/>
					<path d="M112.102 24.824C113.446 22.808 115.15 21.128 117.214 19.784C119.326 18.392 121.822 17.696 124.702 17.696C128.926 17.696 132.07 18.968 134.134 21.512C136.246 24.056 137.302 27.416 137.302 31.592V56H130.822V32.312C130.822 29.576 130.198 27.416 128.95 25.832C127.702 24.2 125.926 23.384 123.622 23.384C122.518 23.384 121.438 23.6 120.382 24.032C119.326 24.416 118.294 24.968 117.286 25.688C116.326 26.408 115.414 27.248 114.55 28.208C113.734 29.168 112.99 30.176 112.318 31.232V56H105.838V18.56H112.102V24.824Z" stroke="#FBF7F7" strokeWidth="6" mask="url(#path-1-outside-1)"/>
					<path d="M145.639 18.56H173.791V23.528L153.199 50.24H174.151V56H145.207V50.888L165.871 24.176H145.639V18.56Z" stroke="#FBF7F7" strokeWidth="6" mask="url(#path-1-outside-1)"/>
					<path d="M179.185 37.496C179.185 34.712 179.617 32.12 180.481 29.72C181.345 27.272 182.545 25.16 184.081 23.384C185.665 21.608 187.537 20.216 189.697 19.208C191.905 18.2 194.305 17.696 196.897 17.696C199.057 17.696 201.001 18.08 202.729 18.848C204.505 19.568 206.041 20.48 207.337 21.584V18.56H213.241V46.928C213.241 48.752 213.673 49.952 214.537 50.528C215.449 51.056 216.433 51.32 217.489 51.32L216.121 56.36C211.513 56.36 208.729 54.488 207.769 50.744C207.193 51.512 206.521 52.28 205.753 53.048C205.033 53.768 204.193 54.416 203.233 54.992C202.273 55.568 201.193 56.024 199.993 56.36C198.793 56.696 197.473 56.864 196.033 56.864C193.681 56.864 191.473 56.408 189.409 55.496C187.393 54.584 185.617 53.288 184.081 51.608C182.593 49.928 181.393 47.912 180.481 45.56C179.617 43.16 179.185 40.472 179.185 37.496ZM197.473 51.104C199.297 51.104 201.025 50.672 202.657 49.808C204.289 48.944 205.657 47.816 206.761 46.424V26.336C205.465 25.424 204.025 24.704 202.441 24.176C200.905 23.6 199.273 23.312 197.545 23.312C195.817 23.312 194.233 23.648 192.793 24.32C191.353 24.992 190.105 25.952 189.049 27.2C188.041 28.4 187.249 29.864 186.673 31.592C186.097 33.32 185.809 35.216 185.809 37.28C185.809 39.296 186.097 41.168 186.673 42.896C187.249 44.576 188.065 46.04 189.121 47.288C190.177 48.488 191.401 49.424 192.793 50.096C194.233 50.768 195.793 51.104 197.473 51.104Z" stroke="#FBF7F7" strokeWidth="6" mask="url(#path-1-outside-1)"/>
				</svg>
				<br/>
				<svg id="logoSurname" width="310" height="176" viewBox="30 0 510 79" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M248.449 5.744C250.705 5.504 252.913 5.336 255.073 5.24C257.233 5.096 259.705 5.024 262.489 5.024C266.809 5.024 270.529 5.696 273.649 7.04C276.769 8.384 279.361 10.232 281.425 12.584C283.489 14.936 285.001 17.672 285.961 20.792C286.969 23.912 287.473 27.224 287.473 30.728C287.473 34.232 286.969 37.568 285.961 40.736C284.953 43.856 283.393 46.592 281.281 48.944C279.217 51.296 276.553 53.168 273.289 54.56C270.073 55.904 266.209 56.576 261.697 56.576C258.961 56.576 256.561 56.504 254.497 56.36C252.481 56.264 250.465 56.096 248.449 55.856V5.744ZM262.273 10.928C260.881 10.928 259.609 10.976 258.457 11.072C257.305 11.12 256.249 11.192 255.289 11.288V50.24C256.297 50.384 257.353 50.48 258.457 50.528C259.561 50.576 260.713 50.6 261.913 50.6C265.129 50.6 267.913 50.12 270.265 49.16C272.617 48.152 274.537 46.784 276.025 45.056C277.561 43.28 278.689 41.192 279.409 38.792C280.129 36.344 280.489 33.656 280.489 30.728C280.489 28.136 280.129 25.664 279.409 23.312C278.689 20.912 277.585 18.8 276.097 16.976C274.609 15.104 272.713 13.64 270.409 12.584C268.105 11.48 265.393 10.928 262.273 10.928Z" stroke="#FBF7F7" strokeWidth="6" mask="url(#path-1-outside-1)"/>
					<path d="M303.287 56H296.807V18.56H303.287V56ZM300.047 12.152C298.799 12.152 297.719 11.72 296.807 10.856C295.943 9.944 295.511 8.864 295.511 7.616C295.511 6.224 295.919 5.12 296.735 4.304C297.551 3.488 298.655 3.08 300.047 3.08C301.295 3.08 302.351 3.536 303.215 4.448C304.127 5.312 304.583 6.368 304.583 7.616C304.583 9.008 304.175 10.112 303.359 10.928C302.543 11.744 301.439 12.152 300.047 12.152Z" stroke="#FBF7F7" strokeWidth="6" mask="url(#path-1-outside-1)"/>
					<path d="M321.071 24.824C322.415 22.808 324.119 21.128 326.183 19.784C328.295 18.392 330.791 17.696 333.671 17.696C337.895 17.696 341.039 18.968 343.103 21.512C345.215 24.056 346.271 27.416 346.271 31.592V56H339.791V32.312C339.791 29.576 339.167 27.416 337.919 25.832C336.671 24.2 334.895 23.384 332.591 23.384C331.487 23.384 330.407 23.6 329.351 24.032C328.295 24.416 327.263 24.968 326.255 25.688C325.295 26.408 324.383 27.248 323.519 28.208C322.703 29.168 321.959 30.176 321.287 31.232V56H314.807V18.56H321.071V24.824Z" stroke="#FBF7F7" strokeWidth="6" mask="url(#path-1-outside-1)"/>
					<path d="M372.248 17.696C374.408 17.696 376.328 18.056 378.008 18.776C379.736 19.496 381.224 20.384 382.472 21.44V18.56H388.376V55.136C388.376 58.256 387.968 60.92 387.152 63.128C386.336 65.336 385.16 67.136 383.624 68.528C382.136 69.968 380.336 71.024 378.224 71.696C376.112 72.368 373.76 72.704 371.168 72.704C368.912 72.704 366.752 72.44 364.688 71.912C362.624 71.384 360.776 70.592 359.144 69.536L361.52 63.92C362.672 64.832 364.016 65.576 365.552 66.152C367.088 66.776 368.96 67.088 371.168 67.088C374.576 67.088 377.24 66.2 379.16 64.424C381.128 62.648 382.112 59.768 382.112 55.784V51.176C381.152 52.328 379.76 53.432 377.936 54.488C376.16 55.496 374.024 56 371.528 56C369.416 56 367.352 55.592 365.336 54.776C363.32 53.912 361.544 52.688 360.008 51.104C358.472 49.472 357.224 47.504 356.264 45.2C355.352 42.848 354.896 40.16 354.896 37.136C354.896 34.352 355.352 31.784 356.264 29.432C357.176 27.032 358.4 24.968 359.936 23.24C361.52 21.512 363.368 20.168 365.48 19.208C367.592 18.2 369.848 17.696 372.248 17.696ZM372.968 50.24C374.888 50.24 376.616 49.808 378.152 48.944C379.688 48.08 380.936 47.072 381.896 45.92V26.336C380.792 25.568 379.52 24.872 378.08 24.248C376.64 23.624 374.912 23.312 372.896 23.312C371.408 23.312 369.968 23.624 368.576 24.248C367.232 24.824 366.032 25.688 364.976 26.84C363.92 27.992 363.08 29.408 362.456 31.088C361.832 32.72 361.52 34.616 361.52 36.776C361.52 38.84 361.832 40.712 362.456 42.392C363.08 44.024 363.92 45.44 364.976 46.64C366.032 47.792 367.232 48.68 368.576 49.304C369.968 49.928 371.432 50.24 372.968 50.24Z" stroke="#FBF7F7" strokeWidth="6" mask="url(#path-1-outside-1)"/>
					<path d="M397.013 37.496C397.013 34.712 397.445 32.12 398.309 29.72C399.173 27.272 400.373 25.16 401.909 23.384C403.493 21.608 405.365 20.216 407.525 19.208C409.733 18.2 412.133 17.696 414.725 17.696C416.885 17.696 418.829 18.08 420.557 18.848C422.333 19.568 423.869 20.48 425.165 21.584V18.56H431.069V46.928C431.069 48.752 431.501 49.952 432.365 50.528C433.277 51.056 434.261 51.32 435.317 51.32L433.949 56.36C429.341 56.36 426.557 54.488 425.597 50.744C425.021 51.512 424.349 52.28 423.581 53.048C422.861 53.768 422.021 54.416 421.061 54.992C420.101 55.568 419.021 56.024 417.821 56.36C416.621 56.696 415.301 56.864 413.861 56.864C411.509 56.864 409.301 56.408 407.237 55.496C405.221 54.584 403.445 53.288 401.909 51.608C400.421 49.928 399.221 47.912 398.309 45.56C397.445 43.16 397.013 40.472 397.013 37.496ZM415.301 51.104C417.125 51.104 418.853 50.672 420.485 49.808C422.117 48.944 423.485 47.816 424.589 46.424V26.336C423.293 25.424 421.853 24.704 420.269 24.176C418.733 23.6 417.101 23.312 415.373 23.312C413.645 23.312 412.061 23.648 410.621 24.32C409.181 24.992 407.933 25.952 406.877 27.2C405.869 28.4 405.077 29.864 404.501 31.592C403.925 33.32 403.637 35.216 403.637 37.28C403.637 39.296 403.925 41.168 404.501 42.896C405.077 44.576 405.893 46.04 406.949 47.288C408.005 48.488 409.229 49.424 410.621 50.096C412.061 50.768 413.621 51.104 415.301 51.104Z" stroke="#FBF7F7" strokeWidth="6" mask="url(#path-1-outside-1)"/>
					<path d="M450.235 24.824C451.579 22.808 453.283 21.128 455.347 19.784C457.459 18.392 459.955 17.696 462.835 17.696C467.059 17.696 470.203 18.968 472.267 21.512C474.379 24.056 475.435 27.416 475.435 31.592V56H468.955V32.312C468.955 29.576 468.331 27.416 467.083 25.832C465.835 24.2 464.059 23.384 461.755 23.384C460.651 23.384 459.571 23.6 458.515 24.032C457.459 24.416 456.427 24.968 455.419 25.688C454.459 26.408 453.547 27.248 452.683 28.208C451.867 29.168 451.123 30.176 450.451 31.232V56H443.971V18.56H450.235V24.824Z" stroke="#FBF7F7" strokeWidth="6" mask="url(#path-1-outside-1)"/>
					<path d="M490.684 39.944C491.116 43.448 492.34 46.184 494.356 48.152C496.372 50.12 499.036 51.104 502.348 51.104C504.508 51.104 506.452 50.888 508.18 50.456C509.908 49.976 511.564 49.376 513.148 48.656L514.66 54.2C512.932 55.016 510.988 55.664 508.828 56.144C506.668 56.624 504.244 56.864 501.556 56.864C498.868 56.864 496.444 56.432 494.284 55.568C492.124 54.656 490.276 53.384 488.74 51.752C487.252 50.072 486.1 48.032 485.284 45.632C484.468 43.184 484.06 40.4 484.06 37.28C484.06 34.496 484.468 31.904 485.284 29.504C486.1 27.104 487.252 25.04 488.74 23.312C490.228 21.536 492.004 20.168 494.068 19.208C496.132 18.2 498.436 17.696 500.98 17.696C503.668 17.696 506.02 18.152 508.036 19.064C510.052 19.976 511.732 21.224 513.076 22.808C514.42 24.392 515.428 26.24 516.1 28.352C516.772 30.464 517.108 32.696 517.108 35.048C517.108 36.728 517.036 38.36 516.892 39.944H490.684ZM500.836 23.312C498.004 23.312 495.676 24.272 493.852 26.192C492.076 28.112 490.996 30.944 490.612 34.688H511.132C511.132 31.04 510.22 28.232 508.396 26.264C506.572 24.296 504.052 23.312 500.836 23.312Z" stroke="#FBF7F7" strokeWidth="6" mask="url(#path-1-outside-1)"/>
				</svg>
			</div>
			<div id="logoicon">
				<img id="iconImage" src={LogoIcon} alt="LogoIcon"/>
			</div>
		</div>
    );
}

const About = () => {
    return (
        <div id="about" className="about">
			<div id="collage">
				<div id="background">
					<h4>Background</h4>
					<div className="paragraphs">
						<p>Monwabisi Dingane, commonly known as Monza amongs his peers, friends and those who follow his music career was born Tuesday, on the 13th of March, back in 1995.</p>
						<p>Monza is one of 4 sibling from a single mother, who he regards as his role model and an inspirational hard worker, and has leaved in Cape Town for as long as he can remember. Started primary school at the age of 6, and not too long, Monza was in high school at the age of 15. Monza matriculated with a bachelor candidate certificate before persuing further education and trainning.</p>
						<p> </p>
					</div>
				</div>
				<div id="hobbies">
					<h4>Hobbies</h4>
					<div className="paragraphs">
						<p>Monza is a developer by profession, and also as a hobby. I know that doesn't make sense, but developing solutions through coding is something I like doing on my free time as well. I love music too, house music to be more specific. In fact, I love any good music. Creativity inspires me and I cant help myself when I come across anything developed in a creative manner. </p>
						<p>I am a part-time deejay. Mixing music and synching melodies and making people feel better through music is a hobby I'm very passionate about. This hobby allows me to relax and unwind when I'm feeling stressed, so its very close to my heart.</p>
					</div>
				</div>
				<div id="profilePic">
					<img src={Monza} alt="Monza"/>
				</div>
				<div id="dreams">
					<h4>Dreams</h4>
					<div className="paragraphs">
						<p>My dreams are aligned with my goals. I dream of helping youths tackle inequality through creative education systems. I dream of an era where high school students matriculate with competent skills in order to apply for intern-level work. An era where the school system empowers students instead of limiting them with subject that are barely relevant in the working sector.</p>
						<p>I dream of empowering the generation after me with competent skills to better and help themselves and other after them. I dream of a legacy that will continue helping others help themselve throught a continues iterative process for generations to come. Making our world better starts with the unconditioned youth.</p>
					</div>
				</div>
				<div id="whatsnext">
					<h4>Whats next?</h4>
					<div className="paragraphs">
						<p>Learning. I believe you can never stop making yourself better. You can never stop learning new and effecient skills and ways to do things. The <i>Data Science</i> has my interest at the moment. I plan on being a certified data analytics professional and use this skill to compliment my software engineering and web development skills. This will allow me to effecient and effectively collect and process data when working on a project.</p>
						<p>As I also have a major interest in the <i>Eductation Technology</i> space, I plan on starting my very own organisation that will teach learners industry relevant coding and development skills. I do intent on starting a music entertainment and production company thats both innovative and creative, and for the youths & young adults.</p>
					</div>
				</div>
			</div>
		</div>
    );
}

const CareersBorder = () => {
    return (
        <svg id="careerBorder">
			<rect width="100%" height="100%" contentEditable="true"/>
		</svg>
    );
};

const Careers = (props) => {
    return (
        <div id="careers" className="careers">
			<CareersBorder/>
			<div id="careerStage">				
				<div id="fet">
					<div className="fetHeader">
						<h1>Further Education & Training</h1>
					</div>
					<div id="uct">
						<h3 id="uctHeader">UCT</h3>
						<p>
							<b>Program:</b> B.Sc
							<br/>
							<b>Majors:</b> Computer Science, Information System
							<br/>
							<b>Duration:</b> February 2014 - February 2017 (incomplete)
						</p>
					</div>
					<div id="cogrammar">
						<h3 id="cogrammarHeader">CoGrammar</h3>
						<p>
							<b>Program:</b> Software Engineering, Full Stack Web Dev.
							<br/>
							<b>Duration:</b> April 2019 - October 2019 (Complete)
						</p>
					</div>
				</div>
				<div id="skills">
					<div id="java">
						<i className="devicon devicon-java-plain-wordmark"></i>
					</div>
					<div id="python">
						<i className="devicon devicon-python-plain-wordmark"></i>
					</div>
					<div id="javascript">
						<i className="devicon devicon-javascript-plain"></i>
					</div>
					<div id="html">
						<i className="devicon devicon-html5-plain-wordmark"></i>
					</div>
					<div id="css">
						<i className="devicon devicon-css3-plain-wordmark"></i>
					</div>
					<div id="git">
						<i className="devicon devicon-git-plain-wordmark"></i>
					</div>
					<div id="node">
						<i className="devicon devicon-nodejs-plain"></i>
					</div>
					<div id="jquery">
						<i className="devicon devicon-jquery-plain-wordmark"></i>
					</div>
					<div id="sql">
						<i className="devicon devicon-mysql-plain-wordmark"></i>
					</div>
					<div id="mocha">
						<i className="devicon devicon-mocha-plain"></i>
					</div>
				</div>
				<div id="experience">
					<div id="sfda">
						<h3 id="sfdaHeader">Student Front Desk Assistant</h3>
						<div>
							<p>
								<b>Duration:</b> February 2016 – November 2016
							</p>
							<p>	
								<b>Company:</b> UCT University House Residenc
							</p>
							<p>	
								<b>Reference:</b> +278 4581 9727 
							</p>
						</div>
						<div className="experienceHeader">
							<h1>Experience</h1>
						</div>
					</div>
					<div id="itr">
						<h3 id="itrHeader">Information Technology Rep.</h3>
						<div>
							<p>
								<b>Duration:</b> September 2014 – September 2015
							</p>
							<p>
								<b>Company:</b> UCT University House Residenc
							</p>
							<p>
								<b>Reference:</b> +278 4581 9727
							</p>
						</div>
						<div className="experienceHeader">
							<h1>Experience</h1>
						</div>
					</div>
					<div id="mentor">
						<h3 id="mentorHeader">100+ Student Mentor</h3>
						<div>
							<p>
								<b>Duration:</b> 1 June 2014 – 4 June 2014
							</p>
							<p>
								<b>Company:</b> UCT 100up Program
							</p>
							<p>
								<b>Reference:</b> +278 2702 8838
							</p>
						</div>
						<div className="experienceHeader">
							<h1>Experience</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
}

// eslint-disable-next-line
const Contact = props => {
    return (
        <div id="contact" className="contact">
			<div id="contactStage">
				<div id="board">
					<h1>Message Board</h1>
					<div id="messageBoard">
						{props.archive.map((item, key) => {
							return <Bubble key={key++} bubble={item}/>;
						})}
					</div>
				</div>
				<div id="boardAction">
					<div id="note">
						<h3 style={{justifyContent: "center", textAllign: "center"}}>add note</h3>
						<div id="noteLabels" style={{float: "left"}}>
							<h4 htmlFor="author">Author:</h4>
							<h4 htmlFor="email">Email:</h4>
							<h4 htmlFor="note">Note:</h4>
						</div>
						<div id="noteInputs" style={{float: "right"}}>
							<input id="author" required="required" onChange={(event) => props.captureInputById(event)}></input>
							<input id="emailNote" required="required"  onChange={(event) => props.captureInputById(event)}></input>
							<textarea id="note" rows="4" cols="20"  onChange={(event) => props.captureInputById(event)}></textarea>
						</div>
						<button id="submitNote" style={{justifyContent: "center"}} onClick={() => props.postNote()}>post</button>
					</div>
					<div id="message">
						<h3>message me</h3>
						<div id="messageLabels">
							<h4 htmlFor="email">Email:</h4>
							<h4 htmlFor="author">Message:</h4>
						</div>
						<div id="messageInputs">
							<input id="emailMessage" required="required"></input>
							<textarea id="message" rows="4" cols="20"></textarea>
						</div>
						<button id="submitMessage">send</button>
					</div>
				</div>
			</div>
		</div>
    );
}

const Bubble = props => {
	console.log(props.bubble.getDate);
    return (
        <div id="bubble">
			<div id="head">
				<div id="user">{props.bubble.author}</div>
				<div id="stamp">{props.bubble.date}</div>
			</div>
			<div id="body">
				<p>{props.bubble.note}</p>
			</div>
		</div>
    );
}