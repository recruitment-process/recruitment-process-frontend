import { useForm, useFieldArray } from 'react-hook-form';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './AddAndEditStage.scss';

import InputWithError from '../../UI/InputWithError/InputWithError';
import Form from '../../UI/Form/Form';

import { VALIDATION_CONFIG } from '../../../utils/config';
import { TITLES } from '../../../utils/constants';

const AddAndEditStage = ({ header, actionItem }) => {
  const { control } = useForm();
  const { fields, append } = useFieldArray({ control, name: 'stages' });

  const handleSubmit = (data) => {
    console.log(data);
  };

  const handleAddSubstage = () => {
    if (fields.length < 10) {
      append({ stage: '' });
    }
  };

  const handleCaptionSwitch = () => {
    switch (header) {
      case TITLES.curtain.addStage:
        return (
          <p className="add-and-edit-stage__caption">
            Добавьте основной этап отбора кандидатов и&nbsp;промежуточные этапы
            для него
          </p>
        );
      case TITLES.curtain.addSubstage:
        return (
          <p className="add-and-edit-stage__caption">
            Добавьте промежуточный этап отбора кандидатов
          </p>
        );
      case TITLES.curtain.editStage:
        return (
          <p className="add-and-edit-stage__caption">
            Измените название этапа в&nbsp;текстовом поле
          </p>
        );
      case TITLES.curtain.editSubstage:
        return (
          <p className="add-and-edit-stage__caption">
            Измените название промежуточного этапа в&nbsp;текстовом поле
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <section className="add-and-edit-stage">
      {handleCaptionSwitch()}
      <Form
        formName={
          header === TITLES.curtain.addStage ||
          header === TITLES.curtain.addSubstage
            ? 'add-stage'
            : 'edit-stage'
        }
        onSubmit={handleSubmit}
        buttonText="Сохранить"
        isLoading={false}
        addFormClass={clsx('add-and-edit-stage__form', {
          'add-and-edit-stage__form_type_add-stage':
            header === TITLES.curtain.addStage,
        })}
        addBtnClass={clsx('add-and-edit-stage__submit-btn', {
          'add-and-edit-stage__submit-btn_type_add-stage':
            header === TITLES.curtain.addStage,
        })}
      >
        <InputWithError
          control={control}
          label=""
          inputId="stage"
          inputType="text"
          formName={
            header === TITLES.curtain.addStage ||
            header === TITLES.curtain.addSubstage
              ? 'add-stage'
              : 'edit-stage'
          }
          isDisabled={false}
          isAutocomplete
          withSpan
          withButton
          isSlim
          type="stage"
          border="radius"
          placeholder="Название этапа"
          validationRules={VALIDATION_CONFIG.stage}
          currentValue={
            header === TITLES.curtain.addStage ||
            header === TITLES.curtain.addSubstage
              ? ''
              : actionItem.name
          }
        />
        {fields.map((item, index) => (
          <InputWithError
            key={item.id}
            control={control}
            label=""
            inputId={`stages.${index}.stage`}
            inputType="text"
            formName="add-stage"
            isDisabled={false}
            isAutocomplete
            withSpan
            withButton
            type="substage"
            border="radius"
            placeholder={`Подэтап ${index + 1}`}
            validationRules={VALIDATION_CONFIG.stage}
            addLabelClass="add-and-edit-stage__substage-input"
          />
        ))}
        <button
          className={clsx('add-and-edit-stage__add-substage-btn', {
            'add-and-edit-stage__add-substage-btn_active':
              header === TITLES.curtain.addStage && fields.length < 10,
          })}
          type="button"
          onClick={handleAddSubstage}
        >
          Добавить подэтап
        </button>
        <p
          className={clsx(
            'add-and-edit-stage__caption add-and-edit-stage__caption_place_bottom',
            {
              'add-and-edit-stage__caption_active':
                header === TITLES.curtain.addStage && fields.length >= 10,
            }
          )}
        >
          Достигнуто максимальное количество подэтапов
        </p>
      </Form>
    </section>
  );
};

AddAndEditStage.propTypes = {
  header: PropTypes.string.isRequired,
  actionItem: PropTypes.shape({
    name: PropTypes.string,
  }),
};

AddAndEditStage.defaultProps = {
  actionItem: null,
};

export default AddAndEditStage;
