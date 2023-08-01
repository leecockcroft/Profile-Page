const storageType = localStorage;
const consentPropertyName='jdc_consent';

const shouldshowpopUp = ()=> !storageType.getItem(consentPropertyName);

const saveToStorage =()=> storageType.setItem(consentPropertyName, true);


window.onload =()=>{



  if(shouldshowpopUp()){
    const consent = confirm('agree to the terms and conditions of the site');

    if(consent){
      saveToStorage();
    }

  }
}
