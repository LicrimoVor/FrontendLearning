import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Text } from '@/shared/ui/redesigned/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { UiDesignedSwitcher } from '@/features/Switcher/UiDesignedSwitcher';
import { Page } from '@/widgets/Page';

/** Страница с настройками */
const SettingsPage: FC = () => {
    const { t } = useTranslation();

    return (
        <Page>
            <VStack max gap={16} align="center">
                <Text
                    title={t('Settings')}
                />
                <UiDesignedSwitcher />
            </VStack>
        </Page>
    );
};

export default memo(SettingsPage);
