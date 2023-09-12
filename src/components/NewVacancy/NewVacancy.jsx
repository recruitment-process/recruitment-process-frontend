import { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import './NewVacancy.scss';

import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Button from '../UI/Button/Button';
import InputWithError from '../UI/InputWithError/InputWithError';
import NewVacancyFormSteps from './NewVacancyFormSteps/NewVacancyFormSteps';
import CompanyLogo from '../UI/CompanyLogo/CompanyLogo';
import DragAndDrop from '../UI/DragAndDrop/DragAndDrop';
import Tag from '../UI/Tag/Tag';
import Checkbox from '../UI/Checkbox/Checkbox';

const NewVacancy = ({ isLoading, onSubmit }) => {
  // Категории для кнопок сортировки
  const initialFormSteps = [
    { name: 'Основная информация', sortStep: 0 },
    { name: 'Общие условия', sortStep: 1 },
    { name: 'Требования к кандидатам', sortStep: 2 },
    { name: 'Этапы отбора', sortStep: 3 },
  ];

  // Активная категория шага формы на странице
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step) => setActiveStep(step);
  const handleStepChangeByButton = () => {
    setActiveStep(activeStep + 1);
  };

  const { control, handleSubmit } = useForm({ mode: 'onBlur' });

  return (
    <section className="new-vacancy">
      <div className="new-vacancy__header">
        <Breadcrumbs locationTitle="Новая Вакансия" />

        <div className="new-vacancy__subheader">
          <h2 className="new-vacancy__subheader-title">Новая Вакансия</h2>

          <div className="new-vacancy__buttons-wrap">
            <Button
              text="Сохранить"
              size="small"
              pic="none"
              type="button"
              uiType="secondary"
            />
            {activeStep !== 3 ? (
              <Button
                key="next"
                formName="new-vacancy"
                text="Далее"
                size="small"
                pic="none"
                type="button"
                onClick={handleStepChangeByButton}
              />
            ) : (
              <Button
                key="submit"
                formName="new-vacancy"
                text="Опубликовать"
                size="small"
                pic="none"
                type="submit"
              />
            )}
          </div>
        </div>
      </div>

      <NewVacancyFormSteps
        step={activeStep}
        onStepChange={handleStepChange}
        formSteps={initialFormSteps}
      />

      <div className="new-vacancy__container">
        <form
          id="new-vacancy"
          name="new-vacancy"
          className="new-vacancy__form"
          action="#"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          {activeStep === 0 && (
            <section className="new-vacancy__form-section">
              <div className="new-vacancy__form-subsection">
                <div className="new-vacancy__subsection-info">
                  <h3 className="new-vacancy__subsection-title">
                    Информация о вакансии
                  </h3>
                  <p className="new-vacancy__subsection-description">
                    Введите основную инормацию о вакансии
                    <br />и дедлайн ее закрытия
                  </p>
                </div>
                <div className="new-vacancy__subsection-content">
                  <div className="new-vacancy__inputs">
                    <InputWithError
                      addLabelClass="new-vacancy__inputs-item"
                      control={control}
                      label="Название вакансии*"
                      inputId="vacancy"
                      inputType="vacancy"
                      formName="new-vacancy"
                      placeholder="Ваша вакансия"
                      isDisabled={isLoading}
                      withSpan
                      type="vacancy"
                      border="radius"
                    />
                    <InputWithError
                      addLabelClass="new-vacancy__inputs-item"
                      control={control}
                      label="Город*"
                      inputId="city"
                      inputType="city"
                      formName="new-vacancy"
                      placeholder="Ваш город"
                      isDisabled={isLoading}
                      withSpan
                      type="city"
                      border="radius"
                    />
                    <InputWithError
                      addLabelClass="new-vacancy__inputs-item"
                      control={control}
                      label="Зарплата"
                      inputId="salary-min"
                      inputType="salary-min"
                      formName="new-vacancy"
                      placeholder="От"
                      isDisabled={isLoading}
                      withSpan
                      type="no-icon"
                      border="radius"
                    />
                    <InputWithError
                      addLabelClass="new-vacancy__inputs-item"
                      control={control}
                      inputId="salary-max"
                      inputType="salary-max"
                      formName="new-vacancy"
                      placeholder="До"
                      isDisabled={isLoading}
                      withSpan
                      type="no-icon"
                      border="radius"
                    />
                    <InputWithError
                      addLabelClass="new-vacancy__inputs-item"
                      control={control}
                      label="Дедлайн*"
                      inputId="deadline"
                      inputType="deadline"
                      formName="new-vacancy"
                      placeholder="ДД.ММ.ГГГГ"
                      isDisabled={isLoading}
                      withSpan
                      type="date"
                      border="radius"
                    />
                  </div>
                </div>
              </div>
              <hr className="new-vacancy__form-divider" />
              <div className="new-vacancy__form-subsection">
                <div className="new-vacancy__subsection-info">
                  <h3 className="new-vacancy__subsection-title">
                    Информация о компании
                  </h3>
                  <p className="new-vacancy__subsection-description">
                    Введите информацию о компании и логотип
                  </p>
                </div>
                <div className="new-vacancy__subsection-content">
                  <div className="new-vacancy__inputs">
                    <InputWithError
                      addLabelClass="new-vacancy__inputs-item"
                      control={control}
                      label="Название компании*"
                      inputId="company"
                      inputType="company"
                      formName="new-vacancy"
                      placeholder="Ваша компания"
                      isDisabled={isLoading}
                      withSpan
                      type="case"
                      border="radius"
                    />
                    <InputWithError
                      addLabelClass="new-vacancy__inputs-item"
                      control={control}
                      label="Сайт"
                      inputId="company-website"
                      inputType="company-website"
                      formName="new-vacancy"
                      placeholder="https://"
                      isDisabled={isLoading}
                      withSpan
                      type="globe"
                      border="radius"
                    />
                  </div>
                  <div className="new-vacancy__file-upload">
                    <InputWithError
                      addLabelClass="new-vacancy__input-file-upload"
                      control={control}
                      label="Добавьте логотип"
                      inputId="company-logo"
                      inputType="company-logo"
                      formName="new-vacancy"
                      isDisabled={isLoading}
                      withSpan
                      type="no-field"
                    />
                    <div className="new-vacancy__drag-drop-wrap">
                      <CompanyLogo stage="active" />
                      <DragAndDrop stage="default" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
          {activeStep === 1 && (
            <section className="new-vacancy__form-section">
              <div className="new-vacancy__form-subsection">
                <div className="new-vacancy__subsection-info">
                  <h3 className="new-vacancy__subsection-title">
                    Выберите ваши теги
                  </h3>
                  <p className="new-vacancy__subsection-description">
                    Выберите из готовых тегов общие условия
                    <br />
                    вакансии. Match с кандидатами подбирается,
                    <br />
                    исходя из указанных данных на этой странице
                  </p>
                </div>
                <div className="new-vacancy__subsection-content">
                  <div className="new-vacancy__conditions">
                    <div className="new-vacancy__tag-input-wrap">
                      <InputWithError
                        addLabelClass="new-vacancy__input-conditions"
                        control={control}
                        label="Формат работы"
                        inputId="job-format"
                        inputType="job-format"
                        formName="new-vacancy"
                        isDisabled={isLoading}
                        withSpan
                        type="no-field"
                      />
                      <Tag title="Офис" status="default" />
                      <Tag title="Удаленный" status="default" />
                      <Tag title="Гибридный" status="default" />
                      <Tag title="Вахтовый" status="default" />
                    </div>

                    <div className="new-vacancy__tag-input-wrap">
                      <InputWithError
                        addLabelClass="new-vacancy__input-conditions"
                        control={control}
                        label="Тип занятости"
                        inputId="occupation"
                        inputType="occupation"
                        formName="new-vacancy"
                        isDisabled={isLoading}
                        withSpan
                        type="no-field"
                      />
                      <Tag title="Полная" status="default" />
                      <Tag title="Частичная" status="default" />
                      <Tag title="Проектная" status="default" />
                      <Tag title="Стажировка" status="default" />
                    </div>

                    <div className="new-vacancy__tag-input-wrap">
                      <InputWithError
                        addLabelClass="new-vacancy__input-conditions"
                        control={control}
                        label="Общий опыт работы"
                        inputId="experience"
                        inputType="experience"
                        formName="new-vacancy"
                        isDisabled={isLoading}
                        withSpan
                        type="no-field"
                      />
                      <Tag title="Без опыта" status="default" />
                      <Tag title="1–3 года" status="default" />
                      <Tag title="3–5 лет" status="default" />
                      <Tag title="более 5 лет" status="default" />
                    </div>

                    <div className="new-vacancy__tag-input-wrap">
                      <InputWithError
                        addLabelClass="new-vacancy__input-conditions"
                        control={control}
                        label="Образование"
                        inputId="education"
                        inputType="education"
                        formName="new-vacancy"
                        isDisabled={isLoading}
                        withSpan
                        type="no-field"
                      />
                      <Tag title="Высшее" status="default" />
                      <Tag title="Высшее неполное" status="default" />
                      <Tag title="Переподготовка" status="default" />
                      <Tag title="Среднее" status="default" />
                    </div>

                    <hr className="new-vacancy__form-divider" />

                    <div className="new-vacancy__add-condition">
                      <h4 className="new-vacancy__add-condition-title">
                        Создайте свои теги, если необходимы дополнительные
                        условия
                      </h4>
                      <InputWithError
                        addLabelClass="new-vacancy__add-condition-input"
                        control={control}
                        inputId="additional-conditions"
                        inputType="additional-conditions"
                        formName="new-vacancy"
                        isDisabled={isLoading}
                        placeholder="Создать тег"
                        type="no-icon"
                        border="radius"
                      />
                      <Button
                        text="Добавить тег"
                        uiType="secondary"
                        size="small"
                        pic="none"
                        addBtnClass="new-vacancy__add-condition-button"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
          {activeStep === 2 && (
            <section className="new-vacancy__form-section">
              <div className="new-vacancy__form-subsection">
                <div className="new-vacancy__subsection-info">
                  <h3 className="new-vacancy__subsection-title">
                    Выберите ваши требования
                  </h3>
                  <p className="new-vacancy__subsection-description">
                    Создайте свои требования и укажите опыт навыка
                    <br />
                    для более корректного расчёта Match
                  </p>
                </div>
                <div className="new-vacancy__subsection-content">
                  <div className="new-vacancy__skills">
                    <InputWithError
                      addLabelClass="
                                new-vacancy__add-condition-input
                                new-vacancy__add-skill-input
                              "
                      control={control}
                      inputId="skill-name"
                      inputType="skill-name"
                      formName="new-vacancy"
                      isDisabled={isLoading}
                      placeholder="Создать навык"
                      type="no-icon"
                      border="radius"
                    />
                    <InputWithError
                      addLabelClass="
                                new-vacancy__add-condition-input
                                new-vacancy__add-skill-input
                              "
                      control={control}
                      inputId="skill-years"
                      inputType="skill-years"
                      formName="new-vacancy"
                      isDisabled={isLoading}
                      placeholder="Опыт/лет"
                      type="no-icon"
                      border="radius"
                    />
                    <Button
                      text="Добавить тег"
                      uiType="secondary"
                      size="small"
                      pic="none"
                      addBtnClass="new-vacancy__add-condition-button"
                    />
                    <hr className="new-vacancy__form-divider" />
                    <div className="new-vacancy__description">
                      <h4 className="new-vacancy__add-description-title">
                        Введите ваше описание вакансии
                      </h4>
                      <textarea
                        id="job-description"
                        name="job-description"
                        form="new-vacancy"
                        cols="30"
                        placeholder="Ваш текст"
                        className="new-vacancy__add-description"
                        maxLength="1400"
                      />
                      <span className="new-vacancy__text-counter">0/1400</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
          {activeStep === 3 && (
            <section className="new-vacancy__form-section">
              <div className="new-vacancy__form-subsection">
                <div className="new-vacancy__subsection-info">
                  <h3 className="new-vacancy__subsection-title">
                    Создайте ваши этапы отбора
                  </h3>
                  <p className="new-vacancy__subsection-description">
                    Выберите из готовых вариантов или создайте
                    <br />
                    свои этапы подбора кандидатов на вакансию
                  </p>
                </div>
                <div className="new-vacancy__stages">
                  <div className="new-vacancy__default-stages">
                    <Checkbox
                      id="stage-screening"
                      label="Первичный скрининг"
                      formName="new-vacancy"
                      addSpanClass="new-vacancy__stage-label"
                      control={control}
                    />
                    <Checkbox
                      id="stage-hr-interview"
                      label="Интервью с HR"
                      formName="new-vacancy"
                      addSpanClass="new-vacancy__stage-label"
                      control={control}
                    />
                    <Checkbox
                      id="stage-mng-interview"
                      label="Собеседование с руководителем"
                      formName="new-vacancy"
                      addSpanClass="new-vacancy__stage-label"
                      control={control}
                    />
                    <Checkbox
                      id="stage-test"
                      label="Тестовое задание"
                      formName="new-vacancy"
                      addSpanClass="new-vacancy__stage-label"
                      control={control}
                    />
                    <Checkbox
                      id="stage-offer"
                      label="Оффер"
                      formName="new-vacancy"
                      addSpanClass="new-vacancy__stage-label"
                      control={control}
                    />
                    <Checkbox
                      id="stage-offer-accept"
                      label="Оффер принят"
                      formName="new-vacancy"
                      addSpanClass="new-vacancy__stage-label"
                      control={control}
                    />
                  </div>
                  <hr className="new-vacancy__form-divider" />
                  <div className="new-vacancy__add-condition">
                    <h4 className="new-vacancy__add-condition-title">
                      Создайте дополнительные или индивидуальные этапы
                    </h4>
                    <InputWithError
                      addLabelClass="new-vacancy__add-condition-input"
                      control={control}
                      inputId="additional-conditions"
                      inputType="additional-conditions"
                      formName="new-vacancy"
                      isDisabled={isLoading}
                      placeholder="Создать ваш этап"
                      type="no-icon"
                      border="radius"
                    />
                    <Button
                      text="Добавить этап"
                      uiType="secondary"
                      size="small"
                      pic="none"
                      addBtnClass="new-vacancy__add-condition-button"
                    />
                  </div>
                </div>
              </div>
            </section>
          )}
        </form>
      </div>
    </section>
  );
};

export default NewVacancy;

NewVacancy.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
