export default (req, res, next): void=>{
    if(!req.body.price){
        next();
        return;
    }
    const regex = /\D/g;

    try {
        const price = (req.body.price).replace(regex, '');
        req.body.price = price;
        next();
    } catch (err){
        return res.status(500).json({error: err});
    }
}