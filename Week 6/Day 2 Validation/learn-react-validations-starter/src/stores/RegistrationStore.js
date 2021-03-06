class RegistrationStore{
  constructor(){
    this.fields = {
      firstName:'',
      lastName:'',
      email:'',
      password:''
    }
    this.errors = {}
  }

  getFields(){
    return this.fields
  }

  getErrors(){
      return this.errors
  }

  validate(){
  this.errors = {}
    this.validatePresence('firstName')
    this.validatePresence('lastName')
    this.validatePresence('password')
    this.validateEmail('email')
    this.validatePassword('password')
    // this.validatePassword2('password')
  }

  validatePresence(fieldName){
    if(this.fields[fieldName] === ''){
      this.addError(fieldName, 'is Required')
    }
  }


  validateEmail(fieldName){
    const filter = /^\w+([\.-]?\ w+)*@\w+([\.-]?\ w+)*(\.\w{2,3})+$/
    if(!filter.test(this.fields[fieldName])){
      this.addError(fieldName, 'is not an email')
    }
  }

  validatePassword(fieldName){
      var letter= /[a-zA-Z]/;
      var number= /[0-9]/;
  //     if(this.fields[fieldName].length < 8){
  //         this.addError(fieldName, 'needs a length of at least 8 characters')
  //     } else if(!this.fields[fieldName].match(letter)) {
  //         this.addError(fieldName, 'password must contain letters')
  //     } else if(!this.fields[fieldName].match(number)) {
  //         this.addError(fieldName, 'password must contain at least 1 number')
  //     }
  //
      if(this.fields[fieldName].length < 8){
        this.addError(fieldName, 'needs a length of at least 8 characters')
      }
      if(!this.fields[fieldName].match(letter)) {
        this.addError(fieldName, 'password must contain letters')
      }
      if(!this.fields[fieldName].match(number)) {
        this.addError(fieldName, 'password must contain at least 1 number')
      }
    }




  addError(fieldName, message){
    // this.errors[fieldName] = message
    // this.errors.push({fieldName: message})
    // console.log(this.errors)
    //if errors[fieldName] array already exists, push(add) a new message to the array.
    //else, make a new arry for the fieldname that includes a new message
    if(this.errors[fieldName]){
      this.errors[fieldName].push(message)
    } else {
      this.errors[fieldName]= [message]
    }
  }
}


const store = new RegistrationStore()
export default store
