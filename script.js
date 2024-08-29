let mValue = prompt('Digite um valor em metros ')
let chooseValue = prompt(`Agora, selecione uma opção abaixo para converter, entre:
1 - milímetro (mm)
2 - centímetro (cm)
3 - decímetro (dm)
4 - decâmetro (dam)
5 - hectômetro (hm)
6 - quilômetro (km)`)

switch(chooseValue) {
    case 'milímetro':
        alert(`${mValue}m equivale à ${mValue * 1000}mm`)
        break
    case 'centímetro':
        alert(`${mValue}m equivale à ${mValue * 100}cm`)
        break
    case 'decímetro':
        alert(`${mValue}m equivale à ${mValue * 10}dm`)
        break
    case 'decâmetro':
        alert(`${mValue}m equivale à ${mValue / 10}dam`)
        break
    case 'hectômetro':
        alert(`${mValue}m equivale à ${mValue / 100}hm`)
        break
    case 'quilômetro':
        alert(`${mValue}m equivale à ${mValue / 1000}km`)
        break
    default:
        alert('Não deu certo.')
}