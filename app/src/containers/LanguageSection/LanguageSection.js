import React from 'react';
import { Divider, Languages } from '../../components';
import './LanguageSection.scss';

const LanguageSection = ({
  languages,
  languageSectionHeader
}) => (
  <section className="languages-section">
    <h1 className="section-header text-white">{ languageSectionHeader }</h1>
    <Divider />
    <Languages
      languages={languages}
    />
  </section>
);

export default LanguageSection;
