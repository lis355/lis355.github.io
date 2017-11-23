"use strict";

var alphabetImageNames = {
    "а": "https://media.spreadthesign.com/alphabet/209.jpg",//"alfavit_images/L (1).png",
    "б": "https://media.spreadthesign.com/alphabet/210.jpg",//"alfavit_images/L (3).png",
    "в": "https://media.spreadthesign.com/alphabet/211.jpg",//"alfavit_images/L (4).png",
    "г": "https://media.spreadthesign.com/alphabet/212.jpg",//"alfavit_images/L (2).png",
    "д": "https://media.spreadthesign.com/alphabet/213.jpg",//"alfavit_images/L (5).png",
    "е": "https://media.spreadthesign.com/alphabet/214.jpg",//"alfavit_images/L (6).png",
    "ё": "https://media.spreadthesign.com/alphabet/215.jpg",//"alfavit_images/L (33).png",
    "ж": "https://media.spreadthesign.com/alphabet/216.jpg",//"alfavit_images/L (7).png",
    "з": "https://media.spreadthesign.com/alphabet/217.jpg",//"alfavit_images/L (8).png",
    "и": "https://media.spreadthesign.com/alphabet/218.jpg",//"alfavit_images/L (9).png",
    "й": "https://media.spreadthesign.com/alphabet/219.jpg",//"alfavit_images/L (10).png",
    "к": "https://media.spreadthesign.com/alphabet/220.jpg",//"alfavit_images/L (11).png",
    "л": "https://media.spreadthesign.com/alphabet/221.jpg",//"alfavit_images/L (12).png",
    "м": "https://media.spreadthesign.com/alphabet/222.jpg",//"alfavit_images/L (13).png",
    "н": "https://media.spreadthesign.com/alphabet/223.jpg",//"alfavit_images/L (14).png",
    "о": "https://media.spreadthesign.com/alphabet/224.jpg",//"alfavit_images/L (15).png",
    "п": "https://media.spreadthesign.com/alphabet/225.jpg",//"alfavit_images/L (16).png",
    "р": "https://media.spreadthesign.com/alphabet/226.jpg",//"alfavit_images/L (17).png",
    "с": "https://media.spreadthesign.com/alphabet/227.jpg",//"alfavit_images/L (18).png",
    "т": "https://media.spreadthesign.com/alphabet/228.jpg",//"alfavit_images/L (19).png",
    "у": "https://media.spreadthesign.com/alphabet/229.jpg",//"alfavit_images/L (20).png",
    "ф": "https://media.spreadthesign.com/alphabet/230.jpg",//"alfavit_images/L (21).png",
    "х": "https://media.spreadthesign.com/alphabet/231.jpg",//"alfavit_images/L (22).png",
    "ц": "https://media.spreadthesign.com/alphabet/232.jpg",//"alfavit_images/L (23).png",
    "ч": "https://media.spreadthesign.com/alphabet/233.jpg",//"alfavit_images/L (24).png",
    "ш": "https://media.spreadthesign.com/alphabet/234.jpg",//"alfavit_images/L (25).png",
    "щ": "https://media.spreadthesign.com/alphabet/235.jpg",//"alfavit_images/L (26).png",
    "ъ": "https://media.spreadthesign.com/alphabet/236.jpg",//"alfavit_images/L (27).png",
    "ы": "https://media.spreadthesign.com/alphabet/237.jpg",//"alfavit_images/L (28).png",
    "ь": "https://media.spreadthesign.com/alphabet/238.jpg",//"alfavit_images/L (29).png",
    "э": "https://media.spreadthesign.com/alphabet/239.jpg",//"alfavit_images/L (30).png",
    "ю": "https://media.spreadthesign.com/alphabet/240.jpg",//"alfavit_images/L (31).png",
    "я": "https://media.spreadthesign.com/alphabet/241.jpg",//"alfavit_images/L (32).png",
    "empty": "empty.png"
};

// preload
for (var imageName in alphabetImageNames) {
    var image = new Image();
    image.src = alphabetImageNames[imageName];
}
