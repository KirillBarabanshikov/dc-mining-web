import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/shared/ui';
import DownloadIcon from '@/shared/assets/icons/download.svg?react';
import { ILink } from '../../model';
import styles from './LinkCard.module.scss';

interface ILinkCardProps {
    link: ILink;
}

export const LinkCard: FC<ILinkCardProps> = ({ link }) => {
    const navigate = useNavigate();

    return (
        <article className={styles.card}>
            <div className={styles.imgArea}>
                <img src={link.media} alt={link.title} />
            </div>
            <div className={styles.body}>
                <h5 className={styles.title}>{link.title}</h5>
                <ul className={styles.info}>
                    {link.information.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
                <div className={styles.buttons}>
                    <Button size={'sm'} isWide onClick={() => navigate(`/links/${link.id}/${link.slug}`)}>
                        Подробнее
                    </Button>
                    <Button size={'sm'} variant={'outline'} isWide>
                        Скачать
                        <DownloadIcon />
                    </Button>
                </div>
            </div>
        </article>
    );
};
