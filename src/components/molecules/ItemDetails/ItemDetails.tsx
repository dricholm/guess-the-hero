import Image from 'next/image';
import { FC } from 'react';
import ItemIcon from 'src/components/atoms/ItemIcon/ItemIcon';
import TextBox from 'src/components/atoms/TextBox/TextBox';
import useItem from 'src/hooks/useItem';
import styles from './ItemDetails.module.scss';

const formatDescription = (description: string): string =>
  description
    .replace(/\b(\d+)\b/g, '<strong>$&</strong>')
    .replace(/\n/g, '<br />');

interface ItemDetailsProps {
  id: number;
}

const ItemDetails: FC<ItemDetailsProps> = ({ id }) => {
  const item = useItem(id);

  if (!item) return null;

  const attributes = item.attributes.filter((attribute) => attribute.display);

  const hasBody =
    attributes.length ||
    Boolean(item.abilities.length) ||
    item.note ||
    item.lore;

  return (
    <section className={styles.container}>
      <header className={styles.top}>
        <div className={styles.image}>
          <ItemIcon id={id} />
        </div>
        <div>
          <h3 className={styles.name}>{item.displayName}</h3>
          {Boolean(item.cost && item.cost > 0) && (
            <div className={styles.cost}>
              <Image alt="Cost" height={17} src="/img/gold.png" width={26} />
              {item.cost}
            </div>
          )}
        </div>
      </header>
      {hasBody && (
        <div className={styles.body}>
          {attributes.length > 0 && (
            <ul className={styles.attributes}>
              {attributes.map((attribute) => (
                <li key={attribute.key}>
                  <span className={styles['attribute-value']}>
                    {attribute.display?.replace('{value}', attribute.value)}
                  </span>
                </li>
              ))}
            </ul>
          )}
          {item.abilities.map((ability) => (
            <TextBox key={ability.title} variant="primary">
              <p className={styles['ability-top']}>
                {ability.type.substring(0, 1).toUpperCase()}
                {ability.type.substring(1)}: {ability.title}
              </p>
              <p className={styles.paragraph}>{ability.description}</p>
            </TextBox>
          ))}
          {item.note && (
            <TextBox>
              <p
                className={styles.paragraph}
                dangerouslySetInnerHTML={{
                  __html: formatDescription(item.note),
                }}
              />
            </TextBox>
          )}
          {item.lore && (
            <TextBox>
              <p
                className={styles.paragraph}
                dangerouslySetInnerHTML={{
                  __html: formatDescription(item.lore),
                }}
              />
            </TextBox>
          )}
        </div>
      )}
    </section>
  );
};

export default ItemDetails;
