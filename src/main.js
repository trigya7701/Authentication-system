import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'

const store=createStore({
    state (){
        return{
            users:[],
            userExists:false
        }
    },
    mutations:{
        registerData(state,payload){
            
            let currentUser={
                name:payload.name,
                email:payload.email,
                password:payload.password
            };
            if(localStorage.users){
                let previousUsersdata=localStorage.users;
                state.users=JSON.parse(previousUsersdata);
            }
            state.users.push(currentUser);
            localStorage.setItem("users",JSON.stringify(state.users));
        },

        getLoginData(state,payload){
            let userData=localStorage.users;
            userData=JSON.parse(userData);
           let userIndex=userData.findIndex(user=>user.email===payload.email);

            if(userIndex>-1){
               let userPassword=userData.findIndex(user=>user.password===payload.password);

                if(userPassword>-1){
                    state.userExists=true;
                }
                else{
                    state.userExists=false;
                }
            }
            else{
                state.userExists=false;
            }
        }
    }

})
createApp(App).use(router).use(store).mount('#app')
