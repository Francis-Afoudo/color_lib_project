class Blog extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML =`
            <section class="h-[500px] ml:h-[600px] lg:h-[700px]">
                <div class="container flex items-center gap-[40px] h-[inherit] justify-center flex-col ">
                    <h1
                        class="text-[25px] md:text-[35px] self-start md:self-center lg:text-[45px] font-semibold md:font-bold">
                        Our Latest Blog
                    </h1>
                    <div
                        class="grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-1 gap-[40px] lg:grid-cols-3 lg:grid-rows-1">
                        <div class="flex flex-col justify-center relative gap-[20px]">
                            <div class="absolute rounded-full top-5 left-3 z-20 md:left-5 bg-other text-white">
                                <span class="p-[10px_15px] text-lg">urban</span>
                            </div>
                            <div class="relative">
                                <a href="#"
                                    class="absolute rounded-full hidden md:flex top-[40%] w-[50px] h-[50px] justify-center items-center md:left-0 lg:left-[-10px] xl:left-[-80px] z-10 bg-black text-other">
                                    <i class="fa-solid fa-arrow-left  fa-lg"></i>
                                </a>
                                <img src="./assets/blog1.jpg" alt="">
                            </div>
                            <h2 class="font-medium text-[25px] lg:text-[30px]">Starts the automated process</h2>
                            <p>The automated process starts as soon as your clothes go into
                                the machine.</p>
                        </div>
                        <div class="hidden md:flex flex-col relative justify-center gap-[20px]">
                            <div class="absolute rounded-full z-20 top-5 left-3 md:left-5 bg-other text-white">
                                <span class="p-[10px_15px] text-lg">urban</span>
                            </div>
                            <div class="relative">
                                <a href="#"
                                    class="absolute hidden md:flex lg:hidden rounded-full top-[40%] items-center justify-center shadow-2xl w-[50px] h-[50px] xl:right-[-80px] lg:right-[-10px] md:right-0 z-10  bg-black text-other">
                                    <i class="fa-solid fa-arrow-right fa-lg"></i>
                                </a>
                                <img src="./assets/blog2.jpg" alt="">
                            </div>
                            <h2 class="font-medium text-[25px] lg:text-[30px]">Starts the automated process</h2>
                            <p>The automated process starts as soon as your clothes go into
                                the machine.</p>
                        </div>
                        <div class="hidden lg:flex flex-col relative justify-center gap-[20px]">
                            <div class="absolute rounded-full top-5 z-20 left-3 md:left-5 bg-other text-white">
                                <span class="p-[10px_15px] text-lg">urban</span>
                            </div>
                            <div class="relative">
                                <a href="#"
                                    class="absolute hidden md:flex rounded-full top-[40%] items-center justify-center shadow-2xl w-[50px] h-[50px] xl:right-[-80px] lg:right-[-10px] md:right-0 z-10  bg-black text-other">
                                    <i class="fa-solid fa-arrow-right fa-lg"></i>
                                </a>
                                <img src="./assets/blog3.jpg" alt="">
                            </div>
                            <h2 class="font-medium text-[25px] lg:text-[30px]">Starts the automated process</h2>
                            <p>The automated process starts as soon as your clothes go into
                                the machine.</p>
                        </div>
                    </div>
                </div>

            </section>
        `;
    }

}

customElements.define('blog-component', Blog);
