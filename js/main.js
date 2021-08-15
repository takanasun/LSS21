$(function(){
    $.ajax({
        type: 'GET',
        url:'https://script.google.com/macros/s/AKfycbxryaN13LIULoFFA19TK3ikXE2mbAzVWNc8dzprXs_oEhwEHkXIdM8vn5_uo9GIJ3juFA/exec',
        dataType:"text",
        success: function(data){
            
            // HTML上の必要な箇所に値を設定します。
            const obj = ["title","cate","est","runName","runID","runIcon","comName","comID","comIcon","nextTitle","nextCategory","nextRunner","nextCommentator"];
            const colNum = [1,2,5,8,9,10,11,12,13,14,15,16,17];
            const iconImage = {
                "youtube":"yt.png",
                "twitch":"tw.png",
                "nico":"nc.png"
            };
            var textLength = data.split(",");
            $("#cate").text(textLength[0]);
            
            for(let i=0;i < obj.length;i++){
                var clname = "#"+ obj[i];
                if(obj[i] == "comName" && textLength[colNum[i]] == "") {
                    $("#commentator").css("display","none");
                }

                if(obj[i].match(/Icon/) && textLength[colNum[i]] != ""){
                    $(clname).addClass(textLength[colNum[i]]);
                }else if(obj[i] == "title" && textLength[colNum[i]] != ""){
                    var titleLen = textLength[colNum[i]].replace(/\r?\n/g , "");                    
                    if (titleLen.length > 40 ){
                        $(clname).css("font-size","100%");
                    }
                    $(clname).text(titleLen);  
                }else if(obj[i] == "cate"){
                    if (textLength[colNum[i]].length > 30 ){
                        $(clname).css("font-size","16px");
                    }
                    $(clname).text(textLength[colNum[i]]);
                }else if(obj[i] == "est"){
                    $(clname).text("EST:" + textLength[colNum[i]]);
                }else if(obj[i] == "nextTitle" && textLength[colNum[i]] != ""){
                    if (titleLen.length > 40 ){
                        $(clname).css("font-size","16px");
                    }
                    $(clname).text(textLength[colNum[i]].replace(/\r?\n/g , ""));
                }else if(obj[i] == "nextRunner" && textLength[colNum[i]] != ""){
                    $(clname).text("Runner:" + textLength[colNum[i]]);
                }else if(obj[i] == "nextCommentator" && textLength[colNum[i]] != ""){
                    $(clname).text("Commentator:" + textLength[colNum[i]]);
                    
                }else if(obj[i] == "nextCategory" && textLength[colNum[i]] != ""){
                    if(textLength[colNum[i]].length > 30){
                        $(clname).css("height","60px")
                    }
                    $(clname).text("Category:" + textLength[colNum[i]]);
                }else if(obj[i] == "nextCommentator" && textLength[colNum[i]] == ""){
                    $(clname).remove();
                }else{
                    $(clname).text(textLength[colNum[i]]);    
                }
            }
        }
    });
});