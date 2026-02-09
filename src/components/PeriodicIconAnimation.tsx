import { useState, useRef, useEffect } from 'react';

type Corner = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

// Array of all possible corners (defined outside component so it's stable)
const corners: Corner[] = [
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
];

// Function to pick a random corner (defined outside component to avoid dependency issues)
const getRandomCorner = (): Corner => {
  const randomIndex = Math.floor(Math.random() * corners.length);
  return corners[randomIndex];
};

const PeriodicIconAnimation = () => {
  // useRef: Store the timer ID (doesn't cause re-renders)
  // This is the "silent" storage - changing it won't trigger a re-render
  // Think of it like a "pocket" that persists between renders but doesn't wake React up
  const timerRef = useRef<number | null>(null);

  // useState: Trigger the animation (causes re-render when changed)
  // This is the "loud" trigger - changing it makes React update the UI
  const [showAnimation, setShowAnimation] = useState(false);

  // useState: Store which corner to show the icon at
  // We use state here because changing the corner needs to update the UI
  const [corner, setCorner] = useState<Corner>('bottom-right');

  useEffect(() => {
    // Function to start a new timer cycle
    const startTimer = () => {
      // Clear any existing timer first (cleanup)
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      // Start a new timer and save its ID in the ref
      // The timer ID is stored in timerRef.current (silent, no re-render)
      // This is the KEY: timerRef.current = someValue does NOT cause React to re-render
      timerRef.current = setTimeout(() => {
        // Pick a random corner BEFORE showing the animation
        // We update state here, which WILL cause a re-render (that's what we want!)
        setCorner(getRandomCorner());

        // When timer finishes, trigger the animation (loud, causes re-render)
        setShowAnimation(true);

        // After showing for 1.5 seconds, fade it out
        setTimeout(() => {
          setShowAnimation(false);

          // After fade out completes, start the next timer cycle
          startTimer();
        }, 1500);
      }, 30000); // 5 seconds for testing (change to 60000 for 60 seconds)
    };

    // Start the first timer when component mounts
    startTimer();

    // Cleanup: Clear the timer when component unmounts
    // This prevents memory leaks if user navigates away
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array - only run on mount
  // getRandomCorner is a pure function defined outside component, so it's stable

  // Calculate CSS styles based on the selected corner
  const getCornerStyles = () => {
    switch (corner) {
      case 'top-left':
        return { top: '2rem', left: '2rem', right: 'auto', bottom: 'auto' };
      case 'top-right':
        return { top: '2rem', right: '2rem', left: 'auto', bottom: 'auto' };
      case 'bottom-left':
        return { bottom: '2rem', left: '2rem', right: 'auto', top: 'auto' };
      case 'bottom-right':
        return { bottom: '2rem', right: '2rem', left: 'auto', top: 'auto' };
    }
  };

  return (
    <div
      className="fixed z-50 pointer-events-none"
      style={{
        ...getCornerStyles(),
        opacity: showAnimation ? 1 : 0,
        transform: showAnimation ? 'scale(1)' : 'scale(0.8)',
        transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
      }}
    >
      <img
        src="/images/coding icon.png"
        alt="Coding icon"
        className="w-20 h-20"
        style={{ width: '80px', height: '80px' }}
      />
    </div>
  );
};

export default PeriodicIconAnimation;
