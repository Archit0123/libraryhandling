displayBook();
console.log("Hello World");
let submit=document.getElementById('submit');
submit.addEventListener('click',addBook);

function addBook(){
    addBookName();
    addAuthorName();
    selectGenre();
    displayBook();
}

function errormsg(){
    let msg=document.getElementById('msg');
    msg.innerHTML=`<div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Error</strong><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`;
    setTimeout(() => {
        msg.innerHTML="";
    }, 2000);
}

function successmsg(){
    let msg=document.getElementById('msg');
    msg.innerHTML=`<div class="alert alert-success alert-dismissible fade show" role="alert">
    <strong>Successfully Added!</strong><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`;
    setTimeout(() => {
        msg.innerHTML="";
    }, 2000);
}
function delmsg(){
    let msg=document.getElementById('msg');
    msg.innerHTML=`<div class="alert alert-success alert-dismissible fade show" role="alert">
    <strong>Successfully Removed!</strong><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`;
    setTimeout(() => {
        msg.innerHTML="";
    }, 2000);

}
function addBookName(){
    let nameelem=document.getElementById('bkname');
    let bkname=localStorage.getItem('title');
    if(bkname==null){
        bookName=[];
        
    }
    else{
        bookName=JSON.parse(bkname);
        
    }
    if(nameelem.value!=""){
        bookName.push(nameelem.value);
    localStorage.setItem('title',JSON.stringify(bookName));
    
    successmsg();
    }
    else{
        errormsg();
    }
    nameelem.value=null;
}

function addAuthorName(){
    let authelem=document.getElementById('auth');
    let authname=localStorage.getItem('author');
    if(authname==null){
        authorName=[];
    }
    else{
        authorName=JSON.parse(authname);
    }
    if(authelem.value!=""){
    authorName.push(authelem.value);    
    localStorage.setItem('author',JSON.stringify(authorName));
    successmsg();
    }
    else{
        errormsg();
    }
    authelem.value=null;

}

function selectGenre(){
     //adding genre
     let extra= document.getElementById('gen');
     let genre="";
     let fic=document.getElementById('fic');
     let edu=document.getElementById('edu');
     let crime=document.getElementById('crime');
     if(fic.selected){
         genre=fic.value;
     }
     if(edu.selected){
         genre=edu.value;
     }
         
     if(crime.selected){
         genre=crime.value;
     }
     console.log(genre);
     let genelem=localStorage.getItem('genre');
     if(genelem==null){
         genrename=[];
     }
     else{
         genrename=JSON.parse(genelem);
     }
     if(genre!=""){
         genrename.push(genre);
         localStorage.setItem('genre',JSON.stringify(genrename));
         successmsg();
     }
     else{
         errormsg();
     }
     extra.value=document.getElementById('default').innerText;

}
function displayBook(){
   let name=localStorage.getItem('title');
   let author=localStorage.getItem('author');
   let genre=localStorage.getItem('genre');
   
   nameArr=JSON.parse(name);
   authArr=JSON.parse(author);
   genArr=JSON.parse(genre);

   let html="";
   if(nameArr!=null){
    nameArr.forEach(function(elem,index) {
       html+=`<tr>
              <th scope="row">${index+1}</th>
              <td>${elem}</td>
              <td>${authArr[index]}</td>
              <td>${genArr[index]}</td>
              <td><button type="button" onclick="remove(${index})" class="btn btn-outline-danger">Remove</button></td>
              </tr>`
       
    });
}
   let disp=document.getElementById('disptab');
   disp.innerHTML=html;
}

function remove(i){
    let name=localStorage.getItem('title');
    let author=localStorage.getItem('author');
    let genre=localStorage.getItem('genre');
     
    
    nameArr=JSON.parse(name);
    authArr=JSON.parse(author);
    genArr=JSON.parse(genre);


    
    nameArr.splice(i,1);
    authArr.splice(i,1);
    genArr.splice(i,1);

    localStorage.setItem('title',JSON.stringify(nameArr));
    localStorage.setItem('author',JSON.stringify(authArr));
    localStorage.setItem('genre',JSON.stringify(genArr));
    delmsg();
    displayBook();
}



