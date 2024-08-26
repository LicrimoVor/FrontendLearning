import {
    memo, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';

import { useCodeSandboxContext } from '@/shared/lib/components/CodeSandbox';
import AddFileIcon from '@/shared/assets/icons/add_file.svg';
import EditIcon from '@/shared/assets/icons/edit.svg';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';

import cls from './CodeFileTabs.module.scss';

const EditPathFile = memo(() => {
    const { t } = useTranslation();
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [fileName, setFileName] = useState('/');
    const { library: { useSandpack } } = useCodeSandboxContext();
    const { sandpack } = useSandpack();

    const onOpenModal = useCallback(() => {
        setIsOpenModal(true);
        setFileName(sandpack.activeFile);
    }, [setIsOpenModal, sandpack]);

    const onCloseModal = useCallback(() => {
        setIsOpenModal(false);
    }, [setIsOpenModal]);

    const createFile = useCallback(() => {
        const { activeFile } = sandpack;
        const { code } = sandpack.files[activeFile];

        sandpack.deleteFile(activeFile);
        sandpack.addFile(fileName, code);
        sandpack.setActiveFile(fileName);
        onCloseModal();
    }, [sandpack, fileName, onCloseModal]);

    return (
        <>
            <Icon
                aria-labelledby="edit-file"
                Svg={EditIcon}
                clickable
                onClick={onOpenModal}
                size={20}
            />
            <Modal
                isOpen={isOpenModal}
                onClose={onCloseModal}
            >
                <Card>
                    <Input label={t('Path for edit file')} value={fileName} onChange={setFileName} />
                    <Button onClick={createFile}>{t('Edit')}</Button>
                </Card>
            </Modal>
        </>
    );
});

const ButtonAddFile = memo(() => {
    const { t } = useTranslation();
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [fileName, setFileName] = useState('/');
    const { library: { useSandpack } } = useCodeSandboxContext();
    const { sandpack } = useSandpack();

    const onOpenModal = useCallback(() => {
        setIsOpenModal(true);
        setFileName(`${sandpack.activeFile.split('/').slice(0, -1).join('/')}/`);
    }, [setIsOpenModal, sandpack]);

    const onCloseModal = useCallback(() => {
        setIsOpenModal(false);
    }, [setIsOpenModal]);

    const createFile = useCallback(() => {
        sandpack.addFile(fileName, '');
        onCloseModal();
    }, [sandpack, fileName, onCloseModal]);

    return (
        <>
            <Icon
                className={cls.IconAddFile}
                aria-labelledby="add-file"
                Svg={AddFileIcon}
                clickable
                onClick={onOpenModal}
                size={20}
            />
            <Modal
                isOpen={isOpenModal}
                onClose={onCloseModal}
            >
                <Card>
                    <Input label={t('Path for add file')} value={fileName} onChange={setFileName} />
                    <Button onClick={createFile}>{t('Create')}</Button>
                </Card>
            </Modal>
        </>
    );
});

export const CodeFileTabs = memo(() => {
    const { library: { FileTabs } } = useCodeSandboxContext();
    return (
        <HStack max justify="spaceBetween" className={cls.CodeFileTabs}>
            <FileTabs closableTabs className={cls.tabs} style={{ border: 'none' }} />
            <HStack gap={8} className={cls.buttonsFile}>
                <EditPathFile />
                <ButtonAddFile />
            </HStack>
        </HStack>
    );
});
