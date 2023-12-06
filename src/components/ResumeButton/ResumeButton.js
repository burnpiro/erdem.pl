// @flow
import React from 'react';
import styles from './ResumeButton.module.scss';
import { Link } from 'gatsby';

type Props = {};

const ResumeButton = ({
  title = 'Get My Resume',
  iconPlacement = 'left',
  type = 'button',
}: Props) => {
  const handleDownload = e => {
    e.preventDefault();
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

  const content = (
    <React.Fragment>
      {iconPlacement === 'left' && (
        <img src={'/media/resume.svg'} alt={'resume icon'} />
      )}
      <span>{title}</span>
      {iconPlacement === 'right' && (
        <img src={'/media/resume.svg'} alt={'resume icon'} />
      )}
    </React.Fragment>
  );

  return type === 'button' ? (
    <button className={styles['resumeButton']} onClick={handleDownload}>
      {content}
    </button>
  ) : (
    <Link to={'/Kemal_Erdem_Resume.pdf'} onClick={handleDownload}  className={styles['resumeLink']}>
      {content}
    </Link>
  );
};

export default ResumeButton;
