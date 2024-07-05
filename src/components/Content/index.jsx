"use client"

import { useState } from "react";
import { getApiResponse } from "@/libs/api-libs";
import TrakteerButton from "./TrakteerButton";

const Content = () => {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [percentage, setPercentage] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handlePredict = async (event) => {
        if (event.key === "Enter" || event.type === "click") {
            event.preventDefault();
            const input = document.getElementById("nameInput");
            const firstName = input.value;

            if (!firstName) {
                setError("Nama tidak boleh kosong");
                return;
            } else {
                setError("");
                setIsLoading(true)
            }

            const result = await getApiResponse(firstName);

            let genderDecode = result.gender;
            const probabilityPercentage = result.probability * 100;

            setName(firstName);
            setPercentage(probabilityPercentage);

            if (genderDecode === "male") {
                if (probabilityPercentage <= 50) {
                    setGender("Gay")
                } else (setGender("Laki-Laki"));
            } else {
                if (probabilityPercentage <= 50) {
                    setGender("B0ti (Bocah Tinggi)")
                } else (setGender("Perempuan"));
            }

            setIsLoading(false)
        }
    };

    return (
        <div className="flex flex-col h-screen justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <h1 className="p-3 text-xl">Shenzen Si Peramal Kelamin</h1>
            <div className="text-center bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
                <h1 className="text-4xl mb-4 text-blue-700">Masukkan Namamu:</h1>
                <input
                    id="nameInput"
                    placeholder="rifqi"
                    onKeyDown={handlePredict}
                    className="border border-gray-300 p-2 rounded mb-4 w-full text-lg text-gray-700"
                />
                <button
                    className="bg-blue-500 text-white p-2 rounded w-full transform transition-transform duration-300 hover:scale-105 hover:bg-blue-700"
                    onClick={handlePredict}
                >
                    Start!
                </button>
                {error && (
                    <p className="text-red-500 mt-2">{error}</p>
                )}
                {isLoading && (<div className="flex justify-center items-center mt-4">
                    <p className="loader">Sabar Yee...</p>
                </div>)}
                {name && !isLoading && (
                    <div className="block mt-4 text-gray-700">
                        <p>Halo <span className="font-bold">{name}</span>, Jenis Kelamin Kamu Kemungkinan Adalah 
                        <span className="font-bold"> {gender}</span> Sebesar <span className="font-bold">{percentage}%.</span></p>
                        <div className="flex justify-center items-center">
                            <h1 className="pt-3 px-2">Jika Peramal Benar  :</h1>
                            <TrakteerButton />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Content;
