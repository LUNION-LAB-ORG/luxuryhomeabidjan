import { useInView } from 'react-intersection-observer';

interface InfiniteScrollContainerProps {
  children: React.ReactNode;
  onBottomReached: () => void;
  className?: string;
}

export default function InfiniteScrollContainer({ children, onBottomReached, className, }: InfiniteScrollContainerProps) {
  const { ref } = useInView({
    rootMargin: '50px',
    onChange(inView) {
      if (inView) {
        onBottomReached();
      }
    },
  });

  return (
    <ul className={className}>
      {children}
      <div ref={ref} />
    </ul>
  );
}