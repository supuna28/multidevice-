exports.wait = () => {
    return `⏳ ඩවුන්ලෝඩ් කරමින් පවතී`
}

exports.ok = () => {
    return `✅ Done.~`
}

exports.err = () => {
    return `‼️දෝශයකි‼️

⏳නැවත උතසහ කරන්න🧘‍♂️`
}

exports.wrongFormat = (prefix) => {
    return `Format salah ‼️ Silakan cek cara penggunaan di *${prefix}allmenu*.`
}

exports.emptyMess = () => {
    return `⚠️ Harap masukkan pesan yang ingin disampaikan! ⚠️`

}

exports.ownerOnly = () => {
    return `⚠️ ඔව්නර් සදහා පමනි! ⚠️`
}

exports.doneOwner = () => {
    return `✔  ️සාර්තකය 😌~`
}

exports.groupOnly = () => {
    return `👥  කන්ඩායම් සදහා පමනක් වලන්ගු වේ!`
}

exports.adminOnly = () => {
    return `🙅  මෙය ඇඩ්මින් සදහා පමනක් වන විධානයකි!`
}

exports.nhFalse = () => {
    return `Kode tidak valid!`
}

exports.listBlock = (blockNumber) => {
    return `*── 「 HALL OF SHAME 」 ──*
    
Total diblokir: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `❎ ඔබ ඇඩ්මින් වරයකු නොවේ! ❎`
}

exports.adminAlready = () => {
    return `⚠️ Tidak  dapat mem-promote user yang merupakan admin! ⚠️`
}

exports.botNotAdmin = () => {
    return `බොට් ඇඩ්මින් වරයකු නොවේ 🙏`
}

exports.received = (pushname) => {
    return `
Halo ${pushname}!
Terima kasih telah melapor, laporanmu akan kami segera terima.`
}

exports.videoLimit = () => {
    return `Ukuran file terlalu besar!`
}

exports.notNum = (q) => {
    return `"${q}", bukan angka!`
}

exports.listMenu = (time, salam, pushname, prefix) => {
    return `
* ${salam} ${pushname}*
*⌚Time Server : ${time}*
*📚 List-Menu :*

🤖 *INFO*
├ ${prefix}owner
├ ${prefix}rules
├ ${prefix}donate
└──────

🧑 *OWNER*
├ > evaluate
├ $ exec
├ ${prefix}join link
├ ${prefix}setppbot (tag/send image)
└──────

⚙️ *GROUP*
├ ${prefix}revoke
├ ${prefix}leave
├ ${prefix}group open/close
├ ${prefix}tagall text
├ ${prefix}hidetag text
└──────

😷 *WEEBS*
├ ${prefix}anime query
├ ${prefix}manga query
├ ${prefix}character query
└──────

🔍 *MISC*
├ ${prefix}film query
├ ${prefix}wattpad query
├ ${prefix}webtoons query
├ ${prefix}drakor query
├ ${prefix}pinterest query
└──────

🎞 *MEDIA*
├ ${prefix}toimg (tag sticker)
└──────

⬇️ *DOWNLOADER* 
├ ${prefix}tiktok link
├ ${prefix}ytdl link
├ ${prefix}ytmp3 link
├ ${prefix}ytmp4 link
├ ${prefix}ytdl link
├ ${prefix}facebook link
├ ${prefix}twitter link
├ ${prefix}instagram link
└──────

📫 *ANIME RANDOM* 
├ ${prefix}loli
├ ${prefix}neko
├ ${prefix}waifu
├ ${prefix}shinobu
├ ${prefix}megumin
├ ${prefix}bully
├ ${prefix}cuddle
├ ${prefix}cry
├ ${prefix}hug
├ ${prefix}awoo
├ ${prefix}kiss
├ ${prefix}lick
├ ${prefix}pat
├ ${prefix}smug
├ ${prefix}bonk
├ ${prefix}yeet
├ ${prefix}blush
├ ${prefix}smile
├ ${prefix}wave
├ ${prefix}highfive
├ ${prefix}handhold
├ ${prefix}nom
├ ${prefix}bite
├ ${prefix}glomp
├ ${prefix}slap
├ ${prefix}kill
├ ${prefix}happy
├ ${prefix}wink
├ ${prefix}poke
├ ${prefix}dance
├ ${prefix}cringe
└──────

🙂 *JOIN*
├https://chat.whatsapp.com/CIDWlH7yzEsKombRDcTKcV
├THANKS FOR 😌
├adiwajshing/baileys
├BOT KINGDOM ™
└──────

    `
}

exports.rules = (prefix) => {
    return `
*── 「 RULES AND FAQ 」 ──*

1.  spam bot. 🙅
😒: *⚠️ WARN/SOFT BLOCK*

2. telepon bot. ☎️
😒: *❎ SOFT BLOCK*

ස්තූතියි




    `
}
exports.BOTKINGDOM = (prefix) =>{
return`*── 「 GROUP 」 ──*

https://chat.whatsapp.com/CIDWlH7yzEsKombRDcTKcV
`
}
exports.tos = (ownerNumber, prefix) => {
    return `
*── 「 DONATE 」 ──*

Hai 👋
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
🏧 0887435047326 (OVO/Dana/GoPay)

Berapapun donasi kalian akan sangat berarti 👍

Arigatou!

Contact person Owner:
wa.me/${ownerNumber} (Owner)

    `
}
