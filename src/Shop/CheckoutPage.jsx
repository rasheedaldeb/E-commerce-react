import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import "../components/Modal.css";
import { replace, useLocation, useNavigate } from "react-router-dom";
const CheckoutPage = () => {
  const [show, setshow] = useState(false);
  const [activeTab, setactiveTab] = useState("visa");

  const handleShow = () => {
    if (show === false) {
      setshow(true);
    }
  };
  const handleClose = () => {
    if (show === true) {
      setshow(false);
    }
  };
  //direct to home page
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleOrderConfirm = () => {
    alert("Your Order is Placed Successfully");
    localStorage.removeItem("cart");
    navigate(from, { replace: true });
  };
  //handle tab change
  const handleTabChange = (tabId) => {
    setactiveTab(tabId);
  };
  return (
    <div className="modalCard">
      <Button variant="primary" className="py-2" onClick={handleShow}>
        <Modal
          show={show}
          onHide={handleClose}
          animation={true}
          className="modal fade"
          centered
        >
          <div className="modal-dialog">
            <h5 className="px-3 mb-3">Select Your Payment Method</h5>
            <div className="modal-content">
              <div className="modal-body">
                <div className="tabs mt-3">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a
                        href="#visa"
                        className={`nav-link ${
                          activeTab === "visa" ? "active" : ""
                        }`}
                        id="visa-tab"
                        data-toggle="tab"
                        role="tab"
                        aria-controls="visa"
                        aria-selected={activeTab === "visa"}
                        onClick={() => handleTabChange("visa")}
                      >
                        <img
                          src="https://i.imgur.com/sB4jftM.png"
                          alt=""
                          width="80"
                        />
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        href="#paypal"
                        className={`nav-link ${
                          activeTab === "paypal" ? "active" : ""
                        }`}
                        id="paypal-tab"
                        data-toggle="tab"
                        role="tab"
                        aria-controls="paypal"
                        aria-selected={activeTab === "paypal"}
                        onClick={() => handleTabChange("paypal")}
                      >
                        <img
                          src="https://i.imgur.com/yK7EDD1.png"
                          alt=""
                          width="80"
                        />
                      </a>
                    </li>
                  </ul>
                  {/* content */}
                  <div className="tab-content" id="myTabContent">
                    {/* visa content */}
                    <div
                      className={`tab-pane fade ${
                        activeTab === "visa" ? "show active" : ""
                      }`}
                      id="visa"
                      role="tabpanel"
                      aria-labelledby="visa-tab"
                    >
                      {/* visa tab content */}
                      <div className="mt-4 mx-4">
                        <div className="text-center">
                          <h5>Credit Card</h5>
                        </div>
                        <div className="form mt-3">
                          <div className="inputbox">
                            <input
                              type="text"
                              name="name"
                              id="name"
                              className="form-control"
                              required
                            />
                            <span>Cardholder Name</span>
                          </div>
                          <div className="inputbox">
                            <input
                              type="text"
                              name="number"
                              id="number"
                              className="form-control"
                              required
                              min="1"
                              max="999"
                            />
                            <span>Card Number</span>
                            <i className="fa fa-eye"></i>
                          </div>
                          <div className="d-flex flex-row">
                            <div className="inputbox">
                              <input
                                type="text"
                                name="number"
                                id="number"
                                className="form-control"
                                required
                                min="1"
                                max="999"
                              />
                              <span>Expiration Date</span>
                            </div>
                            <div className="inputbox">
                              <input
                                type="text"
                                name="number"
                                id="number"
                                className="form-control"
                                required
                                min="1"
                                max="999"
                              />
                              <span>CVV</span>
                            </div>
                          </div>
                          <div className="px-5 pay">
                            <button
                              className="btn btn-success btn-block"
                              onClick={handleOrderConfirm}
                            >
                              Order Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* paypal content */}
                    <div
                      className={`tab-pane fade ${
                        activeTab === "paypal" ? "show active" : ""
                      }`}
                      id="paypal"
                      role="tabpanel"
                      aria-labelledby="paypal-tab"
                    >
                      <div className="mt-4 mx-4">
                        <div className="text-center">
                          <h5>Paypal Account Info</h5>
                        </div>
                        <div className="form mt-3">
                          <div className="inputbox">
                            <input
                              type="email"
                              name="email"
                              id="email"
                              className="form-control"
                              required
                            />
                            <span>Enter Your Email</span>
                          </div>
                          <div className="inputbox">
                            <input
                              type="text"
                              name="name"
                              id="name"
                              className="form-control"
                              required
                              min="1"
                              max="999"
                            />
                            <span>Enter Your Name</span>
                            <i className="fa fa-eye"></i>
                          </div>
                          <div className="d-flex flex-row">
                            <div className="inputbox">
                              <input
                                type="text"
                                name="name"
                                id="name"
                                className="form-control"
                                required
                                min="1"
                                max="999"
                              />
                              <span>Extra Info</span>
                            </div>
                            <div className="inputbox">
                              <input
                                type="text"
                                name="name"
                                id="name"
                                className="form-control"
                                required
                                min="1"
                                max="999"
                              />
                              <span></span>
                            </div>
                          </div>
                          <div className="px-5 pay">
                            <button
                              className="btn btn-success btn-block"
                              onClick={handleOrderConfirm}
                            >
                              Add Paypal
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* payment disclaimer */}
                  <p className="mt-3 px-4 p-Disclaimer">
                    <em>Lorem ipsum dolor :</em> sit amet consectetur
                    adipisicing elit. Numquam corrupti nihil id, dolor iste
                    odit?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Modal>
        Proceed to Checkout
      </Button>
    </div>
  );
};

export default CheckoutPage;
