class About_ceo extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML =`
            <section class="bg-[url('../assets/section-bg1.jpg')] bg-fixed bg-center bg-cover h-[600px] ">
                <div class="flex justify-end items-center h-[inherit] container ">
                    <div
                        class="flex flex-col gap-[25px] md:w-[450px] lg:w-[700px] p-[30px_20px] lg:p-[60px_45px] bg-white justify-center">
                        <h2 class="font-semibold text-[25px] lg:text-[30px]">"Process starts as soon as your
                            clothes commodo diam libero vitae."</h2>
                        <p class="text-lg">The automated process starts as soon as your clothes go into
                            the machine. Duis cursus, mi quis viverra ornare, eros dolor
                            interdum nulla, ut commodo diam libero vitae erat. Aenean
                            faucibus nibh et justo cursus id rutrum lorem imperdiet.</p>
                        <span><em class="not-italic font-semibold text-lg">- Robert Brown </em> CEO of Colorlib</span>
                    </div>

                </div>

            </section>
        `;
    }

}

customElements.define('about-ceo-component', About_ceo);
