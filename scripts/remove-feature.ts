import {
    JsxAttribute, Node, Project, SyntaxKind,
} from 'ts-morph';

const removeFeatureName = process.argv[2];
const featureState = process.argv[3];

if (!removeFeatureName) {
    throw new Error('Необходимо указать имя фичи');
}

if (!featureState) {
    throw new Error('Необходимо указать стояние фичи (on или off)');
}

if (featureState !== 'on' && featureState !== 'off') {
    throw new Error('Стояние фичи может быть on или off');
}

const project = new Project({});
const toggleFeatureFuncName = 'toggleFeatures';
const toggleFeatureCompName = 'ToggleFeatures';

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

function isToggleFunciton(node: Node) {
    let isToggleFeatures = false;
    node.forEachChild((child) => {
        if (child.isKind(SyntaxKind.Identifier) && child.getText() === toggleFeatureFuncName) {
            isToggleFeatures = true;
        }
    });
    return isToggleFeatures;
}

function isToggleComponent(node: Node) {
    const identifier = node.getFirstDescendantByKind(SyntaxKind.Identifier);
    return identifier?.getText() === toggleFeatureCompName;
}

const replacedFuncFeature = (node: Node) => {
    const objectOptions = node.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression);
    if (objectOptions === undefined) {
        return;
    }

    const onFunctionProperty = objectOptions.getProperty('on');
    const offFunctionProperty = objectOptions.getProperty('off');
    const featureNameProperty = objectOptions.getProperty('name');

    const onFunction = onFunctionProperty
        ?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);
    const offFunction = offFunctionProperty
        ?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);
    const featureName = featureNameProperty
        ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
        ?.getText().slice(1, -1);
    if (removeFeatureName !== featureName) return;

    if (featureState === 'on') {
        node.replaceWithText(onFunction?.getBody().getText() ?? '');
    }
    if (featureName === 'off') {
        node.replaceWithText(offFunction?.getBody().getText() ?? '');
    }
};

const getAttributeNodeByName = (
    jsxAttributes: JsxAttribute[],
    name: string,
) => jsxAttributes.find((node) => node.getNameNode().getText() === name);

const getReplacedComponent = (attribute?: JsxAttribute) => {
    const value = attribute
        ?.getFirstDescendantByKind(SyntaxKind.JsxExpression)
        ?.getExpression()
        ?.getText();

    if (value?.startsWith('(')) {
        return value.slice(1, -1);
    }
    return value;
};

const replacedCompFeature = (node: Node) => {
    const attributes = node.getDescendantsOfKind(SyntaxKind.JsxAttribute);

    const onAttribute = getAttributeNodeByName(attributes, 'on');
    const offAttribute = getAttributeNodeByName(attributes, 'off');
    const featureAttribute = getAttributeNodeByName(attributes, 'feature');

    const featureName = featureAttribute
        ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
        ?.getText()
        .slice(1, -1);

    if (featureName !== removeFeatureName) return;

    const offValue = getReplacedComponent(offAttribute);

    const onValue = getReplacedComponent(onAttribute);

    if (featureState === 'on' && onValue) {
        node.replaceWithText(onValue);
    }
    if (featureState === 'off' && offValue) {
        node.replaceWithText(offValue);
    }
};

files.forEach((someFile) => {
    someFile.forEachDescendant((node) => {
        if (node.isKind(SyntaxKind.CallExpression) && isToggleFunciton(node)) {
            replacedFuncFeature(node);
        }

        if (node.isKind(SyntaxKind.JsxSelfClosingElement) && isToggleComponent(node)) {
            replacedCompFeature(node);
        }
    });
});

project.save();
