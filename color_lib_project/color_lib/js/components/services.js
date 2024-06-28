class Services extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
          <section class="my-[50px] md:my-[100px] container lg:px-0">
            <div class="block md:grid md:grid-cols-2 md:grid-rows-1 md:gap-[150px] md:items-center">
                <h1 class="md:w-[100%] text-[25px] md:text-[35px] lg:text-[45px] font-semibold">Services We Provide
                </h1>
                <p class=" md:w-[100%] text-[18px] md:text-[20px] mt-[30px] md:mt-[unset] text-secondary">Content
                    marketing is nothing
                    but offering users value.It
                    is
                    not just about traffic minion customers.</p>
            </div>
            <div
                class="mt-[60px] grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-[35px]">
                <div
                    class="flex justify-center flex-col border-[1px] gap-[15px] px-[20px] py-[25px] h-[350px] w-[100%] border-solid border-[#c8c3c3]">
                    <img src="./assets/services1.svg" class="w-[57px]" alt="">
                    <div>
                        <a href="#" class="font-semibold inline hover:text-primary text-[20px]">Web Design</a>
                    </div>
                    <p class="text-secondary text-[16px] md:text-[18px]">Content marketing is nothing but offering users
                        value.</p>
                    <div>
                        <a href="#"
                            class="hover:text-primary underline decoration-2 decoration-black hover:decoration-primary decoration-solid underline-offset-[10px] mb-[20px]">Let's
                            Talk</a>
                    </div>
                </div>
                <div
                    class="flex justify-center flex-col border-[1px] gap-[15px] px-[20px] py-[25px] w-[100%] border-solid border-[#c8c3c3]">
                    <img src="./assets/services2.svg" class=" w-[57px]" alt="">
                    <div>
                        <a href="#" class="font-semibold inline hover:text-primary text-[20px]">Web Design</a>
                    </div>
                    <p class="text-secondary text-[16px] md:text-[18px] ">Content marketing is nothing but offering
                        users value.</p>
                    <div>
                        <a href="#"
                            class="hover:text-primary underline decoration-2 decoration-black hover:decoration-primary decoration-solid underline-offset-[10px] mb-[20px]">Let's
                            Talk</a>
                    </div>
                </div>
                <div
                    class="flex justify-center flex-col border-[1px]  gap-[15px] px-[20px] py-[25px] w-[100%] border-solid border-[#c8c3c3]">
                    <img src="./assets/services3.svg" class=" w-[57px]" alt="">
                    <div>
                        <a href="#" class="font-semibold inline hover:text-primary text-[20px]">E-Commerce</a>
                    </div>
                    <p class="text-secondary text-[16px] md:text-[18px] ">Content marketing is nothing but offering
                        users value.</p>
                    <div>
                        <a href="#"
                            class="hover:text-primary underline decoration-2 decoration-black hover:decoration-primary decoration-solid underline-offset-[10px] mb-[20px]">Let's
                            Talk</a>
                    </div>
                </div>
            </div>
        </section>
        `;
    }

}


customElements.define('services-component', Services);
