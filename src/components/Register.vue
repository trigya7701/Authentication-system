<template>
    <div class="container">
        <div class="form-container">
            <form @submit.prevent="validate">
                <h1>Create Account</h1>
                <input type="text"  v-model="name" placeholder="Full Name">
                <input type="email" v-model="email" placeholder="Email">
                <input type="password" v-model="password" placeholder="Password">
                <input type="password" v-model="cpassword" placeholder="Confirm Password">
                <button >Sign Up</button>
            </form>
        </div>
        <div class="signin-container">
            <h1>Welcome Back!!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button @click="goTologin()" class="transparent">Sign in</button>
        </div>
        
    </div>
</template>

<script>
import validator from 'validator';
export default {

    name:'Register',
    data(){
        return{
            name:"",
            email:"",
            password:"",
            cpassword:""
        };
    },
    methods:{
        goTologin(){
            this.$router.push('/login'); 
        },
        validate(){
            let user={ 
                 name:this.name,
                 email:this.email,
                 password:this.password
            };
   
            if(this.name!=="" && this.email!=="" && this.password!=="" && this.cpassword!==""){

                if(this.password===this.cpassword && validator.isEmail(this.email)){
                    alert("Registration Successfull !!");
                    this.name="";
                    this.email="";
                    this.password="";
                    this.cpassword="";
                     
                    this.$store.commit('registerData', user);
                    this.$router.push('/login'); 

                  
                }else{
                    alert("Please fill all fields correctly !!");
                   
                }
            }else{
                alert("Please fill all fields correctly !!");
                
            }
        },
      
        
        
    },
   
    
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