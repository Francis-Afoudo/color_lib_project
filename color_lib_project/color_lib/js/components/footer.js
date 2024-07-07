class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML =
`
            <footer class="bg-primary h-[1020px] md:h-[850px] lg:h-[550px] text-white">
                <div
                    class="container h-[inherit] pt-[30px] md:pt-[70px] flex flex-col gap-[50px] md:gap-[100px] justify-center md:items-center md:h-[inherit]">
                    <div
                        class="flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-[25px] ">
                        <div class="flex flex-col gap-[15px]">
                            <img src="./assets/sting-logo.jpg" class="py-2 w-14 lg:w-20" alt="">
                                <p class="text-[14px] md:text-[18px] ">We offer you the best experience and prepare you for your dream future!</p>
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
                                    <span class="text-[14px] md:text-[18px]">Digital Services</span>
                                </div>
                                <div>
                                    <span class="text-[14px] md:text-[18px]">Career Orientation</span>
                                </div>
                                <div>
                                    <span class="text-[14px] md:text-[18px]">Agriculture</span>
                                </div>
                                <div>
                                    <span class="text-[14px] md:text-[18px]">Driving Lessons</span>
                                </div>

                                <div>
                                    <span class="text-[14px] md:text-[18px]">Health</span>
                                </div>
                                <div>
                                    <span class="text-[14px] md:text-[18px]">Concours information</span>
                                </div>
                                <div>
                                    <span class="text-[14px] md:text-[18px]">Social Action</span>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-[15px]">
                            <h2 class="text-lg font-semibold">Contact Us</h2>
                            <address class="not-italic" class="text-[14px] md:text-[18px]">Beside Ecobank, Molyko, Buea, South West Region, Cameroon
                            </address>
                            <div>
                                    <span class="text-other font-semibold text-2xl">+(237) 6 74 67 44 43</span>
                            </div>
                        </div>
                    </div>
                    <p class="text-center text-[14px] md:text-[18px]">Copyright @<span x-text="new Date().getFullYear()"></span>
                        . All Rights Reserved</span>
                    </p>
                </div>
            </footer >
            `;
    }

}


customElements.define('footer-component', Footer);
