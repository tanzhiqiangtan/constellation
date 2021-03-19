export default {
  mounted(el,binding) {
    const {className,currentName,currentIndex}=binding.value
    const navItems=el.querySelectorAll(`.${className}`)
    navItems[currentIndex].className+=` ${currentName}` 
  },
  
  // beforeUpdate(el,binding) {
  //   console.log('beforeUpdate')
  //   console.log(el)
  //   console.log(binding)
  // },
  updated(el,binding) {
    const {currentIndex:oldIndex} = binding.oldValue
    const {className,currentName,currentIndex}=binding.value
    const navItems=el.querySelectorAll(`.${className}`)
    navItems[currentIndex].className+=` ${currentName}`
    navItems[oldIndex].className= className

  }
}