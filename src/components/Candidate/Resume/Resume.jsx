// import { pdfjs } from 'react-pdf';
import { useRef, useState } from 'react';
import clsx from 'clsx';
import './Resume.scss';
import { Viewer, Worker } from '@react-pdf-viewer/core';
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import PropTypes from 'prop-types';
import { useReactToPrint } from 'react-to-print';
import ActionButton from '../../UI/ActionButton/ActionButton';
import Modal from '../Modal/Modal';

// import '@react-pdf-viewer/default-layout/lib/styles/index.css';
//
// import resume1 from '../../../temp/CV.pdf';

const Resume = ({ resume }) => {
  const resumeView = useRef();

  const [isScroll, setIsScroll] = useState(false);
  const onScroll = (evt) => {
    if (evt.target.scroll) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  const handlePrint = useReactToPrint({
    content: () => resumeView.current,
  });

  const [isLinkCopiedModalActive, setIsLinkCopiedModalActive] = useState(false);
  const handleCopyLink = () => {
    navigator.clipboard.writeText(resume);
    setIsLinkCopiedModalActive(true);
    setTimeout(() => setIsLinkCopiedModalActive(false), 1500);
  };

  const [isAddedToBookmarksModalActive, setIsAddedToBookmarksModalActive] =
    useState(false);
  const handleAddToBookmarks = () => {
    setIsAddedToBookmarksModalActive(true);
    setTimeout(() => setIsAddedToBookmarksModalActive(false), 1500);
  };
  const handleModalClose = () => {
    setIsLinkCopiedModalActive(false);
  };

  // const pdfLayout = defaultLayoutPlugin({ sidebarTabs: null });
  return (
    <div>
      {resume !== null ? (
        <div
          className="resume"
          ref={resumeView}
          onScroll={onScroll}
          onWheel={onScroll}
        >
          <ul
            className={clsx('resume__actions', {
              resume__actions_opacity: isScroll,
            })}
          >
            <li className="resume__action">
              <ActionButton
                type="delete"
                mod="pale"
                onActionButtonClick={() => {
                  console.log('resume delete');
                }}
              />
            </li>
            <li className="resume__action">
              <ActionButton
                type="bookmark"
                mod="pale"
                onActionButtonClick={handleAddToBookmarks}
              />
            </li>
            <li className="resume__action">
              <ActionButton
                type="print"
                mod="pale"
                onActionButtonClick={handlePrint}
              />
            </li>
            <li className="resume__action">
              <ActionButton
                type="link"
                mod="pale"
                onActionButtonClick={handleCopyLink}
              />
            </li>
          </ul>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer fileUrl={resume} />
            {/* <Viewer fileUrl="https://cors-anywhere.herokuapp.com/https://rdfo.ru/files/resume1a.pdf" /> */}
          </Worker>
          <Modal
            isOpen={isLinkCopiedModalActive}
            onClose={handleModalClose}
            text="Ссылка скопирована в буфер обмена"
          />
          <Modal
            isOpen={isAddedToBookmarksModalActive}
            onClose={handleModalClose}
            text="Резюме добавлено в избранное(нет)"
          />
        </div>
      ) : (
        <div className="resume__no-resume">
          <span className="resume__no-resume-text">Нет резюме кандидата</span>
        </div>
      )}
    </div>
  );
};
export default Resume;

Resume.propTypes = {
  resume: PropTypes.string,
};

Resume.defaultProps = {
  resume: null,
};
