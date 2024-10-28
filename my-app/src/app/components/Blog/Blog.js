import React from 'react';
import BlogCard from '../Cards/BlogCard';
import styled from 'styled-components';
// import Blog1Img from '../../images/blog-1.png';
// import Blog2Img from '../../images/blog-2.png';
// import Blog3Img from '../../images/blog-3.png';
// import Blog4Img from '../../images/blog-4.png';
// import Blog5Img from '../../images/blog-5.png';
// import Blog6Img from '../../images/blog-6.png';
// import Blog7Img from '../../images/blog-7.png';


const BlogListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    padding: 20px;
`;

const blogPosts = [
    {
        id: '1',
        title: 'Search',
        date: '2024-06-08',
        description: 'An overview of search algorithms and their role in solving complex problems efficiently.',
        image: Blog1Img,
        tags: ['Search Algorithms', 'DFS', 'BFS', 'Greedy Algorithm', 'A* Search', 'MiniMax']
    },
    {
        id: '2',
        title: 'Knowledge',
        date: '2024-06-22',
        description: 'Exploring how knowledge representation and inference drive intelligent decision-making in AI.',
        image: Blog2Img,
        tags: ['Propositional Logic', 'Entailment', 'Inference', 'Model Checking', 'Resolution', 'First Order Logic']
    },
    {
        id: '3',
        title: 'Uncertainity',
        date: '2024-06-29',
        description: 'Examining how uncertainty and partial knowledge influence optimal decision-making in AI.',
        image: Blog3Img,
        tags: [
            "Conditional Probability",
            "Random Variables",
            "Independence",
            "Joint Probability",
            "Bayesian Networks",
            "Sampling",
            "Markov Models",
        ]
    },
    {
        id: '4',
        title: 'Optimization',
        date: '2024-07-06',
        description: 'Exploring how optimization techniques and algorithms enhance decision-making in AI.',
        image: Blog4Img,
        tags: [
            "Local Search",
            "Hill Climbing",
            "Simulated Annealing",
            "Linear Programming",
            "Constraint Satisfaction",
            "Backtracking Search"
        ]
    },
    {
        id: '5',
        title: 'Learning',
        date: '2024-07-13',
        description: 'Investigating how machine learning and pattern recognition empower autonomous task execution in AI.',
        image: Blog5Img,
        tags: [
            "Supervised/Unsupervised Learning",
            "Nearest-Neighbor Classification",
            "Perceptron Learning",
            "SVM",
            "Regression",
            "Loss Functions",
            "Regularization",
            "Reinforcement",
            "Q-Learning",
            "k-means Clustering"
        ]
    },
    {
        id: '6',
        title: 'Neural Networks',
        date: '2024-07-20',
        description: 'Exploring how neural networks and training algorithms enable predictive capabilities in AI.',
        image: Blog6Img,
        tags: [
            "Artificial Neural Networks",
            "Activation Functions",
            "Gradient Descent",
            "Backpropagation",
            "Overfitting",
            "TensorFlow",
            "Image Convolution",
            "Convolutional Neural Networks",
            "Recurrent Neural Networks"
        ]
    },
    {
        id: '7',
        title: 'Natural Language Processing',
        date: '2024-07-27',
        description: 'Understanding how Natural Language Processing prepares artificial intelligence to understand and generate human language efficiently.',
        image: Blog7Img,
        tags: [
            "Syntax",
            "Semantics",
            "Context-Free Grammar",
            "nltk",
            "n-grams",
            "Bag-of-Words Model",
            "Naive Bayes",
            "Word Representation",
            "word2vec",
            "Attention",
            "Transformers"
        ]
    }
];

const BlogList = () => {
    const handleBlogClick = (blog) => {
        // Handle blog click (e.g., navigate to the blog post page)
        console.log(blog);
    };

    return (
        <BlogListContainer>
            {blogPosts.map((blog) => (
                <BlogCard key={blog.id} blog={blog} onClick={handleBlogClick} />
            ))}
        </BlogListContainer>
    );
};

export default BlogList;
