const fs = require('fs')
const chalk = require('chalk')

//Ubah Disini
global.ownerNumber = ['6285774449597']
global.ownerName = 'Hans'
global.packname = 'NTP BOT'
global.author = 'Ferlito | 62 858 592 021 62' //Ilangin Prefix Yang '' Kalau Gamau No Prefix
global.sessionName = 'sesi'
global.footerbot = 'NC BOT 2022'

//Message Nya Ubah Disini
global.mess = {
admin: 'You Are Not Admin!',
botAdmin: 'Bot Not Admin!',
botOwner: 'You Are Not My Owner!',
group: 'Only Group!',
private: 'Only Private Chat',
wait: 'Loading...',
done: 'Done!'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
