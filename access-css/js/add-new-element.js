alert('Click OK to add an element')

newdiv    = document.createElement('div')
newdiv.id = 'NewDiv'
document.body.appendChild(newdiv)

S(newdiv).border = 'solid 1px red'
S(newdiv).width  = '100px'
S(newdiv).height = '100px'
newdiv.innerHTML = "I'm a new object inserted in the DOM"
tmp              = newdiv.offsetTop

alert('Click OK to remove the element')
pnode = newdiv.parentNode
pnode.removeChild(newdiv)
tmp = pnode.offsetTop
