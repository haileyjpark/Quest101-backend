import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { Button } from '../../../../../share/Button';
import { Icon } from '../../../../../share/Icon';
import MediaUpLoadBox from './MediaUpLoadBox';

import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';

const CoverMedias = ({ detail_media, register, setCoverMediaImages }) => {
  const [coverMediaArray, setCoverMediaArray] = useState(
    detail_media?.length >= 3
      ? detail_media.map((_, i) => `${i}`)
      : ['0', '1', '2']
  );

  const handleAddCoverMedia = () => {
    setCoverMediaArray(prev => {
      const newArray = [...prev];
      newArray.push('' + (Number(prev[prev.length - 1]) + 1));
      return newArray;
    });
  };

  const handleDragEnd = ({ draggableId, destination, source }) => {
    if (!destination) return;
    setCoverMediaArray(prev => {
      const newCoverMediaArray = [...prev];
      newCoverMediaArray.splice(source.index, 1);
      newCoverMediaArray.splice(destination?.index, 0, draggableId);
      return newCoverMediaArray;
    });
  };

  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        <CoverMediaContainer>
          <Droppable droppableId="first">
            {provided => (
              <CoverUpLoadList
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {coverMediaArray?.map((id, index) => (
                  <Draggable draggableId={id} index={index} key={id}>
                    {provided => (
                      <CoverUpLoadItem
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        key={id}
                      >
                        <MediaUpLoadBox
                          coverMedia={detail_media && detail_media[index]}
                          register={register}
                          index={index}
                          setCoverMediaImages={setCoverMediaImages}
                        />
                      </CoverUpLoadItem>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </CoverUpLoadList>
            )}
          </Droppable>
        </CoverMediaContainer>
      </DragDropContext>
      <Button
        color="black"
        bgColor="lightGray"
        fullwidth
        onClick={handleAddCoverMedia}
        type="button"
      >
        <Icon iconName={AiOutlinePlus} size={12} margin="0 4px 0 0" />
        커버 추가하기
      </Button>
    </>
  );
};
export default CoverMedias;

const CoverMediaContainer = styled.div`
  margin-bottom: 24px;
`;

const CoverUpLoadItem = styled.li`
  margin-bottom: 20px;
`;

const CoverUpLoadList = styled.ul``;

const Input = styled.input`
  width: 100px;
  height: 100px;
  background-color: black;
`;

const BoxContainer = styled.div`
  padding: 20px;
  background-color: yellow;
`;
