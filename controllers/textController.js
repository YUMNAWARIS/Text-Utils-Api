const services = require('../services/services')
module.exports.capitalize = (req,res,next)=>{
    const content = req.body.content;
    if(content!=null && content != "")
    {
        result = services.cap(content);
        res.status(200).json({
            message: "String received for capitalizing",
            result : result
        })
    }
    else{
        res.json({
            message: "No Input Received. Kindly Provide Some Input String.",
            functionRequested: "To Capitalize"
        })
    }
}

module.exports.upper = (req,res,next)=>{
    const content = req.body.content;
    if(content!= null || content != ""){
        result = services.upper(content);
        res.status(200).json({
            message: "String received for capitalizing",
            result : result
        })
    }else{
        res.json({
            message: "No Input Received. Kindly Provide Some Input String.",
            functionRequested: "To Capitalize"
        })
    }
}
module.exports.lower = (req,res,next)=>{
    const content = req.body.content;
    if(content!= null || content != ""){
        const result = services.lower(content);
    }else{
        res.json({
            message: "No Input Received. Kindly Provide Some Input String.",
            functionRequested: "To Capitalize"
        })
    }
}
module.exports.removepunc = (req,res,next)=>{
    const content = req.body.content;
    if(content!= null || content != ""){
        result = services.rmv_punc(content);
        res.status(200).json({
            message: "String received for capitalizing",
            result : result
        })
    }else{
        res.json({
            message: "No Input Received. Kindly Provide Some Input String.",
            functionRequested: "To Capitalize"
        })
    }
}
module.exports.removespace = (req,res,next)=>{
    const content = req.body.content;
    if(content!= null || content != ""){
        result = services.rmv_space(content);
        res.status(200).json({
            message: "String received for capitalizing",
            result : result
        })
    }else{
        res.json({
            message: "No Input Received. Kindly Provide Some Input String.",
            functionRequested: "To Capitalize"
        })
    }
}
module.exports.removespecificchar = (req,res,next)=>{
    const content = req.body.content;
    if(content!= null || content != ""){
        result = services.rmv_char(content);
        res.status(200).json({
            message: "String received for capitalizing",
            result : result
        })
    }else{
        res.json({
            message: "No Input Received. Kindly Provide Some Input String.",
            functionRequested: "To Capitalize"
        })
    }
}
module.exports.removenewline = (req,res,next)=>{
    const content = req.body.content;
    if(content!= null || content != ""){
        result = services.rmv_newline(content);
        res.status(200).json({
            message: "String received for capitalizing",
            result : result
        })
    }else{
        res.json({
            message: "No Input Received. Kindly Provide Some Input String.",
            functionRequested: "To Capitalize"
        })
    }
}
module.exports.replaceword = (req,res,next)=>{
    const content = req.body.content;
    if(content!= null || content != ""){
        result = services.replace_words(content);
        res.status(200).json({
            message: "String received for capitalizing",
            result : result
        })
    }else{
        res.json({
            message: "No Input Received. Kindly Provide Some Input String.",
            functionRequested: "To Capitalize"
        })
    }
}
module.exports.charcount = (req,res,next)=>{
    const content = req.body.content;
    if(content!= null || content != ""){
        result = services.char_count(content);
        res.status(200).json({
            message: "String received for capitalizing",
            result : result
        })
    }else{
        res.json({
            message: "No Input Received. Kindly Provide Some Input String.",
            functionRequested: "To Capitalize"
        })
    }
}
module.exports.wordcount = (req,res,next)=>{
    const content = req.body.content;
    if(content!= null || content != ""){
        result = services.word_count(content);
        res.status(200).json({
            message: "String received for capitalizing",
            result : result
        })
    }else{
        res.json({
            message: "No Input Received. Kindly Provide Some Input String.",
            functionRequested: "To Capitalize"
        })
    }
}