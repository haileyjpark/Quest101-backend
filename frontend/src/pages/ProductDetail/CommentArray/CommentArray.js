import React from 'react';
import styled from 'styled-components';

import { HiOutlineTrash } from 'react-icons/hi';

const CommentArrayContainer = props => {
  const { commentArray, onRemoveComment } = props;

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const commentDateValue = year + '. ' + month + '. ' + date;

  return (
    <ul>
      {commentArray.length > 0 &&
        commentArray.map(user => {
          return (
            <CommentContainer key={user.id}>
              <CommentWrap>
                <CommentUserProfile />
                <div>
                  <CommentUser>{user.name}</CommentUser>
                  <CommentDate>{commentDateValue}</CommentDate>
                </div>
                <Comment>{user.content}</Comment>
              </CommentWrap>
              <RemoveComment onClick={() => onRemoveComment(user.id)} />
            </CommentContainer>
          );
        })}
    </ul>
  );
};

const CommentContainer = styled.li`
  ${props => props.theme.flex('row', 'center', 'space-between')};
  padding: 10px 0;
`;

const CommentUserProfile = styled.img.attrs({
  src: 'https://images.pexels.com/photos/631477/pexels-photo-631477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: '프로필사진',
})`
  width: 38px;
  height: 38px;
  margin-right: 10px;
  border-radius: 19px;
`;

const CommentWrap = styled.div`
  ${props => props.theme.flex('row', 'center', 'center')};
`;

const CommentUser = styled.p`
  font-size: ${props => props.theme.fontMicro};
  font-weight: ${props => props.theme.weightBold};
`;

const CommentDate = styled.p`
  margin-top: 4px;
  color: ${props => props.theme.mediumGray};
  font-size: 10px;
`;

const Comment = styled.p`
  margin-left: 10px;
  font-size: ${props => props.theme.fontRegular};
`;

const RemoveComment = styled(HiOutlineTrash)`
  color: ${props => props.theme.mediumGray};
  font-size: ${props => props.theme.fontSemiMedium};
  cursor: pointer;
`;

export default CommentArrayContainer;
