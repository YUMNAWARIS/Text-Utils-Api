list_of_punctuation = ['!', '(', ')', '-', '[', ']', '{', '}', ';',
                        ':', "'", '"', '\\', ',', '<', '>', '.',
                        '/', '?', '@', '#', '$', '%', '^', '&', '*', '_', '~']

function isPunctuation(char){
    flag = false;
    list_of_punctuation.forEach(character => {
        if(character == char){
            flag = true;
        }else{
            
        }
    });
    return flag
}

exports.cap = function capitalize(string_){
    var result = ""
    var letter = ""
    for(var i=0;i<string_.length;i++){
        letter = string_.charAt(i);
        if(i==0){
            result += letter.toUpperCase();
            continue;
        }
        else if(letter==" "){
            nextletter = string_.charAt(i+1);
            result += letter + nextletter.toUpperCase();
            i++;
            continue;
        }
        result += letter;
    }
    return result
}

exports.upper = function upper(string_){
    return string_.toUpperCase();
}
exports.lower = function lower(string_){
    return string_.toLowerCase();
}
exports.rmv_punc = function remove_Punctuation(string_){
    var result = ""
    var letter = ""
    for(var i=0;i<string_.length;i++){
        letter = string_.charAt(i);
        var isPunc = isPunctuation(letter);
        if(!isPunc){
            result+=letter;
        }
    }
    return result
}

exports.rmv_space = function remove_space(string_){
    var result = ""
    var letter = ""
    for(var i=0;i<string_.length;i++){
        letter = string_.charAt(i);
        if(!(letter==" ")){
            result+=letter;
        }
    }
    return result
}
exports.rmv_char = function remove_Char(string_){}
exports.rmv_newline = function remove_newline(string_){}
exports.replace_words = function replace_words(string_){}
exports.char_count = function char_count(string_){}
exports.word_count = function word_count(string_){}