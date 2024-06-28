class Our_philosophy extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML =`
            <section class="mt-[50px] md:mt-[100px] hero_text">
                <div class="flex flex-col lg:flex-row lg:gap-[unset] xl:gap-[40px] gap-[40px]">
                    <div class="w-[100%] lg:w-[50%] md:flex h-[500px] md:h-[750px]">
                        <div class="hidden md:block bg-[#FFDDB5] w-[32px] xl:w-[48px] h-[inherit]"></div>
                        <div class="w-[inherit] lg:w-[100%] h-[inherit] bg-author bg-center bg-cover"></div>
                    </div>
                    <div
                        class="container md:w-[70%] lg:w-[50%] mx-[unset] flex flex-col xl:pr-[100px] mb-[50px] lg:mb-[unset] justify-center gap-[45px]">
                        <h1 class="text-[25px] md:text-[35px] lg:text-[45px] font-semibold md:font-bold">Our <br> Philosophy
                        </h1>
                        <div>
                            <p class="text-secondary text-[16px] md:text-[18px]">The automated process starts as soon as
                                your clothes go into the machine. Duis cursus, mi quis
                                viverra ornare, eros dolor interdum nulla, ut commodo
                                diam libero vitae erat. Aenean faucibus nibh et justo
                                cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                                risus tristique posuere.
                                <br>
                                    <br>
                                        Interdum nulla, ut commodo diam libero vitae erat.
                                        Aenean faucibus nibh et justo cursus id rutrum lorem
                                        imperdiet. Nunc ut sem vitae risus tristique posuere.
                                    </p>
                                    <p class="mt-[20px]">CEO, Consulto</p>
                                    <h2 class="text-[30px] font-medium mt-[30px]">Capcilena Hanry</h2>
                                </div>
                        </div>
                    </div>
            </section>
        `;
    }

}

customElements.define('our-philosophy-component', Our_philosophy);
