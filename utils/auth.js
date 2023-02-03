const jwt = require("jsonwebtoken")

const secret_key = "mern-market"

const auth = async(req, res, next) => {
    if(req.method === "GET"){
        return next()
    }
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InF1ZWVuQGJyaXRpc2hyb3lhbC5jb20iLCJpYXQiOjE2NzUzMTU3NzAsImV4cCI6MTY3NTM5ODU3MH0.q148blaiPrvQDdsxDYGKWX8lKhKKwIZodUuJPRSnFww"
    // await req.headers.authorization.split(" ")
    if(!token){
        return res.status(400).json({message: "トークンがありません"})
    }
    try{
        const decoded = jwt.verify(token, secret_key) 
        req.body.email = decoded.email
        return next
    }catch(err){
        return res.status(400).json({message: "トークンが正しくないのでログインしてください"})
    }
}

module.exports = auth