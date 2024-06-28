class Top extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML =`
            <a
                class="flex justify-center items-center text-white rounded-full bottom-10 right-10  shadow-2xl z-40  bg-other fixed w-[60px] h-[60px]">
                <i class="fas fa-level-up-alt"></i>
            </a>
        `;
    }

}

customElements.define('top-component', Top);
