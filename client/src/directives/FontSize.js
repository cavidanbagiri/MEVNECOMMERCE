
const FontSize = {

    beforeMount:(el, binding)=>{
        el.style.fontSize = binding.value+'px';
    }

}

export default FontSize;
