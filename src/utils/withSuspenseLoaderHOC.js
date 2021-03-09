import React, { Suspense } from 'react';

const withSuspenseLoaderHOC = (Component) => (props) => {
  const lazyLoadFallback = () => (<>Loading</>)

  return (
    <Suspense fallback={lazyLoadFallback()}>
      <Component {...props}/>
    </Suspense>
  )
}

export default withSuspenseLoaderHOC;