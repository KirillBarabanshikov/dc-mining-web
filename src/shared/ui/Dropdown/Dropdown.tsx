import { FC, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import clsx from 'clsx';
import { Checkbox, Modal, Radio } from '@/shared/ui';
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
    variant?: 'dropdown' | 'modal';
    className?: string;
}

// TODO
export const Dropdown: FC<IDropdownProps> = ({
    items,
    defaultValue,
    multiply = false,
    label = '',
    open = false,
    physical = false,
    variant = 'dropdown',
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
        <div className={clsx(styles.dropdown, isOpen && styles.isOpen, physical && styles.physical, className)}>
            <div className={styles.head} onClick={() => setIsOpen(!isOpen)}>
                <span className={styles.label}>
                    {label ? label : items.find((item) => item.value === selectedValue[0])?.label}
                </span>
                <motion.div
                    initial={false}
                    animate={{ rotate: isOpen && variant === 'dropdown' ? 180 : 0 }}
                    transition={{ damping: 0 }}
                    className={styles.icon}
                >
                    <ArrowIcon />
                </motion.div>
            </div>
            {variant === 'dropdown' && (
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
                                        <div
                                            key={item.value}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleSelect(item.value);
                                            }}
                                        >
                                            {multiply ? (
                                                <Checkbox
                                                    label={item.label}
                                                    className={clsx(
                                                        styles.item,
                                                        selectedValue.includes(item.value) && styles.selected,
                                                    )}
                                                    checked={selectedValue.includes(item.value)}
                                                    onChange={(e) => console.log(e)}
                                                />
                                            ) : (
                                                <Radio
                                                    label={item.label}
                                                    className={clsx(
                                                        styles.item,
                                                        selectedValue.includes(item.value) && styles.selected,
                                                    )}
                                                />
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            )}
            {variant === 'modal' && (
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} className={styles.modal}>
                    <div className={styles.list}>
                        <div className={styles.itemsWrap}>
                            {items.map((item) => {
                                return (
                                    <div
                                        key={item.value}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleSelect(item.value);
                                        }}
                                    >
                                        {multiply ? (
                                            <Checkbox
                                                label={item.label}
                                                className={clsx(
                                                    styles.item,
                                                    selectedValue.includes(item.value) && styles.selected,
                                                )}
                                                checked={selectedValue.includes(item.value)}
                                            />
                                        ) : (
                                            <Radio
                                                label={item.label}
                                                className={clsx(
                                                    styles.item,
                                                    selectedValue.includes(item.value) && styles.selected,
                                                )}
                                                checked={selectedValue.includes(item.value)}
                                            />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
};
