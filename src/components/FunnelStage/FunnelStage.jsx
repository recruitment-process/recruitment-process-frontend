import { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './FunnelStage.scss';

import { formatDate } from '../../utils/utils';

const FunnelStage = ({ stage, isSubstage }) => {
  const [isStageVisible, setStageVisible] = useState(false);
  /* const [isDisabled, setDisabled] = useState(true); */

  const handleStageVisible = () => {
    setStageVisible(!isStageVisible);
  };

  const handleSuccessClick = () => {
    // TODO Обратить внимание бэков, что в этом кейсе мы ожидаем, что ручка будет принимать массив ID
    // TODO Обсудить с бэками вариант проверки, что если все подэтапы закрыты, то и этап закрывается
    let arrId = [];
    if (isSubstage) {
      arrId = stage.id;
      console.log(`Закрыли подэтап с ID ${arrId}`);
    } else {
      const substageIds = stage.stages.map((substage) => substage.id);
      arrId = [...substageIds, stage.id];
      console.log(`Закрыли подэтапы и этап с ID ${arrId}`);
    }
  };

  /* const handleFailedClick = () => {
    let arrId = [];
    if (isSubstage) {
      arrId = stage.id;
      console.log(`Закрыли подэтап с ID ${arrId}`);
    } else {
      const substageIds = stage.stages.map((substage) => substage.id);
      arrId = [...substageIds, stage.id];
      console.log(`Закрыли подэтапы и этап с ID ${arrId}`);
    }
  }; */

  /* const actionList = [
    {
      id: 1,
      name: 'Редактировать',
      type: 'edit',
      action: () => {
        setDisabled(false);
      },
    },
    {
      id: 2,
      name: 'Этап пройден',
      type: 'succeed',
      action: () => {
        handleSuccessClick();
      },
    },
    {
      id: 3,
      name: 'Этап не пройден',
      type: 'failed',
      action: () => {
        handleFailedClick();
      },
    },
  ]; */

  return (
    <li className="funnel-stage" key={stage.id}>
      <div
        className={clsx(
          'funnel-stage__stage-wrapper',
          {
            'funnel-stage__stage-wrapper_status_succeed':
              stage.status === 'succeed' && !isSubstage,
          },
          {
            'funnel-stage__stage-wrapper_status_failed':
              stage.status === 'failed' && !isSubstage,
          },
          {
            'funnel-stage__stage-wrapper_type_substage': isSubstage,
          }
        )}
      >
        <div className="funnel-stage__stage-column funnel-stage__stage-column_position_left">
          <button
            className={clsx(
              'funnel-stage__stage-checked-btn',
              {
                'funnel-stage__stage-checked-btn_status_succeed':
                  stage.status === 'succeed',
              },
              {
                'funnel-stage__stage-checked-btn_status_failed':
                  stage.status === 'failed',
              },
              {
                'funnel-stage__stage-checked-btn_type_substage': isSubstage,
              }
            )}
            aria-label={
              stage.status === 'created'
                ? 'Завершить этап'
                : 'Отменить завершение этапа'
            }
            onClick={handleSuccessClick}
          />
          <p
            className={clsx('funnel-stage__stage-name', {
              'funnel-stage__stage-name_type_substage': isSubstage,
            })}
          >
            {stage.name}
          </p>
          {stage.stages !== undefined && stage.stages?.length !== 0 && (
            <button
              className={clsx('funnel-stage__stage-shown-btn', {
                'funnel-stage__stage-shown-btn_type_opened': isStageVisible,
              })}
              aria-label={
                isStageVisible ? 'Скрыть подробности' : 'Показать подробности'
              }
              onClick={handleStageVisible}
            />
          )}
        </div>
        <div className="funnel-stage__stage-column funnel-stage__stage-column_position_right">
          {stage.status !== 'created' && (
            <p
              className={clsx('funnel-stage__stage-date', {
                'funnel-stage__stage-date_type_substage': isSubstage,
              })}
            >
              {formatDate(stage.date)}
            </p>
          )}
          <button
            className={clsx('funnel-stage__stage-options-btn', {
              'funnel-stage__stage-options-btn__type_substage': isSubstage,
            })}
            aria-label="Опции"
          />
        </div>
      </div>
      {stage.stages !== undefined && stage.stages?.length !== 0 && (
        <ul
          className={clsx('funnel-stage__substage-list', {
            'funnel-stage__substage-list_opened': isStageVisible,
          })}
        >
          {stage.stages.map((substage) => (
            <FunnelStage stage={substage} key={substage.id} isSubstage />
          ))}
        </ul>
      )}
    </li>
  );
};

FunnelStage.propTypes = {
  stage: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    stages: PropTypes.arrayOf(PropTypes.shape()),
  }).isRequired,
  isSubstage: PropTypes.bool,
};

FunnelStage.defaultProps = {
  isSubstage: false,
};

export default FunnelStage;
