import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import client from '../client';
import MashupForm from './MashupForm';
import Gameover from './Gameover';
import ExitAnimation from './Animations/ExitAnimation';
import styled from 'styled-components';
import urlParams from '../Utils/QueryParams';
import { preloadImages } from '../Utils/images';

const Container = styled.div`
  min-height: 520px;
  width: 100%;
`;

export default function Game() {
  const [mashups, setMashups] = useState([]);
  const [currentMashupIndex, setCurrentMashupIndex] = useState(() => {
    return urlParams.getId() || 0;
  });
  const [mashupOptions, setMashupOptions] = useState([]);
  const [showGameOver, setShowGameOver] = useState(false);
  const currentMashUp = mashups[currentMashupIndex];
  const isGameover = Boolean(mashups.length && mashups.length === currentMashupIndex);

  const nextHandler = () => {
    setCurrentMashupIndex((prevState) => {
      const newIndex = prevState + 1;
      urlParams.setId(newIndex === mashups.length ? 0 : newIndex);
      return newIndex;
    });
  };

  const verifyAnswers = (answers) => {
    return answers.includes(currentMashUp.celebrityOneAnswer) && answers.includes(currentMashUp.celebrityTwoAnswer);
  };

  useEffect(() => {
    async function getMashUps() {
      const { data } = await client.get('/mashups');
      setMashups(data.mashups);
      setMashupOptions(data.celebrities);
      preloadImages(data.mashups.map((data) => data.photoUrls));
    }
    getMashUps();
  }, []);

  if (!mashups.length) {
    return <Container />;
  }

  return (
    <Container>
      <AnimatePresence onExitComplete={() => setShowGameOver(true)}>
        {!isGameover && (
          <ExitAnimation id="mashup-form">
            <MashupForm
              photo={mashups[currentMashupIndex]?.photoUrls}
              options={mashupOptions}
              onNext={nextHandler}
              verifyAnswers={verifyAnswers}
            />
          </ExitAnimation>
        )}
      </AnimatePresence>
      {showGameOver && <Gameover />}
    </Container>
  );
}
