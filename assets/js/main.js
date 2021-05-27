const app = new Vue({

    el:"#app",

    data:{
        Mails:[],
    },

    methods:{
        mailRequest(){
            axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(response  =>{
                console.log(response);
                this.Mails.push(response.data.response);
            });
        },
        mail(number){
            for(i = 0; i < number; i++){
                this.mailRequest();
                
            }
        },
    },

    mounted(){
        this.mail(10);
    }
});