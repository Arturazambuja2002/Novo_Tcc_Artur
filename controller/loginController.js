async function abreLogin(req,res) {
    res.render("login.ejs", {})
}

async function logar(req,res) {
}

module.exports = {
    abreLogin,
    logar
}