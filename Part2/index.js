console.log('the house always wins')
const id = document.getElementById('idInput')
const color = document.getElementById('colorInput')

const setCard = () => {
    const card = document.getElementById(id.value)
    console.log(card)
    card.style.color = color.value;
}