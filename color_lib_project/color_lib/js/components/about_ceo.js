class About_ceo extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML =`
            <section class="bg-[url('../assets/IMG-20240707-WA0028.jpg')] bg-fixed bg-center bg-cover h-[600px] ">
                <div class="flex justify-end items-center h-[inherit] container ">
                    <div
                        class="flex flex-col gap-[25px] md:w-[450px] lg:w-[700px] p-[30px_20px] lg:p-[60px_45px] bg-white justify-center">
                        <h2 class="font-semibold text-[25px] lg:text-[30px]">"The process starts as soon as you
                            get exposed to STING's culture."</h2>
                        <p class="text-lg">My life has never been thesame again. Through your follow-ups and culture of immedeiate action, training and mentorships, I gained soft skills and landed my first job. Thanks again</p>
                        <span><em class="not-italic font-semibold text-lg">- Francis Afoudo</em>, Intern at STING</span>
                    </div>

                </div>

            </section>
        `;
    }

}

customElements.define('about-ceo-component', About_ceo);
