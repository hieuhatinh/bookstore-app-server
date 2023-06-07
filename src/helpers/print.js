import chalk from 'chalk'

class OutputType {
    static INFORMATION = 'information'
    static SUCCESS = 'success'
    static WARNING = 'warning'
    static ERROR = 'error'
}

function print(message, outputType) {
    switch (outputType) {
        case OutputType.INFORMATION:
            console.log(chalk.white(message))
            break
        case OutputType.SUCCESS:
            console.log(chalk.green(message))
            break
        case OutputType.WARNING:
            console.log(chalk.yellow(message))
            break
        case OutputType.ERROR:
            console.log(chalk.red(message))
            break
    }
}

export { OutputType, print }
