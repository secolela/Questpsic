// Banco de dados simulado
let usersDB = JSON.parse(localStorage.getItem('psicoquestion_users')) || [];

// Elementos globais
const authContainer = document.getElementById('auth-container');
const appContainer = document.getElementById('app');

// Função para mostrar erros
function showError(elementId, message) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = message;
        element.style.display = 'block';
    }
}

// Renderiza login
function renderLogin() {
    authContainer.innerHTML = `
        <div class="auth-box">
            <div class="auth-header">
                <h1>Bem-vindo ao PsicoQuestion</h1>
                <p>Acesse seus questionários de psicologia</p>
            </div>
            <form id="login-form" class="auth-form" onsubmit="submitLogin()">
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

    // Configura eventos
    document.getElementById('login-toggle-password').addEventListener('click', function() {
        togglePasswordVisibility('login-password', 'login-toggle-password');
    });

    // Preenche e-mail lembrado se existir
    const rememberedUser = localStorage.getItem('psicoquestion_rememberedUser');
    if (rememberedUser) {
        document.getElementById('login-email').value = rememberedUser;
        document.getElementById('remember-me').checked = true;
    }
}

function submitLogin() {
    let email       = document.getElementById('login-email').value;
    let password    = document.getElementById('login-password').value;
    let verif = 0;

    usuarios.forEach((usuario, index) => {
        if((usuario.nome == email || usuario.email == email) && usuario.senha == password)
        {
            localStorage.setItem('psicoquestion_rememberedUser', email);
            verif = 1;
        }
    })

    if(verif == 1)
    {
        window.location = "/home.html";
    }
}

renderLogin()
// Restante do código auth.js permanece igual...
// (mantenha todas as outras funções como estão)