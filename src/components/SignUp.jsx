import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
const socialList = [
  { iconName: "icofont-facebook", siteLink: "#", className: "facebook" },
  { iconName: "icofont-twitter", siteLink: "#", className: "twitter" },
  { iconName: "icofont-linkedin", siteLink: "#", className: "linkedin" },
  { iconName: "icofont-instagram", siteLink: "#", className: "instagram" },
];
const title = "Register";
const socialTitle = "Login With Social Media";
const btnText = "SignUp Now";
const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { signUpWithGmail, createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    // console.log(form);
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPass.value;
    console.log(email, password, confirmPassword);
    if (password !== confirmPassword) {
      setErrorMessage(
        "Passwords doesn`t Match ! Please, Provide a Valid Password"
      );
    } else {
      setErrorMessage("");
      createUser(email, password)
        .then((UserName) => {
          const user = UserName.user;
          alert("Account Created Successfully");
          navigate(from, { replace: true });
        })
        .catch((error) => {
          console.log(error.message);
          alert(`${error.message}`);
        });
    }
  };
  const handleRegister = () => {
    signUpWithGmail()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMsg = error.message;
        setErrorMessage("Please Provide Valid Email & Password!");
      });
  };
  return (
    <div>
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">{title}</h3>
            <form className="account-form" onSubmit={handleSignUp}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name *"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address*"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password *"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="confirmPass"
                  id="ConfirmPass"
                  placeholder=" Confirm Password *"
                  required
                />
              </div>

              {/* error message */}
              <div>
                {errorMessage && (
                  <div className="error-message text-danger mb-2">
                    {errorMessage}
                  </div>
                )}
              </div>

              <div className="form-group">
                <button type="submit" className="d-block lab-btn">
                  <span>{btnText}</span>
                </button>
              </div>
            </form>
            {/* account button */}
            <div className="account-button">
              <span className="d-block cate pt-10">
                Have An Account? <Link to="/login">Login</Link>
              </span>
              <span className="or">
                <span>or</span>
              </span>
              {/* social buttons */}
              <h5 className="subtitle">{socialTitle}</h5>
              <ul className="lab-ul social-icons justify-content-center">
                <li>
                  <button className="github" onClick={handleRegister}>
                    <i className="icofont-github"></i>
                  </button>
                </li>
                {socialList.map((icon, i) => (
                  <li key={i}>
                    <a href={icon.siteLink} className={icon.className}>
                      <i className={icon.iconName}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
