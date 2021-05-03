window.addEventListener('DOMContentLoaded', function () {
    var countryCodes = {
        RU: {
            heroName: "Антон Кириленко",
            commentName1:"Татьяна Прохорова",
            commentName2:"Евгений Мартынов",
            commentName3:"Юлия Римская",
        },
        KZ: {
            heroName: "Шакирим Ниязов",
            commentName1:"Нагиша Омарова",
            commentName2:"Ерден Ахметов",
            commentName3: "Гульдара Алиева",
        },
    };
    
    
    var change = function change(e) {
        var heroName = document.querySelectorAll('.hero-name'),
            commentName1 = document.querySelectorAll(".comment-name1"),
            commentName2 = document.querySelectorAll(".comment-name2"),
            commentName3 = document.querySelectorAll(".comment-name3");
    
            heroName.forEach(function(elem) {
                if (elem) {
                    elem.innerHTML = countryCodes[e].heroName;
                }  
            });
            commentName1.forEach(function(elem) {
                if (elem) {
                    elem.innerHTML = countryCodes[e].commentName1;
                }  
            });
            commentName2.forEach(function(elem) {
                if (elem) {
                    elem.innerHTML = countryCodes[e].commentName2;
                }  
            });
            commentName3.forEach(function(elem) {
                if (elem) {
                    elem.innerHTML = countryCodes[e].commentName3;
                }  
            }); 
    }
    selectors.forEach(function (elem) {
        elem.addEventListener('change', function (e) {
            if(Object.keys(countryCodes).includes(e.target.value)) {
                change(e.target.value);
            }
        });
    });
    
    if(Object.keys(countryCodes).includes(selectors[0].value)) {
        change(selectors[0].value);
    }
  })