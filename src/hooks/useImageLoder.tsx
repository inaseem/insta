import React from 'react';

const useImageLoader = (src: string) => {
  const [status, setStatus] = React.useState<'loading' | 'loaded' | 'error'>(
    'loading'
  );

  React.useEffect(() => {
    const img = new Image();
    img.src = src;
    setStatus('loading');

    img.onload = () => {
      setStatus('loaded');
    };

    img.onerror = () => {
      setStatus('error');
    };

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return status;
};

export default useImageLoader;
