import React from 'react';
import Back from "../back/Back";
import Header from '../header/Header';
import Footer from '../footer/Footer';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 1200px;
  margin: auto;
`;

const Section = styled.section`
   width: 100%;
  margin: 20px 0;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
  background-color: #f0f0f0;
  transition: transform 0.3s ease; 

  &:hover {
    transform: scale(1.05); 
  }
`;


const SectionTitle = styled.h2`
  font-size: 2em;
  margin-bottom: 10px;
  color: #ff7e00;
  font-family: "Playfair Display", serif;
`;

const SectionContent = styled.div`
  font-size: 1.2em;
  line-height: 1.9;
  color: #666;
`;

const Article = styled.article`
  margin-bottom: 70px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.5em;
  margin-bottom: 5px;
  color: black;
  font-family: "Lora", serif;
`;

const ArticleContent = styled.p`
  font-size: 1em;
  color: #666;
`;

const UnderlinedText = styled.span`
  text-decoration: underline;
  color: red;
  cursor: pointer;
`;


// Sections
const Articles = () => {
    return (
        <>
         <Back title='News/Trends' />

  <Section>
    <SectionTitle>Articles</SectionTitle>
    <SectionContent>
      <Article>
        <ArticleTitle>Understanding AI Ethics</ArticleTitle>
        <ArticleContent>
        "Explore the ethical considerations in AI development and deployment, including issues related to bias, privacy, accountability, and the impact on employment and society as a whole."
        </ArticleContent>
      </Article>
      <Article>
        <ArticleTitle>The Future of Machine Learning</ArticleTitle>
        <ArticleContent>
        "Insights into the next generation of machine learning technologies, including advancements in deep learning, reinforcement learning, and natural language processing. Explore their potential applications across various industries and the challenges associated with their implementation and integration."
        </ArticleContent>
      </Article>
      <Article>
        <ArticleTitle>Technology</ArticleTitle>
        <ArticleContent>
        "Google's new quantum computer may help us understand how magnets work by combining two approaches to quantum computing into one device."
        </ArticleContent>
      </Article>
    </SectionContent>
  </Section>
  </>
  );
};

const News = () => (
  <Section>
    <SectionTitle>News</SectionTitle>
    <SectionContent>
      <Article>
        <ArticleTitle>OpenAI Releases New GPT Model</ArticleTitle>
        <ArticleContent>
        "The latest GPT model has been released, featuring improved capabilities such as enhanced natural language understanding, more accurate and context-aware responses, and a broader range of language support. This new version incorporates advanced machine learning techniques that allow it to generate more coherent and relevant text, making it better suited for tasks like conversational AI, content creation, and complex problem-solving. Additionally, the model has improved efficiency, requiring less computational power while delivering faster results, and includes built-in safety features to mitigate biases and ensure ethical usage."
        </ArticleContent>
      </Article>
      <Article>
        <ArticleTitle>AI in Healthcare: Recent Advancements</ArticleTitle>
        <ArticleContent>
"Discover how AI is transforming the healthcare industry with recent advancements, including improved diagnostic accuracy, personalized treatment plans, and predictive analytics for disease prevention. AI-driven tools are enhancing medical imaging, enabling earlier detection of conditions such as cancer, and facilitating the development of new drugs through accelerated research and simulations. Additionally, AI is improving patient care by optimizing hospital operations, reducing wait times, and enabling remote monitoring and telemedicine services."
        </ArticleContent>
      </Article>
    </SectionContent>
  </Section>
);

const Trending = () => (
  <Section>
    <SectionTitle>Trending</SectionTitle>
    <SectionContent>
      <Article>
        <ArticleTitle>Top 10 AI Innovations in 2024</ArticleTitle>
        <ArticleContent>
          A look at the top AI innovations that are making waves this year...
        </ArticleContent>
      </Article>
      <Article>
        <ArticleTitle>AI-Powered Robotics: The Next Frontier</ArticleTitle>
        <ArticleContent>
          How AI is driving the evolution of robotics and what to expect in the future...
        </ArticleContent>
      </Article>
    </SectionContent>
  </Section>
);

const Careers = () => (
  <Section>
    <SectionTitle>Careers</SectionTitle>
    <SectionContent>
    <Article>
    <ArticleTitle>Join Our AI Research Team</ArticleTitle>
    <ArticleContent>
      We are looking for talented Developers to join our AI research team.{' '}
      <UnderlinedText>Explore Open Positions...</UnderlinedText>
    </ArticleContent>
  </Article>
      <Article>
        <ArticleTitle>Opportunities in AI Development</ArticleTitle>
        <ArticleContent>
          Discover career opportunities in AI development and how you can contribute to cutting-edge projects...
        </ArticleContent>
      </Article>
    </SectionContent>
  </Section>
);

// Main Publication Component
const Publication = () => {
  return (
    <>
      <Header />
      <Container>
        <Articles />
        <News />
        <Trending />
        <Careers />
      </Container>
      <Footer />
    </>
  );
};

export default Publication;
