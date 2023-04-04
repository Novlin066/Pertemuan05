function Card() {
    return (
        <>
            <div class="flex justify-center items-center h-screen w-full bg-gradient-to-r from-pink-500 to-white-600">
                <div class="w-1/2 bg-white rounded-lg shadow-2xl p-8 m-4">
                    <h1 class="block w-full tect-center tect-gray-800 text-2xl font-bold mb-6">
                          REGISTRASI KTP
                    </h1>
                    <img class="rounded w-40 h-60" src="Ingrita.jpg"/>
                    <form action="/" method="post">
                        <div class="flex flex-col mb-4">
                            <label
                                class="mb-2 font-bold text-lg text-gray-900"
                                for="nama"
                            >
                                Nama:
                            </label>
                            
                            <input
                                class="border py-2 px-3 text-grey-800"
                                type="text"
                                name="nama"
                                id="naam"
                            />

                            <label
                                class="mb-2 font-bold text-lg text-gray-900"
                                for="tanggal lahir"
                            >
                                Tanggal Lahir:
                            </label>
                            
                            <input
                                class="border py-2 px-3 text-grey-800"
                                type="text"
                                name="tanggal lahir"
                                id="naam"
                            />

                            <label
                                class="mb-2 font-bold text-lg text-gray-900"
                                for="jenis kelamin"
                            >
                                Jenis Kelamin:
                            </label>
                            
                            <input
                                class="border py-2 px-3 text-grey-800"
                                type="text"
                                name="jenis kelamin"
                                id="naam"
                            />

                            <label
                                class="mb-2 font-bold text-lg text-gray-900"
                                for="agama"
                            >
                                Agama:
                            </label>
                            
                            <input
                                class="border py-2 px-3 text-grey-800"
                                type="text"
                                name="agama"
                                id="naam"
                            />

                            <label
                                class="mb-2 font-bold text-lg text-gray-900"
                                for="alamat"
                            >
                                Alamat:
                            </label>
                            
                            <input
                                class="border py-2 px-3 text-grey-800"
                                type="text"
                                name="alamat"
                                id="naam"
                            />

                            <label
                                class="mb-2 font-bold text-lg text-gray-900"
                                for="pekerjaan"
                            >
                                Pekerjaan:
                            </label>
                            
                            <input
                                class="border py-2 px-3 text-grey-800"
                                type="text"
                                name="pekerjaan"
                                id="naam"
                            />

                            <label
                                class="mb-2 font-bold text-lg text-gray-900"
                                for="nama"
                            >
                                Kewarganegaraan:
                            </label>
                            
                            <input
                                class="border py-2 px-3 text-grey-800"
                                type="text"
                                name="nama"
                                id="naam"
                            />
                        </div>
                        <button
                        class="block bg-pink-400 hover:bg-white-600 text-white uppercase text-lg mx-auto p-4 rounded"
                        type="submit"
                        >
                            Buat Akun
                        </button>
                    </form>
                    <a
                        class="block w-full text-center no-underline mt-4 text-sm text-gray-700 hover:text-gry-900"
                        href="/"
                    >
                        Telah Memiliki Akun KTP?
                    </a>
                </div>
            </div>
        </>
    );
}

export default Card;