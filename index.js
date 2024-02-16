// external modules
import inquirer from 'inquirer';
import chalk from 'chalk';

// internal modules
import fs from 'fs';

operation();

function operation() {
    inquirer.prompt([{
        type: 'list',
        name: 'action',
        message: 'O que voce deseja fazer?',
        choices: [
            'Criar Conta',
            'Consultar Saldo',
            'Depositar',
            'Sacar',
            'Sair'
        ]
    }])
    .then((answer) => {
        const action = answer['action'];
        console.log(action);
    })
    .catch((err) => console.log(err));
}

function createAccount() {
    console.log(chalk.bgGreen.black('Parabéns por escolher o nosso banco!'));
    console.log(chalk.green('Defina as opções da sua conta a seguir.'));
}