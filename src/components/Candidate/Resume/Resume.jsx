import './Resume.scss';

import { useRef, useState } from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import PropTypes from 'prop-types';
import { useReactToPrint } from 'react-to-print';

import ActionButton from '../../UI/ActionButton/ActionButton';
import Modal from '../Modal/Modal';

const Resume = ({ resume }) => {
  const resumeView = useRef();

  const handlePrint = useReactToPrint({
    content: () => resumeView.current,
  });

  const [isLinkCopiedModalActive, setIsLinkCopiedModalActive] = useState(false);
  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(resume)
      .then(() => setIsLinkCopiedModalActive(true));
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

  return (
    <div>
      {resume !== null ? (
        <div className="resume" ref={resumeView}>
          <ul className="resume__actions">
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
          </Worker>
          <Modal
            isOpen={isLinkCopiedModalActive}
            onClose={handleModalClose}
            text="Ссылка на резюме скопирована"
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
