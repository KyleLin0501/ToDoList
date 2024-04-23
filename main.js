document.getElementById('but').addEventListener('click',function (){
    var list = document.getElementById('list');
    var string = document.getElementById('input');

    if(string.value.trim() === 0) return;

    var listitem = document.createElement('li');
    var text = document.createElement('span');
    text.textContent = string.value.trim();
    listitem.appendChild(text);

    var editbutton = document.createElement('button');
    editbutton.textContent = '編輯';
    editbutton.addEventListener('click',function (){
        var popupedit = prompt('編輯代辦事項',text.textContent);
        if(text.textContent !== null) text.textContent = popupedit;
    });

    var deletebuttuon = document.createElement('button');
    deletebuttuon.textContent = '刪除';
    deletebuttuon.addEventListener('click',function (){
        list.removeChild(listitem);
    });

    listitem.appendChild(editbutton);
    listitem.appendChild(deletebuttuon);
    list.appendChild(listitem);

    string.value= '';
});

document.getElementById('clear').addEventListener('click',function (){
    var textlist = document.getElementById('list');
    while(textlist.firstChild){
        textlist.removeChild(textlist.firstChild);
    }
});