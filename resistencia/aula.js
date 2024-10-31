const nameInput=document.getElementById('nameInput');const addNameBtn=document.getElementById('addNameBtn');const nameList=document.getElementById('nameList');const drawBtn=document.getElementById('drawBtn');const resultContainer=document.getElementById('resultContainer');const resultList=document.getElementById('resultList');let names=[];addNameBtn.addEventListener('click',()=>{const name=nameInput.value.trim();if(name){names.push(name);const li=document.createElement('li');li.textContent=name;nameList.appendChild(li);nameInput.value='';nameInput.focus()}});drawBtn.addEventListener('click',()=>{if(names.length>0){const shuffledNames=names.sort(()=>0.5-Math.random());const selectedNames=shuffledNames.slice(0,Math.min(5,names.length));resultList.innerHTML='';selectedNames.forEach((name,index)=>{const li=document.createElement('li');li.textContent=`${index + 1}. ${name}`;resultList.appendChild(li)});resultContainer.classList.remove('hidden')}})