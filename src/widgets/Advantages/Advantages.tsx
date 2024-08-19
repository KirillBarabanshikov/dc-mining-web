import { FC, useState } from 'react';
import clsx from 'clsx';
import { BASE_URL, MAX_WIDTH_MD } from '@/shared/consts';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './Advantages.module.scss';
import { useMediaQuery } from '@/shared/lib';

interface IAdvantagesProps {
    advantages?: IAdvantageItem[];
}

export const Advantages: FC<IAdvantagesProps> = ({ advantages }) => {
    return (
        <div className={clsx(styles.advantages, advantages && styles['data-center'])}>
            <div className={clsx(styles.advantagesContainer, 'container-wide')}>
                {advantages &&
                    advantages.map((advantage) => {
                        return (
                            <AdvantageItem
                                key={advantage.id}
                                id={advantage.id}
                                description={advantage.description}
                                image={advantage.image}
                                title={advantage.title}
                            />
                        );
                    })}
            </div>
        </div>
    );
};

interface IAdvantageItem {
    id: number;
    description: string;
    image: string;
    title: string;
}

const AdvantageItem: FC<IAdvantageItem> = (advantage) => {
    const [isHovered, setIsHovered] = useState(false);
    const matches = useMediaQuery(MAX_WIDTH_MD);

    return (
        <div className={styles.item}>
            <motion.div
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                className={styles.image}
            >
                <img src={BASE_URL + advantage.image} alt={advantage.title} />
            </motion.div>
            <AnimatePresence initial={false}>
                {(isHovered || matches) && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                    >
                        <div className={styles.body}>
                            <p className={styles.title}>{advantage.title}</p>
                            <p className={styles.desc} dangerouslySetInnerHTML={{ __html: advantage.description }} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
