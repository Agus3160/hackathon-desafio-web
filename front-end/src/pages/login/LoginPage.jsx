
import React from 'react'
import login from '../../lib/auth/login'
import { LoaderCircle } from 'lucide'

function LoginPage() {

    const [formData, setFormData] = React.useState({
        email: '',
        password: '',
    })

    const [state, setState] = React.useState({
        loading: false,
        error: "",
    })

    const handleSubmit = async (e) => {
        setState({ ...state, loading: true })
        e.preventDefault()


        try{
            await login(formData.email, formData.password)
        }catch(error){
            setState({ ...state, loading: false, error: error.message })
        }
        setState({ ...state, loading: false })
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

  return (
    <div>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Iniciar sesión</h2>
                </div>
                <form 
                    onSubmit={async (e) => await handleSubmit(e)}
                    className="mt-8 space-y-6">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm flex-col flex gap-4 -space-y-px">
                        <div>
                            <input
                                onChange={handleChange}
                                id="email"
                                name="email"
                                type="text"
                                autoComplete="email"x
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Usuario"
                            />
                        </div>
                        <div>
                            <input
                                onChange={handleChange}
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Contraseña"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            disabled={state.loading}
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <p>Iniciar sesión</p>
                            {state.loading && <LoaderCircle className="animate-spin h-5 w-5 text-white ml-2"/>}
                        </button>
                    </div>

                    {state.error === "" && <div className="text-red-500">{state.error}</div>}
                </form>
            </div>
        </div>
    </div>
  );
}

export default LoginPage;