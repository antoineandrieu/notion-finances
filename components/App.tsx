import React, { FC, useEffect, useState } from 'react';
import { OnboardingContext } from '../contexts/OnboardingContext';
import Banks from './Banks';

const App = () => {
  const [step, setStep] = useState('');
  const [lastStep, setLastStep] = useState('');

  useEffect(() => {
    setStep('banks');
  }, []);

  const render = () => {
    switch (step) {
      case 'banks':
        return <Banks />;
      default:
        return null;
    }
  };
  return <div>{render()}</div>;
};

export default App;
