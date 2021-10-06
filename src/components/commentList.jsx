import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { Grid } from '../elements/index';
import CommentItem from './commentItem';
import { actionCreators as commentActions } from '../redux/modules/comment';

const CommentList = (props) => {
  const { post_id } = props;
  const dispatch = useDispatch();
  const comment_list = useSelector((state) => state.comment.list); //각각의 포스트 전체 댓글

  useEffect(() => {
    // 해당 id에 맞는 코멘트 가져오기
    if (!comment_list[post_id]) {
      dispatch(commentActions.getCommentFB(post_id));
    }
  }, []);

  if (!comment_list[post_id] || !post_id) {
    return null;
  }

  return (
    <List>
      <Grid is_flex>
        {comment_list[post_id].map((comment) => {
          return <CommentItem key={comment.post_id} {...comment} />;
        })}
      </Grid>
    </List>
  );
};

const List = styled.li`
  margin-top: 20px;
`;

export default CommentList;