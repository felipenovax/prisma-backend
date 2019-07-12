module.exports = app => {
    function existsOrError(value, msg){
        if(!value) throw msg //valor nao existe
        if(Array.isArray(value) && value.length === 0) throw msg //valor é array e é um array vazio
        if(typeof value === 'string' && !value.trim()) throw msg //se for string, vai testar se está vazia
    }
    
    function notExistsOrError(value, msg){
        try {
            existsOrError(value, msg)
        }
        catch(msg){
            return
        }
        throw msg
    }
    
    function equalsOrError(valueA, valueB, msg){
        if(valueA != valueB) throw msg //comparar senhas
    }
    return { existsOrError, notExistsOrError, equalsOrError }
}