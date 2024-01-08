import jwt from 'jsonwebtoken'


export function decodeToken(auth){
    let token = auth.split(" ")[1]
    var decoded = jwt.verify(token, process.env.JWT_SECRET);
    if(!decoded){
        return false
    }
    return decoded.userId
}

export function createToken(userId){
    return "Bearer " + jwt.sign({ userId }, process.env.JWT_SECRET)
}
