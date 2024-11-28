import React, { lazy, Suspense, useState } from "react";
const LazyComponent = lazy(() => import("../components/Heavycomponent"));

function DynamicImport() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <h1>DynamicImport</h1>;
      <button onClick={() => setIsVisible(!isVisible)}>click</button>
      {isVisible && (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent />
        </Suspense>
      )}
    </>
  );
};

export default DynamicImport;