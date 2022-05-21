import React from 'react';

import ClassInfoForm from './ClassForm/ClassInfoForm';
import { CLASS_FORM_DATA } from '../Collapsible/CollapsibleData';
import { useLocation } from 'react-router-dom';

const CreatorEditSection = () => {
  const {
    state: { projectData },
  } = useLocation();

  return (
    <>
      {CLASS_FORM_DATA.map(collapsibleData => (
        <ClassInfoForm
          key={collapsibleData.id}
          collapsibleData={collapsibleData}
          projectData={projectData}
        />
      ))}
    </>
  );
};

export default CreatorEditSection;
