import SubmitForm from "./submitForm";

const SingIn = () => {
    return <div className="bg-login-wrapper-bg h-screen w-full flex items-center justify-center">
        <div className="bg-login-form-bg p-6 rounded-3xl flex">
           <div className="w-[400px]">
                <img src="/images/singIn/login-person.png" alt="" />
           </div>
           <div className="w-px bg-gray-300"/>
           <div className="pl-5">
                <h1 className="mb-5 font-rubik text-5xl font-bold text-light-blue-text-color">Sign In</h1>
                <form className="flex flex-col items-start">
                    <div className="w-[400px] flex flex-col">
                        <label htmlFor="email" className="mb-1 font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Email"
                            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        />
                    </div>

                    <div className="w-[400px] flex flex-col mt-4">
                        <label htmlFor="password" className="mb-1 font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Password"
                            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        />
                    </div>
                    <div className="w-full mt-2 text-light-blue-text-color cursor-pointer">
                        <p className="text-right">Forgot password?</p>
                    </div>
                    <SubmitForm />
                </form>
           </div>
        </div>
    </div>
};

export default SingIn;