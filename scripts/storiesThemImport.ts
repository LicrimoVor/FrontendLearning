import { Project } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.stories.ts');
project.addSourceFilesAtPaths('src/**/*.stories.tsx');

const files = project.getSourceFiles();

const isOldThemeImport = (value: string) => (
    value === '@/shared/lib/components/ThemeProvider'
);

files.forEach((someFile) => {
    const importDeclarations = someFile.getImportDeclarations();

    importDeclarations.forEach((importDeclaration) => {
        const value = importDeclaration.getModuleSpecifierValue();
        if (isOldThemeImport(value)) {
            importDeclaration.setModuleSpecifier(
                '@/shared/lib/context/ThemeContext',
            );
        }
    });
});

project.save();
