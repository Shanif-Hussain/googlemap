export function AcceptArabicCharactersOnly(evt) { if (!/[\u0600-\u06FF]/.test(evt.key)) { evt.preventDefault(); } }

export function AcceptEnglishCharactersOnly(evt) { if (!/[A-Za-z ]/g.test(evt.key)) { evt.preventDefault(); } }

export function IsNumberKey(evt) { if (!/[0-9]/.test(evt.key)) { evt.preventDefault(); } }

export function generate_randomnumber(length) {
    var arr = [];
    var n;
    for (var i = 0; i < length; i++) {
        do
            n = Math.floor(Math.random() * 20 + 1);
        while (arr.indexOf(n) !== -1)

        arr[i] = n;
    }

    return arr.toString().replace(/,/g, "");
}

export function generate_randomstring(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export function getdate() {
    var d = new Date,
        dformat = d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear() + '_' + d.getHours() + '-' + d.getMinutes() + 1 + '-' + d.getSeconds();

    return dformat;
}

export function ConvertToEnglishdigit(arDigit) {
    var newValue = "";
    for (var i = 0; i < arDigit.length; i++) {
        var ch = arDigit.charCodeAt(i);
        if (ch >= 1776 && ch <= 1785) {// PERSIAN
            var newChar = ch - 1728;
            newValue = newValue + String.fromCharCode(newChar);
        }
        else if (ch >= 1632 && ch <= 1641) {// ARABIC
            var newChar = ch - 1584;
            newValue = newValue + String.fromCharCode(newChar);
        }
        else {
            newValue = newValue + String.fromCharCode(ch);
        }
    }
    return newValue;
}//("٠١٢٣٤٥٦٧٨٩")

