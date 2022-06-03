module.exports.badRequest = (err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.sendStatus(400)
    }
    return next()
}

module.exports.fatalError = (err, req, res, next) => {
    console.error(`${err.message}`)
    console.error(err.stack)
    return res.status(500).send({ message: "something wrong" })
}

module.exports.notFound = (err, req, res, next) => {
    if (!err)
        return res.sendStatus(404)
    return next(err, req, res, next);
}