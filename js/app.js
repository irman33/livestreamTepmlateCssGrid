$(document).ready(function(){
    var lsWrapper = $(".ls-wrapper");
    
    $("#ls-vidToggle").click(function(){
        if($("#ls-vidDiv").hasClass('col-md-8')){
            $("#ls-video").removeAttr("style");
            $(this).text('Shrink Video');
            $("#ls-vidDiv").removeClass('col-md-8');
            $("#ls-vidDiv").addClass('col-md-12');    
            $("#ls-video").toggleClass('xl');
            $("#ls-chat").toggleClass('xl');
            
            
            var chat = document.getElementById('ls-chatDiv');
            lsWrapper.append(chat);
            chat.parentNode.removeChild(elem);
            
            
        }else {
            $("#ls-video").removeAttr("style");
            $(this).text('Expand Video');
            $("#ls-vidDiv").removeClass('col-md-12');
            $("#ls-vidDiv").addClass('col-md-8');
            $("#ls-video").toggleClass('xl');
            $("#ls-chat").toggleClass('xl');
            
            var poll = document.getElementById('ls-pollDiv');
            lsWrapper.append(poll);
            chat.parentNode.removeChild(poll);
        }
    });
});