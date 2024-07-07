class Our_philosophy extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML =`
            <section class=" our_philosophy">
                <div class="flex flex-col lg:flex-row lg:gap-[unset] xl:gap-[40px] gap-[40px]">
                    <div class="w-[100%] lg:w-[50%] md:flex h-[500px] md:h-[750px] overflow-hidden">
                        <div class="hidden md:block bg-other w-[32px] xl:w-[48px] h-[inherit]"></div>
                        <img src="./assets/IMG-20240707-WA0025.jpg" class="w-[inherit] lg:w-[100%] h-[inherit] object-cover">
                    </div>
                    <div
                        class="container md:w-[70%] lg:w-[50%] mx-[unset] flex flex-col xl:pr-[100px] mb-[50px] lg:mb-[unset] justify-center gap-[45px]">
                        <h1 class="text-[25px] md:text-[35px] lg:text-[45px] font-semibold md:font-bold">Our <br> Philosophy
                        </h1>
                        <div>
                            <p class="text-secondary text-[16px] md:text-[18px]"> Every member of STING and the communuty it targets should attain their full potential in line with the Sustainable Development Goal(SDGs) through mutually enriching interactions. We respect various beliefs and diversities to make us stronger together. 
                                <br>
                                    <br>
                                        Everything is possible if you want to. Do good, work smarter and get going!
                                    </p>
                                    <p class="mt-[20px]">President, STING</p>
                                    <h2 class="text-[30px] font-medium mt-[30px]">Ede Agnes Prudencia</h2>
                                </div>
                        </div>
                    </div>
            </section>
        `;
    }

}

customElements.define('our-philosophy-component', Our_philosophy);
