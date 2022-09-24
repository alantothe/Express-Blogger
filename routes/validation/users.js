

const validateUserData = (userData) => {
    console.log(userData)

    if (userData.email === undefined){
        return{
        isValid: false
        }}
    else {
        return{
        isValid: true
        }}

}

module.exports = {
    validateUserData,
}
