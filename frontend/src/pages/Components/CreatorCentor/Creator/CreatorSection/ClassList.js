import React from 'react';
import ClassItem from './ClassItem';

const ClassList = ({ ClassListDatas, onDeleteClass }) => {
  return (
    <ul>
      {ClassListDatas?.map(projectData => (
        <ClassItem
          key={projectData.id}
          projectData={projectData}
          onDeleteClass={onDeleteClass}
        />
      ))}
    </ul>
  );
};

export default ClassList;
