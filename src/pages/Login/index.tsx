import './login.css'

export function Login() {
    return (
        <div className='container'>
            <form>
                <h1>Login</h1>
                <input
                    type="text"
                    placeholder="email@email.com"
                />
                <input
                    type="text"
                    placeholder="***********"
                />
                <div className='button-group'>
                    <button>Entrar</button>
                    <button>Cadastrar</button>
                </div>
            </form>
        </div>
    )
}