import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import blogList from "../utilis/blogdata";
const Blog = () => {
  return (
    <div>
      <PageHeader title="Blog Page" currPage="Blogs" />
      <div className="blog-section padding-tb section-bg">
        <div className="container">
          <div className="section-wrapper">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center g-4 ">
              {blogList.map((item, i) => (
                <div key={i} className="col">
                  <div className="post-item">
                    <div className="post-inner">
                      <div className="post-thumb">
                        <Link to={`/blog/${item.id}`}>
                          <img src={item.imgUrl} alt={item.imgAlt} />
                        </Link>
                      </div>
                      <div className="post-content">
                        <Link to={`/blog/${item.id}`}>
                          <h4>{item.title}</h4>
                        </Link>
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
                        <p>{item.desc}</p>
                      </div>
                      <div className="post-footer">
                        <div className="pf-left">
                          <Link
                            to={`/blog/${item.id}`}
                            className="lab-btn-text"
                          >
                            {item.btnText}
                            <i className="icofont-external-link"></i>
                          </Link>
                        </div>
                        <div className="pf-right">
                          <i className="icofont-comment"></i>
                          <span className="comment-count">
                            {item.commentCount}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
