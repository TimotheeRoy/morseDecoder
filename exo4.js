const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}

const morseToLatin = {
	'-': "T",
	'--': "M",
	'---': "O",
	'--.': "G",
	'--.-': "Q",
	'--..': "Z",
	'-.': "N",
	'-.-': "K",
	'-.--': "Y",
	'-.-.': "C",
	'-..': "D",
	'-..-': "X",
	'-...': "B",
	'.': "E",
	'.-': "A",
	'.--': "W",
	'.---': "J",
	'.--.': "P",
	'.-.': "R",
	'.-..': "L",
	'..': "I",
	'..-': "U",
	'..-.': "F",
	'...': "S",
	'...-': "V",
	'....': "H"
}

const latinToTranslate = document.querySelector('#latinText')
const morseToTranslate = document.querySelector('#morseText')
const translatedLatin = document.querySelector('#translatedLatin')
const translatedMorse = document.querySelector('#translatedMorse')


latinToTranslate.addEventListener('input', () => {
	const text = latinToTranslate.value
	if (text === '')
		translatedLatin.innerHTML = 'Morse translation'
	else
		translatedLatin.innerHTML = encode(latinToTranslate.value);
});

morseToTranslate.addEventListener('input', () =>{
	const text = morseToTranslate.value
	if (text === '')
		translatedMorse.innerHTML = 'Latin translation'
	else
		translatedMorse.innerHTML = decode(morseToTranslate.value)
});


// latin to morse

const getLatinCharacterList = (text) =>{
    let tab=[];
    for(let i=0; i< text.length ; i++){
        tab.push(text[i]);
    };
    return tab;
};


const translateLatinCharacter = (character) =>{
    return latinToMorse[character];
};



const encode = (text) =>{
	let tab = getLatinCharacterList(text);
	for (let i=0; i<tab.length ; i++){
		if (tab[i]===' '){
			tab[i] = '/';
		}
		else
			tab[i] = `${translateLatinCharacter(tab[i].toUpperCase())} `;
	};
	return tab.join('');
}

// morse to latin
const getMorseCharacterList = (text) =>{
    let tab=[];
	let morseCharcater = ''
    for(let i=0; i< text.length ; i++){
        if (text[i]===' '){
			tab.push(morseCharcater);
			morseCharcater='';
		}
		else if (text[i] == '/'){
			tab.push('/')
			morseCharcater='';
		}
		else {
			morseCharcater += text[i];
		}
    };
	tab.push(morseCharcater);
    return tab;
};


const translateMorseCharacter = (character) =>{
    return morseToLatin[character];
};


const decode = (text) =>{
	let tab = getMorseCharacterList(text);
	let trad = '';
	for (let i=0; i<tab.length ; i++){
		if (tab[i]==='/')
			trad += ' ';
		else if (tab[i]==='')
			trad += ''
		else
			trad += `${translateMorseCharacter(tab[i])}`;
	};
	return trad;
};


const testLatin = 'Hello world';
const testMorse = '.... . .-.. .-.. --- /.-- --- .-. .-.. -..';



const btn = document.querySelector("#btn")
const thanks = document.querySelector('#thanks')

btn.addEventListener('click',()=>{
	thanks.innerHTML = 'Merci, à la tienne !'
	setTimeout(()=>thanks.innerHTML = '' , 2000)
})