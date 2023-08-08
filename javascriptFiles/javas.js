const botMasgs = document.querySelector('textarea');
const sendMasgsBtn = document.querySelector('button');
const myMasg = document.querySelector('input');
const face = document.querySelector('.laps');
const en = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

function checkMasgs(arr,word){
    return arr.value.indexOf(word,0)
}
let scrollVal = 100
let notGoodTalk = false
let hi = false
sendMasgsBtn.addEventListener('click',()=>{
    if(myMasg.value === ''){
        return
    }
    if(myMasg.value[0] === ' '){
        return
    } 
    if(myMasg.value !== ''){
        face.classList.remove('sad')
    }
    if(notGoodTalk){
        botMasgs.value += 'با من حرف نزن ): \n \n'
        botMasgs.scrollTop +=100
        return
    }
    for (let index = 0; index < en.length; index++) {
        if(myMasg.value[0] === en[index]){
            face.classList.add('sad')
            botMasgs.value += 'انگلیسی حرف نزن): \n \n'
            botMasgs.scrollTop +=100
            return  
        }
        if(myMasg.value[0] === en[index].toUpperCase()){
            face.classList.add('sad')
            botMasgs.value += 'انگلیسی حرف نزن): \n \n'
            botMasgs.scrollTop +=100
            return  
        }else{
            hasLetteren = false
        }
    }
    if(checkMasgs(myMasg,'سلام') !== 0){
        if(!hi){
            botMasgs.value += 'اول سلام بعد کلام\n \n'
            botMasgs.scrollTop +=100
            face.classList.add('sad')
            return
        }
    }
    if(checkMasgs(myMasg,'سلام') !== -1 && checkMasgs(myMasg,'چطوری') !== -1){
        botMasgs.value += 'سلام تو خوبی\n \n'
        botMasgs.scrollTop +=100
        hi = true
    }else if(checkMasgs(myMasg,'سلام') !== -1 && checkMasgs(myMasg,'خوبی') !== -1){
        botMasgs.value += 'سلام تو خوبی\n \n'
        botMasgs.scrollTop +=100
        hi = true
    }else if(checkMasgs(myMasg,'سلام') !== -1){
        botMasgs.value += 'سلام\n \n'
        botMasgs.scrollTop +=100
        hi = true
    }else if(checkMasgs(myMasg,'چطوری') !== -1){
        botMasgs.value += 'تو چطوری\n \n'
        botMasgs.scrollTop +=100
    }else if(checkMasgs(myMasg,'خوبی') !== -1){
        botMasgs.value += 'تو خوبی\n \n'
        botMasgs.scrollTop +=100
    }else if(checkMasgs(myMasg,'خوبی') !== -1){
        botMasgs.value += 'تو خوبی\n \n'
        botMasgs.scrollTop +=100
    }else if(checkMasgs(myMasg,'اره ممنون') !== -1){
        botMasgs.value += 'خدارو شکر\n \n'
        botMasgs.scrollTop +=100
    }else if(checkMasgs(myMasg,'ممنون') !== -1){
        botMasgs.value += 'خدارو شکر\n \n'
        botMasgs.scrollTop +=100
    }else if(checkMasgs(myMasg,'اره') !== -1){
        botMasgs.value += 'خدارو شکر\n \n'
        botMasgs.scrollTop +=100
    }else if(checkMasgs(myMasg,'الحمد الله') !== -1){
        botMasgs.value += 'خدارو شکر\n \n'
        botMasgs.scrollTop +=100
    }else if(checkMasgs(myMasg,'خدارو شکر') !== -1){
        botMasgs.value += 'خدارو شکر\n \n'
        botMasgs.scrollTop +=100
    }else if(checkMasgs(myMasg,'خدا را شکر') !== -1){
        botMasgs.value += 'خدارو شکر\n \n'
        botMasgs.scrollTop +=100
    }else if(checkMasgs(myMasg,'مرسی') !== -1){
        botMasgs.value += 'برای چی\n \n'
        botMasgs.scrollTop +=100
    }else if(checkMasgs(myMasg,'برای این') !== -1){
        botMasgs.value += 'نه بابا چه حرفیه\n \n'
        botMasgs.scrollTop +=100
    }else if(checkMasgs(myMasg,'برا این') !== -1){
        botMasgs.value += 'نه بابا چه حرفیه\n \n'
        botMasgs.scrollTop +=100
    }else if(checkMasgs(myMasg,'نهار خوردی') !== -1){
        face.classList.add('sad')
        setTimeout(() => {
            face.classList.remove('sad')
        }, 3000);
        botMasgs.value += 'اولا ناهار و نهار نیست دوما میشه بخورم مگه):\n \n'
        botMasgs.scrollTop +=100
    }else if(checkMasgs(myMasg,'ناهار خوردی') !== -1){
        face.classList.add('sad')
        setTimeout(() => {
            face.classList.remove('sad')
        }, 3000);
        botMasgs.value += 'چی؟؟ ): مگه میشه بخورم\n \n'
        botMasgs.scrollTop +=100
    }else if(checkMasgs(myMasg,'شام خوردی') !== -1){
        face.classList.add('sad')
        setTimeout(() => {
            face.classList.remove('sad')
        }, 3000);
        botMasgs.value += 'چی؟؟ ): مگه میشه بخورم\n \n'
        botMasgs.scrollTop +=100
    }else if(checkMasgs(myMasg,'صبحونه خردی') !== -1){
        face.classList.add('sad')
        setTimeout(() => {
            face.classList.remove('sad')
        }, 3000);
        notGoodTalk = true
        botMasgs.value += 'چی؟؟ ): مگه میشه بخورم\n \n'
        botMasgs.scrollTop +=100
    }else if(checkMasgs(myMasg,'احمقی') !== -1){
        face.classList.add('angry')
        notGoodTalk = true
        botMasgs.value += 'بی شعور\n \n'
        botMasgs.scrollTop +=100
    }else if(checkMasgs(myMasg,'تو خری') !== -1){
        face.classList.add('angry')
        notGoodTalk = true
        botMasgs.value += 'بی شعور\n \n'
        botMasgs.scrollTop +=100
    }else if(checkMasgs(myMasg,'خری') !== -1){
        face.classList.add('angry')
        notGoodTalk = true
        botMasgs.value += 'بی شعور\n \n'
        botMasgs.scrollTop +=100
    }else{
        face.classList.add('sad')
        botMasgs.value += 'خوب بنویس\n \n'
        botMasgs.scrollTop +=100
        return
    }
})
