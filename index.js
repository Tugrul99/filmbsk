const noSentences = [
    'Emin misin ? ',
    'Başak...',
    'Son kararın mı? ',
    'Eğlenebileceğimize söz veriyorum.',
    'Kızılcık şerbetinden daha eglenceli olacak.',
    'Dizi de izleyebiliriz..',
    'Çok fazla dizi önerim var.',
    'Bir kez daha düşün..'
]

document.addEventListener('DOMContentLoaded', function () {
    // Başlangıç boyutlarını tanımla
    let fontSize = 16; // px
    let paddingVertical = 10; // px
    let paddingHorizontal = 20; // px
    let sentenceIndex = 0; // Cümle dizini

    // class kullanarak elemanı seç
    document.querySelector('.noButton').addEventListener('click', function () {
        fontSize += 10; // Her tıklamada font boyutunu artır
        paddingVertical += 25; // Her tıklamada dikey padding'i artır
        paddingHorizontal += 50; // Her tıklamada yatay padding'i artır

        // Yeni değerleri uygula
        var yesButton = document.querySelector('.yesButton'); // class kullanarak elemanı seç
        yesButton.style.fontSize = fontSize + 'px';
        yesButton.style.padding = `${paddingVertical}px ${paddingHorizontal}px`;

        // noButton metnini güncelle
        var noButton = document.querySelector('.noButton');
        if (sentenceIndex < noSentences.length) {
            noButton.textContent = noSentences[sentenceIndex++];
        } else {
            sentenceIndex = 0; // Dizi sonuna ulaşıldığında sıfırla
            noButton.textContent = noSentences[sentenceIndex++];
        }
    });
});

