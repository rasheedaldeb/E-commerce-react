import { useState } from "react";
import blogList from "../utilis/blogdata";
import { useParams } from "react-router-dom";
import Tags from "../Shop/Tags";
import PageHeader from "../components/PageHeader";
import PapularPost from "../Shop/PopularPost";
const socialList = [
  { link: "#", iconName: "icofont-facebook", className: "facebook" },
  { link: "#", iconName: "icofont-twitter", className: "twitter" },
  { link: "#", iconName: "icofont-linkedin", className: "linkedin" },
  { link: "#", iconName: "icofont-instagram", className: "instagram" },
  { link: "#", iconName: "icofont-pinterest", className: "pinterest" },
];
const SingleBlog = () => {
  const [blog, setblog] = useState(blogList);
  const { id } = useParams();
  const result = blog.filter((b) => b.id === Number(id));
  console.log(result);
  return (
    <div>
      <PageHeader title="Single Blog Page" currPage={"Blog / Blog Details"} />
      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {result.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img src={item.imgUrl} alt={item.imgAlt} />
                              </div>
                              <div className="post-content">
                                <h3>{item.title}</h3>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    {item.metaList.map((val, i) => (
                                      <li key={i}>
                                        <i className={val.iconName}></i>
                                        {val.text}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Doloremque maxime aspernatur
                                  unde reiciendis sequi iusto recusandae
                                  consectetur officia adipisci deleniti, omnis
                                  nostrum nisi provident ullam debitis tempora
                                  molestiae rerum vitae ut fuga ad voluptatem
                                  quod. Obcaecati, error. Iure placeat ipsum
                                  aliquam quas cupiditate, tenetur, quasi fugiat
                                  corporis odit deleniti optio.
                                </p>
                                <blockquote>
                                  <p>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Temporibus, omnis dicta
                                    corporis fugiat dignissimos pariatur
                                    reiciendis esse id a iusto.
                                  </p>
                                  <cite>
                                    <a href="#">...Malissa Hunter</a>
                                  </cite>
                                </blockquote>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit. Velit obcaecati consequuntur
                                  odio eaque iste quisquam doloremque officiis
                                  quidem harum? Soluta, sunt! Consequuntur,
                                  suscipit sequi? Aliquid id minima cupiditate
                                  facilis aperiam at placeat amet praesentium
                                  vel, suscipit, nostrum laboriosam, eveniet
                                  quos laudantium ea perferendis quas voluptates
                                  ipsum doloribus assumenda nihil unde.
                                </p>
                                <img
                                  src="/src/assets/images/blog/single/01.jpg"
                                  alt=""
                                />
                                <p>
                                  Lorem ipsum dolor sit, amet consectetur
                                  adipisicing elit. Vel magnam corporis quod
                                  culpa. Dolorum autem voluptas maxime sed
                                  mollitia, nihil numquam veritatis quis saepe
                                  explicabo? Modi quia dignissimos adipisci ipsa
                                  est cumque et? Ipsam commodi minus officiis
                                  unde nemo, neque voluptates rerum amet
                                  temporibus at facilis eveniet nesciunt
                                  voluptatum. Consequatur!
                                </p>
                                <div className="video-thumb">
                                  <img
                                    src="/src/assets/images/blog/single/02.jpg"
                                    alt=""
                                  />
                                  <a
                                    href="https://youtu.be/DwbwuYYiBTk?si=rQItfGf5ne7TzHtr"
                                    className="video-button popup"
                                    target="blank"
                                  >
                                    <i className="icofont-ui-play"></i>
                                  </a>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Mollitia quidem ipsum vero
                                  molestias, libero quasi? Harum, eos beatae
                                  possimus odio perspiciatis minima a minus.
                                  Ipsum expedita suscipit impedit, consequatur
                                  earum maiores, maxime explicabo cumque
                                  possimus modi, excepturi cupiditate ea
                                  perspiciatis perferendis hic omnis deserunt
                                  quam qui est ut enim nobis?
                                </p>
                                <div className="tags-section">
                                  <ul className="tags lab-ul">
                                    <li>
                                      <a href="#">Agency</a>
                                    </li>
                                    <li>
                                      <a href="#">Business</a>
                                    </li>
                                    <li>
                                      <a href="#">Personal</a>
                                    </li>
                                  </ul>
                                  <ul className="lab-ul social-icons">
                                    {socialList.map((val, i) => (
                                      <li key={i}>
                                        <a href="#" className={val.className}>
                                          <i className={val.iconName}></i>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="navigations-part">
                      <div className="left">
                        <a href="#" className="prev">
                          <i className="icofont-double-left"></i> Previous Blog
                        </a>
                        <a href="#" className="title">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Numquam, voluptate.
                        </a>
                      </div>
                      <div className="right">
                        <a href="#" className="prev">
                          Next Blog <i className="icofont-double-right"></i>
                        </a>
                        <a href="#" className="title">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Numquam, voluptate.
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <Tags />
                <PapularPost />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
