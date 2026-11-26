import { useNavigate } from "react-router-dom";
import { registerschema } from "./registerschema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

function Registers() {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerschema)
    });

    function onsubmit1(data) {
        console.log(data);
        alert("Registration successful");
        navigate("/");
    }

    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold text-blue-500 mb-4 text-center">Register</h1>

            <form onSubmit={handleSubmit(onsubmit1)} className="flex flex-col gap-2">

                <input type="text" placeholder="Enter name" {...register("name")} className="border p-2" />
                <p className="text-red-500">{errors.name?.message}</p>

                <input type="email" placeholder="Enter email" {...register("email")} className="border p-2" />
                <p className="text-red-500">{errors.email?.message}</p>

                <input type="password" placeholder="Enter password" {...register("password")} className="border p-2" />
                <p className="text-red-500">{errors.password?.message}</p>

                <input type="number" placeholder="Enter age" {...register("age")} className="border p-2" />
                <p className="text-red-500">{errors.age?.message}</p>

                <button type="submit" className="bg-blue-500 text-white p-2">
                    Register
                </button>

            </form>
        </div>
    );
}

export default Registers;