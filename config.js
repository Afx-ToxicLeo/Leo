

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '0e92565522',
}

// Other
global.owner = ['919497206865']
global.ownernomer = "919497206865"
global.premium = ['919497206865']
global.packname = 'ᴛᴏxɪᴄ ʟᴇᴏ'
global.author = 'Toxic Leo'
global.sessionName = 'ToxicLeo'  //jangan diganti bro nanti error
global.jumlha = '999'
global.jumhal = '100000000000000'
global.jumlah = '1000000000'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: '✅Done',
     admin: ' *Group Admin Special Feature* !',
     botAdmin: ' *Bot Must Be Admin First!* ',
     premime: ' *Premium Special Features If You Want to Register Type Rent* ',
     owner: ' *Owner Bot Special Features* ',
     group: ' *Feature Used For Group Only!* ',
     private: ' *Feature Used For Private Chat Only!* ',
     bot: ' *Bot Number User Only Feature* ',
     wait: ' *Loading...* ',
     errapi: ' *Error Maybe Invalid Apikey!* ',
     error: ' *System Error Error* ',
     endLimit: ' *Your Daily Limit Has Expired, Limit Will Reset Every 12 Hours* ',
}
global.limitawal = {
    premium: "Infinity",
    free: 25
}
global.thumb = fs.readFileSync('./media/image/ToxicLeo.jpg')
global.faall = fs.readFileSync('./media/image/Akash.jpg')
global.mygit = 'https://github.com/Afx-ToxicLeo'
global.myyt = 'https://is.gd/GrEQVH'
global.myytv = 'https://is.gd/GrEQVH'
global.mygc = "https://chat.whatsapp.com/FCwVcEZvwWLCcO0h1P2IBG"
global.botname = 'TOXIC LEO'
global.akulaku = 'Bot By Leo'
global.ytname = 'YT TOXIC LEO MODS'


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
