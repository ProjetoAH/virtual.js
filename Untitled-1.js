<script src="script.js">
    let carrinho=[];
    let total= 0;
    function adicionarnocarrinho(nome, preço){
        carrinho.push({nome, preço});
        total+= preço;
        atualizarcarrinho();
    }
    function atualizarcarrinho() {
        const carrinhoDiv = 
        document.getElementById('itens-carrinho')
        const totalDiv = 
        document.getElementById('total-carrinho')
        
        carrinhoDiv.innerHTML = '';

        carrinho. forEASH((item, index) => {
            const itemDiv
        }
</script>
</body>
</html>
