// Core
import React, { FC, Suspense } from 'react';

// Routes
import { Public } from './Public';
import { Private } from './Private';

// Bus

export const Routes: FC<{}> = () => {
  const isLoggedIn = false;

      return (
        <Suspense fallback={ <div>Spinner</div> }>
            {
              isLoggedIn
                  ? <Private />
                  : <Public />
            }
        </Suspense>
    );
  
}
