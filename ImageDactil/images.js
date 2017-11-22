"use strict";

var alphabetImageNames = {
    "а": "alfavit_images/L (1).png",
    "б": "alfavit_images/L (2).png",
    "в": "alfavit_images/L (3).png",
    "г": "alfavit_images/L (4).png",
    "д": "alfavit_images/L (5).png",
    "е": "alfavit_images/L (6).png",
    "ё": "alfavit_images/L (33).png",
    "ж": "alfavit_images/L (7).png",
    "з": "alfavit_images/L (8).png",
    "и": "alfavit_images/L (9).png",
    "й": "alfavit_images/L (10).png",
    "к": "alfavit_images/L (11).png",
    "л": "alfavit_images/L (12).png",
    "м": "alfavit_images/L (13).png",
    "н": "alfavit_images/L (14).png",
    "о": "alfavit_images/L (15).png",
    "п": "alfavit_images/L (16).png",
    "р": "alfavit_images/L (17).png",
    "с": "alfavit_images/L (18).png",
    "т": "alfavit_images/L (19).png",
    "у": "alfavit_images/L (20).png",
    "ф": "alfavit_images/L (21).png",
    "х": "alfavit_images/L (22).png",
    "ц": "alfavit_images/L (23).png",
    "ч": "alfavit_images/L (24).png",
    "ш": "alfavit_images/L (25).png",
    "щ": "alfavit_images/L (26).png",
    "ъ": "alfavit_images/L (27).png",
    "ы": "alfavit_images/L (28).png",
    "ь": "alfavit_images/L (29).png",
    "э": "alfavit_images/L (30).png",
    "ю": "alfavit_images/L (31).png",
    "я": "alfavit_images/L (32).png",
    "empty": "empty.png"
};

// preload
for (var imageName in alphabetImageNames) {
    var image = new Image();
    image.src = alphabetImageNames[imageName];
}
