import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")
let time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
conn.sendHydrated(m.chat, '*『 VEN BOT 』*', `JIKA MENEMUKAN SEMACAM BUG/ERROR LAPOR KE OWNER!\n\nᴅᴀᴛᴇ: ${date}\nᴛɪᴍᴇ: ${time} ﹙ɢᴍᴛ +7:00)`.trim(), './media/broadcast.jpg', 'https://github.com/ImleviOfc', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
[`ᴍᴇɴᴜ`, '.m'],
[`\GUE SATIR BANH😔☝`, 'Bilek']
], m, {asLocation: true})
}
handler.help = ['menu']
handler.tags = ['general']
handler.command = /^(menu)$/i

export default handler
