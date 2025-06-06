import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('¡Tu extensión está activa!');

    let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
        vscode.window.showInformationMessage('Hola, mundo desde tu extensión!');
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
