<template>
    <div id="container" class="w-11/12 lg:w-3/5 border border-r-500 px-1 mx-auto">
        <nav class="py-5 flex">
            <!-- <img src="../assets/book.svg" alt=""> -->
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 29.25C6 28.2554 6.39509 27.3016 7.09835 26.5983C7.80161 25.8951 8.75544 25.5 9.75 25.5H30"
                    stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path
                    d="M9.75 3H30V33H9.75C8.75544 33 7.80161 32.6049 7.09835 31.9017C6.39509 31.1984 6 30.2446 6 29.25V6.75C6 5.75544 6.39509 4.80161 7.09835 4.09835C7.80161 3.39509 8.75544 3 9.75 3Z"
                    stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <select name="fonts" id="font">
                <option value="serif">Serif</option>
                <option value="sans-serif">Sans-serif</option>
            </select>
            <!-- <hr class="w-8 rotate-90"> -->
            <div class="line border mx-5"></div>

            <label class="switch ml-3">
                <input type="checkbox">
                <span class="slider round"></span>
            </label>


            <svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 96 960 960" width="36"
                class="scale-x-[-1] -rotate-45">
                <path
                    d="M374 236q-20 0-41 2t-32 5q64 72 98 157t34 176q0 91-34 176.5T302 908q11 3 31 5.5t43 2.5q140.066 0 238.533-98Q713 720 713 576t-99.5-242Q514 236 374 236Zm8-60q80.825 0 151.913 30.5Q605 237 658.5 290.5t84 126.5Q773 490 773 575t-30.947 158.287q-30.948 73.288-84 127.5Q605 915 533.594 945.5 462.188 976 381 976q-54.377 0-106.188-13Q223 950 188 930q88-66 136.5-158T373 576.5Q373 473 324 380T187 223q35-20 87.468-33.5Q326.935 176 382 176Zm51 401Z" />
            </svg>
        </nav>

        <div id="search">
            <form action="" class="flex bg-slate-100 justify-between px-5 rounded-full" onsubmit="return false">
                <input v-model="searchWord" type="search" placeholder="Type a word to search"
                    class="border-none bg-transparent focus:outline-none w-1/2">
                <button type="submit"><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
                        <path
                            d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z" />
                    </svg></button>
            </form>
        </div>
        <div id="dictionary">
            <!-- word section -->
            <div id="word-audio-section" class="flex justify-between">
                <div id="word">
                    <h1 class="text-5xl md:text-5xl">Word</h1>
                    <p>phonetic</p>
                </div>
                <div id="play-audio" class="">
                    <audio src=""></audio>
                    <img src="../assets/play_circle.svg" alt="">
                </div>
            </div>

            <!-- divider section -->
            <div id="divider" class="flex">
                <div class="w-1/5">
                    <p>Partofspeech</p>
                </div>
                <div class="w-4/5">
                    <hr>
                </div>
            </div>

            <!-- meaning section -->
            <div class="meaning">
                <p>meaning</p>
                <ul>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rem aliquid officia commodi repellendus
                        esse vel libero saepe sapiente maiores.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rem aliquid officia commodi repellendus
                        esse vel libero saepe sapiente maiores.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rem aliquid officia commodi repellendus
                        esse vel libero saepe sapiente maiores.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rem aliquid officia commodi repellendus
                        esse vel libero saepe sapiente maiores.</li>
                </ul>

                <p>Synonym</p>
                <ul>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rem aliquid officia commodi repellendus
                        esse vel libero saepe sapiente maiores.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rem aliquid officia commodi repellendus
                        esse vel libero saepe sapiente maiores.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rem aliquid officia commodi repellendus
                        esse vel libero saepe sapiente maiores.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rem aliquid officia commodi repellendus
                        esse vel libero saepe sapiente maiores.</li>
                </ul>
            </div>
            <!-- divider section -->
            <div id="divider" class="flex">
                <div class="w-1/5">
                    <p>Partofspeech</p>
                </div>
                <div class="w-4/5">
                    <hr>
                </div>
            </div>

            <div class="meaning">
                <p>meaning</p>
                <ul>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rem aliquid officia commodi repellendus
                        esse vel libero saepe sapiente maiores.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rem aliquid officia commodi repellendus
                        esse vel libero saepe sapiente maiores.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rem aliquid officia commodi repellendus
                        esse vel libero saepe sapiente maiores.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rem aliquid officia commodi repellendus
                        esse vel libero saepe sapiente maiores.</li>
                </ul>
                <div id="synonyms">
                    <span>synonyms</span><span>Synonym1, synonym2</span>
                </div>


            </div>
            <p>Source</p>
            <p><a href="https://en.wiktionary.org/wiki/hello" target="_blank">https://en.wiktionary.org/wiki/hello</a></p>
        </div>


    </div>
</template>

<script>
export default {
    name: 'dictionary',
    data() {
        return {
            model: {
                input: ''
            }
        }
    }
}

</script>

<style lang="scss" scoped>
.switch {
    position: relative;
    display: inline-block;
    width: 55px;
    height: 28px;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 24px;
    width: 24px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked+.slider {
    background-color: #2196F3;
}

input:focus+.slider {
    box-shadow: 0 0 1px #2196F3;
}

input:checked+.slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}
</style>