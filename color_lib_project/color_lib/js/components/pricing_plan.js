class Pricing_plan extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML =`
            <section>
                <div class="bg-primary w-[100%] lg:p-0 md:text-center h-[550px]  text-white ">
                    <div class="container lg:max-w-[unset]">
                        <h1 class="text-[25px] md:text-[35px] lg:text-[45px] pt-[70px] font-semibold md:font-bold ">
                            Affordable
                            Pricing Plan
                        </h1>
                        <p class="mt-[20px]">Content marketing is nothing but offering users value. It is not just about
                            traffic
                            minion <br class="hidden xl:block"> consectetur adipiscing elitd do eiusmod tempor incididun.
                        </p>
                    </div>
                </div>

                <div
                    class="grid container lg:p-0 grid-cols-1 mt-[40px] text-black grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-[35px] transform -translate-y-[320px] ">
                    <div
                        class="flex flex-col gap-[25px] bg-white text-center hover:shadow-2xl py-[30px] px-[25px] justify-center items-center ">
                        <div class="p-[5px_15px] rounded-full border-black border-[1px] border-solid">
                            <h2 class="font-semibold">Basic Info</h2>
                        </div>
                        <div class="flex text-primary relative">
                            <span class="items-start absolute top-[-7px] left-[-15px] text-2xl">$</span>
                            <span class="items-end text-6xl">700</span>
                        </div>
                        <p class="text-secondary text-[16px] md:text-[18px] ">Content marketing is nothing but offering
                            users value.</p>
                        <hr class="w-[90%]">
                            <ul class="list-none flex flex-col gap-[25px]">
                                <li class="text-[#7977a2] text-[16px] md:text-[18px] ">Increase Traffic 25%</li>
                                <li class="text-[#7977a2] text-[16px] md:text-[18px] ">Social Media marketing</li>
                                <li class="text-[#7977a2] text-[16px] md:text-[18px] ">10 Free Optimization</li>
                                <li class="text-[#7977a2] text-[16px] md:text-[18px] ">24/7 Support</li>
                            </ul>
                            <a href="#" class="bg-primary rounded-xl ">
                                <p class="px-[30px] py-[15px] text-xl text-white">Get Started Now</p>
                            </a>
                    </div>
                    <div
                        class="flex flex-col gap-[25px] bg-white text-center hover:shadow-2xl py-[30px] px-[25px] justify-center  items-center ">
                        <div class="p-[5px_15px] rounded-full border-black border-[1px] border-solid">
                            <h2 class="font-semibold">Basic Info</h2>
                        </div>
                        <div class="flex text-primary relative">
                            <span class="items-start absolute top-[-7px] left-[-15px] text-2xl ">$</span>
                            <span class="items-end text-6xl">700</span>

                        </div>
                        <p class="text-secondary text-[16px] md:text-[18px] ">Content marketing is nothing but offering
                            users value.</p>
                        <hr class="w-[90%]">
                            <ul class="list-none flex flex-col gap-[25px]">
                                <li class="text-[#7977a2] text-[16px] md:text-[18px] ">Increase Traffic 25%</li>
                                <li class="text-[#7977a2] text-[16px] md:text-[18px] ">Social Media marketing</li>
                                <li class="text-[#7977a2] text-[16px] md:text-[18px] ">10 Free Optimization</li>
                                <li class="text-[#7977a2] text-[16px] md:text-[18px] ">24/7 Support</li>
                            </ul>
                            <a href="#" class="bg-primary rounded-xl ">
                                <p class="px-[30px] py-[15px] text-xl text-white">Get Started Now</p>
                            </a>
                    </div>
                    <div
                        class="flex flex-col gap-[25px] bg-white text-center hover:shadow-2xl py-[30px] px-[25px] justify-center items-center ">
                        <div class="p-[5px_15px] rounded-full border-black border-[1px] border-solid">
                            <h2 class="font-semibold">Basic Info</h2>
                        </div>
                        <div class="flex text-primary relative">
                            <span class="items-start absolute top-[-7px] left-[-15px] text-2xl ">$</span>
                            <span class="items-end text-6xl">700</span>

                        </div>
                        <p class="text-secondary text-[16px] md:text-[18px] ">Content marketing is nothing but offering
                            users value.</p>
                        <hr class="w-[90%]">
                            <ul class="list-none flex flex-col gap-[25px]">
                                <li class="text-[#7977a2] text-[16px] md:text-[18px] ">Increase Traffic 25%</li>
                                <li class="text-[#7977a2] text-[16px] md:text-[18px] ">Social Media marketing</li>
                                <li class="text-[#7977a2] text-[16px] md:text-[18px] ">10 Free Optimization</li>
                                <li class="text-[#7977a2] text-[16px] md:text-[18px] ">2text-[16px] md:text-[18px] 4/7 Support
                                </li>
                            </ul>
                            <a href="#" class="bg-primary rounded-xl ">
                                <p class="px-[30px] py-[15px] text-xl text-white">Get Started Now</p>
                            </a>
                    </div>
                </div>
            </section>
        `;
    }

}

customElements.define('pricing-plan-component', Pricing_plan);
