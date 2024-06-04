let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `🤖— 𝗡𝗘𝗧𝗛𝗥𝗢 𝘽𝙊𝙏 —🤖  ${pesan}`
let teks = ` ...𝑬𝑺 𝑯𝑶𝑹𝑨 𝑫𝑬 𝑱𝑼𝑮𝑨𝑹 ‼️  \n\n ${oi}\n\n ➢𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚𝐬: \n`
for (let mem of participants) {
teks += `♦️≽ @${mem.id.split('@')[0]}\n`}
teks += `@𝐍𝐄𝐓𝐇𝐑𝐎.𝐆𝐀𝐌𝐈𝐍𝐆`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
handler.admin = true
handler.group = true
export default handler
