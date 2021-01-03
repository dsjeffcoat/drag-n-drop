const fillObj = document.querySelector('.fill')
const emptyBoxes = document.querySelectorAll('.empty')

fillObj.addEventListener('dragstart', dragStart)
fillObj.addEventListener('dragend', dragEnd)


for (const empty of emptyBoxes) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}
// Dragging Functionality

function dragStart() {
    // console.log('drag start')
    this.className += ' hold'
    setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd() {
    // console.log('drag end')
    this.className = 'fill'
}

function dragOver(e) {
    // console.log('drag over')
    e.preventDefault()
}

function dragEnter(e) {
    // console.log('drag enter')
    e.preventDefault()
    this.className += ' hovered'
}

function dragLeave() {
    // console.log('drag leave')
    this.className = 'empty'
}

function dragDrop() {
    // console.log('drag drop')
    this.className = 'empty'
    this.append(fillObj)
}