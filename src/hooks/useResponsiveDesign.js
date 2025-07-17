import { useEffect, useState } from 'react';

const useResponsiveDesign = () => {
  const [deviceType, setDeviceType] = useState('desktop');
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setDimensions({ width, height });
      
      if (width <= 768) {
        setDeviceType('mobile');
      } else if (width <= 1024) {
        setDeviceType('tablet');
      } else {
        setDeviceType('desktop');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getPdfOptimizedStyles = () => {
    switch (deviceType) {
      case 'mobile':
        return {
          fontSize: '2rem',
          padding: '0.5rem',
          lineHeight: '1.2',
        };
      case 'tablet':
        return {
          fontSize: '3rem',
          padding: '1rem',
          lineHeight: '1.2',
        };
      case 'desktop':
      default:
        return {
          fontSize: '4rem',
          padding: '1rem',
          lineHeight: '1.2',
        };
    }
  };

  return {
    deviceType,
    dimensions,
    getPdfOptimizedStyles,
  };
};

export default useResponsiveDesign;
