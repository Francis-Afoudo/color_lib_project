class Top extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML =`
            <div>
                <a href="https://wa.me/237673125746"
                    class=" bottom-[120px] right-4 md:right-10  shadow-2xl fixed z-40">
                    <img src="./assets/whatsapp_icon-removebg-preview.png" class=" w-[60px] h-[60px]">
                </a>
                <a href="#"
                    class="flex justify-center items-center text-white fixed rounded-full bottom-10 right-4 md:right-10 shadow-2xl z-40  bg-other  w-[60px] h-[60px]">
                    <i class="fas fa-level-up-alt"></i>
                </a>
            </div>
        `;
    }
}
customElements.define('top-component', Top);
