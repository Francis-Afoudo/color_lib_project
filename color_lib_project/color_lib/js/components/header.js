class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = 
        `
        <header class="relative ">
            <section class="bg-[#444] h-[60px]">
                <div class="flex justify-between w-[100%] h-[inherit]">
                    <div class=" w-[50%] mm:w-[40%] ml:w-[35%] md:w-[45%] flex">
                        <div class="border-r-[1px] border-r-solid border-r-[#6e6969] flex justify-center items-center ">
                            <img src="../color_lib/assets/logo.png" class="w-[150px] px-[15px]" alt="">
                        </div>
                        <a href="#" class="hidden md:flex justify-center items-center text-[#6e6969] bg-[#222]">
                            <span class="text-[18px] md:px-[15px] px-[25px] text-[#9B9B9B] font-light">+
                                &nbsp;THESTARTUP</span>
                        </a>
                    </div>
                    <div class="flex w-[35%] md:w-[35%] lg:w-[30%] xl:w-[20%]">
                        <a href="#"
                            class="hover:bg-[#222] hidden md:flex border-x-[1px] w-[20%] lg:w-[20%] border-x-solid border-x-[#6e6969] justify-center items-center">
                            <i class="fa-solid fa-laptop fa-xl text-[#9B9B9B] hover:text-[#fff]"></i>
                        </a>
                        <a href="#"
                            class="hover:bg-[#222] hidden md:flex border-r-[1px] w-[20%] lg:w-[20%] border-r-solid border-r-[#6e6969] justify-center items-center">
                            <i class="fa-solid fa-tablet fa-xl text-[#9B9B9B] hover:text-[#fff]"></i>
                        </a>
                        <a href="#"
                            class="hover:bg-[#222] hidden md:flex border-r-[1px] w-[20%] lg:w-[20%] border-r-solid border-r-[#6e6969] justify-center items-center">
                            <i class="fa-solid fa-mobile fa-xl text-[#9B9B9B] hover:text-[#fff]"></i>
                        </a>
                        <a href="#"
                            class="hover:bg-[#222] flex justify-center w-[50%] md:w-[20%] lg:w-[20%] h-[inherit] bg-[#7AC64D] items-center">
                            <i class="fa-solid fa-cart-shopping fa-xl text-white hover:text-[#fff]"></i>
                        </a>
                        <a href="#"
                            class="hover:bg-[#222] flex justify-center items-center w-[50%] md:w-[20%] lg:w-[20%] h-[inherit]">
                            <i class="fa-solid fa-xmark fa-xl text-[#9B9B9B] hover:text-[#fff]"></i>
                        </a>
                    </div>
                </div>
            </section>
            <section class="flex container flex-col ">
                <div class="container flex items-center  lg:px-[32px] lg:max-w-[unset] justify-between  ">
                    <img src="./assets/sting-logo.jpg" class="py-1 md:py-2 w-14 lg:w-20" alt="">
                        <div class="flex items-center text-base md:text-xl justify-center">
                            <nav class="hidden lg:flex justify-center gap-[40px] items-center">
                                <li class="list-none"><a href="./index.html" class="font-medium hover:text-primary">Home</a></li>
                                <li class="list-none"><a href="./about.html"
                                    class="font-medium hover:text-primary">About</a></li>
                                <li class="list-none"><a href="./services.html"
                                    class="font-medium hover:text-primary">Services</a></li>
                                <!-- <li class="list-none"><a href="./blog.html" class="font-medium hover:text-primary">Blog</a></li> -->
                                <li class="list-none"><a href="./contact.html"
                                    class="font-medium hover:text-primary">Contact</a></li>
                               <!-- <a href="./login.html" class="list-none text-white bg-primary px-[20px] py-[10px] rounded-md">
                                    <li>Join Us</li>
                                </a> -->
                            </nav>
                        </div>
                </div>
            </section>
            <div class="flex md:container ">
                <div
                    class="lg:hidden absolute top-[100%] md:top-[94%] z-20 w-full h-[50px] mx-auto flex bg-[#444] md:w-[90%] items-center justify-end">
                    <a href="#" class="bg-[#222] px-[8px] py-[6px] rounded-md my-[7px] mr-[15px]">
                        <span class="text-white font-medium">MENU&nbsp;<i class="fa-solid fa-bars"></i></span>
                    </a>
                </div>
            </div>

        </header>`;
    }

}


customElements.define('header-component', Header);
