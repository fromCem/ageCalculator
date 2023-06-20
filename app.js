const nowDate = new Date()
const fullYear = nowDate.getFullYear()
const month = nowDate.getMonth()
const day = nowDate.getDate()
const date = nowDate.getDay()
let fark1 = 0, fark2 = 0
let yıl, ay, gun
let now
let girilenGun;

let days = [
    'Pazar',
    'Pazartesi',
    'Salı',
    'Çarşamba',
    'Perşembe',
    'Cuma',
    'Cumartesi'
]; 
let months = [
    'Ocak',
    'Şubat',
    'Mart',
    'Nisan',
    'Mayıs',
    'Haziran',
    'Temmuz',
    'Ağustos',
    'Eylül',
    'Ekim',
    'Kasım',
    'Aralık'
]

const formButton = document.querySelector('#formButton')
const inputYear = document.querySelector('#inputYear')
const inputMonth = document.querySelector('#inputMonth')
const inputDay = document.querySelector('#inputDay')
const showYıl = document.querySelector('#yıl')
const showAy = document.querySelector('#ay')
const showGun = document.querySelector('#gun')

function dogruGiris() {
    const giris = (parseInt(inputYear.value) <= fullYear &&
        parseInt(inputMonth.value) >= 1 &&
        parseInt(inputMonth.value) <= 12 &&
        parseInt(inputDay.value) >= 1 &&
        parseInt(inputDay.value) <= 31)

    if (giris) {
        fark();
    showYıl.style.display = "block"
    showAy.style.display = "block"
    showGun.style.display = "block"
    } else {
        inputClear()
        alert("Yanlış Giriş!")
        
    }
}
    function fark() {
    now = new Date(fullYear, month, day)
    const dogum = new Date(inputYear.value, inputMonth.value - 1, inputDay.value)
    girilenGun = dogum.getDay()
    fark1 = now.getTime() - dogum.getTime()
    fark2 = fark1 / (1000 * 60 * 60 * 24)
    console.log(`Şu an: ${fullYear}-${month + 1}-${day} ${days[date]}`)
    console.log("Girilen tarih: " + `${inputYear.value}-${inputMonth.value}-${inputDay.value} ${days[girilenGun]}`)
    console.log("İki tarih arasındaki fark: " + fark2) 
    calculateYearMonthDay(fark2)
    //console.log(days[girilenGun])
    // console.log("Yıl: " + yıl)
    // console.log("Ay: " + ay)
    // console.log("Gün: " + gun)
}

function inputClear() {
    inputYear.value = ''
    inputMonth.value = ''
    inputDay.value = ''
    console.clear()
    showYıl.style.display = "none"
    showAy.style.display = "none"
    showGun.style.display = "none"
}

function calculateYearMonthDay(totalDays) {
    yıl = Math.floor(totalDays / 365);
    ay = Math.floor((totalDays % 365) / 30)
    gun = Math.floor((totalDays % 365) % 30)
    showYıl.textContent = yıl + ' Yıl'
    showAy.textContent = ay + ' Ay'
    showGun.textContent = gun + ' Gun'
}

formButton.addEventListener("click", function () {
    dogruGiris();
});