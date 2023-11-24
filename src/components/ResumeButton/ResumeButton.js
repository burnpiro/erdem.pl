// @flow
import React from 'react';
import styles from './ResumeButton.module.scss';

type Props = {};

const ResumeButton = ({ title = 'Get My Resume' }: Props) => {
  const handleDownload = () => {
    fetch('/Kemal_Erdem_Resume.pdf')
      .then(response => response.blob())
      .then(blob => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'Kemal_Erdem_Resume.pdf';
        link.click();
      })
      .catch(console.error);
  };

  return (
    <button className={styles['resumeButton']} onClick={handleDownload}>
      <img src={'/media/resume.svg'} /> <span>{title}</span>
    </button>
  );
};

export default ResumeButton;
