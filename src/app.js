console.log("Merhaba ")
//js type safe değildir.

let dolarBugun=9.30

let dolarDun=9.20

{
    let dolarDun=9.10

}

console.log(dolarDun)

const euroDun=11.2 // böyle tanımladıktan sonra başka değer atayamayız. const sabit demek
//euroDun=11
console.log(euroDun)

let konutKredileri=["Konut kredisi","Emlak Kredisi","Kamu Konut Kresisi","Özel Konut Kredisi"]
console.log("<ul>")

for (let i = 0; i < konutKredileri.length ;i++) {
    console.log("<li>" + konutKredileri[i] +"</li>")
    
}

console.log("</ul>")





console.log(konutKredileri)

