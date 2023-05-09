module.exports = {
    ensureAuthenticated:function (req:any, res:any, next:any) {
    let b:any=req.isAuthenticated()
        if (req.isAuthenticated()) { return next(); }
        res.redirect('/login')
    }
}