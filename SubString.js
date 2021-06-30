function stringMatch(longStr, pattern){
    var count = 0;
    for(var i=0; i<= longStr.length; i++){
        for(var j=0; j< pattern.lenth; j++){
            if(longStr[i+j] !== pattern[j]){
                break;
            }
            if(j === pattern.length - 1){
                count++;
            }
        }
    }
    return count;
}