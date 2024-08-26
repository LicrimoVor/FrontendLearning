// import { FC, memo } from 'react';

// import { CodeSandboxProvider, useCodeSandboxContext } from '@/shared/lib/components/CodeSandbox';
// import { useTheme } from '@/shared/lib/hooks/useTheme';
// import { SandpackFiles, SandpackTemplate } from '../../model/types/sandbox';
// import { CodeJsRunner } from '../CodeJsRunner/CodeJsRunner';
// import { CodeSandboxProps } from '../../model/types/props';
// import { ThemeAppInSandbox } from '../../model/const/themes';
// import { CodePyRunner } from '../../../CodeRunnerPy/ui/CodePyRunner/CodePyRunner';

// type CodeSandboxLoadingProps = CodeSandboxProps & {
//     template: SandpackTemplate | 'python',
//     files?: SandpackFiles,
// }

// export const CodeSandbox: FC <CodeSandboxLoadingProps> = memo((
//     props: CodeSandboxLoadingProps,
// ) => (

//     const { isLoading, library } = useCodeSandboxContext();
//     const { theme } = useTheme();

//     if (isLoading) {
//         return 'loading...';
//     }

//     if (template === 'python') {
//         return (
//             <CodePyRunner {...{ ...props, viewFiles: false }} />
//         );
//     }

//     return (
//         <CodeSandboxProvider>
//         <library.SandpackProvider
//             template={template}
//             theme={ThemeAppInSandbox[theme]}
//             files={files}
//         >
//             <CodeJsRunner {...props} />
//             </library.SandpackProvider>
//             </CodeSandboxProvider>
//     );

// ));
