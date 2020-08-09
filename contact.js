

$(document).ready(function(){
    $("#submitbutton").click(function(event){
        
        
        var firstname = $('#fname').val()
        var lastname = $('#lname').val()
        var thema = $('#thema').val()
        var message = $('#subject').val()
        var email = $('#email').val()
        var statusElm = $('#status')
        statusElm.empty()
        

        

        if (firstname.length >= 2){
            statusElm.append('')
        }else{
            event.preventDefault()
            statusElm.append('<div>Bitte gib deinen Vornamen ein</div>')
        } 

        if (lastname.length >= 2){
            statusElm.append('')
        }else{
            event.preventDefault()
            statusElm.append('<div>Bitte gib deinen Nachnamen ein</div>')
        } 

        if (email.length > 5 && email.includes('@') && email.includes('.')){
            statusElm.append('')
        }else{
            event.preventDefault()
            statusElm.append('<div>Bitte überprüfe deine E-Mailadresse</div>')
        } 
        if (thema != 'novalue'){
            statusElm.append('')
        }else{
            event.preventDefault()
            statusElm.append('<div>Bitte wähle ein Thema aus</div>')
        }
        if (message.length >= 2){
            statusElm.append('')
        }else{
            event.preventDefault()
            statusElm.append('<div>Bitte gib eine Nachricht ein</div>')
        } 
        
        
    })
})


