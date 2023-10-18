
const app = new Vue ({
    el: '#app',
    data:{
        titulo: 'Parcial WPA',
        vivos:[

        ]
    },

    methods:{
        verModal(){
            const myModal = document.getElementById('myModal')
            const myInput = document.getElementById('myInput')
            myModal.addEventListener('shown.bs.modal', () => {
            myInput.focus()
            })
        },

        verAlert(url){
            fetch(url)
                .then(res => res.json())
                .then(res => {
                    const {species, origin} = res;
                    const {name} = origin;
                    alert(`Especia: ${species}, de ${name}` )
                })
        }
    },

    mounted(){
        fetch("https://rickandmortyapi.com/api/character/?status=alive&limit=20")
            .then(res => res.json())
            .then(res =>{
                this.vivos = res.results;
            })
    }
})