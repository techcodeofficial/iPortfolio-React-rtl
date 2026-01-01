import React from "react";

const State = () => {
  return (
    <section id="stats" className="stats section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-emoji-smile"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="232"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>
                <strong>افراد راضی</strong> <span>تعداد نفرات</span>
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-journal-richtext"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="521"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>
                <strong>پروژه ها</strong>
                <span>تعداد پروژه های کامل شده</span>
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-headset"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="1453"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>
                <strong>ساعت ها پشتیبانی</strong>
                <span>گفتوگو با شنونده ها</span>
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-people"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="32"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>
                <strong>همکاران</strong>
                <span>انان که یاری کردنند</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default State;
