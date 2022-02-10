import React from 'react';

type OnboardingContextType = {
  goBack: () => void;
  goToBankList: () => void;
  goToUserAgeement: () => void;
  goToAccountList: () => void;
};

export const OnboardingContext = React.createContext<OnboardingContextType>({
  goBack: () => {},
  goToBankList: () => {},
  goToUserAgeement: () => {},
  goToAccountList: () => {},
});
