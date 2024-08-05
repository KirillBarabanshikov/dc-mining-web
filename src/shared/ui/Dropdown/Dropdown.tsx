import { FC, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import clsx from 'clsx';
import { Checkbox, Radio } from '@/shared/ui';
import ArrowIcon from '@/shared/assets/icons/arrow-down2.svg?react';
import styles from './Dropdown.module.scss';

interface IDropdownItem {
    value: string;
    label: string;
}

interface IDropdownProps {
    items: IDropdownItem[];
    defaultValue: string;
    multiply?: boolean;
    label?: string;
    open?: boolean;
    physical?: boolean;
    className?: string;
}

export const Dropdown: FC<IDropdownProps> = ({
    items,
    defaultValue,
    multiply = false,
    label = '',
    open = false,
    physical = false,
    className,
}) => {
    const [selectedValue, setSelectedValue] = useState<string[]>([defaultValue]);
    const [isOpen, setIsOpen] = useState(open);

    const handleSelect = (value: string) => {
        if (multiply) {
            if (selectedValue.includes(value)) {
                setSelectedValue(selectedValue.filter((val) => val !== value));
            } else {
                setSelectedValue([...selectedValue, value]);
            }
        } else {
            setSelectedValue([value]);
            setIsOpen(false);
        }
    };

    return (
        <div className={clsx(styles.dropdown, physical && styles.physical, className)}>
            <div className={styles.head} onClick={() => setIsOpen(!isOpen)}>
                <span className={styles.label}>
                    {label ? label : items.find((item) => item.value === selectedValue[0])?.label}
                </span>
                <motion.div
                    initial={false}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ damping: 0 }}
                    className={styles.icon}
                >
                    <ArrowIcon />
                </motion.div>
            </div>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className={styles.list}
                    >
                        <div className={styles.itemsWrap}>
                            {items.map((item) => {
                                return (
                                    <div key={item.value} onClick={() => handleSelect(item.value)}>
                                        {multiply ? (
                                            <Checkbox
                                                label={item.label}
                                                checkboxSize={'sm'}
                                                className={clsx(
                                                    styles.item,
                                                    selectedValue.includes(item.value) && styles.selected,
                                                )}
                                                isChecked={selectedValue.includes(item.value)}
                                                disabled
                                            />
                                        ) : (
                                            <Radio
                                                label={item.label}
                                                radioSize={'sm'}
                                                className={clsx(
                                                    styles.item,
                                                    selectedValue.includes(item.value) && styles.selected,
                                                )}
                                                isChecked={selectedValue.includes(item.value)}
                                                disabled
                                            />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
