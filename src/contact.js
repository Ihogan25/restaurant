import {p, subTitle, title, card, div} from './elements.js'



let contact = title('Contact');

let pOne = p('dewifieuw f ifiaeihf iwef wifiawhf iwhe fiwf wiehfiwf aiwe fweah fhweihhfiewfia  ef hawi fiwaehfi awfihieafh iewfh iwwfgoeskgro ero gog korka gogkaowe gr')
let subOne = subTitle('Ehakdnw')
let cardOne = card(subOne ,pOne)

let pTwo = p('dewifieuw f ifiaeihf iwef wifiawhf iwhe fiwf wiehfiwf aiwe fweah fhweihhfiewfia  ef hawi fiwaehfi awfihieafh iewfh iwwfgoeskgro ero gog korka gogkaowe gr')
let subTwo = subTitle('Ehakdnw')
let cardTwo = card(subTwo, pTwo)

let pThree = p('dewifieuw f ifiaeihf iwef wifiawhf iwhe fiwf wiehfiwf aiwe fweah fhweihhfiewfia  ef hawi fiwaehfi awfihieafh iewfh iwwfgoeskgro ero gog korka gogkaowe gr')
let subThree = subTitle('Ehakdnw')
let cardThree= card(subThree, pThree)


let contactInfo = div(contact, cardOne, cardTwo, cardThree);

export default contactInfo;