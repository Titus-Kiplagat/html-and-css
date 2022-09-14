import React from "react";
import "./page.css";
import {
  FaDatabase,
  FaAsterisk,
  FaAccusoft,
  FaFacebook,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const Page = () => {
  return (
    <div className="page-layout">
      <div className="page-container">
        <div className="page-content">
          <div className="layoutOne">
            <h1>Data to enrich your</h1>
            <h1>
              <span className="primary-color">online business</span>
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque,
              cum impedit aliquam fugiat unde repudiandae rerum quod, quas
              molestiae quasi aliquid praesentium libero ea animi saepe! Optio
              asperiores quis rerum. Aperiam provident praesentium culpa ipsam
              nihil, et quidem consequatur ea quaerat enim. Sunt, praesentium
              corporis eum deleniti eaque explicabo, quidem voluptates aliquam
              aperiam natus magnam corrupti, amet odio. Rem, nemo.
            </p>
            <div className="user-by">
              <p>USED BY</p>
              <div className="icons">
                <span>
                  <FaDatabase />
                  Staxx
                </span>
                <span>
                  <FaAsterisk />
                  Star AI
                </span>
                <span>
                  <FaAccusoft />
                  Accusoft
                </span>
              </div>
            </div>
					</div>
					<div className="layoutTwo">
							<div className="form-container">
								<div className="form-content">
									<p>sign in with</p>
									<div className="social-icons">
										<span><FaFacebook size={20} /></span>
										<span><FaTwitter size={20} /></span>
										<span><FaGithub size={20} /></span>
									</div>
									<div className="divider">
										<p><span>Or</span></p>
									</div>
									<form action="">
										<input type="text" placeholder="Name" />
										<input type="text" placeholder="Email" />
										<input type="text" placeholder="Password" />
										<button>Create your account</button>
									</form>
									<div className="form-footer">
										<p>By signing up, you agree to our <span className="primary-color">Terms, Data Policy</span> and <span className="primary-color">Cookies Policy</span>.</p>
									</div>
								</div>
							</div>
					</div>
        </div>
      </div>
    </div>
  );
};

export default Page;
