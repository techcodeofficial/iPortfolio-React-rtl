import { Link } from "react-router";
const ServiceDetail = () => {
  return (
    <main class="main">
      <div class="page-title dark-background">
        <div class="container d-lg-flex justify-content-between align-items-center">
          <h1 class="mb-2 mb-lg-0">اطلاعات خدمات</h1>
          <nav class="breadcrumbs">
            <ol>
              <li>
                <Link to="/">خانه</Link>
              </li>
              <li class="current">اطلاعات خدمات</li>
            </ol>
          </nav>
        </div>
      </div>
      <section id="service-details" class="service-details section">
        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div class="services-list">
                <a href="#" class="active">
                  طراح وب
                </a>
                <a href="#">توسعه دهنده</a>
                <a href="#">مدیریت محصولات</a>
                <a href="#">طراح گرفیک</a>
                <a href="#">بازاریابی</a>
              </div>

              <h4>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
              </h4>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
              </p>
            </div>

            <div class="col-lg-8" data-aos="fade-up" data-aos-delay="200">
              <img
                src="assets/img/services.jpg"
                alt=""
                class="img-fluid services-img"
              />
              <h3>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              </h3>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که
              </p>
              <ul>
                <li>
                  <i class="bi bi-check-circle"></i>
                  <span>لورم ایپسوم متن ساختگی با تولید سادگی</span>
                </li>
                <li>
                  <i class="bi bi-check-circle"></i>
                  <span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از</span>
                </li>
                <li>
                  <i class="bi bi-check-circle"></i>
                  <span>لورم ایپسوم متن ساختگی با تولید سادگی</span>
                </li>
              </ul>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها
              </p>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetail;
