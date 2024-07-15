import {
    FC, memo, useEffect, useRef,
} from 'react';
import { useInitialEffect } from '../../hooks/useInitialEffect';

interface VariantProps {
    title?: string,
    description: string
    useGetMeta?: undefined
}

interface FunctionProps {
    description?: undefined,
    useGetMeta: () => VariantProps
}
const defaultGetMeta = () => ({ description: '', title: '' });

type MetaDataProps = VariantProps | FunctionProps;

/** Устанавливает meta-data значения */
export const MetaData: FC<MetaDataProps> = memo((props: MetaDataProps) => {
    const {
        useGetMeta = defaultGetMeta,
    } = props;
    const refDescription = useRef<HTMLMetaElement>();
    const refTitle = useRef<HTMLTitleElement>();
    const data = useGetMeta();

    useInitialEffect(() => {
        const metaDescription = document.documentElement.querySelector<HTMLMetaElement>('meta[name=description]');
        const metaTitle = document.documentElement.querySelector<HTMLTitleElement>('title');

        if (metaDescription && metaTitle) {
            refDescription.current = metaDescription;
            refTitle.current = metaTitle;
        } else {
            throw new Error('Not founst meta-data');
        }
    });

    useEffect(() => {
        if (!refDescription.current || !refTitle.current) {
            return;
        }
        let description: string;
        let title: string | undefined;

        if (props.description !== undefined) {
            description = props.description;
            title = props.title;
        } else {
            const { description: _description, title: _title } = data;
            description = _description;
            title = _title;
        }

        refDescription.current.content = description;
        if (title) refTitle.current.textContent = title;
    }, [props, data]);

    return null;
});
