import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PostContainer = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  background-color: ${({ theme }) => theme.card};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const PostTitle = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
`;

const PostDate = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text_secondary};
`;

const PostContent = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const PostLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const BlogPost = ({ id, title, date, content }) => {
  return (
    <PostContainer>
      <PostLink to={`/blog/${id}`}>
        <PostTitle>{title}</PostTitle>
      </PostLink>
      <PostDate>{date}</PostDate>
      <PostContent>{content}</PostContent>
    </PostContainer>
  );
};

export default BlogPost;
