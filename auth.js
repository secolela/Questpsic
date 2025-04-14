// Banco de dados simulado
let usersDB = JSON.parse(localStorage.getItem('psicoquestion_users')) || [];

// Elementos globais
const authContainer = document.getElementById('auth-container');
const appContainer = document.getElementById('app');

// Renderiza login
function renderLogin() {
    authContainer.innerHTML = `
        <div class="auth-box">
            <div class="auth-header">
                <h1>Bem-vindo ao PsicoQuestion</h1>
                <p>Acesse seus questionários de psicologia</p>
            </div>
            <form id="login-form" class="auth-form">
                <div class="form-group">
                    <label for="login-email">E-mail</label>
                    <div class="input-with-icon">
                        <i class="fas fa-envelope"></i>
                        <input type="email" id="login-email" required>
                    </div>
                    <div id="login-email-error" class="error-message"></div>
                </div>
                
                <div class="form-group">
                    <label for="login-password">Senha</label>
                    <div class="input-with-icon">
                        <i class="fas fa-lock"></i>
                        <input type="password" id="login-password" required>
                        <button type="button" id="login-toggle-password" class="password-toggle">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                    <div id="login-password-error" class="error-message"></div>
                </div>
                
                <div class="form-options">
                    <label class="remember-me">
                        <input type="checkbox" id="remember-me">
                        <span>Lembrar de mim</span>
                    </label>
                    <a href="#" id="forgot-password">Esqueceu a senha?</a>
                </div>
                
                <button type="submit" class="auth-button">Entrar</button>
                
                <div class="auth-footer">
                    <p>Não tem uma conta? <a href="#" id="go-to-register">Cadastre-se</a></p>
                </div>
            </form>
        </div>
    `;

    // Event listeners
    document.getElementById('login-form').addEventListener('submit', handleLogin);
    document.getElementById('go-to-register').addEventListener('click', renderRegister);
    document.getElementById('login-toggle-password').addEventListener('click', () => 
        togglePasswordVisibility('login-password', 'login-toggle-password'));
}

// Renderiza cadastro
function renderRegister() {
    authContainer.innerHTML = `
        <div class="auth-box">
            <div class="auth-header">
                <h1>Crie sua conta</h1>
                <p>Comece a usar os questionários</p>
            </div>
            <form id="register-form" class="auth-form">
                <div class="form-group">
                    <label for="register-name">Nome Completo</label>
                    <input type="text" id="register-name" required>
                    <div id="register-name-error" class="error-message"></div>
                </div>
                
                <div class="form-group">
                    <label for="register-email">E-mail</label>
                    <input type="email" id="register-email" required>
                    <div id="register-email-error" class="error-message"></div>
                </div>
                
                <div class="form-group">
                    <label for="register-password">Senha (mínimo 6 caracteres)</label>
                    <div class="input-with-icon">
                        <i class="fas fa-lock"></i>
                        <input type="password" id="register-password" required>
                        <button type="button" id="register-toggle-password" class="password-toggle">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                    <div id="register-password-error" class="error-message"></div>
                </div>
                
                <div class="form-group">
                    <label for="register-confirm-password">Confirme sua Senha</label>
                    <div class="input-with-icon">
                        <i class="fas fa-lock"></i>
                        <input type="password" id="register-confirm-password" required>
                    </div>
                    <div id="register-confirm-error" class="error-message"></div>
                </div>
                
                <button type="submit" class="auth-button">Cadastrar</button>
                
                <div class="auth-footer">
                    <p>Já tem uma conta? <a href="#" id="go-to-login">Faça login</a></p>
                </div>
            </form>
        </div>
    `;

    // Event listeners
    document.getElementById('register-form').addEventListener('submit', handleRegister);
    document.getElementById('go-to-login').addEventListener('click', renderLogin);
    document.getElementById('register-toggle-password').addEventListener('click', () => 
        togglePasswordVisibility('register-password', 'register-toggle-password'));
}

// Alternar visibilidade da senha
function togglePasswordVisibility(inputId, toggleId) {
    const input = document.getElementById(inputId);
    const toggle = document.getElementById(toggleId);
    if (input.type === 'password') {
        input.type = 'text';
        toggle.innerHTML = '<i class="fas fa-eye-slash"></i>';
    } else {
        input.type = 'password';
        toggle.innerHTML = '<i class="fas fa-eye"></i>';
    }
}

// Validações
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPassword(password) {
    return password.length >= 6;
}

// Handlers
function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const remember = document.getElementById('remember-me').checked;

    // Reset errors
    document.getElementById('login-email-error').style.display = 'none';
    document.getElementById('login-password-error').style.display = 'none';

    // Validação
    if (!isValidEmail(email)) {
        showError('login-email-error', 'E-mail inválido');
        return;
    }

    const user = usersDB.find(u => u.email === email && u.password === password);
    if (!user) {
        showError('login-password-error', 'E-mail ou senha incorretos');
        return;
    }

    // Login bem-sucedido
    if (remember) {
        localStorage.setItem('psicoquestion_rememberedUser', JSON.stringify({ email }));
    }
    localStorage.setItem('psicoquestion_loggedIn', 'true');
    startApplication();
}

function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;

    // Reset errors
    ['register-name-error', 'register-email-error', 'register-password-error', 'register-confirm-error']
        .forEach(id => document.getElementById(id).style.display = 'none');

    // Validações
    let isValid = true;
    if (name.length < 3) {
        showError('register-name-error', 'Nome deve ter pelo menos 3 caracteres');
        isValid = false;
    }
    if (!isValidEmail(email)) {
        showError('register-email-error', 'E-mail inválido');
        isValid = false;
    }
    if (usersDB.some(u => u.email === email)) {
        showError('register-email-error', 'E-mail já cadastrado');
        isValid = false;
    }
    if (!isValidPassword(password)) {
        showError('register-password-error', 'Senha deve ter pelo menos 6 caracteres');
        isValid = false;
    }
    if (password !== confirmPassword) {
        showError('register-confirm-error', 'As senhas não coincidem');
        isValid = false;
    }
    if (!isValid) return;

    // Cadastrar usuário
    usersDB.push({ name, email, password });
    localStorage.setItem('psicoquestion_users', JSON.stringify(usersDB));
    localStorage.setItem('psicoquestion_loggedIn', 'true');
    startApplication();
}

function showError(id, message) {
    const element = document.getElementById(id);
    element.textContent = message;
    element.style.display = 'block';
}

// Inicia a aplicação principal
function startApplication() {
    authContainer.classList.add('hidden');
    appContainer.classList.remove('hidden');
    window.dispatchEvent(new Event('app-authorized'));
}

// Verifica login ao carregar
function checkLoggedIn() {
    const isLoggedIn = localStorage.getItem('psicoquestion_loggedIn') === 'true';
    if (isLoggedIn) {
        startApplication();
    } else {
        renderLogin();
        const rememberedUser = JSON.parse(localStorage.getItem('psicoquestion_rememberedUser'));
        if (rememberedUser && rememberedUser.email) {
            document.getElementById('login-email').value = rememberedUser.email;
            document.getElementById('remember-me').checked = true;
        }
    }
}

// Inicializa
checkLoggedIn();