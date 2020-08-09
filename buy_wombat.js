var selectList
$(document).ready(function(){

    
    var produkt = $('#produkt').val()
    let produktInput = document.getElementById('produkt');
    var größe = $('#größe').val()
    let größeInput = document.getElementById('größe');
    var firstname = $('#fname').val()
    var lastname = $('#lname').val()
    var thema = $('#thema').val()
    var message = $('#subject').val()
    var email = $('#email').val()
    var statusgrößeElm = $('#status_größe')
    var statusElm = $('#status')
    var arraygröße = [ "Groß","Mini"];
    var arrayanzahl = ["1", "2","3", "4", "5"];
    var arraybetrag = ["5 €","10 €","15 €","20 €","25 €","30 €","35 €","40 €","45 €","50 €","55 €","60 €","65 €","70 €","75 €","80 €","85 €","90 €","95 €","100 €"];
    
    //check Produktauswahl
    produktInput.addEventListener("change", function(){
        statusgrößeElm.empty()

        if(produktInput.value.includes('nicht')){
            statusgrößeElm.append('<div style="color:red">Bitte wähle ein verfügbares Produkt</div>')
        }else{
        
            if(produktInput.value === 'Gutschein'){
                statusgrößeElm.append('<div>Im Wert von</div>')
                var selectList = document.createElement("select");
                selectList.id = "wert";
                selectList.name= "Wert";
                statusgrößeElm.append(selectList);
                for (var i = 0; i < arraybetrag.length; i++) {
                    var option = document.createElement("option");
                    option.value = arraybetrag[i];
                    option.text = arraybetrag[i];
                    selectList.appendChild(option);
                }
            }
            else if(produktInput.value === 'Sonstiges'){
                statusgrößeElm.append('<div>Schreibe deinen individuellen Wunsch in der Nachricht unten</div>')
                
            }else if(produktInput.value === 'novalue'){
                statusgrößeElm.empty()
            }else{
                statusgrößeElm.append('<div>Größe</div>')
                var selectList = document.createElement("select");
                selectList.id = "größe";
                selectList.name= "Größe"
                statusgrößeElm.append(selectList);
                for (var i = 0; i < arraygröße.length; i++) {
                    var option = document.createElement("option");
                    option.value = arraygröße[i];
                    option.text = arraygröße[i];
                    selectList.appendChild(option);
                }
                statusgrößeElm.append('<div>Anzahl</div>')
                var selectList = document.createElement("select");
                selectList.id = "anzahl";
                selectList.name= "Anzahl"
                statusgrößeElm.append(selectList);
                for (var i = 0; i < arrayanzahl.length; i++) {
                    var option = document.createElement("option");
                    option.value = arrayanzahl[i];
                    option.text = arrayanzahl[i];
                    selectList.appendChild(option);
                }
            }
        }
         

    });

    $("#submitbutton").click(function(event){
        var produkt = $('#produkt').val()
        let produktInput = document.getElementById('produkt');
        var größe = $('#größe').val()
        let größeInput = document.getElementById('größe');
        var firstname = $('#fname').val()
        var lastname = $('#lname').val()
        var thema = $('#thema').val()
        var message = $('#subject').val()
        var straße = $('#straße').val()
        var postleitzahl = $('#postleitzahl').val()
        var ort = $('#ort').val()
        var email = $('#email').val()
        var emailconfirm = $('#emailconfirm').val()
        var statusgrößeElm = $('#status_größe')
        var statusElm = $('#status')
        var arraygröße = [ "Groß","Mini"];
        var arrayanzahl = ["1", "2","3", "4", "5"];
        var arraybetrag = ["5 €","10 €","15 €","20 €","25 €","30 €","35 €","40 €","45 €","50 €","55 €","60 €","65 €","70 €","75 €","80 €","85 €","90 €","95 €","100 €"];
        
        
        statusElm.empty()
        

        if((produkt === 'Sonstiges')  && (message.length >= 2)){
            event.preventDefault()
            statusElm.append('<div>Schreibe deinen individuellen Wunsch in die Nachricht</div>')
        }else if(produkt === 'novalue'){
            event.preventDefault()
            statusElm.append('<div>Bitte wähle ein Produkt aus</div>')
        }else if((produkt != 'novalue') && 
                (produkt != 'Sonstiges')&& 
                (produkt != 'Gutschein')){
        }else{
            statusElm.append('')
        }

        if(produktInput.value.includes('nicht')){
            event.preventDefault()
            statusElm.append('<div style="color:red">Bitte wähle ein verfügbares Produkt</div>')
        }
        

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
        if (straße.length >= 2){
            statusElm.append('')
        }else{
            event.preventDefault()
            statusElm.append('<div>Bitte gib deinen Straße ein</div>')
        }

        if (ort.length > 1 && postleitzahl.length ===5){
            statusElm.append('')
        }else{
            event.preventDefault()
            statusElm.append('<div>Bitte überprüfe deine Adresse</div>')
        }
        if (email.length > 5 && email.includes('@') && email.includes('.')&& email===emailconfirm){
            statusElm.append('')
        }else{
            event.preventDefault()
            statusElm.append('<div>Bitte überprüfe deine E-Mailadressen</div>')
        } 
        
        
        
    })
})


