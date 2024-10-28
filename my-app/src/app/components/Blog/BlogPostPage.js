import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter from Next.js
import styled from 'styled-components';
import Markdown from 'markdown-to-jsx';
import search from './search.md';
import knowledge from './knowledge.md';
import uncertainity from './uncertainity.md';
import optimization from './optimization.md';
import learning from './learning.md';
import neural_networks from './neural_networks.md';
import nlp from './nlp.md';


const blogPosts = [
  { id: '1', title: 'Dive into AI', content: search },
  { id: '2', title: 'Knowledge Representation in AI', content: knowledge },
  { id: '3', title: 'Uncertainity', content: uncertainity },
  { id: '4', title: 'Optimization', content: optimization },
  { id: '5', title: 'Learning', content: learning },
  { id: '6', title: 'Neural Networks', content: neural_networks },
  { id: '7', title: 'Natural Language Processing', content: nlp },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: linear-gradient(225deg, #800080 0%, #ff66b2 100%);;
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  background-color: #E3E8F4;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  margin-top: 20px;
  gap: 16px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Content = styled.div`
  font-size: 18px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 800px;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 16px;
  }

  p {
    margin: 20px 0;
  }

  h2 {
    color: #333;
    margin-top: 40px;
  }

  ul {
    margin: 20px 0;
    padding-left: 20px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
  }

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f2f2f2;
  }


`;

const BlogPostPage = () => {
  const { id } = useRouter();
  const [content, setContent] = useState('');
  const post = blogPosts.find(post => post.id === id);

  useEffect(() => {
    if (post && post.content) {
      fetch(post.content)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.text();
        })
        .then(data => setContent(data))
        .catch(error => {
          console.error('Error loading markdown file:', error);
          setContent('Error loading content.');
        });
    } else if (post) {
      setContent(post.content);
    }
  }, [post]);

  if (!post) {
    return (
      <Container>
        <Wrapper>
          <Title>Post not found</Title>
        </Wrapper>
      </Container>
    );
  }

  return (
    <Container>
      <Wrapper>
        <Title>{post.title}</Title>
        <Content>
          <Markdown>
            {content}
          </Markdown>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default BlogPostPage;
