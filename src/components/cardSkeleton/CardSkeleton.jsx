import Skeleton from 'react-loading-skeleton';

const CardSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((_, i) => {
      return <Skeleton key={i} height={240} />;
    });
};
export default CardSkeleton;
