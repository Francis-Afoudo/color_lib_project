class Conversion_requirements extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <section>
            <section
                class="container md:w-[70%] lg:w-[100%] lg:mx-auto flex flex-col gap-[20px] lg:gap-[70px] items-center justify-center lg:flex-row m-[40px_0px_70px] lg:pr-0">
                <div class="flex flex-col lg:w-[50%]  ">
                    <h1 class="font-semibold text-[25px] md:text-[35px] lg:text-[45px]">Some more features that seal the
                        deal and convert the customer</h1>
                    <a href="#" class="flex gap-[20px] p-[20px_8px_10px]">
                        <span class="text-other text-2xl font-bold ">+</span>
                        <span class="text-[22px]">Start the automated process</span>
                    </a>
                    <hr class="lg:w-[75%]">
                    <a href="#" class="flex gap-[20px] p-[20px_7px_10px]">
                        <span class="text-other text-2xl font-bold ">+</span>
                        <span class="text-[22px]">Start the automated process</span>
                    </a>
                    <hr class="lg:w-[75%]">
                    <a href="#" class="flex gap-[20px] p-[20px_7px_10px]">
                        <span class="text-other text-2xl font-bold ">+</span>
                        <span class="text-[22px]">Start the automated process</span>
                    </a>
                    <hr class="lg:w-[75%]">
                    <a href="#" class="flex gap-[20px] p-[20px_7px_10px]">
                        <span class="text-other text-2xl font-bold ">+</span>
                        <span class="text-[22px]">Start the automated process</span>
                    </a>
                    <hr class="lg:w-[75%]">
                </div>
                <img src="../color_lib/assets/about2.jpg" class="lg:w-[50%]" alt="">

            </section>
        </section>  
 `;
    }

}

customElements.define('conversion-requirements-component', Conversion_requirements);
