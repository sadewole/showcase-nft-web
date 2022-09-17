import React from 'react';
import Button from './Button';

import styles from '../styles/Global';
import assets from '../assets';

const SectionWrapper = ({
  title,
  description,
  mockupImg,
  showBtn,
  banner,
  reverse,
}) => {
  return (
    <div
      className={`min-h-screen ${styles.section} ${
        reverse ? styles.bgWhite : styles.bgPrimary
      } ${banner} `}
    >
      <div
        className={`flex items-center ${
          reverse ? styles.boxReverseClass : styles.boxClass
        } w-11/12 sm:w-full md:w-3/4`}
      >
        <div className={`${styles.descDiv}`}>
          <h1
            className={`${styles.h1Text} ${
              reverse ? styles.blackText : styles.whiteText
            } ${reverse ? styles.textRight : styles.textLeft}`}
          >
            {title}
          </h1>
          <p
            className={`${styles.descriptionText} ${
              reverse ? 'fadeRightMini' : 'fadeLeftMini'
            } ${reverse ? styles.textRight : styles.textLeft} ${
              reverse ? styles.blackText : styles.whiteText
            }`}
          >
            {description}
          </p>
          {showBtn && (
            <Button
              assetUrl={assets.expo}
              link='https://expo.dev/@samador/nft-mastery?serviceType=classic&distribution=expo-go'
            />
          )}
        </div>
        <div className={`flex-1 ${styles.flexCenter} p-8 px-0`}>
          <img
            src={mockupImg}
            alt='mockup'
            className={`${reverse ? 'fadeLeftMini' : 'fadeRightMini'} ${
              styles.sectionImg
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper;
