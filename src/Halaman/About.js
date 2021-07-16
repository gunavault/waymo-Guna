import React from 'react';
import styled from 'styled-components';
import PText from '../components/Ptext';
import AboutImg from '../assets/images/ca.jpg';
import '../app.css';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles className="page">
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hello Dude, I am <span>Guna Dharma</span>
              </p>
              <h2 className="about__heading">Anak Bunda</h2>
              <div className="about__info">
                <PText>
                  I from West Sumatra Province. its my comfort zone for now, its
                  have a good place to visit. my hobby is trying something new,
                  chalanger, and I enjoy watching movies.
                  <br /> <br />
                  I am the 1st of 3 siblings. I am a 2020 graduate from MAN 1
                  Payakumbuh which is a high school in one of my cities. And
                  then I continued my Diploma 4 education at the Pos Indonesia
                  Polytechnic Campus, majoring in Informatics Engineering.
                  <br />
                  <br />I always have a motto, "stay positive and negative"
                  because its gonna balance your life in pass and the feature,
                  and i like make new relations with new people and like to know
                  new personalities
                </PText>
              </div>
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
        </div>
      </AboutPageStyles>
    </>
  );
}
