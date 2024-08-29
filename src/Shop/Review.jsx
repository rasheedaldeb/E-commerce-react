import { useState } from "react";
import Ratting from "../components/Ratting";
const reviewTitle = "Add A Review";
let ReviewList = [
  {
    imgUrl: "/images/instructor/01.jpg",
    imgAlt: "Client thumb",
    name: "Ganelon Boileau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/images/instructor/02.jpg",
    imgAlt: "Client thumb",
    name: "Morgana Cailot",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/images/instructor/03.jpg",
    imgAlt: "Client thumb",
    name: "Telford Bois",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/images/instructor/04.jpg",
    imgAlt: "Client thumb",
    name: "Cher Daviau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
];
const Review = () => {
  const [reviewShow, setreviewShow] = useState(true);
  return (
    <>
      <ul
        className={`review-nav lab-ul ${
          reviewShow ? "RevActive" : "DescActive"
        }`}
      >
        <li className="desc" onClick={() => setreviewShow(!reviewShow)}>
          Description
        </li>
        <li className="rev" onClick={() => setreviewShow(!reviewShow)}>
          Review{" "}
        </li>
      </ul>
      {/* desc & review content */}
      <div
        className={`review-content ${
          reviewShow ? "review-content-show" : "description-show"
        }`}
      >
        <div className="review-showing">
          <ul className="content lab-ul">
            {ReviewList.map((item, i) => (
              <li key={i}>
                <div className="post-thumb">
                  <img src={item.imgUrl} alt={item.imgAlt} />
                </div>
                <div className="post-content">
                  <div className="entry-meta">
                    <div className="posted-on">
                      <a href="#">{item.name}</a>
                      <p>{item.date}</p>
                    </div>
                  </div>
                  <div className="entry-content">
                    <p>{item.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {/* add review filed */}
          <div className="client-review">
            <div className="review-form">
              <div className="review-title">
                <h5>{reviewTitle}</h5>
              </div>
              <form action="active" className="row">
                <div className="col-md-4 col-12">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name *"
                  />
                </div>
                <div className="col-md-4 col-12">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email *"
                  />
                </div>
                <div className="col-md-4 col-12">
                  <div className="rating">
                    <span className="me-2">Your Rating</span>
                    <Ratting />
                  </div>
                </div>
                <div className="col-md-12 col-12">
                  <textarea
                    name="message"
                    id="message"
                    rows="8"
                    placeholder="Type Here Message"
                  ></textarea>
                </div>
                <div className="col-12">
                  <button type="submit" className="default-button">
                    <span>Submit Review</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* description */}
        <div className="description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nam
            sit aliquam ratione corrupti illo quaerat porro ipsa temporibus
            voluptatibus cumque eveniet necessitatibus minima quisquam
            voluptate, doloremque impedit fuga at culpa est voluptatum neque
            praesentium sed! Quam, eos odit! Eaque ab nulla totam quae
            reiciendis! Qui voluptas quo temporibus iste.
          </p>
          <div className="post-item">
            <div className="post-thumb">
              <img src="/src/assets/images/shop/01.jpg" alt="" />
            </div>
            <div className="post-content">
              <ul className="lab-ul">
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                  quia?
                </li>
                <li> amet consectetur adipisicing elit. Hic, quia?</li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                  quia?
                </li>
                <li> amet consectetur adipisicing elit. Hic, quia?</li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                  quia?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                  quia?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                  quia?
                </li>
              </ul>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              in dolor earum soluta, odio labore, dolores distinctio voluptate
              asperiores amet, corrupti atque nesciunt optio veritatis eos
              nostrum deserunt eligendi vel officia ea aspernatur. Porro fugit
              aut eligendi distinctio. Consequuntur vitae facilis laudantium
              voluptatem est possimus, incidunt aperiam aspernatur quaerat
              doloremque?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
