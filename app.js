const app = new Vue ({
    el: '#app',
    data: {
        titulo: 'Parcial WPA',
        per:[]
    },

    methods:{

    },

    mounted(){
        fetch("https://rickandmortyapi.com/documentation/#filter-characters?name=rick&status=alive")
            .then(res => res.json())
            .then(res =>{
                this.per = res.results;
                
            })
    }
})