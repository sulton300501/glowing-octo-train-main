let headerEssential=[...document.querySelectorAll('.header__essential')]
let sectionWord = document.querySelector('.sectionWord')
let headerSpan = document.querySelectorAll('.header__span')
let headerAbout = document.querySelector('.header__about')
let sectionAbout = document.querySelector('.sectionAbout')
let sectionAnswer = document.querySelector('.section__answer')
let formSelect = document.querySelector('.form-select')
let texts= document.querySelector('.texts')




console.log(formSelect)

// const texts = document.querySelector('.texts p')

// const inputType =document.querySelector('.inputType')
// const btnNumber = document.querySelector('.btn')
// const btnStop = document.querySelector('.btnStop')



// const textQuestion = document.querySelector('.text-question')
// const btn = document.querySelector('.btn')



window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

const recognition = new window.SpeechRecognition()
recognition.interimResults =true

let p = document.createElement('p')




    
const textMain = document.querySelector('.text-main')
const textAnswer = document.querySelector('.text-answer')










const arrNumber =[ 
    {},

   

       {

           afraid:'Qorqmoq',
           agree:'Rozi bolmoq',
           angry:'Jahldor',
           attack: 'Hujum qilmoq',
           bottom: 'Tagi , pastki',
           clever: 'Aqilli , ziyrak',
           cruel: 'shafqatsiz',
           finally: 'ahiri , vanihoyat',
           hide: 'yashirinmoq',
           hunt: 'ov qilmoq',
           middle: "o'rta , markaz",
           moment: 'sekund',
           promise: 'vada bermoq',
           reply: 'javob bermoq',
           safe: 'hafsiz , behatar',
           trick: 'hiyla , nayrang',
           well: 'yaxshi',
           appropriate :" mos, to'g'ri",
           avoid :" yaqinlashmaslik",
           behave :" o'zini tutmoq",
         
           concern :" tashvish, g'am",
           content : "hursand, shod",
           expect :" umid qilmoq, kutmoq",
           frequently :" tez- tez",
           
       },
    

   
  {
   carefully:'etibor bilan',
   chemical: 'kimyoviy modda',
   evil:'yomon , yovuz',
   experiment: 'tajriba , sinov',
   kill: "o'ldirmoq",
   laboratory: 'labaratoriya',
   noise: 'shovqin',
   project: 'loyiha',
   secret: 'sir',
   smell: 'hidlamoq',
   terrible: 'juda yomon',
   worse: 'yomonroq',
   },

      {
       alien : "o'zga sayyoralik",
       among :"orasida, ichida",
       chart :" grafik jadval, diagramma",
      
       comprehend : "tushunmoq",
       ever : "qachon bo'lsa ham ",
       fail : "muvaffaqiyatsizlikka uchramoq ",
       friendly :" do'stona, mehribon",
       
       instead: "o'rniga",
       library :"kutubxona ",
       planet :"sayyora, sayyora",
       report : "hisobot",
       several :" bir nechta, bir talay",
   
       suddenly :" to'satdan, birdaniga",
       suppose :" faraz qilmoq ",
     
       view : "ko'rmoq, qaramoq",
   
       
   },




   {
    appropriate :" mos, to'g'ri",
    avoid :" yaqinlashmaslik",
   
  
    concern :" tashvish, g'am",
    content : "hursand, shod",
    expect :" umid qilmoq, kutmoq",
    frequently :" tez- tez",
    habit :" odat",
    instruct : "ko'rsatma bermoq",
  
    none : "hech qancha",
    patient : "sabrli, toqatli",
    positive :" ijobiy",
    punish :" jazolamoq",
    represent :" vakil bo'lmoq",
    shake :" silkitmoq, siltamoq",
    spread :" tarqatmoq, surkamoq",
    stroll :" sayir qilmoq",
        
    },
    
 {
    
        badly : "yomon, jiddiy",
     
        error :" xato",
        experience : "taassurot, kechinma",
        field : "keng maydon, dala",
        hurt :" jarohat yetkazmoq",
        judgment :" qaror, fikr",
        likely :" ehtimol, balki",
        normal : "odatiy, har doimgi",
        relax :" dam olmoq",
        reside :" istiqomat qilmoq",
        result :" natija, oqibat",
        roll :" yumalatmoq",
        since :" dan beri",
        visible: "sezilarli",
        wild :" yovvoyi",
            
        },


        {
            advantage :" ustun jihat, foyda",
            
            choice : "tanlash imkoniyati",
            community : "jamiyat, jamoa",
           
            distance : "masofa",
            escape :" qochib qutilmoq",
            face : "duch kelmoq",
            follow :" ergashmoq, amal qilmoq",
           
           
            individual :" indvid, kishi",
            pet : "uy hayvoni",
            reach : "yetib bormoq ,erishmoq",
            return : "qaytib kelmoq",
            survive : "tirik qolmoq",
            upset : "xafa, tushkun",
            voice : "ovoz, tovush",
            weather :" ob-havo",
            wise : "aqilli, dono",
        },

        {
           
            announce : "e'lon qilmoq",
            beside : "yonma-yon",
            challenge :" qiyinchilik",
            claim :"tasdiqlamoq",
            condition :" holat, ahvol",
            contribute : "hissa qo'shmoq",
            difference : "farq, tafovut",
            divide : "taqsimlamoq, bo'lmoq",
            expert : "eskpert, mutaxassis",
            famous :" mashxur",
            force :" kuch, qudrat",
            harm : "jabr, jarohat",
       
            peace : "tinchlik",
            prince : "shaxzoda",
            protect : "himoya qilmoq",
            sense : "his qilmoq",
          
            therefore :" shuning uchun",
        },

        {
            accept : "qabul qilmoq",
            arrange :" tartibga keltirmoq",
            attend :" bormoq, qatnashmoq",
            balance : "muvozanat saqlamoq",
            contrast :" taqqoslash",
            encourage :" ruhlantirmoq",
            familiar : "tanish, qadirdon",
            grab :" uzmoq, olmoq",
          
          
            necessary :" kerak, zarur",
            pattern :" uslub, yo'nalish",
            propose : "taklif qilmoq",
            purpose :" maqsad",
            release :" qo'yib yubormoq",
            require :" talab qilmoq",
            single : "bitta, bir dona, yolg'iz",
            success : "muvaffaqiyat",
            tear :" yirtmoq",
            theory :" nazariya",

        },
        {
          
            beach : "sohil",
            damage : "shikaslamoq",
            discover :" kashf qilmoq",
            emotion : "ruhiy kechinma",
            fix :" tuzatmoq, ta'mirlamoq",
            frank :" ochiq, samimiy",
            identify :" tanib bilmoq",
            island : "orol",
          
            perhaps : "ehtimol, balki",
            pleasant :" yoqimli",
            prevent :" to'sqinlik qilmoq",
            rock : "tosh",
            save : "asramoq, saqlamoq",
            step : "yurmoq, qadam",
            still :" haliyam",
            wave : "to'lqin, mavj",
        },

        {
        
            certain : "ishonchi komil , aniq , qatiy dadil",
            chance : "imkoniyat",
            effect : "ta'sir, samara",
            essential : "juda muhim, zarur",
            far :" uzoq, olis",
            focus : "diqqatini qaratmoq",
            function : "funksiya, vazifa",
            grass : "maysa, o't",
            guard : "qo'riqlamoq",
            image :" rasm, ko'rinish",
            immediate : "tezkor kechiktrip bolmaydigan",
            primary : "asosiy, birinchi darajali",
            proud : "fahrlanmoq",
            remain : "qolmoq",
            rest :" dam olmoq",
            separate : "alohida, ajralgan",
            site : "joy",
            tail :" dum",
            trouble : "muammo, qiyinchilik",
        },
        {
            anymore : "ortiq, boshqa",
            asleep :"uxlayotgan, uyquda",
           
            collect : "to'plamoq, yig'moq",
            compete : "musobaqalashmoq",
            conversation :" suhbat, muloqot",
            creature :" jonvor, mavjudot",
            decision :" qaror",
            either : "ikkisidan biri",
            forest :" o'rmon",
            ground : "yer",
            introduce :" tanishtirmoq",
           
            prepare : "tayyorlanmoq",
           
            
          
            spend :" o'tkazmoq, sarflash",
            strange : "g'alati, noodatiy",
            truth :" haqiqat",
            wake : "uyg'onmoq",
            
            
        },
        {
            alone : "yolg'iz",
            apartment : "kvartira",
            article : "maqola",
            artist : "rassom",
            attitude : "munosabad",
            compare : "taqqoslamoq",
            judge : "baho bermoq , hakam",
            magazine :" jurnal",
            material : "materyal, xom-ashyo",
            meal : "ovqatlanish payti, taom",
            method : "metod, usul",
           
            professional : "kasbiy, profesional",
            profit :" foyda",
            quality :" sifat",
            shape : "shakl",
            space : "bo'sh joy",
           
            symbol : "ramz, belgi",
           
        },
        {
            blood : "qon",
          
            cell :" kamera (turmada) , hujayra",
            contain : "o'z ichiga olmoq",
            correct : "to'g'ri, bexato",
            crop :" hosil, o'rim",
            demand : "talab qilmoq",
            equal :" teng, barobar",
            feed : "ovqatlantirmoq",
          
            increase : "oshirmoq, ko'tarmoq",
            lord : "lord",
            // owe : "qarz bo'lmoq",
            position :" pozitsiya, holat",
            raise : "ko'tarmoq",
            responsible : "masuliyatli , masulyatli",
            // sight : "manzara",
            spot : "joy, makon",
            structure : "tuzilish",
            whole : "barcha, butun",
        },
        {
            coach : "murabbiy, trener",
            control : "nazorat qilmoq",
            description : "ta'rif, tavsif",
            direct : "to'g'ridan-to'g'ri",
            exam : "imtihon",
            example :" misol",
            limit : "me'yor",
            local : "mahalliy",
            magical : "sehirli, sirli",
            mail : "xat, pochta",
            novel : "roman",
            outline : "reja",
            poet : "shoir",
            print : "qog'ozga tushirmoq",
       
            sheet : "varoq",
            silly : "ahmoqona",
            store : "do'kon, unvermark",
            suffer : "azoblanmoq",
            technology : "tehnologiya",
        },

        {
            across : "nargi tomoniga , orqali",
            
            characteristic :" xususiyat",
            consume : "istemol qilmoq",
            excite : "hayajonga solmoq",
            extreme : "keskin, shiddatli",
            fear : "qo'rquv",
            fortunate : "omadli",
            happen : "nasib qilmoq",
            
            mistake : "xato",
            observe : "kuzatmoq",
            opportunity : "imkoniyat",
            prize :" mukofot, sovrin",
            race : "poyga",
            realize : "fahmlamoq",
            respond : "javob qaytarmoq",
            risk : "tavakkal",
            wonder : "bilishni xoxlamoq ajablanmoq",
            yet : "haliyam",
        },
        {
            academy : "akademiya",
            ancient : "qadimiy",
            board : "taxta",
            century : "asr",
          
            concert : "konsert",
            county : "okrug",
            dictionary : "lug'at",
            exist : "mavjud bo'lmoq",
            flat : "tekis, silliq",
            gentleman : "jentlmen",
            hidden : "yashirin",
            maybe : "balki, ehtimol",
            officer : "ofitser",
            original : "asl nusxasi",
            pound : "urmoq, qoqmoq",
            process : "jarayon",
            publish : "chop etmoq",
            theater : "teatr",
            wealth : "boylik",
            
        },
        {
            appreciate : "qadrlamoq",
            available : "mavjud, bor",
            beat : "yengmoq",
          
            celebrate : "nishonlamoq",
            determine : "qaror qilmoq",
            disappear : "ko'rinmay ketmoq , yoqolmoq",
          
            fair : "xolis, adolatli",
            flow : "oqmoq",
            forward : "oldinga",
            hill : "tepalik",
            level : "daraja",
       
            puddle : "ko'lmak",
            response : "javob",
            season : "fasl, mavsum",
            solution : "yechim, javob",
            waste : "behuda sovurmoq",
            whether : "mi, yo bo'lmasa",
        },
        {
          
            communicate : "suhbat qurmoq",
            crowd : "omma, olamon",
            depend : "tegishli bo'lmoq",
            dish : "idish, tarelka",
            empty : "bo'sh",
            exact : "aniq",
            fresh : "yangi",
           
            indicate : "ko'rsatmoq",
            item : "buyum, narsa",
            offer : "taklif qilmoq",
            price : "narx",
            product : "mahsulot",
            property : "mol-mulk",
            purchase : "sotib olmoq",
            recommend : "tavsiya qilmoq",
            select : "tanlamoq",
            tool : "asbob, anjom",
            treat : "munosabatda bo'lmoq",
        },
    {
     
       
       
        captain : "kapitan",
        conclusion : "yakun, nihoya",
        doubt : "shubha",
        explore : "tadqiq etmoq",
   
        glad : "hursand",
        however : "lekin, ammo",
        injustice : "adolatsizlik",
        international : "xalqaro",
        lawyer : "huquqshunos",
        mention : "takidlamoq, eslatip o'tish",
        policy : "siyosat",
        social : "ijtimoiy",
        speech : "nutq",
        staff : "jamoa, shtat",
        toward : "sari, tomon",
        wood : "yog'och",
        
        
    }, 
    {
        achieve : "erishmoq, olmoq",
        advise : "maslahat bermoq",
        already : "allaqachon",
        basic : "oddiy, sodda",
        
        consider : "haqida o'ylamoq",
        destroy : "vayron qilmoq",
        entertain : "hursand qilmoq",
        extra : "qo'shimcha",
        goal : "maqsad",
       
     
        opinion : "fikr, mulohaza",
        real : "haqiqiy",
        reflect : "aks ettirmoq",
        regard : "deb hisoblamoq",
       
        vegetable : "sabzavot",
        war : "urush",
        worth : "arziydigan",
    },
    {
        appear : "dek tuyilmoq",
        
        brain : "miya",
        career : "ish faoliyati , martaba",
        clerk : "do'kon yordamchisi",
        effort : "harakat, urinish",
        enter : "kirmoq",
        excellent : "juda yaxshi, a'lo",
        hero : "qahramon",
        hurry : "shoshilmoq",
        inform : "habar bermoq",
        later : "keyinroq",
        leave : "tark etmoq, ketmoq",
        locate : "topmoq",
        nurse : "hamshira",
        operation : "operatsiya",
        pain : "og'riq",
        refuse : "rad etmoq",
        though : "ga qaramasdan",
        various : "turli-tuman",
    },
    {
        actual : "haqiqiy",
        amaze : "hayratda qoldirmoq",
        charge : "zaryad",
        comfort : "qulaylik",
        contact : "aloqaga chiqmoq",
        customer : "haridor",
        deliver : "elitmoq, yetkazmoq",
        gate : "darvoza",
        include : "o'z ichiga olmoq",
        manage : "boshqarmoq",
        mystery :" sir, junboq",
        occur :" sodir bo'lmoq",
        opposite : "teskari, zid",
        plate : "likop",
        receive : "qabul qilmoq",
        reward : "mukofot, sovrin",
        set : "qo'ymoq, o'rnatmoq",
        steal : "o'g'irlamoq",
        thief : "o'g'ri",
        
    },
    {
        advance : "oldinga yurmoq",
        athlete : "sportchi",
        average : "o'rtacha",
        behavior :" xulq-atvor",
        behind :" orqasida",
        course : "kurs, dars",
        lower : "pasaymoq",
        match :" mos kelmoq",
        member : "a'zo",
        mental : "aqliy",
        passenger : "yo'lovchi",
        personality : "shaxsiyat",
        poem : "she'r",
       
        remove : "olib tashlamoq",
        safety : "xavfsizlik",
        shoot : "o'q uzmoq, otmoq",
        sound : "ovoz chiqarmoq",
        swim : "suzmoq",
        web : "o'rgimchak tori",
        
    },

    {
     
        cheer : "qichqirmoq, ruhlantirmoq",
        complex : "murakkab",
        critic : "tanqidchi",
        event : "voqea, tadbir",
        exercise : "mashq qilmoq",
        fit : "mos kelmoq",
        friendship : "do'stlik",
        guide : "gid, yo'lboshchi",
       
        passage :" yo'lak",
        perform : "ijro etmoq",
        pressure : "bosm",
        probable : "ehtimol",
        public : "ijtimoiy, ommaviy",
        strike : "urmoq",
        support : "qo'llab quvatlamoq",
        task : "topshiriq, vazifa",
        term : "termin, so'z",
        unite : "birlashmoq",
    },
    {
        associate : "bog'lamoq",
        environment : "atrof-muhit",
        factory : "fabrika, zavod",
        feature : "xususiyat" ,
        instance : "misol, namuna",
        involve : "jalb qilmoq",
        medicine : "dori-darmon",
        mix : "aralashma",
        organize : "tashkil etmoq",
        period : "davr, zamon",
        populate : "yashamoq",
        produce : "ishlab chiqarmoq",
        range : "qator, miqdor",
        recognize : "tanimoq, bilmoq",
        regular : "muntazam",
        sign : "belgi, ishora",
        tip : "maslahat",
        tradition : "an'ana, udum",
        trash : "axlat",
        wide : "keng",
        
    },
    {
        advice : "maslahat",
      
        attention : "diqqat, e'tibor" ,
        attract : "tortmoq, jalb qilmoq",
        climb : "tirmashmoq, chirmashmoq",
        drop : "tomchilamoq",
        final : "oxirgi, so'ngi",
        further : "uzunroq, uzoqroq",
        imply : "nazarda tutmoq",
        maintain : "ayni holda saqlamoq",
        neither : "hech qaysisi",
        otherwise : "aks holda",
        physical : "jismoniy",
        prove : "isbotlamoq",
        react : "munosabat bildirmoq",
        ride : "haydamoq, minmoq",
        situated : "joylashgan",
        society : "jamiyat",
        standard : "standart",
        suggest : "taklif qilmoq",
    },
    {
        actually : "aslida",
        bite : "tishlash",
        coast : "sohil, qirg'oq",
        deal : "kelishuv, shartnoma",
        desert : "cho'l",
        earthquake : "zilzila",
        effective : "samarali",
        false : "xato",
        examine : "tekshirib ko'rmoq",
        gift : "sovg'a",
        hunger : "ochlik",
        imagine : "tasavvur qilmoq",
        journey : "sayohat",
        puzzle : "boshqotirma",
        quite : "juda, rosa",
        rather : "aksincha",
        specific : "aniq, muayyan",
        tour : "sayohat",
        trip : "sayohat",
        value : "qiymat, baho " ,      
    },
    {
        band : "band",
        barely : "arang , zo'rg'a",
        boring : "zerikarli",
        cancel : "bekor qilmoq",
        driveway : "tratuar, yo'lak",
        garbage : "chiqindi, axlat",
        instrument : "asbob",
        list : "ro'yxat",
        magic : "sehr, jodu",
        message : "xabar",
        notice : "xabarnoma",
        // own : "egalik qilmoq",
        predict : "bashorat qilmoq",
        professor : "professor",
        rush : "shoshmoq",
        schedule : "jadval",
        share : "bo'lishmoq",
        stage : "sahna",
        storm : "bo'ron",
        within : "ichida",
    },
    {
        advertise : "reklama qilmoq",
        // assign : "tayinlamoq",
        audience : "auditoriya",
        breakfast : "nonushta",
        competition : "musobaqa",
        cool : "salqin",
        gain : "olmoq",
        importance : "ahamiyat",
        knowledge : "bilim",
        major : "muhim",
        mean : "anglatadi",
        prefer : "afzal ko'rmoq",
        president : "prezident",
        progress : "o'sish",
        respect : "hurmat",
        rich : "boy, badavlat",
        skill : "mahorat",
        somehow : "bir amallab",
        strength : "kuch, quvvat",
        vote : "ovoz bermoq",
    },
    {
        above : "tepasida",
        ahead : "old tarafida ",
        amount : "miqdor",
        belief : "etiqod" ,
        center : "markaz",
        // common : "umumiy",
        cost : "narx turmoq",
        demonstrate : "ko'rsatmoq ",
        different : "turlicha",
        evidence : "dalil isbot",
        honesty : "odillik, oqillik",
        idiom : "ibora",
        independent : "mustaqil",
        inside : "ichki qism",
        master :" usta, master",
        memory : "xotira, yod",
        proper : "odobdan, o'rinli",
        scan : "qarab chiqmoq",
        section : "qism, bo'lim",
        surface : "yuza, sirt",
        
    }










]


// const arrNumber1 =[
//     {},

//     {
//         anxious : "xavotirlangan",
//         // awful : "juda yomon",
//         consist : "iborat bo'lmoq",
//         desire : "xoxlamoq",
//         eager : "chanqoq, sabrsiz",
//         household : "oila a'zolar",
//         intent : "maqsad, niyat",
//         landscape :" landshaft, manzara",
//         lift : "ko'tarmoq",
//         load : "yuklamoq",
//         lung : "o'pka",
//         motion : "harakat",
//         pace : "temp, sur'at",
//         polite :" muloyim, odobli",
//         possess : "egalik qilmoq",
//         rapidly : "juda tez",
//         remark : "ta'kidlamoq",
//         seek :" qidirmoq",
//         shine : "nur taratmoq",
//         spill : "to'kib yubormoq",
         
//     },
//     {
//         bring : "olib kelmoq",
//         castle : "qasr",
//         command : "buyruq bermoq",
//         counsel : "maslahat bermoq",
//         ensure : "taminlamoq",
//         explosion :" portlash",
//         jewelry : "taqinchoq",
//         land : "qo'nmoq",
//         meteor :" metiorit",
//         monster : "mahluq",
//         northern : "shimoliy",
//         remote : "olis, uzoq",
//         southern : "janubiy",
//         statue : "haykal",
//         steam : "par, bug'",
//         submit : "bo'ysunmoq",
//         temple : "ibodatxona",
//         upper : "yuqori",
//         weed : "begona o't",
//         wing : "qanot",
//     },
//     {
//         arrow : "o'q, yoy",
//         battle : "urush",
//         bow : "kamon",
//         brave : "qo'rqmas, jasur",
//         chief : "boshliq, sardor",
//         disadvantage : "kamchilik",
//         enemy : "dushman",
//         entrance : "kirish yo'li",
//         hardly : "arang, zo'rg'a",
//         intend : "niyat qilmoq",
//         laugher : "kulgi, shodlik",
//         log : "g'o'la",
//         military : "armiya",
//         obey :" bo'ysunmoq",
//         secure : "qo'lga kiritmoq",
//         steady : "barqaror",
//         trust : "ishonmoq",
//         twist : "aylantirib bog'lamoq",
//         unless : "magan taqdirda",
//         weapon : "qurol-yarog'"
        
        
//     }

 



// ]







let i =0




headerEssential.forEach(essential=> {
    essential.addEventListener('click', (e)=> {
        
       let cardEnd = e.target.textContent
       console.log(cardEnd)
       let cardNumber = cardEnd[cardEnd.length-1]
       console.log(cardNumber)
       if(cardNumber.includes(1)){
        cardNumber=arrNumber
       }
        if(cardNumber == 2){
        cardNumber=arrNumber1
       }
       if(cardNumber == 3){
        cardNumber=arrNumber2
       }
       console.log(cardNumber)
       
       
       sectionWord.classList.add('active')

       let tessNum =cardNumber[1]
       let objNum = Object.entries(tessNum)
       let enterObj = objNum[i][0]    //// 1
       console.log(enterObj)
       console.log(objNum)
       console.log(tessNum);
       
       console.log(cardNumber)

       // 918   925





       
       headerSpan.forEach(heaSpan=> {
         let i=0
           heaSpan.addEventListener('click', (e)=> {
            e.preventDefault()
          
            let wordSpan = e.target.textContent
            console.log(wordSpan)
            let headSpan = wordSpan.slice(5)
            let headNum = Number(headSpan)
            console.log(headNum)






            


         

          if(wordSpan.includes(headNum) &&  cardNumber==arrNumber){
            //
                wordSpan=arrNumber[headNum]
              
          }
           else if(wordSpan.includes(headNum) &&  cardNumber==arrNumber1){
            //
                wordSpan=arrNumber1[headNum]
              
          }
          else if(wordSpan.includes(headNum) &&  cardNumber==arrNumber2){
            //
                wordSpan=arrNumber2[headNum]
              
          }
          
       //914  921
       

          let enterWord = Object.entries(wordSpan)
          let enterPost =enterWord[0][i]   // i qoshildi
          console.log(enterPost) // ingliz
          console.log(wordSpan)

          

          let wordSpanEnter = Object.entries(wordSpan)
          let wordEnter = wordSpanEnter[i][1]
          console.log(wordEnter) // o'zbek
          console.log(wordSpanEnter[0][0])


          formSelect.innerHTML='';

          for (let index = 0; index < wordSpanEnter.length; index++) {
           

            let option = document.createElement('option');
  option.value = wordSpanEnter[index][0];
  option.textContent = `${wordSpanEnter[index][0]} - ${wordSpanEnter[index][1]}`;

  formSelect.appendChild(option);

            console.log(wordSpanEnter[index][0])
            console.log(wordSpanEnter[index][1])
  
            
          }

          


       



        //   let textVoice = `${wordEnter} so'zini inglizcha tarjimasini ayting va sizning javobingiz lu'gatning pastki qismida yoziladi`
        //   console.log(textVoice)
        //   playText(textVoice)

    
            console.log(headNum)


            sectionAnswer.textContent = wordSpanEnter[i][1]


           
        
            sectionWord.classList.remove('active')
            sectionAbout.classList.add('active')
            headerAbout.style.display ='none'


        
            /// main codes




            

               

function playText(text){
    const utterance =  new  SpeechSynthesisUtterance(text)
    // utterance.rate = speedInput.value || 1
    utterance.lang= 'uz-UZB'
    speechSynthesis.speak(utterance)
    

    }

    
//     function speakingPause(){
//         speechSynthesis.resume()
//         speechSynthesis.cancel()
// }
// speakingPause()



//  function addNumber(){
//  btnNumber.addEventListener('click', ()=> {

//  })

//  }
//  addNumber()



recognition.addEventListener('result', (e)=> {

    const text =Array.from(e.results)
    .map(result=> result[0])
    .map(result => result.transcript)
    .join('')
    console.log(text)


    p.innerText = text

     texts.appendChild(p)



  

function sulton(){

if(wordSpanEnter[i][0]== text){
    i++
    if(i>=wordSpanEnter.length){
        i=0
    }
sectionAnswer.textContent = wordSpanEnter[i][1]


playText(wordSpanEnter[i][1])   


}




}
sulton()




//  if(e.results[0].isFinal){
//       p= document.createElement('p')
        
//     }



 })

recognition.addEventListener('end', ()=> {
    recognition.start()
})

recognition.start()









       
       



                /// main codes



       
           })
       
       })
       
    })
})


































/*

const texts = document.querySelector('.texts p')

const inputType =document.querySelector('.inputType')
const btnNumber = document.querySelector('.btn')
const btnStop = document.querySelector('.btnStop')



const textQuestion = document.querySelector('.text-question')
const btn = document.querySelector('.btn')



window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

const recognition = new window.SpeechRecognition()
recognition.interimResults =true

let p = document.createElement('p')




    
const textMain = document.querySelector('.text-main')
const textAnswer = document.querySelector('.text-answer')



const arrNumber =[ 
     {},

    

        {
            afraid:'Qorqmoq',
            agree:'Rozi bolmoq',
            angry:'Jahldor',
            attack: 'Hujum qilmoq',
            bottom: 'Tagi , pastki',
            clever: 'Aqilli , ziyrak',
            cruel: 'shafqatsiz',
            finally: 'ahiri , vanihoyat',
            hide: 'yashirinmoq',
            hunt: 'ov qilmoq',
            middle: "o'rta , markaz",
            moment: 'sekund',
            promise: 'vada bermoq',
            reply: 'javob bermoq',
            safe: 'hafsiz , behatar',
            trick: 'hiyla , nayrang',
            well: 'yaxshi',
            appropriate :" mos, to'g'ri",
            avoid :" yaqinlashmaslik",
            behave :" o'zini tutmoq",
          
            concern :" tashvish, g'am",
            content : "hursand, shod",
            expect :" umid qilmoq, kutmoq",
            frequently :" tez- tez",
            
        },
     
 
    
   {
    carefully:'etibor bilan',
    chemical: 'kimyoviy modda',
    evil:'yomon , yovuz',
    experiment: 'tajriba , sinov',
    kill: "o'ldirmoq",
    laboratory: 'labaratoriya',
    noise: 'shovqin',
    project: 'loyiha',
    secret: 'sir',
    smell: 'hidlamoq',
    terrible: 'juda yomon',
    worse: 'yomonroq',
    },

       {
        alien : "o'zga sayyoralik",
        among :"orasida, ichida",
        chart :" grafik jadval, diagramma",
       
        comprehend : "tushunmoq",
        ever : "qachon bo'lsa ham ",
        fail : "muvaffaqiyatsizlikka uchramoq ",
        friendly :" do'stona, mehribon",
        
        instead: "o'rniga",
        library :"kutubxona ",
        planet :"sayyora, sayyora",
        report : "hisobot",
        several :" bir nechta, bir talay",
    
        suddenly :" to'satdan, birdaniga",
        suppose :" faraz qilmoq ",
        universe :" olam, koinot",
        view : "ko'rmoq, qaramoq",
    
        
    },
    
 {
    appropriate :" mos, to'g'ri",
    avoid :" yaqinlashmaslik",
   
  
    concern :" tashvish, g'am",
    content : "hursand, shod",
    expect :" umid qilmoq, kutmoq",
    frequently :" tez- tez",
    habit :" odat",
    instruct : "ko'rsatma bermoq",
  
    none : "hech qancha",
    patient : "sabrli, toqatli",
    positive :" ijobiy",
    punish :" jazolamoq",
    represent :" vakil bo'lmoq",
    shake :" silkitmoq, siltamoq",
    spread :" tarqatmoq, surkamoq",
    stroll :" sayir qilmoq",
        
    },
    
 {
    
        badly : "yomon, jiddiy",
     
        error :" xato",
        experience : "taassurot, kechinma",
        field : "keng maydon, dala",
        hurt :" jarohat yetkazmoq",
        judgment :" qaror, fikr",
        likely :" ehtimol, balki",
        normal : "odatiy, har doimgi",
        relax :" dam olmoq",
        reside :" istiqomat qilmoq",
        result :" natija, oqibat",
        roll :" yumalatmoq",
        since :" dan beri",
        wild :" yovvoyi",
            
        },


        {
            advantage :" ustun jihat, foyda",
            
            choice : "tanlash imkoniyati",
            community : "jamiyat, jamoa",
           
            distance : "masofa",
            escape :" qochib qutilmoq",
            face : "duch kelmoq",
            follow :" ergashmoq, amal qilmoq",
           
           
            individual :" indvid, kishi",
            pet : "uy hayvoni",
            reach : "yetib bormoq",
            return : "qaytib kelmoq",
            survive : "tirik qolmoq",
            upset : "xafa, tushkun",
            voice : "ovoz, tovush",
            weather :" ob-havo",
            wise : "aqilli, dono",
        },

        {
           
            announce : "e'lon qilmoq",
            beside : "yonma-yon",
            challenge :" qiyinchilik",
            claim :"tasdiqlamoq",
            condition :" holat, ahvol",
            contribute : "hissa qo'shmoq",
            difference : "farq, tafovut",
            divide : "taqsimlamoq, bo'lmoq",
            expert : "eskpert, mutaxassis",
            famous :" mashxur",
            force :" kuch, qudrat",
            harm : "jabr, jarohat",
       
            peace : "tinchlik",
            prince : "shaxzoda",
            protect : "himoya qilmoq",
            sense : "his qilmoq",
          
            therefore :" shuning uchun",
        },

        {
            accept : "qabul qilmoq",
            arrange :" tartibga keltirmoq",
            attend :" bormoq, qatnashmoq",
            balance : "muvozanat saqlamoq",
            contrast :" katta farq",
            encourage :" ruhlantirmoq",
            familiar : "tanish, qadirdon",
            grab :" uzmoq, olmoq",
          
          
            necessary :" kerak, zarur",
            pattern :" uslub, yo'nalish",
            propose : "taklif qilmoq",
            purpose :" maqsad",
            release :" qo'yib yubormoq",
            require :" talab qilmoq",
            single : "bitta, bir dona, yolg'iz",
            success : "muvaffaqiyat",
            tear :" yirtmoq",
            theory :" nazariya",

        },
        {
          
            beach : "sohil",
            damage : "shikaslamoq",
            discover :" kashf qilmoq",
            emotion : "ruhiy kechinma",
            fix :" tuzatmoq, ta'mirlamoq",
            frank :" ochiq, samimiy",
            identify :" tanib bilmoq",
            island : "orol",
          
            perhaps : "ehtimol, balki",
            pleasant :" yoqimli",
            prevent :" to'sqinlik qilmoq",
            rock : "tosh",
            save : "asramoq, saqlamoq",
            step : "yurmoq, qadam",
            still :" haliyam",
          
          
            wave : "to'lqin, mavj",
        },

        {
        
            certain : "ishonchi komil",
            chance : "imkoniyat",
            effect : "ta'sir, samara",
            essential : "juda muhim, zarur",
            far :" uzoq, olis",
            focus : "diqqatini qaratmoq",
            function : "funksiya, vazifa",
            grass : "maysa, o't",
            guard : "qo'riqlamoq",
            image :" rasm, ko'rinish",
            immediate : "tezkor",
            primary : "asosiy, birinchi darajali",
            proud : "fahrlanmoq",
            remain : "qolmoq",
            rest :" dam olmoq",
            separate : "alohida, ajralgan",
            site : "joy",
            tail :" dum",
            trouble : "muammo, qiyinchilik",
        },
        {
            anymore : "ortiq, boshqa",
            asleep :"uxlayotgan, uyquda",
           
            collect : "to'plamoq, yig'moq",
            compete : "musobaqalashmoq",
            conversation :" suhbat, muloqot",
            creature :" jonvor, mavjudot",
            decision :" qaror",
            either : "ikkisidan biri",
            forest :" o'rmon",
            ground : "yer",
            introduce :" tanishtirmoq",
           
            prepare : "tayyorlanmoq",
            sail :" qayiqda suzmoq",
          
            spend :" o'tkazmoq, sarflash",
            strange : "g'alati, noodatiy",
            truth :" haqiqat",
            wake : "uyg'onmoq",
            
            
        },
        {
            alone : "yolg'iz",
            apartment : "kvartira",
            article : "maqola",
            artist : "rassom",
            attitude : "munosabad",
            compare : "taqqoslamoq",
            judge : "baho bermoq , hakam",
            magazine :" jurnal",
            material : "materyal, xom-ashyo",
            meal : "ovqatlanish payti, taom",
            method : "metod, usul",
           
            professional : "kasbiy, profesional",
            profit :" foyda",
            quality :" sifat",
            shape : "shakl",
            space : "bo'sh joy",
           
            symbol : "ramz, belgi",
           
        },
        {
            blood : "qon",
          
            cell :" kamera (turmada) , hujayra",
            contain : "o'z ichiga olmoq",
            correct : "to'g'ri, bexato",
            crop :" hosil, o'rim",
            demand : "talab qilmoq",
            equal :" teng, barobar",
            feed : "ovqatlantirmoq",
          
            increase : "oshirmoq, ko'tarmoq",
            lord : "lord",
            // owe : "qarz bo'lmoq",
            position :" pozitsiya, holat",
            raise : "ko'tarmoq",
            responsible : "masuliyatli",
            sight : "manzara",
            spot : "joy, makon",
            structure : "tuzilish",
            whole : "barcha, butun",
        },
        {
            coach : "murabbiy, trener",
            control : "nazorat qilmoq",
            description : "ta'rif, tavsif",
            direct : "to'g'ridan-to'g'ri",
            exam : "imtihon",
            example :" misol",
            limit : "me'yor",
            local : "mahalliy",
            magical : "sehirli, sirli",
            mail : "xat, pochta",
            novel : "roman",
            outline : "reja",
            poet : "shoir",
            print : "qog'ozga tushirmoq",
            scene : "sahna, epizod",
            sheet : "varoq",
            silly : "ahmoqona",
            store : "do'kon, unvermark",
            suffer : "azoblanmoq",
            technology : "tehnologiya",
        },

        {
            across : "nargi tomoniga",
            breathe : "nafas olmoq",
            characteristic :" xususiyat",
            consume : "istemol qilmoq",
            excite : "hayajonga solmoq",
            extreme : "keskin, shiddatli",
            fear : "qo'rquv",
            fortunate : "omadli",
            happen : "nasib qilmoq",
            length : "uzunlik",
            mistake : "xato",
            observe : "kuzatmoq",
            opportunity : "imkoniyat",
            prize :" mukofot, sovrin",
            race : "poyga",
            realize : "fahmlamoq",
            respond : "javob qaytarmoq",
            risk : "tavakkal",
            wonder : "bilishni xoxlamoq",
            yet : "haliyam",
        }




]

 
//// bu yerdan  ---->

let i=1


let name = arrNumber[i]

btnNumber.addEventListener('click', (e)=> {
e.preventDefault()
    console.log(e)
    let i =0

 let abbos = arrNumber[inputType.value]
 let tihir = Object.entries(abbos)

 

 textAnswer.textContent = tihir[i][1]
 

 

recognition.addEventListener('result', (e)=> {

    const text =Array.from(e.results)
    .map(result=> result[0])
    .map(result => result.transcript)
    .join('')
    let card = text.slice(0)
    
    console.log(card)
    
  


    // p.innerText = text

    // texts.appendChild(p)



  
    




function sulton(){
   

if(tihir[i][0]== text){
    i++
    if(i>=tihir.length){
        i=0
    }
textAnswer.textContent = tihir[i][1]


playText(tihir[i][1])  



}

}
sulton()





 if(e.results[0].isFinal){
      p= document.createElement('p')
        
    }

})

})


// let ism = Object.entries(name)
// console.log(ism)



// console.log('akbar', name) 


// let number = Math.floor(Math.random()*ism.length)


// textAnswer.textContent = ism[i][1]




function playText(text){
    const utterance =  new  SpeechSynthesisUtterance(text)
    // utterance.rate = speedInput.value || 1
    utterance.lang= 'uz-UZB'
    speechSynthesis.speak(utterance)
    

    }

    
    function speakingPause(){
        speechSynthesis.resume()
        speechSynthesis.cancel()
}
speakingPause()



//  function addNumber(){
//  btnNumber.addEventListener('click', ()=> {

//  })

//  }
//  addNumber()



// recognition.addEventListener('result', (e)=> {

//     const text =Array.from(e.results)
//     .map(result=> result[0])
//     .map(result => result.transcript)
//     .join('')
//     console.log(text)


//     p.innerText = text

//     // texts.appendChild(p)



  

// function sulton(){

// if(ism[i][0]== text){
//     i++
//     if(i>=ism.length){
//         i=0
//     }
// textAnswer.textContent = ism[i][1]


// // playText(ism[i][1])   


// }




// }
// sulton()




//  if(e.results[0].isFinal){
//       p= document.createElement('p')
        
//     }



// })

recognition.addEventListener('end', ()=> {
    recognition.start()
})

recognition.start()

*/