import React, { PropTypes } from 'react';
import { Divider, Languages } from '../../components';
import './LanguageSection.scss';

const LanguageSection = ({
  languages,
  languageSectionHeader
}) => (
  <section className="languages-section">
    <h1 className="section-header text-white">{languageSectionHeader}</h1>
    <Divider />
    <Languages
      languages={languages}
    />
  </section>
);

LanguageSection.propTypes = {
  languageSectionHeader: PropTypes.string,
  languages: PropTypes.array.isRequired
};

export default LanguageSection;
