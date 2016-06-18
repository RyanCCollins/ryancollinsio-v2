import React from 'react';
import { Divider, Languages } from '../../components';
import './LanguageSection.scss';

const LanguageSection = ({
  languages,
  languageSectionHeader
}) => (
  <div className="languages-section">
    <h1 className="section-header">{ languageSectionHeader }</h1>
    <Divider />
    <Languages
      languages={languages}
    />
  </div>
);

export default LanguageSection;
