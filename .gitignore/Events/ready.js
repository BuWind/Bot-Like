module.exports = async(client) => {

    client.user.setPresence({
        game: {
            name: "Sucer mon maitre."
        }
    })
};