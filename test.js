function myfunction() {
	var name = document.getElementById("name").value;
	if (validation())
	{
		document.getElementById("form_id").action = "index.html";
		document.getElementById("form_id").submit();
	}
    }
    function validation() {
    	var name = document.getElementById("name").value;
    	if(name === '') {
    		alert("Please Enter A Vine");
    		return false;
    	}
    	else if(name == 'stop') {
    		alert("stop!! I coulda dropped ma croissont!")
    		return false;
    	}
    	else if(name == 'hurricane'){
    		alert("hurricane katrinaaa, More like hurricane tortilla!")
    		return false;
    	}
    	else if(name == 'sabra'){
    		alert("sabra gives you all your daily nutrients, like 2 grams of trans fat and OHMYGAUD CHOLESTERAL!!!")
    		return false;
    	}
    	else if(name == 'my'){
    		alert("my favourite screamo band is probably big time rush, oh my god :O")
    		return false;
    	}
    	else if(name == 'an'){
    		alert("an avacado... thankssss")
    		return false;
    	}
        else if(name == 'and'){
            alert("and they were roommates!...   oh my god they were roommatessss")
            return false;
        }
    	else{
    		return true
    	}
    }