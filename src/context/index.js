import React from 'react';
import {UserProvider} from './user';
import {FoodProvider} from './food';

export default ({children: topChildren}) => {
  const Providers = [UserProvider, FoodProvider];
  const Reduced = Providers.reduce(
    (AccumulatedComponents, CurrentComponent) => {
      return ({children}) => {
        return (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        );
      };
    },
    ({children}) => <>{children}</>,
  );
  return <Reduced children={topChildren} />;
};
