const authPage = (permissions) =>{
    return (req,res,next)=> {
        const userRole = req.body.permissao
        if(permissions.includes(userRole)){
            next()
        }else{
            return res.status(401).json("você não possui essa permissão")
        }
    }
};

module.exports = {authPage}