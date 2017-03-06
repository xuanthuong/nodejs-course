const _getIndexView = (req, res) => {
    //res.send("Home page")
    const model = {
        user: {
            name: 'thuongtran',
            email: 'thuong.tran@dounets.com'
        },
        title: 'Homepage'
    }
    //res.render('home')
    res.render('home', model)
}

const _getContactView = (req, res) => {
    res.render('contact')
}
exports.getIndexView = _getIndexView
exports.getContactView = _getContactView