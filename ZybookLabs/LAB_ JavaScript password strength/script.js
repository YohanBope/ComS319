function isStrongPassword(string){
    if(string.length < 8 || string.includes("password") || /A-Z/.test(string) == false){
        return false;
    }
    return true;
}// Your solution goes here 
