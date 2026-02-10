// Uma factory retorna um novo objeto (não é singleton)
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}