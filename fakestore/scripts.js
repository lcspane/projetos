/**
 * FakeStore - Sistema de e-commerce educativo
 * @copyright 2024 Lucas Pane (https://www.lcspane.com)
 * @license MIT
 */

const FakeStore = (() => {
    // ========== CONFIGURAÇÕES ========== //
    const config = {
        apiUrl: 'https://fakestoreapi.com/products',
        currencyOptions: { style: 'currency', currency: 'BRL' },
        storageKey: 'fakeStoreCart'
    };

    // ========== ESTADO DA APLICAÇÃO ========== //
    let state = {
        cart: JSON.parse(localStorage.getItem(config.storageKey)) || [],
        products: [],
        discount: 0
    };

    // ========== FUNÇÕES DA API ========== //
    const fetchProducts = async () => {
        try {
            const response = await fetch(config.apiUrl);
            state.products = await response.json();
            renderProducts();
        } catch (error) {
            showFeedback('Erro ao carregar produtos', 'danger');
        }
    };

    // ========== RENDERIZAÇÃO DE PRODUTOS ========== //
    const renderProducts = () => {
        const container = document.getElementById('products-container');
        container.innerHTML = state.products.map(product => `
            <div class="col">
                <div class="card product-card h-100">
                    <img src="${product.image}" class="product-image" alt="${product.title}">
                    <div class="card-body d-flex flex-column">
                        <h6 class="card-title">${product.title.substring(0, 40)}</h6>
                        <p class="text-primary fw-bold mt-auto">
                            ${product.price.toLocaleString('pt-BR', config.currencyOptions)}
                        </p>
                        <button class="btn btn-sm btn-primary" 
                            onclick="FakeStore.addToCart(${product.id})">
                            <i class="fas fa-cart-plus me-2"></i>Adicionar
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    };

    // ========== GERENCIAMENTO DO CARRINHO ========== //
    const cartManager = {
        addToCart: (productId) => {
            const product = state.products.find(p => p.id === productId);
            const existing = state.cart.find(item => item.id === productId);
            
            existing ? existing.quantity++ : state.cart.push({...product, quantity: 1});
            updateCart();
            showFeedback(`${product.title} adicionado!`, 'success');
        },

        removeFromCart: (productId) => {
            state.cart = state.cart.filter(item => item.id !== productId);
            updateCart();
            showFeedback('Item removido!', 'danger');
        },

        updateQuantity: (productId, amount) => {
            const item = state.cart.find(item => item.id === productId);
            if (item) {
                item.quantity += amount;
                if (item.quantity < 1) cartManager.removeFromCart(productId);
                updateCart();
            }
        },

        applyCoupon: () => {
            const coupon = document.getElementById('coupon').value;
            const coupons = { FAKE10: 0.1, FAKE20: 0.2 };
            state.discount = coupons[coupon] || 0;
            updateCart();
            showFeedback(
                state.discount ? `Desconto ${state.discount * 100}% aplicado!` : 'Cupom inválido!',
                state.discount ? 'success' : 'danger'
            );
        },

        clearCart: () => {
            state.cart = [];
            updateCart();
            showFeedback('Carrinho limpo!', 'success');
        }
    };

    // ========== ATUALIZAÇÃO DO CARRINHO ========== //
    const updateCart = () => {
        localStorage.setItem(config.storageKey, JSON.stringify(state.cart));
        renderCart();
        document.getElementById('cart-count').textContent = 
            state.cart.reduce((sum, item) => sum + item.quantity, 0);
    };

    const renderCart = () => {
        const container = document.getElementById('cart-items');
        container.innerHTML = state.cart.map(item => `
            <div class="card mb-3">
                <div class="row g-0 align-items-center">
                    <div class="col-3">
                        <img src="${item.image}" class="img-fluid rounded">
                    </div>
                    <div class="col-9">
                        <div class="card-body py-2">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 class="card-title mb-1">${item.title}</h6>
                                    <div class="d-flex align-items-center gap-2">
                                        <button class="btn btn-sm btn-outline-secondary" 
                                            onclick="FakeStore.updateQuantity(${item.id}, -1)">-</button>
                                        <span class="px-2">${item.quantity}</span>
                                        <button class="btn btn-sm btn-outline-secondary" 
                                            onclick="FakeStore.updateQuantity(${item.id}, 1)">+</button>
                                    </div>
                                </div>
                                <div class="text-end">
                                    <p class="mb-0 fw-bold">
                                        ${(item.price * item.quantity).toLocaleString('pt-BR', config.currencyOptions)}
                                    </p>
                                    <button class="btn btn-link text-danger p-0" 
                                        onclick="FakeStore.removeFromCart(${item.id})">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');

        const total = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        document.getElementById('cart-total').textContent = (total * (1 - state.discount)).toFixed(2);
        document.getElementById('discount-info').textContent = state.discount 
            ? `Desconto de ${state.discount * 100}% aplicado!` 
            : '';
    };

    // ========== FUNÇÕES UTILITÁRIAS ========== //
    const toggleCart = () => {
        const cart = document.querySelector('.cart-sidebar');
        const backdrop = document.querySelector('.backdrop');
        cart.classList.toggle('active');
        backdrop.style.display = cart.classList.contains('active') ? 'block' : 'none';
    };

    const showFeedback = (message, type) => {
        const feedback = document.createElement('div');
        feedback.className = `alert alert-${type} position-fixed bottom-0 start-50 translate-x mb-3`;
        feedback.style.transform = 'translateX(-50%)';
        feedback.textContent = message;
        document.body.appendChild(feedback);
        setTimeout(() => feedback.remove(), 2000);
    };

    // ========== INICIALIZAÇÃO ========== //
    const init = () => {
        AOS.init({ duration: 1000 });
        fetchProducts();
        updateCart();
    };

    return {
        init,
        toggleCart,
        ...cartManager,
        checkout: () => {
            if (state.cart.length === 0) return showFeedback('Carrinho vazio!', 'warning');
            showFeedback('Compra finalizada!', 'success');
            cartManager.clearCart();
        }
    };
})();

// Inicialização da aplicação
document.addEventListener('DOMContentLoaded', FakeStore.init);
window.FakeStore = FakeStore;