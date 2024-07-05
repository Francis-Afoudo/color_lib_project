class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML =
        `
            <footer class="bg-primary h-[920px] md:h-[650px] lg:h-[400px] text-white">
                <div
                    class="container h-[inherit] flex flex-col gap-[25px] md:gap-[50px] justify-center items-center md:h-[inherit]">
                    <div
                        class="flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-[25px] ">
                        <div class="flex flex-col gap-[15px]">
                            <img src="./assets/sting-logo.jpg" class="py-2 w-14 lg:w-20" alt="">
                                <p class="text-[14px] md:text-[18px] ">Land behold it created good saw after she'd Our set
                                    living. Signs
                                    midst
                                    dominion creepeth morning
                                    laboris nisi ufsit aliquip.</p>
                                <div class="flex gap-[20px]">
                                    <a href="#"><i class="fa-brands fa-square-x-twitter fa-xl"></i></a>
                                    <a href="#"><i class="fa-brands fa-square-facebook fa-xl"></i></a>
                                    <a href="#"><i class="fa-brands fa-linkedin fa-xl"></i></a>

                                </div>
                        </div>
                        <div class="flex flex-col lg:ml-[65px] gap-[15px]">
                            <h2 class="text-lg font-semibold">Navigation</h2>
                            <div class="flex gap-[10px] flex-col">
                                <div>
                                    <a href="./index.html" class="hover:underline text-[14px] md:text-[18px]">Home</a>
                                </div>
                                <div>
                                    <a href="./about.html"
                                        class="hover:underline text-[14px] md:text-[18px]">About</a>
                                </div>
                                <div>
                                    <a href="./services.html"
                                        class="hover:underline text-[14px] md:text-[18px]">Services</a>
                                </div>
                                <div>
                                    <a href="./contact.html" class="hover:underline text-[14px] md:text-[18px]">Contacts</a>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col  gap-[15px]">
                            <h2 class="text-lg font-semibold">Services</h2>

                            <div class="flex gap-[10px] flex-col">
                                <div>
                                    <a href="#" class="hover:underline text-[14px] md:text-[18px]">Blackforest</a>
                                </div>
                                <div>
                                    <a href="#" class="hover:underline text-[14px] md:text-[18px]">Bodhubon</a>
                                </div>
                                <div>
                                    <a href="#" class="hover:underline text-[14px] md:text-[18px]">Services</a>
                                </div>
                                <div>
                                    <a href="#" class="hover:underline text-[14px] md:text-[18px]">Rongdonu</a>
                                </div>
                                <div>
                                    <a href="#" class="hover:underline text-[14px] md:text-[18px]">Meghrong</a>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-[15px]">
                            <h2 class="text-lg font-semibold">Contact Us</h2>
                            <address class="not-italic" class="text-[14px] md:text-[18px]">76/A, Green Lane, Dhanmondi, NYC
                            </address>
                            <div>
                                <a href="#">
                                    <span class="text-other font-semibold text-2xl">+(237) 6 22 15 60 46</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <p class="text-center text-[14px] md:text-[18px]">Copyright @<span x-text="new Date().getFullYear()"></span>
. All Rights Reserved</span>
                    </p>
                </div>
            </footer>
        `;
    }

}


customElements.define('footer-component', Footer);
