import { FC } from 'react';
import { useHero } from 'src/hooks';

interface Props {
  hasAlt?: boolean;
  id: number;
}

const ItemIcon: FC<Props> = ({ hasAlt = true, id }) => {
  const hero = useHero(id);

  if (!hero) return null;

  return (
    <img
      alt={hasAlt ? hero.displayName : ''}
      height={72}
      src={hero.imageSrc}
      width={128}
    />
  );
};

export default ItemIcon;
