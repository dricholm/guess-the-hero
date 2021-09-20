import { FC } from 'react';
import { useHero } from 'src/hooks';

interface Props {
  id: number;
}

const ItemIcon: FC<Props> = ({ id }) => {
  const hero = useHero(id);

  if (!hero) return null;

  return (
    <img alt={hero.displayName} height={72} src={hero.imageSrc} width={128} />
  );
};

export default ItemIcon;
