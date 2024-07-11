import React from 'react';
import Back from "../common/back/Back";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import styled, { keyframes } from 'styled-components';
import "./blog.css";

// Keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 1200px;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #ff7e00;
  font-family: "Playfair Display", serif;
`;

const Section = styled.section`
  width: 100%;
  margin: 20px 0;
  padding: 20px;
  border-radius: 10px;
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
   color: black;
  font-family: "Nunito", sans-serif
`;

const SectionContent = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  color: #666;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const GridItem = styled.div`
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  animation: ${fadeIn} 0.5s ease-in-out;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
`;

const Icon = styled.div`
  margin-bottom: 10px;
  img {
    width: 70px;
    height: 70px;
  }
`;

const TitleGrid = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
   color: black;
  font-family: "Lora", serif;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #6c757d;
`;

const Arrow = styled.div`
  font-size: 1.5rem;
  margin-top: auto;
  color: #007bff;
  transition: transform 0.3s;

  ${GridItem}:hover & {
    transform: translateX(5px);
  }
`;

// Product and Services Component
const ProductAndServices = () => {
  return (
    <Container>
      <Title>Our Services</Title>

      <Section>
        <SectionTitle>Product Design & Development </SectionTitle>
        <SectionContent>
        Adain Technologies is an innovative medium of translating product ideas from its
conceptual form into a developmental reality which require a perfect
understanding of the product, consumers, market and technology.
Each stage of product design and development (Physical or digital) requires experts
with clear cut industrial experience and the desire to satisfy clients
The Adain team of product designers and developers are experts and seasoned
professionals carefully selected on the ground of innovation and outstanding
excellence.
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle>Research & Development</SectionTitle>
        <SectionContent>
        Our Research priority is centered on deploying scientific methodological
procedures through the adoption of modern techniques for investigating social-
technological problems.
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle>Consultancy</SectionTitle>
        <SectionContent>
        Our Service Model leverage on core industrial experience to deliver state of the art product quality to client by understanding the strategic objectives and working constraints of each organization, across commercial operation, finance, fashion,
AgroTech, health Tech, AutoFix and information communication Technology. We
help to refocus priorities and re-strategizing investment with need.
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle>Data Science</SectionTitle>
        <SectionContent>
        Data science is an interdisciplinary academic field that uses statistics, scientific computing, scientific methods, processes, scientific visualization, algorithms and systems to extract or extrapolate knowledge and insights from potentially noisy, structured, or unstructured data
        </SectionContent>
      </Section>
    </Container>
  );
};

// Main Blog Component
const Blog = () => {
  return (
    <>
      <Header />
      <Back title='Our Products' />
      <ProductAndServices />
      
      <GridContainer>
      <Title>Our Product</Title>
        <GridItem>
          <Icon><img src="./images/Adnet.PNG" alt="AdaIn Technology" /></Icon>
          <TitleGrid>AdaIn Technology</TitleGrid>
          <Description>Adain Technologies Limited is an ICT based company with the potential of solving problems by bringing about solutions.We have great prospect and are very positive about the market now and in the future. With research showing that the ICT is the future, Adain is the future of ICT hence we are taking the advantage of ICT to the smallest market place......</Description>
          <Arrow>→</Arrow>
        </GridItem>
        <GridItem>
          <Icon><img src="./images/hack8.PNG" alt="Hacked8 Academy" /></Icon>
          <TitleGrid>Hacked8 Academy</TitleGrid>
          <Description>Our Educational program is aimed at aligning with individuals, cooperates bodies, government agencies, and institutions of learning to create productive awareness in commonly education under the umbrella of: SEMINAR and PERIODIC...............</Description>
          <Arrow>→</Arrow>
        </GridItem>
        <GridItem>
          <Icon><img src="./images/3.png" alt="QuickMed" /></Icon>
          <TitleGrid>QuickMed</TitleGrid>
          <Description>The Objective of the EMS is to reach those in need of urgent medical care in order to satifactorily treat the presenting conditions, from the scence of the incidents to the point of definite care most likely an Emergency Department of a hospital............... </Description>
          <Arrow>→</Arrow>
        </GridItem>
        <GridItem>
          <Icon><img src="./images/blog/geez.png" alt="Geez" /></Icon>
          <TitleGrid>Geez Fashion</TitleGrid>
          <Description>This is a Product designed to meet the unmet demands that will see to solving the many problems experienced over the Years by Fashion designers and innovetively improving the use of technological resources in Fashion Design.........</Description>
          <Arrow>→</Arrow>
        </GridItem>
      
      </GridContainer>

      <Footer />
    </>
  );
}

export default Blog;
