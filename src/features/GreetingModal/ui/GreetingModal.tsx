import {
    FC, memo, useEffect, useState,
} from 'react';
import { useTranslation } from 'react-i18next';

import { Modal } from '@/shared/ui/redesigned/Modal';
import { Text } from '@/shared/ui/deprecated/Text';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { useDevice } from '@/shared/lib/hooks/useDevice';
import { saveJsonSettings, useJsonSettings } from '@/entities/User';

/** Приветственная модалка */
export const GreetingModal: FC = memo(() => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const { isFirstVisit } = useJsonSettings();
    const dispatch = useAppDispatch();
    const isMobile = useDevice();

    useEffect(() => {
        if (isFirstVisit) {
            setIsOpen(true);
            dispatch(saveJsonSettings({ isFirstVisit: false }));
        }
    }, [setIsOpen, isFirstVisit, dispatch]);

    const text = (
        <Text
            title={t('Greetings!')}
            text={t('This are PET-project')}
        />
    );

    if (isMobile) {
        return <Drawer>{text}</Drawer>;
    }

    return (
        <Modal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            lazy
        >
            {text}
        </Modal>
    );
});
