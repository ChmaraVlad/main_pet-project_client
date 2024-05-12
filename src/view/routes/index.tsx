// Core
import React, { FC, Suspense } from 'react';

// Routes
import { Public } from './Public';
import { Private } from './Private';

import useSelectorCustom from '../../hooks/useSelectorCustom';

// Bus

export const Routes: FC<{}> = () => {
  const isLoggedIn = useSelectorCustom(({auth}) => auth.user)

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
