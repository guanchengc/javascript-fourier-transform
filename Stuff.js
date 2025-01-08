a = []
Calc.getExpressions().forEach(elements => {
    if (elements['type'] == 'expression') {
        text = elements['latex']
        text = text.slice(text.search("=") + 1)
        text = text.replace('(', '[')
        text = text.replace(')', ']')
        a.push(text)
    }
})

for (let index = 0; index < 200; index++) {
    Calc.setExpression({id:index.toString(), latex: 'a\_{'+ index.toString() + '}=\(0,0\)'});
}