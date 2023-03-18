import clsx from 'clsx';
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

  const hasBody =
    item.attributes.length ||
    Boolean(item.abilities?.length) ||
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
          {item.attributes.length > 0 && (
            <ul className={styles.attributes}>
              {item.attributes.map((attribute) => (
                <li key={attribute.key}>
                  <span
                    className={clsx({
                      [styles.negative]: attribute.header.startsWith('-'),
                    })}
                  >
                    {attribute.header}
                  </span>
                  <span className={styles['attribute-value']}>
                    {typeof attribute.value === 'string'
                      ? attribute.value
                      : attribute.value.join(' / ')}
                  </span>
                  &nbsp;
                  <span>{attribute.footer}</span>
                </li>
              ))}
            </ul>
          )}
          {item.abilities?.map((ability) => (
            <TextBox key={ability} variant="primary">
              <p
                className={styles.paragraph}
                dangerouslySetInnerHTML={{ __html: formatDescription(ability) }}
              />
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
