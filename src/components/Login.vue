<template>
    <div class="container">
          <div class="signin-container">
            <h1>Hello, Friend !!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button @click="goToRegister()" class="transparent">Sign up</button>
        </div>
        <div class="form-container">
            <form @submit.prevent="validate">
                <h1>Sign in</h1>
                <input type="email" v-model="email" placeholder="Email">
                <input type="password" v-model="password" placeholder="Password">
                <button>Sign in</button>
            </form>
        </div>
      
        
    </div>
</template>

<script>
import {mapState} from 'vuex'
import validator from 'validator';
export default {
    name:'Register',
	data(){
		return{
			email:"",
			password:""
		}
	},
	computed:{
	...mapState(["userExists"])
		
	},
	methods:{
        goToRegister(){
            this.$router.push('/'); 
        },
		
		validate(){
			if(this.email!=="" && this.password!=="" &&  validator.isEmail(this.email)){
				let crediantials={
					email:this.email,
					password:this.password
				};
				this.$store.commit('getLoginData',crediantials);
				if(this.$store.state.userExists===true){
					alert("Login Successfull !!");
					this.$store.state.userExists=false;
					this.email="";
					this.password="";
				}
				else{
					alert("Invalid Crediantials!!");
				}

			}else{
				alert("Invalid Crediantials!!");
			}
		}
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');



h1 {
	font-weight: bold;
	margin: 0;
}

h2 {
	text-align: center;
}
p {
	font-size: 20px;
	font-weight: 100;
	line-height: 20px;
	letter-spacing: 0.5px;
	margin: 20px 0 30px;
}
button {
	border-radius: 20px;
	border: 1px solid #FF4B2B;
	background-color: #FF4B2B;
	color: #FFFFFF;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	
}

button:active {
	transform: scale(0.95);
}
button.transparent {
	background-color: transparent;
	border-color: #FFFFFF;
}
button:focus {
	outline: none;
}

.container{
	font-family: 'Montserrat', sans-serif;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25),0 10px 10px rgba(0,0,0,0.22);
    margin: 5% auto;
	height: 500px;
	width: 768px;
    display: flex;
    flex-direction: row;
	
}
.form-container{
    flex: 1;
}
.signin-container{
    background-color: #FF4B2B ;
    color: #fff;
    flex: 0.75;
    display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 50px;
	height: 100%;
	text-align: center;

}
form {
	background-color: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 50px;
	height: 100%;
	text-align: center;
}

input {
	background-color: #eee;
	border: none;
	padding: 12px 15px;
	margin: 8px 0;
	width: 100%;
}



</style>