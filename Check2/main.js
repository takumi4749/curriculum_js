function changeLang(){
    let select = document.getElementById('selectLanguages').value;
    let jpn = document.getElementById('jp');
    let eng = document.getElementById('en');


    if(select==='jpn'){
        jp.classList.remove('hidden');
        en.classList.add('hidden');
    }else if(select==='en'){
        jp.classList.add('hidden');
        en.classList.remove('hidden');
    }else if(select==='all'){
        jp.classList.remove('hidden');
        en.classList.remove('hidden');
    }else{
        jp.classList.remove('hidden');
        en.classList.remove('hidden');
    }
}   