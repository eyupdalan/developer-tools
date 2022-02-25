import { ChangeEvent } from 'react';

interface UriEncodeDecodeViewProps{
    title: string,
    input: string,
    inputTitle: string,
    result: string,
    selectedOperation: 'encode'|'decode',
    onChangeInput: (e: ChangeEvent<HTMLTextAreaElement>)=>void,
    onChangeOperation:(status: 'encode' | 'decode')=>void
}

// eslint-disable-next-line import/prefer-default-export
export type { UriEncodeDecodeViewProps };
