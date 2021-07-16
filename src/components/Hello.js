import React, { useState } from 'react';
import styled from 'styled-components';
import { Typewriter } from 'react-simple-typewriter';
import Zoom from 'react-reveal/Zoom';
import foto from '../assets/images/ASDDD.png';
import './box.css';
import PText from './Ptext';
import gif from '../assets/images/marah.gif';

const HeroStyles = styled.div`
  .container {
    width: 150%;
    display: absolute;
    position: relative;
    justify-content: center;
    align-items: center;
  }
  .Kotak {
    transform-style: preserve-3d;
    min-height: 5vh;
    margin-top: 7%;
    width: 400px auto;
    border-radius: 35px;
    background-color: #1e1e1e;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
  }
  .foto {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    position: relative;
  }

  .foto img {
    width: 60rem;
    z-index: 2;
    transition: all 0.75s ease;
    padding-left: 10rem;
    position: relative;
  }
  .lingkaran {
    width: 20rem;
    height: 20rem;
    background: linear-gradient(
      to right,
      rgba(245, 70, 66, 0.75),
      rgba(8, 83, 156, 0.75)
    );
    position: absolute;
    border-radius: 50%;
    z-index: 1;
  }

  .heading {
    text-align: center;
  }

  .after {
    text-align: center;
    position: absolute;
    font-size: 20px;
    top: 50%;
    left: 0;
    right: 0;
    transform: translate(-50%, -50%);
    align-items: center;
  }
  .butoon1 {
    text-align: center;
    position: absolute;
    font-size: 20px;
    top: 50%;
    left: 50%;
    right: 0;
    transform: translate(-50%, -50%);
    align-items: center;
  }

  button {
    background: transparent;
    border: none !important;
  }
  .gif {
    width: 320px;
    height: 270px;
  }
`;

export default function Hello() {
  const [isShown, setIsShown] = useState(false);

  return (
    <HeroStyles>
      <Zoom>
        <div className="container">
          <div className="Kotak">
            <h1 className="heading">
              <span> this is hello </span>
              <h2>
                stay{' '}
                <span>
                  <Typewriter
                    loop={0}
                    cursor
                    cursorStyle="_"
                    delaySpeed={3000}
                    words={['Positive', 'Negative']}
                  />
                </span>{' '}
                <span>
                  <Typewriter
                    loop={1}
                    cursor
                    cursorStyle="_"
                    delaySpeed={3000}
                    words={['Kawan']}
                  />
                </span>
              </h2>
            </h1>
            <Zoom delay={500}>
              <div className="foto">
                waymo
                <div className="lingkaran" />
                <button
                  type="button"
                  onClick={() => {
                    setIsShown(true);
                  }}
                >
                  <img src={foto} alt="" />
                </button>
                Guna Dharma
              </div>
            </Zoom>

            {isShown && (
              <Zoom opposite>
                <div className="after">
                  <PText>I'll appear when you acidently click me.</PText>
                  <PText>HOW DARE YOU!!!</PText>
                  <img className="gif" src={gif} alt="" />
                </div>
              </Zoom>
            )}
          </div>
        </div>
      </Zoom>
    </HeroStyles>
  );
}
