import './MainReviewWidget.scss';

import btnImage from '../../temp/images/main-review-widget-btn.png';

const MainReviewWidget = () => {
  console.log('123');
  return (
    <section className="main-review-widget">
      <div className="main-review-widget__header-container">
        <h4 className="main-review-widget__header">Анализ работы</h4>
        <img
          src={btnImage}
          alt="Открытие вакансии"
          className="main-review-widget__btn"
        />
      </div>
      <div className="main-review-widget__vacancy-container">
        <p className="main-review-widget__vacancy">Директор по маркетингу</p>
        <p className="main-review-widget__date">23.08.23</p>
      </div>
      <div className="main-review-widget__skills-container">
        <div className="main-review-widget__skill main-review-widget__skill_position_one" />
        <div className="main-review-widget__skill main-review-widget__skill_position_two" />
        <div className="main-review-widget__skill main-review-widget__skill_position_three" />
        <div className="main-review-widget__skill main-review-widget__skill_position_four" />
      </div>
      <div className="main-review-widget__stages-container">
        <div className="main-review-widget__stages-circle" />
        <p className="main-review-widget__stages-name">Новые кандидаты</p>
        <p className="main-review-widget__stages-counter">74</p>
      </div>
      <div className="main-review-widget__stages-container">
        <div className="main-review-widget__stages-circle main-review-widget__stages-circle_color_light-blue" />
        <p className="main-review-widget__stages-name">В работе</p>
        <p className="main-review-widget__stages-counter">54</p>
      </div>
      <div className="main-review-widget__stages-container">
        <div className="main-review-widget__stages-circle main-review-widget__stages-circle_color_orange" />
        <p className="main-review-widget__stages-name">Отклоненные</p>
        <p className="main-review-widget__stages-counter">20</p>
      </div>
      <div className="main-review-widget__stages-container">
        <div className="main-review-widget__stages-circle main-review-widget__stages-circle_color_green" />
        <p className="main-review-widget__stages-name">Офферы</p>
        <p className="main-review-widget__stages-counter">2</p>
      </div>
    </section>
  );
};

export default MainReviewWidget;
