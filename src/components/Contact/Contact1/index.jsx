import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
    const [state, handleSubmit] = useForm("xpwaavjy");
    if (state.succeeded) {
        return <p className="text-center text-white pt-[40vh] sm:text-4xl lg:text-4xl font-bold">Thanks for joining!</p>;
    }

    return (
        <div className="px-4 sm:px-6 lg:px-8 py-5">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
                Contact Me
            </h2>
            <div className="w-[13%] h-[4px] bg-white mt-4 m-auto"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
                <div>
                    <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-white mb-4 lg:mt-8 sm:mt-1">
                        Get In Touch
                    </h2>
                    <div className="w-[40%] h-[2px] bg-white mt-1"></div>

                    <div className="mt-6">
                        <h2 className="text-3xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 inline">Email : </h2>
                        <span className="text-2xl sm:text-lg lg:text-2xl font-bold text-white underline underline-offset-1">
                            osamatamer.rizk.fahmy@gmail.com
                        </span>
                    </div>
                    <div className="mt-5">
                        <h2 className="text-3xl sm:text-4xl lg:text-3xl font-bold text-white mb-2 inline">Phone : </h2>
                        <span className="text-2xl sm:text-lg lg:text-2xl font-bold text-white">
                            01225139329
                        </span>
                    </div>
                    <div className="mt-5">
                        <p className="text-2xl sm:text-xl lg:text-2xl font-bold text-white">
                            Bachelor’s Degree: Computers and information technology, 2023,
                            Egyptian E-Learning University (EELU)
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <form onSubmit={handleSubmit} className="mt-6 sm:mt-8">
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            <div className="col-span-2">
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="Full Name"
                                    className="block w-full rounded-[20px] border-0 p-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <div className="col-span-2">
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    required
                                    className="block w-full rounded-[20px] border-0 p-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <ValidationError
                                prefix="Email:"
                                className="text-2xl text-red col-span-2"
                                field="email"
                                errors={state.errors}
                            />
                            <div className="col-span-2">
                                <textarea
                                    name="message"
                                    id="message"
                                    placeholder="Message"
                                    required
                                    className="block w-full h-[180px] rounded-[20px] border-0 p-5 pt-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <ValidationError
                                    prefix="Message:"
                                    field="message"
                                    errors={state.errors}
                                />
                            </div>
                            <div className="col-span-2">
                                <button
                                    type="submit"
                                    disabled={state.submitting}
                                    className="w-full rounded-[20px] bg-gradient-to-r from-cyan-300 to-blue-600 p-5 text-white font-bold shadow-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
