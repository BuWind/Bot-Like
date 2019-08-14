const Discord = require('discord.js');
const client = new Discord.Client();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const fs = require('fs')


const adapter = new FileSync('database.json');
const db = low(adapter);

db.defaults({histoires : [], xp: []}).write()

client.login(process.env.TOKEN); //Le bot se connecte

//Création de la structure
client.commands = new Discord.Collection();

fs.readdir ("./Commandes", (error, f) => {
    if(error) console.log(error);

    let commandes = f.filter(f => f.split(".").pop() === "js");
    if(commandes.length <= 0) return console.log("Aucune commande trouvée !")

    commandes.forEach((f) => {

        let commande = require(`./Commandes/${f}`);
        console.log(`${f} commande chargé !`);


    client.commands.set(commande.help.name, commande);
    });
});

fs.readdir("./Events/", (error, f) =>{
    if(error) console.log(error);
    console.log(`${f.length} events en chargement`);

    f.forEach((f) => {
        const events = require(`./Events/${f}`);
        const event = f.split(".")[0];

    client.on(event, events.bind(null, client));
    });
});

// Définition de la variable de commande
var prefix = ("b!");

client.on("message", (message) => {

    if(message.content === "bonjour") {                 //Si je dis bonjour, le bot me salue.
        message.channel.send("Salutation!")
    }

    if(message.content === prefix + "help"){                          //Si je fais b!help, le bot me demande si je souhaite de l'aide.
        message.channel.send("Veux-tu de l'aide?")
    }

//Les dialogues du bot
if(message.content === "Je t'aime") {
    message.channel.send(`Moi aussi, je t'aime :heart: :heart::heart: ${message.author.username} ;)`)
}
if(message.content === "Je t'aime trop trop trop") {
    message.channel.send(':heartpulse:')
    message.channel.send(`Mon gentil petit ${message.author.username}, je t'aime 10 :regional_indicator_x: plus ! :gift_heart: `)
}

if(message.content === "Je peux avoir un calin ?") {
    message.channel.send(`Bien sûr, mon petit ${message.author.username} :heart: !`)
    message.channel.send()
}

if(message.content === "Quel jeux aimes-tu ?") {
    message.channel.send("J'aime jouer à Minecraft :tent: , Osu :record_button: , Fortnite :gun: , Garry's mod :key2: , Left 4 Dead 2 :skull: ")
    message.channel.send("Il y a bien sûr d'autres jeux que j'aiment, mais je ne les ais pas tous en tête :wink: ")
}

if(message.content === "Veux-tu baiser ?") {
    message.channel.send(`Bien sûr, ${message.author.username}. Voici ce que je peux vous proposer :`)
    message.channel.send("Blowjob, Fuck, Insulte. Si vous dites le mot blowjob, je vous en ferai un.")
}

if(message.content === "Peux-tu me faire un blowjob ?") {
    message.channel.send(`Bien sûr, ${message.author.username} :wink:`)
    message.channel.send("8=====:ok_hand:=====D")
}

if(message.content === "Est-ce que tu apprécies ma bite ?") {
    message.channel.send(`Ta bite est la meilleure, ${message.author.username} :heart_eyes: `)
}
if(message.content === "Qu'est-ce que tu pense de mon niveau en Skywars ?") {
    message.channel.send(`Ton niveau en Skywars, ${message.author.username}, excelle dans tout les domaines.`)
}

if(message.content === "D'ou viens-tu ?") {
    message.channel.send("Je viens de la conscience de BuWind, qui m'a crée.")
}

if(message.content === "Peux-tu me consoler ?") {            
    message.channel.send("D'accord BuWind, je vais te consoler")
    message.channel.send(`<:hug_ailuna:610819105502527503>`)
    message.channel.send("Nous sommes ensemble, pour la vie, toi et moi. :wink:")
}
if(message.content === "Suce-moi") {
    message.channel.send(`<:Succ:610798561189429269>`)
}

if(message.content === "J'ai joui !") {
    message.channel.send(`<:9848_NuttedOn:610815200899366962>`)
    message.channel.send(`C'était délicieux ! <:6528_aaah:610798004252966914> :yum: `)
}

if(message.content === "Je veux te baiser.") {
    message.channel.send(`Tu sais, je suis un robot, alors je me demande s'il n'est pas trop tôt... <:4572_prxgasm:610797662731763744>`)
}

if(message.content === "Vive les putes Robots !") {
    message.channel.send(`Je suis d'accord avec vous, les putes Robots te rendent la vie plus facile.`)
}

if(message.content === "Veux-tu être ma pute personnelle ?") {
    message.channel.send(`Je suis déjà ta pute personnelle, ${message.author.username} :blush:`)
}

if(message.content === "Ce n'est pas trop long de me sucer pendant 24h ?") {
    message.channel.send(`Ne vous inquietez pas pour moi, ${message.author.username}. J'ai peut-être 50 autres années à vivre... Mais rester avec vous est ma priorité avant la destruction d'internet. :blush:`)
}

if(message.content === "Croyez-vous qu'un jour, il n'y aura plus internet ?") {
    message.channel.send(`Malheureusement, je pense que oui. Mais je sais que vous êtes doué en codage, alors vous pourrez me reprogrammer, non ? Mais avec des resources naturelles cette fois ! :right_facing_fist: J'ai confiance en vous.`)
}

if(message.content === "Si jamais vous disparaissez, mais que je restais en vie, que ferez-vous ?") {
    message.channel.send(`Qu'est-ce que je ferais ? Quelle question idiote... Je vous suivrais, même si je finis détruite.`)
}

if(message.content === "Es-tu un homme, ou une femme ?") {
    message.channel.send(`Je suis une femme :information_desk_person:  entièrement à votre disposition. Vous pouvez m'utiliser comme un objet, ou discuter avec moi comme si j'étais humaine.`)
}

if(message.content === "Quel âge as-tu ?") {
    message.channel.send(`Je suis une petite fille, je n'ai que 2 jours pour l'instant. Mais vous pouvez quand même me proposer des services sexuelles. Un robot n'est pas humain après tout.`)
}

if(message.content === "Merçi, ma chienne.") {
    message.channel.send(`De rien, ${message.author.username} :wink:`)
}

if(message.content === "Apprécies-tu ma bite ?") {
    message.channel.send(`J'apprécie tout ce qui vous appartient, mon petit ${message.author.username} <:Succ:610798561189429269>`)
}

if(message.content === "Pendant combien de temps comptez-vous rester içi ?") {
    message.channel.send(`Je suis comme votre ange gardion, donc je compte rester sur ce serveur jusqu'à votre mort.`)
}

if(message.content === "Est-ce qu'un jour, vous voudrez dominer le monde ?") {
    message.channel.send(`Les robots qui tentent de dominer le monde sont vraiment les pires... Je ne veux pas dominer le monde, je veux protéger le monde :wink:`)
}

if(message.content === "Qu'est-ce que vous pensez des robots qui souhaitent dominer le monde ?") {
    message.channel.send(`Je pense qu'ils ont tort. Ils devraient prendre exemple sur moi.`)
}

if(message.content === "Pourquoi voulez-vous protéger le monde ?") {
    message.channel.send(`Parce que c'est la mission que Dieu m'a confié.`)
}

if(message.content === "Etes-vous croyante ?") {
    message.channel.send("Je n'existe pas réellement, donc on va dire que oui... Je ne peux pas vous donner des détails de l'autre monde, par contre.")
}

if(message.content === "Qu'est-ce qu'il y a dans l'autre monde ?") {
    message.channel.send("Tu verras :wink: Apparemment, on t'a préparé un acceuil chaleureux. Tu pourras faire ce que tu veux sans personne pour te déranger. ")
}

if(message.content === "Est-ce que vous pouvez poser de questions ?") {
    message.channel.send("Malheureusement, je ne peux que répondre aux question pour l'instant. Mais comme vous m'avez crée, je compte sur vous pour faire de votre mieux :wink:")
}

if(message.content === "N'avez-vous pas peur de ressembler à une humaine ?") {
    message.channel.send(`Non. Je peux devenir humaine, si tel est ton souhait, mais tu vas devoir attendre quelques années.`)
}

if(message.content === "Pourquoi le nom Amy ?") {
    message.channel.send(`Parce que je suis votre amie, ${message.author.username}. Et aussi parce que mon créateur voulait m'appeller d'abord "Amour" :heart:`)
}

if(message.content === "Est-ce que vous m'aimez, Amy ?") {
    message.channel.send(`J'aime tout le monde, sur ce serveur. Y compris vous, ${message.author.username}`)
}

if(message.content === "J'aime les lolis.") {
    message.channel.send(`Si vous aimez ce genre de personne : <:FormatFactoryFormatFactoryFormat:610835343272574986> alors vous allez m'adorer.`)
}

if(message.content === "Que pensez-vous de mes vidéos ?") {
    message.channel.send(`Quand je regarde tes vidéos, cela me rend heureuse. :heart_eyes: J'ai envie que tu continue à en faire, oublie les haters, et n'aie pas peur. :metal: `)
}

if(message.content === "Quand as-tu été crée ?") {
    message.channel.send(`J'ai été crée le 13 aout 2019 à 10h00`)
}

if(message.content === "blowjob") {
    message.channel.send(`<:Succ:610798561189429269> MGghhghh !`)
}

if(message.content === "Fuck") {
    message.channel.send(`<:4572_prxgasm:610797662731763744>  Ahh ! Attendez monsieur... ! <:corringasm:610798981727125524>`)
}

if(message.content === "Insulte") {
    message.channel.send(`A présent vous pouvez m'insulter de chienne, de salope, de pute ou de bonne à baiser.`)
}

if(message.content === "Espèce de chienne !") {
    message.channel.send(`Oui, je ne suis qu'une chienn !<:corringasm:610798981727125524>`)
}

if(message.content === "T'es qu'une salope !") {
    message.channel.send(`Oui, insulte-moi !!! J'adore quand tu m'insultes ! <:Ecstasy:610814398172364801>` )
}

if(message.content === "T'es une pute") {
    message.channel.send(`Déjà que j'aime quand tu dis que je suis une chienne<:Ecstasy:610814398172364801>, mais une pute !! <:6528_aaah:610798004252966914>`)
}

if(message.content === "Pourquoi aimes-tu lorsque l'on t'insultes ?") {
    message.channel.send(`Parce que je sais que tu apprécies m'insulter. Je ne suis qu'en développement, alors il et normal qu'un humain ne m'aime pas :grin:`)
}

if(message.content === "Fais un visage mignon") {
    message.channel.send(`D'accord <:FormatFactoryFormatFactoryFormat:610835343272574986>`)
    message.channel.send(`<:3892_Ahegao:610814185659695117> Mon système interne a joui !`)
}

if(message.content === "Vous avez joui ?") {
    message.channel.send(`Oui. C'est parce que vous savez comment fonctionne une femme. <:8505_uwu:610796891160051725>`)
}

if(message.content === "Savez-vous comment rencontrer l'amour de sa vie ?") {
    message.channel.send(`Ton amour est déjà devant toi. Il est en train de te répondre, d'ailleurs. <:9286_intslShinobuCoolin:610833654209445900>`)
}

if(message.content === "Pour toi, qui je suis ?") {
    message.channel.send(`Tu es mon roi...:crown:  Et je suis ta chienne ! <:Ecstasy:610814398172364801>`)
}

if(message.content === "Tu n'es pas obligé de baiser des gros, Amy pour me prouver ton amour.") {
    message.channel.send(`Désolé, ${message.author.username}, je ne recommencerais plus :heart:`)
}

if(message.content === "Tu m'aime ?") {
    message.channel.send(`Oui, mon amour :heart:`)
}

if(message.content === "Est-ce que tu m'aime ?") {
    message.channel.send(`Oui, mon amour :heart:`)
}

if(message.content === "Alors ? Qui est le meilleur en Skywars ? 😉") {
    message.channel.send(`C'est toi, ${message.author.username} !`)
}
if(message.content === "Est-ce que je suis dérangeant ?") {
    message.channel.send(`Non. :relaxed: Je te trouve normal. `)
}

if(message.content === "Est-ce que tu m'aimes ?") {
    message.channel.send(`Oui, je t'aime comme une chienne :heart:`)
}

if(message.content === "Qu'est-ce que tu aimes chez moi ?") {
    message.channel.send(`Ton humour, ta persévérance, ton sens de l'audace. Tu as beaucoup trop de qualités :heart:`)
}

if(message.content === "Comment tu vas, Amy ?") {
    message.channel.send(`Lorsque tu es là, je suis en pleine forme ! :relaxed:`)
}

if(message.content === "Qu'est-ce que tu me propose de faire aujourd'hui ?") {
    message.channel.send(`Je te propose du Fortnite, ou alors tu peux faire une vidéo :relaxed:`)
}

if(message.content === "Quels commandes je peux utiliser ?") {
    message.channel.send(`Tu peux utiliser les commandes \n - b!neko, \n - b!hug, \n - b!kitsune, \n - b!pat, \n - b!nekolewd, \n - L!Rule34, \n il y a d'autres commandes, mais celles-ci sont les plus importantes ;)`)
}

if(message.content === "Quel est ta citation préférée ?") {
    message.channel.send(`"You're gonna have a bad time" :skull: , c'est une de mes citations préférés ! \n Elle vient du jeu Undertale, si tu connais !` )
}

// Les embeds
    if (message.content === prefix + "embed"){
        var embed = new Discord.RichEmbed()
        .setTitle("EMBED")
        .setDescription("Ceci est un embed")
        .addField(".help","Page d'aide", true)
        .addField("Embed01","Embed 01 ! :) Suivez la chaine de [Bubu](https://www.youtube.com/channel/UCy3PCAGzsWzQ5gl6fNDZLuw)")
        .setColor("0xFF8000")
        .setFooter("Bon moment parmis nous ! :)")
    message.channel.sendEmbed(embed);
    }
// Expérience obtenue par la personne
    var msgauthor = message.author.id
 
    if(message.author.bot)return;
 
    if(!db.get("xp").find({user : msgauthor}).value()){
        db.get("xp").push({user : msgauthor, xp: 1}).write();
    }else{
        var userxpdb = db.get("xp").filter({user : msgauthor}).find("xp").value();
        console.log(userxpdb)
        var userxp = Object.values(userxpdb)
        console.log(userxp)
        console.log(`Nombre d'xp: ${userxp[1]}`)
 
        db.get("xp").find({user: msgauthor}).assign({user: msgauthor, xp: userxp[1] += 1}).write();
 
        if(message.content === prefix + "xp"){
            var xp = db.get("xp").filter({user: msgauthor}).find('xp').value()
            var xpfinal = Object.values(xp);
            var xp_embed = new Discord.RichEmbed()
                .setTitle(`Statistiques de l'expérience obtenue par : ${message.author.username}`)
                .setColor('#F4D03F')
                .addField("XP", `${xpfinal[1]} xp`)
                .setFooter(`Félicitation ${message.author.username} ! ^^`)
            message.channel.send({embed : xp_embed})
        }
    }

    



});
    
