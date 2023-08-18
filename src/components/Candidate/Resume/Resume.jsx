// import { pdfjs } from 'react-pdf';
import { useRef, useState } from 'react';
import clsx from 'clsx';
import './Resume.scss';
import { Viewer, Worker } from '@react-pdf-viewer/core';
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';
//
import resume from '../../../temp/CV.pdf';
// import resume1 from '../../../temp/primer3.pdf';

const Resume = () => {
  const resumeView = useRef();

  const [isScroll, setIsScroll] = useState(false);
  const onScroll = (evt) => {
    if (evt.target.scroll) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  // const pdfLayout = defaultLayoutPlugin({ sidebarTabs: null });
  return (
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
          <button className="resume__action-btn">X</button>
        </li>
        <li className="resume__action">
          <button className="resume__action-btn">Y</button>
        </li>
        <li className="resume__action">
          <button className="resume__action-btn">Z</button>
        </li>
      </ul>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer fileUrl={resume} />
        {/* <Viewer fileUrl="https://cors-anywhere.herokuapp.com/https://rdfo.ru/files/resume1a.pdf" /> */}
      </Worker>
    </div>
  );
};
export default Resume;
