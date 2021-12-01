const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const sendBtnItem = $('.send-btn-item')




const app = {

 handleInput(){
        const emailAlert = $('.email-alert')
        const email = $('input[name="email"]')
        
        const emailCheck = /^[A-Za-z][\w$.]+@[\w]+\.\w+$/;

        const values = $$('.value')
        const panes = $$('.pane')
        
        values.forEach((valueItem,index) => {
            const paneIndex = panes[index] 
            if(valueItem.value === ''){
                paneIndex.style.display= 'block'  
                if(email.value === ''){
                    emailAlert.style.display = 'none'
                }
            } 
            else{
              
                if (emailCheck.test(email.value)) { 
                    emailAlert.style.display = 'none'
                } 
                else {
                    emailAlert.style.display = 'block'
                    paneIndex.style.display = 'none'
                }   
            }

            
            
        });

        

        
       
            
        

       
 },

 start(){
    sendBtnItem.onclick = () => {
        this.handleInput()
    }
 }

}
app.start()