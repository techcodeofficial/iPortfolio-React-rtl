import { useParams, Link } from "react-router";
import { useState, useEffect } from "react";
import projectsData from "../constants/projectsData";
const PortfolioDetail = () => {
  let { id } = useParams();
  let [portfolio, setPortfolio] = useState({});
  useEffect(() => {
    const fetch = async () => {
      let projectIndex = projectsData.findIndex(
        (item) => item.id === parseInt(id)
      );
      let project = projectsData[projectIndex] || {};
      setPortfolio(project);
    };
    fetch();
  }, []);
  return (
    <main className="main">
      <div className="page-title dark-background">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">اطلاعات سوابق کاری</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link to="/">خانه</Link>
              </li>
              <li className="current">اطلاعات سوابق کاری</li>
            </ol>
          </nav>
        </div>
      </div>

      <section id="portfolio-details" className="portfolio-details section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-8">
              <img src={portfolio.image} alt="" className="img-fluid" />
            </div>

            <div className="col-lg-4">
              <div
                className="portfolio-info"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3>اطلاعات پروژه ها</h3>
                <ul>
                  <li>
                    <strong>دسته بندی</strong>:طراح وب
                  </li>
                  <li>
                    <strong>سمت</strong>: ASU شرکت
                  </li>
                  <li>
                    <strong>تاریخ پروژه</strong>: 01 March, 2020
                  </li>
                  <li>
                    <strong>آدرس پروژه</strong>:<a href="#">www.example.com</a>
                  </li>
                </ul>
              </div>
              <div
                className="portfolio-description"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h2>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از
                </h2>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PortfolioDetail;
