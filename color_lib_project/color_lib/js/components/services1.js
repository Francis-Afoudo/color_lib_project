class Services1 extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML =`
            <section class="my-[50px] md:my-[100px] container lg:px-0">
                <div class="block md:grid md:grid-cols-2 md:grid-rows-1 md:gap-[150px] md:items-center">
                    <h1 class="md:w-[100%] text-[25px] md:text-[35px] lg:text-[45px] font-semibold">Services We Provide
                    </h1>
                    <p class=" md:w-[100%] text-[18px] md:text-[20px] mt-[30px] md:mt-[unset] text-secondary">Let us help you transform your vision into a tangible plan and take the first step towards achieving your goals</p>
                </div>
                <div
                    class="mt-[60px] grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-2 gap-[35px]" x-data="{ services: [
                        {title: 'Digital Services', description: 'We educate you on various IT fields like Cyber security, Software development, Microsoft Office ', img:'./assets/IMG-20240707-WA0024.jpg'},
                        {title: 'Career Orientation', description: 'We organize seminars, workshops, symposiums,conferences, one to one mentorship for students from primary, secondary and University educations.', img:'./assets/IMG-20240707-WA0001.jpg'},
                        {title: 'Agriculture', description: 'We engage in agricultural activities like seedling production, Nurseries, Grafting, Crop production, poultry farming.', img:'./assets/IMG-20240707-WA0005.jpg'}, 
                        {title: 'Driving Lessons', description: 'We engage in safe driving and logistics.', img:'./assets/blog3.jpg'},
                        {title: 'Health', description: 'We provide educative talks on reproductive health, vaccination,Non Communicable Diseases(NCDs),internal organ health and nutrition.', img:'./assets/blog3.jpg'},
                        {title: 'Preparatory Class for Concours', description: 'We provide preparatory classes for ongoing exams and orientation about them like  FAVM, FET, COT in the University of Buea, NASLA, ENAM.', img:'./assets/blog3.jpg'},
                        {title: 'Social Action', description: 'We donate gifts to orphanages, prizes to meritorious students in schools and organize environmental clean-up campaigns.', img:'./assets/blog3.jpg'}
                      ]}">


                <template x-for="service in services" :key="service.title" >
                      <div class="border-[1px] border-solid border-[#c8c3c3] ">
                        <div class="w-full h-[250px] overflow-hidden">
                            <img :src="service.img" class="w-[inherit] object-cover h-[inherit]">
                        </div>
                        <div class="flex justify-center flex-col gap-[15px] px-[20px] py-[25px]">
                            <div>
                                <a href="#" class="font-semibold inline hover:text-primary text-[20px]" x-text="service.title"></a>
                            </div>
                            <p class="text-secondary text-[16px] md:text-[18px]" x-text="service.description">Content marketing is nothing but offering users
                                value.
                            </p>
                            <div>
                                <a href="#"
                                    class="hover:text-primary underline decoration-2 decoration-black hover:decoration-primary decoration-solid underline-offset-[10px] mb-[20px]"
                                    x-text="'Let's Talk'">Let's Talk </a>
                            </div>
                        </div>
                    </div>
                </template>

            </div>
            </section >
            `;
    }

}


customElements.define('services1-component', Services1);
