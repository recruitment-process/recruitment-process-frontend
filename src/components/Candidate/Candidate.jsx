import './Candidate.scss';

const Candidate = () => (
  <section className="candidate">
    <div className="candidate__header candidate-header">
      <div className="candidate-header__photo">
        <div className="image" />
        <div className="figure figure_match_high">80%</div>
      </div>
      <div className="candidate-header__info">
        <h3 className="info__candidate-name">Илья Иванов</h3>
        <p className="info__candidate-spec">Интернет-маркетолог, 32 года</p>
        <div className="info__candidate-tags">
          <div className="info__candidate-tag">1</div>
          <div className="info__candidate-tag">2</div>
          <div className="info__candidate-tag">3</div>
          <div className="info__candidate-tag">3</div>
          <div className="info__candidate-tag">3</div>
          <div className="info__candidate-tag">3</div>
        </div>
      </div>
      <div className="candidate-header__extra">123</div>
    </div>
  </section>
);

export default Candidate;
