import { useState } from "react";

const Index = () => {

    const [formData, setFormData] = useState({
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div className="w-[90%] h-[42vh] lg:w-[80%] mx-auto bg-white rounded-[30px] lg:rounded-[60px] p-8 -mt-48 shadow-md relative">
            <div className="flex flex-col lg:flex-row justify-center items-center p-10">
                <div className="mb-8 lg:mb-0 lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold lg:w-96 ">See My Projects At Once & Leave Here Your E-mail Address.</h2>
                </div>
                <div className="w-full lg:w-1/2 relative flex items-center">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email Address"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="block w-full rounded-[20px] border-2 border-blue-300 p-5 pr-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <button
                        type="button"
                        className="absolute right-1.5 h-[45px] sm:h-[55px] w-[100px] sm:w-[150px] bg-gradient-to-r from-cyan-300 to-blue-600 rounded-[20px] text-white font-bold text-sm sm:text-xl flex items-center justify-center"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Index;
