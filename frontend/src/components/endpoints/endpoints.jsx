class Endpoints {
   
    constructor(){
        // this.BASE_URL = "https://api.techkisan.com"; //PRODUCTION
        this.BASE_URL2="https://api.techkisan.in"
        this.BASE_URL="https://api.techkisan.com"
        // this.BASE_URL2="http://localhost:8000"
        this.CONTACT_US_URI=`${this.BASE_URL}/contactus`
        this.SIGNUP_URI=`${this.BASE_URL}/user/register`
        this.LOGIN_URI=`${this.BASE_URL}/user/login`
        this.LOGIN_USER_FETCH=`${this.BASE_URL}/user/checkuser`

        //MICROSERVUCES APIS 
        this.ALL_TICKET_FETCH=`${this.BASE_URL2}/ticket/get_tickets`
        this.CREATE_TICKET=`${this.BASE_URL2}/ticket/create_ticket_user`
        this.MY_TICKET_FETCH=`${this.BASE_URL2}/ticket/get_my_tickets`
    }

}

export default Endpoints;