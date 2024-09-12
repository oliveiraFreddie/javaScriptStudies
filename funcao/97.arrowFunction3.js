let compraraComThis = function (param) {
    console.log(this === param)
}

compraraComThis(global)

const obj = {}
compraraComThis = compraraComThis.bind(obj)
compraraComThis(global)
compraraComThis(obj)

let compraraComThisArrow = param => console.log(this === param)
compraraComThisArrow(global)
compraraComThisArrow(module.exports)

compraraComThisArrow = compraraComThisArrow.bind(obj)
compraraComThisArrow(obj)
compraraComThisArrow(module.exports)